// Efeito de "digitação" no terminal do hero
const typedEl = document.getElementById('typed-text');
const phrase = 'cursando ADS · construindo com robótica desde 2023';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedEl) {
  if (reducedMotion) {
    typedEl.textContent = phrase;
  } else {
    let i = 0;
    const type = () => {
      if (i <= phrase.length) {
        typedEl.textContent = phrase.slice(0, i);
        i++;
        setTimeout(type, 35);
      }
    };
    type();
  }
}

// Reveal das seções ao rolar a página
const sections = document.querySelectorAll('.section');

if (reducedMotion) {
  sections.forEach(s => s.classList.add('in-view'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));
}