/* OrrenMashk Group | Progressive-enhancement navigation
 * This script is NOT required for the site to function.
 * All content, links, and the contact form work without JavaScript.
 * This only adds a mobile menu toggle convenience.
 */
(function () {
  'use strict';
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'primary-nav');
  links.setAttribute('id', 'primary-nav');

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.textContent = isOpen ? 'Close' : 'Menu';
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('is-open')) {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
      toggle.focus();
    }
  });
})();
