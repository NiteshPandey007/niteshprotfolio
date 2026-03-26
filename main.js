/* ============================================
   NITESH PANDEY PORTFOLIO — main.js
   ============================================ */

/* ---- THEME TOGGLE ---- */
function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.getAttribute('data-theme') === 'light';
  const newTheme = isLight ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  document.getElementById('toggle-icon').textContent = isLight ? '☀️' : '🌙';
  document.getElementById('toggle-label').textContent = isLight ? 'LIGHT' : 'DARK';
  localStorage.setItem('np-theme', newTheme);
}

/* Load saved theme on page load */
(function () {
  const saved = localStorage.getItem('np-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  if (saved === 'light') {
    const icon = document.getElementById('toggle-icon');
    const label = document.getElementById('toggle-label');
    if (icon) icon.textContent = '🌙';
    if (label) label.textContent = 'DARK';
  }
})();

/* ---- HAMBURGER MENU ---- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  /* Close menu when a link is clicked */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

/* ---- ACTIVE NAV HIGHLIGHT ON SCROLL ---- */
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
  });
  allNavLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

/* ---- INTERSECTION OBSERVER — FADE-UP ANIMATIONS ---- */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      /* Animate skill bars inside this element */
      el.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.w;
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

/* ---- SKILL BAR ANIMATION on card enter ---- */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(bar => {
        setTimeout(() => { bar.style.width = bar.dataset.w; }, 250);
      });
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.skill-card').forEach(el => barObserver.observe(el));

/* ---- EMAILJS CONTACT FORM ---- */
/*
  HOW TO SETUP EMAILJS:
  1. Go to https://emailjs.com → Sign Up (free)
  2. Add Email Service (Gmail recommended) → copy SERVICE_ID
  3. Create Email Template → copy TEMPLATE_ID
     Template variables to use:
       {{from_name}}  {{from_email}}  {{subject}}  {{message}}
  4. Go to Account → copy PUBLIC KEY
  5. Replace the 3 values below:
*/
const EMAILJS_PUBLIC_KEY  = '88Iasr-SfxtMqHrtz';   // ← replace
const EMAILJS_SERVICE_ID  = 'service_l7q2ti7';   // ← replace
const EMAILJS_TEMPLATE_ID = 'template_9rjb25l';  // ← replace

(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }
})();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn        = this.querySelector('button[type=submit]');
    const successMsg = document.getElementById('form-success');
    const errorMsg   = document.getElementById('form-error');

    btn.textContent = 'Sending...';
    btn.disabled    = true;

    const params = {
      from_name  : document.getElementById('from_name').value,
      from_email : document.getElementById('from_email').value,
      subject    : document.getElementById('subject').value || 'Portfolio Contact',
      message    : document.getElementById('message').value,
      to_email   : 'pandeynitesh762@gmail.com',
    };

    if (typeof emailjs === 'undefined') {
      /* EmailJS not configured yet — show friendly notice */
      errorMsg.textContent  = '⚠ EmailJS setup pending. Please email directly: pandeynitesh762@gmail.com';
      errorMsg.style.display = 'block';
      btn.textContent = 'Send Message ✦';
      btn.disabled    = false;
      return;
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
      .then(() => {
        successMsg.style.display = 'block';
        errorMsg.style.display   = 'none';
        contactForm.reset();
        btn.textContent = 'Send Message ✦';
        btn.disabled    = false;
        setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
      })
      .catch(() => {
        errorMsg.textContent   = '✗ Kuch error aaya. seedha email karein: pandeynitesh762@gmail.com';
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        btn.textContent = 'Send Message ✦';
        btn.disabled    = false;
      });
  });
}
