// Unikněte! – main.js

document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll efekt
  const nav = document.getElementById('un-nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (nav) {
    // Nastav hned při načtení
    if (window.scrollY > 40) nav.classList.add('scrolled');

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    // Zavři menu při kliknutí na odkaz
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Video lazy start - načti video až po načtení stránky
  const video = document.querySelector('#un-videobg video');
  if (video) {
    window.addEventListener('load', () => {
      video.play().catch(() => {});
    });
  }

});
