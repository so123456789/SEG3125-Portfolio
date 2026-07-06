// design2.js – FlipZ Memory Game
// Icons are Unicode emoji (no images will take too long).
// Sound effects loaded from local /audio files.

/* ========== AUDIO ========== */
class AudioController {
  constructor() {
    this.flipSound     = new Audio('audio/flip.wav');
    this.matchSound    = new Audio('audio/match.wav');
    this.victorySound  = new Audio('audio/victory.wav');
    this.gameOverSound = new Audio('audio/gameOver.wav');
    this.selectSound   = new Audio('audio/gameselect.wav');
    [this.flipSound, this.matchSound, this.victorySound, this.gameOverSound, this.selectSound]
      .forEach(a => { a.volume = 0.55; });
  }
  flip()     { this.flipSound.currentTime = 0;     this.flipSound.play().catch(() => {}); }
  match()    { this.matchSound.currentTime = 0;    this.matchSound.play().catch(() => {}); }
  victory()  { this.victorySound.currentTime = 0;  this.victorySound.play().catch(() => {}); }
  gameOver() { this.gameOverSound.currentTime = 0;  this.gameOverSound.play().catch(() => {}); }
  select()   { this.selectSound.currentTime = 0;   this.selectSound.play().catch(() => {}); }
}

const audioController = new AudioController();

/* ========== CONFIG ========== */
const THEMES = {
  tools: ['✂️', '💈', '🪒', '🧴', '🪞', '👔', '🧔', '💇', '🧖', '🛁'],
  tech:  ['💻', '🖥️', '⌨️', '🖱️', '📱', '💾', '🔌', '🧠', '⚙️', '🛰️'],
  space: ['🚀', '🌙', '⭐', '🪐', '☄️', '🌌', '🛸', '🌠', '🔭', '🌍']
};

const LEVELS = {
  beginner: { pairs: 6,  cols: 4, time: 45 },
  advanced: { pairs: 10, cols: 5, time: 90 }
};

const CONFETTI_COLORS = ['#4B6B45', '#7FA374', '#C97B4A', '#E3D9BD', '#34492F'];

/* ========== STATE ========== */
let state = {
  level: null,
  theme: null,
  cards: [],
  flippedCards: [],
  matchedCount: 0,
  totalPairs: 0,
  moves: 0,
  misses: 0,
  timeRemaining: 0,
  timerInterval: null,
  busy: false
};

/* ========== SCREEN NAVIGATION ========== */
function showScreen(id) {
  document.querySelectorAll('.overlay-screen').forEach(s => s.classList.remove('visible'));
  document.getElementById('gameScreen').classList.remove('visible');

  if (id === 'gameScreen') {
    document.getElementById('gameScreen').classList.add('visible');
  } else {
    document.getElementById(id).classList.add('visible');
  }
}

/* ========== SETUP SELECTION ========== */
function initSetupListeners() {
  document.querySelectorAll('#levelOptions .option-card').forEach(card => {
    card.addEventListener('click', () => {
      audioController.select();
      document.querySelectorAll('#levelOptions .option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.level = card.dataset.level;
      checkReady();
    });
  });

  document.querySelectorAll('#themeOptions .option-card').forEach(card => {
    card.addEventListener('click', () => {
      audioController.select();
      document.querySelectorAll('#themeOptions .option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.theme = card.dataset.theme;
      checkReady();
    });
  });
}

function checkReady() {
  document.getElementById('playBtn').disabled = !(state.level && state.theme);
}

/* ======= DECK BUILDING ========== */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildDeck() {
  const levelConfig = LEVELS[state.level];
  const iconSet = THEMES[state.theme].slice(0, levelConfig.pairs);
  return shuffle([...iconSet, ...iconSet]).map((icon, i) => ({ id: i, icon }));
}

/* ======= GRID ========== */
function renderGrid() {
  const grid = document.getElementById('cardGrid');
  grid.innerHTML = '';
  grid.className = 'card-grid' + (state.level === 'advanced' ? ' advanced' : '');

  state.cards.forEach((cardData, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'memory-card';
    cardEl.style.animationDelay = (index * 0.04) + 's';
    cardEl.dataset.id = cardData.id;
    cardEl.dataset.icon = cardData.icon;
    cardEl.innerHTML =
      '<div class="card-inner">' +
        '<div class="card-face card-back-face">Z</div>' +
        '<div class="card-face card-front-face">' + cardData.icon + '</div>' +
      '</div>';
    cardEl.addEventListener('click', () => flipCard(cardEl));
    cardEl.addEventListener('animationend', () => { cardEl.classList.add('settled'); }, { once: true });
    grid.appendChild(cardEl);
  });
}

/* ========== GAME START ========== */
function startGame() {
  state.cards         = buildDeck();
  state.flippedCards  = [];
  state.matchedCount  = 0;
  state.totalPairs    = LEVELS[state.level].pairs;
  state.moves         = 0;
  state.misses        = 0;
  state.timeRemaining = LEVELS[state.level].time;
  state.busy          = false;

  document.getElementById('movesDisplay').textContent  = '0';
  document.getElementById('missesDisplay').textContent = '0';
  document.getElementById('pairsDisplay').textContent  = '0/' + state.totalPairs;
  document.getElementById('timeDisplay').textContent   = state.timeRemaining;

  renderGrid();
  showScreen('gameScreen');

  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    document.getElementById('timeDisplay').textContent = state.timeRemaining;
    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      endGame(false);
    }
  }, 1000);
}

