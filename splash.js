// splash.js – controls the splash screen appearance and dismissal
(function() {
  const splash = document.getElementById('splashScreen');
  const skipBtn = document.getElementById('skipSplashBtn');

  function dismissSplash() {
    if (!splash) return;
    splash.classList.add('fade-out');
    const onTransitionEnd = () => {
      if (splash && splash.parentNode) {
        splash.remove();
      }
    };
    splash.addEventListener('transitionend', onTransitionEnd, { once: true });
    // fallback in case transitionend doesn't fire
    setTimeout(() => {
      if (splash && splash.parentNode) splash.remove();
    }, 800);
  }

  // Auto-dismiss after 2.2 seconds
  let autoTimer = setTimeout(dismissSplash, 2200);

  // Skip button click
  if (skipBtn) {
    skipBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      clearTimeout(autoTimer);
      dismissSplash();
    });
  }

  // Click anywhere on splash to dismiss
  if (splash) {
    splash.addEventListener('click', function() {
      clearTimeout(autoTimer);
      dismissSplash();
    });
  }

  // Escape key support
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && splash && splash.parentNode) {
      clearTimeout(autoTimer);
      dismissSplash();
    }
  });

  // Ultimate fallback: remove splash after 4 seconds if something goes wrong
  setTimeout(() => {
    if (splash && splash.parentNode) dismissSplash();
  }, 4000);
})();