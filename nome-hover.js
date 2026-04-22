const nomeEl = document.querySelector('.hero-title em');

if (nomeEl) {
  const nomeOriginal = 'Giovani';
  const nomeHover    = 'Gi0vai123';

  nomeEl.style.cursor = 'default';
  nomeEl.style.transition = 'opacity 0.15s ease';

  nomeEl.addEventListener('mouseenter', () => {
    nomeEl.style.opacity = '0';
    setTimeout(() => {
      nomeEl.textContent = nomeHover;
      nomeEl.style.opacity = '1';
    }, 150);
  });

  nomeEl.addEventListener('mouseleave', () => {
    nomeEl.style.opacity = '0';
    setTimeout(() => {
      nomeEl.textContent = nomeOriginal;
      nomeEl.style.opacity = '1';
    }, 150);
  });
}