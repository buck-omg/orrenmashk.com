/* OrrenMashk Group | Slide-in mobile navigation drawer
 *
 * Progressive enhancement: without this script, the Menu button and
 * nav links are still present in the DOM, just not interactive on mobile.
 * All content, pages, and the contact form work without JavaScript.
 *
 * This script:
 *  - Injects a backdrop, a drawer header (with close button), and a
 *    drawer footer (with the capability statement CTA) into the DOM.
 *  - Opens the drawer when Menu is tapped: slides nav-links in from
 *    the right, fades in the backdrop, locks body scroll.
 *  - Closes on: close button tap, backdrop tap, Escape key, nav link tap.
 */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  // --- Build drawer chrome (header + footer) and inject once ---

  // Drawer header: eyebrow label + close button
  var header = document.createElement('li');
  header.className = 'nav-drawer-header';
  header.setAttribute('aria-hidden', 'false');
  header.innerHTML =
    '<span class="drawer-eyebrow">Navigation</span>' +
    '<button type="button" class="nav-drawer-close" aria-label="Close navigation menu">&times;</button>';
  links.insertBefore(header, links.firstChild);

  // Drawer footer: CTA + company data
  var footer = document.createElement('li');
  footer.className = 'nav-drawer-footer';
  footer.innerHTML =
    '<a href="/assets/OrrenMashk_Capability_Statement.pdf" class="btn btn-primary">Capability Statement</a>' +
    '<div class="drawer-meta">' +
      '<span>OrrenMashk Group, Inc.</span>' +
      '<span>Sneads Ferry, NC 28460</span>' +
      '<span class="gold">CAGE 18U68 &middot; UEI VFYHAKCHFMJ4</span>' +
    '</div>';
  links.appendChild(footer);

  // Backdrop: inject into <body>, after the header is rendered
  var backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.appendChild(backdrop);

  // --- ARIA wiring ---
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'primary-nav');
  links.setAttribute('id', 'primary-nav');

  // --- State ---
  var isOpen = false;
  var closeBtn = header.querySelector('.nav-drawer-close');

  function open() {
    isOpen = true;
    links.classList.add('is-open');
    backdrop.classList.add('is-visible');
    document.body.classList.add('nav-drawer-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.textContent = 'Close';
    // Move focus into the drawer for keyboard users
    setTimeout(function () { closeBtn.focus(); }, 50);
  }

  function close() {
    isOpen = false;
    links.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    document.body.classList.remove('nav-drawer-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  }

  // --- Event wiring ---
  toggle.addEventListener('click', function () {
    if (isOpen) { close(); } else { open(); }
  });

  closeBtn.addEventListener('click', close);

  backdrop.addEventListener('click', close);

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      close();
      toggle.focus();
    }
  });

  // Close the drawer when any nav link is tapped
  links.addEventListener('click', function (e) {
    var target = e.target;
    // Only react to anchor clicks, not the close button or the CTA footer button
    if (target && target.tagName === 'A' && !target.classList.contains('btn')) {
      close();
    }
  });

  // Clean up state if viewport grows past the mobile breakpoint while the drawer is open
  var mq = window.matchMedia('(min-width: 901px)');
  function handleBreakpoint(e) {
    if (e.matches && isOpen) {
      close();
    }
  }
  if (mq.addEventListener) {
    mq.addEventListener('change', handleBreakpoint);
  } else if (mq.addListener) {
    mq.addListener(handleBreakpoint);
  }
})();
