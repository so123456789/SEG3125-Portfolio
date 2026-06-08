// design1.js – ClipZ Barbershop
// Full‑screen animated background (more visible) + booking + splash

/* ========== FULL‑SCREEN CANVAS ANIMATION (higher visibility) ========== */
(function() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  let objects = [];

  const TYPES = ['scissors', 'line', 'dot', 'diamond'];

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function createObject() {
    const type = TYPES[Math.floor(Math.random() * TYPES.length)];
    // More visible: alpha between 0.12 and 0.35 (was 0.02–0.09)
    const alpha = random(0.12, 0.35);
    // Larger size range
    const size = type === 'dot' ? random(3, 8) : random(14, 32);
    return {
      type: type,
      x: Math.random() * width,
      y: Math.random() * height,
      size: size,
      vx: random(-0.3, 0.3),
      vy: random(-0.3, 0.3),
      rot: Math.random() * Math.PI * 2,
      vrot: random(-0.008, 0.008),
      alpha: alpha
    };
  }

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    // More objects: 120 instead of 80
    objects = [];
    for (let i = 0; i < 120; i++) {
      objects.push(createObject());
    }
  }

  // Drawing functions with thicker lines for better visibility
  function drawScissors(x, y, size, rot, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#E07830';
    ctx.lineWidth = 2.0;  // thicker
    ctx.lineCap = 'round';

    const s = size;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-s * 0.6, s * 1.2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(s * 0.6, s * 1.2); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, s * 0.18, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(-s * 0.45, -s * 0.7, s * 0.28, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(s * 0.45, -s * 0.7, s * 0.28, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-s * 0.28, -s * 0.48); ctx.lineTo(-s * 0.08, -s * 0.05); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(s * 0.28, -s * 0.48); ctx.lineTo(s * 0.08, -s * 0.05); ctx.stroke();

    ctx.restore();
  }

  function drawComb(x, y, size, rot, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1.5; // thicker

    const s = size;
    const teeth = 6;
    const w = s * 1.8;
    const h = s * 0.9;
    ctx.beginPath(); ctx.moveTo(-w/2, 0); ctx.lineTo(w/2, 0); ctx.stroke();
    for (let i = 0; i < teeth; i++) {
      const tx = -w/2 + (w / (teeth-1)) * i;
      ctx.beginPath(); ctx.moveTo(tx, 0); ctx.lineTo(tx, h); ctx.stroke();
    }
    ctx.restore();
  }

  function drawDot(x, y, size, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#E07830';
    ctx.beginPath(); ctx.arc(x, y, size, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function drawDiamond(x, y, size, rot, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1.5;
    const r = size * 0.7;
    ctx.beginPath();
    ctx.moveTo(0, -r); ctx.lineTo(r, 0); ctx.lineTo(0, r); ctx.lineTo(-r, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      switch (o.type) {
        case 'scissors': drawScissors(o.x, o.y, o.size, o.rot, o.alpha); break;
        case 'line': drawComb(o.x, o.y, o.size, o.rot, o.alpha); break;
        case 'dot': drawDot(o.x, o.y, o.size, o.alpha); break;
        case 'diamond': drawDiamond(o.x, o.y, o.size, o.rot, o.alpha); break;
      }
      // move
      o.x += o.vx;
      o.y += o.vy;
      o.rot += o.vrot;
      // wrap around edges
      if (o.x < -80) o.x = width + 80;
      if (o.x > width + 80) o.x = -80;
      if (o.y < -80) o.y = height + 80;
      if (o.y > height + 80) o.y = -80;
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
  });

  resizeCanvas();
  draw();
})();

/* ========== SPLASH SCREEN (unchanged) ========== */
(function() {
  const splash = document.getElementById('splashScreen');
  const skipBtn = document.getElementById('skipSplashBtn');

  function dismissSplash() {
    if (!splash) return;
    splash.classList.add('fade-out');
    const onTransitionEnd = () => {
      if (splash && splash.parentNode) splash.remove();
    };
    splash.addEventListener('transitionend', onTransitionEnd, { once: true });
    setTimeout(() => {
      if (splash && splash.parentNode) splash.remove();
    }, 800);
  }

  let autoTimer = setTimeout(dismissSplash, 2500);

  if (skipBtn) {
    skipBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      clearTimeout(autoTimer);
      dismissSplash();
    });
  }

  if (splash) {
    splash.addEventListener('click', function() {
      clearTimeout(autoTimer);
      dismissSplash();
    });
  }

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && splash && splash.parentNode) {
      clearTimeout(autoTimer);
      dismissSplash();
    }
  });

  setTimeout(() => {
    if (splash && splash.parentNode) dismissSplash();
  }, 4000);
})();

