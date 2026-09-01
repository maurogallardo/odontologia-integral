/* Odontología Integral — menú mobile + año dinámico */

(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');

  if (header && toggle && nav) {
    var setOpen = function (open) {
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };

    toggle.addEventListener('click', function () {
      setOpen(!header.classList.contains('is-open'));
    });

    // Al tocar cualquier link del menú, se cierra
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    // Escape cierra y devuelve el foco al botón
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && header.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Al pasar a desktop el menú vuelve a su estado normal
    var desktop = window.matchMedia('(min-width: 900px)');
    var onChange = function (event) {
      if (event.matches) setOpen(false);
    };
    if (desktop.addEventListener) {
      desktop.addEventListener('change', onChange);
    } else if (desktop.addListener) {
      desktop.addListener(onChange); // Safari < 14
    }
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