/* ========== CARD FLIP ========== */
function flipCard(cardEl) {
  if (state.busy) return;
  if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

  cardEl.classList.add('flipped');
  audioController.flip();
  state.flippedCards.push(cardEl);

  if (state.flippedCards.length === 2) {
    state.moves++;
    document.getElementById('movesDisplay').textContent = state.moves;
    checkMatch();
  }
}

function checkMatch() {
  const [first, second] = state.flippedCards;
  state.busy = true;

  if (first.dataset.icon === second.dataset.icon) {
    audioController.match();
    setTimeout(() => {
      first.classList.add('matched');
      second.classList.add('matched');
      state.matchedCount++;
      document.getElementById('pairsDisplay').textContent =
        state.matchedCount + '/' + state.totalPairs;
      state.flippedCards = [];
      state.busy = false;

      if (state.matchedCount === state.totalPairs) {
        clearInterval(state.timerInterval);
        endGame(true);
      }
    }, 350);
  } else {
    state.misses++;
    document.getElementById('missesDisplay').textContent = state.misses;
    first.classList.add('mismatch');
    second.classList.add('mismatch');
    setTimeout(() => {
      first.classList.remove('flipped', 'mismatch');
      second.classList.remove('flipped', 'mismatch');
      state.flippedCards = [];
      state.busy = false;
    }, 800);
  }
}

/* ========== CONFETTI FOR WIN ========== */
function spawnConfetti() {
  const layer = document.getElementById('confettiLayer');
  layer.innerHTML = '';
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = (2 + Math.random() * 1.5) + 's';
    piece.style.animationDelay = (Math.random() * 0.4) + 's';
    piece.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
    layer.appendChild(piece);
  }
}

/* ========== END GAME ========== */
function endGame(won) {
  const timeUsed = LEVELS[state.level].time - state.timeRemaining;

  if (won) {
    document.getElementById('victoryStats').textContent =
      state.moves + ' moves · ' + state.misses + ' misses · ' + timeUsed + 's · ' + state.level + ' level';
    audioController.victory();
    showScreen('victoryScreen');
    spawnConfetti();
  } else {
    document.getElementById('gameOverStats').textContent =
      state.matchedCount + '/' + state.totalPairs + ' pairs found · ' + state.moves + ' moves · ' + state.misses + ' misses';
    audioController.gameOver();
    showScreen('gameOverScreen');
  }
}

/* ========== RESET TO SETUP ========== */
function resetToSetup() {
  clearInterval(state.timerInterval);
  document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  state.level = null;
  state.theme = null;
  document.getElementById('playBtn').disabled = true;
  showScreen('setupScreen');
}

/* ========== LEAVE CONFIRMATION ========== */
function initBackConfirm() {
  const backBtn  = document.getElementById('gameBackBtn');
  const modal    = document.getElementById('confirmModal');
  const stayBtn  = document.getElementById('confirmStayBtn');
  const leaveBtn = document.getElementById('confirmLeaveBtn');

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('visible');
  });
  stayBtn.addEventListener('click', () => modal.classList.remove('visible'));
  leaveBtn.addEventListener('click', () => {
    modal.classList.remove('visible');
    resetToSetup();
  });
}

/* ========== CUSTOM CURSOR ========== */
function initCustomCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return; // skip on touch devices

  document.body.classList.add('has-custom-cursor');

  const dot  = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX  = mouseX;
  let ringY  = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverSelector = '.memory-card, .option-card, .btn-primary-custom, .btn-outline-custom, .game-back';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelector)) {
      dot.classList.add('cursor-hover');
      ring.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelector)) {
      dot.classList.remove('cursor-hover');
      ring.classList.remove('cursor-hover');
    }
  });
}

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
  initSetupListeners();
  initBackConfirm();
  initCustomCursor();

  document.getElementById('startBtn').addEventListener('click', () => showScreen('setupScreen'));
  document.getElementById('playBtn').addEventListener('click', startGame);
  document.getElementById('playAgainWinBtn').addEventListener('click', resetToSetup);
  document.getElementById('playAgainLoseBtn').addEventListener('click', resetToSetup);
});