/* ========== BOOKING LOGIC (unchanged) ========== */
let selectedService = null;
let selectedTime = null;

function selectService(el) {
  document.querySelectorAll('.book-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedService = el.dataset.service;
  document.getElementById('btn-step-1').disabled = false;
}

function loadTimes() {
  const dateVal = document.getElementById('booking-date').value;
  if (!dateVal) return;

  const slots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
                 '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
                 '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
  const grid = document.getElementById('time-slots');
  grid.innerHTML = '';
  selectedTime = null;
  document.getElementById('btn-step-2').disabled = true;

  slots.forEach((t, i) => {
    const taken = [1, 4, 7].includes(i);
    const btn = document.createElement('button');
    btn.textContent = t;
    btn.className = 'time-btn' + (taken ? ' taken' : '');
    btn.disabled = taken;
    if (!taken) {
      btn.onclick = () => {
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedTime = t;
        document.getElementById('btn-step-2').disabled = false;
      };
    }
    grid.appendChild(btn);
  });
}

function goToStep(n) {
  [1, 2, 3].forEach(i => {
    document.getElementById('step-' + i).classList.add('d-none');
    const dot = document.getElementById('step-dot-' + i);
    dot.classList.remove('active', 'done');
    if (i < n) dot.classList.add('done');
    if (i === n) dot.classList.add('active');
  });
  document.getElementById('step-' + n).classList.remove('d-none');

  if (n === 3) {
    document.getElementById('summary-service').textContent = selectedService || '—';
    const d = document.getElementById('booking-date').value;
    document.getElementById('summary-date').textContent =
      d ? new Date(d + 'T00:00').toLocaleDateString('en-CA',
          { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '—';
    document.getElementById('summary-time').textContent = selectedTime || '—';
  }
}

function confirmBooking() {
  const fn = document.getElementById('fname').value.trim();
  const ln = document.getElementById('lname').value.trim();
  if (!fn || !ln) {
    alert('Please enter your first and last name.');
    return;
  }
  const d = document.getElementById('booking-date').value;
  const dateStr = new Date(d + 'T00:00').toLocaleDateString('en-CA',
    { weekday: 'long', month: 'long', day: 'numeric' });

  document.getElementById('confirm-msg').textContent =
    `Thanks ${fn}! Your ${selectedService} is confirmed for ${dateStr} at ${selectedTime}. We'll see you at ClipZ.`;

  [1, 2, 3].forEach(i => document.getElementById('step-' + i).classList.add('d-none'));
  document.getElementById('booking-confirmed').classList.remove('d-none');
  [1, 2, 3].forEach(i => {
    const dot = document.getElementById('step-dot-' + i);
    dot.classList.remove('active');
    dot.classList.add('done');
  });
}

function resetBooking() {
  selectedService = null;
  selectedTime = null;
  document.getElementById('booking-confirmed').classList.add('d-none');
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('booking-date').value = '';
  document.getElementById('time-slots').innerHTML =
    '<p class="slot-placeholder">Select a date to see availability.</p>';
  document.querySelectorAll('.book-option').forEach(o => o.classList.remove('selected'));
  document.getElementById('btn-step-1').disabled = true;
  document.getElementById('btn-step-2').disabled = true;
  goToStep(1);
}

// Set min date to today
document.getElementById('booking-date').min = new Date().toISOString().split('T')[0];

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});