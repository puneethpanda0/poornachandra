/* =============================================
   main.js — Poornachandra Seva Trust
   ============================================= */

/* ─── MOBILE MENU ─── */
function toggleMenu() {
  document.getElementById('mob-menu').classList.toggle('open');
}

/* ─── GALLERY TABS ─── */
function showTab(id, btn) {
  document.querySelectorAll('.gallery-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

/* ─── DONATE AMOUNT ─── */
function setAmt(btn) {
  document.querySelectorAll('.ab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const a = btn.textContent;
  const db = document.getElementById('donate-btn');
  if (a !== 'Custom') {
    db.textContent = 'Donate Now → ' + a;
    db.href = 'mailto:poornachandrasevatrust@gmail.com?subject=Donation%20Enquiry%20' + encodeURIComponent(a);
  } else {
    db.textContent = 'Contact Us to Donate →';
    db.href = '#contact';
  }
}

/* ─── COPY TO CLIPBOARD ─── */
function copyText(el, text) {
  navigator.clipboard.writeText(text).then(function() {
    const orig = el.innerHTML;
    el.innerHTML = "✅ Copied!";
    setTimeout(function() { el.innerHTML = orig; }, 1800);
  });
}

/* ─── CONTACT FORM ─── */
function submitForm() {
  const name    = document.querySelector('.cf input[type=text]').value.trim();
  const phone   = document.querySelector('.cf input[type=tel]').value.trim();
  const email   = document.querySelector('.cf input[type=email]').value.trim();
  const purpose = document.querySelector('.cf select').value;
  const message = document.querySelector('.cf textarea').value.trim();

  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return;
  }

  // Opens mailto — replace with a backend/form service later
  const subject = encodeURIComponent('Enquiry from ' + name + ' — ' + purpose);
  const body    = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Phone: ' + phone + '\n' +
    'Email: ' + (email || 'Not provided') + '\n' +
    'Purpose: ' + purpose + '\n\n' +
    'Message:\n' + (message || 'No message.')
  );
  window.location.href = 'mailto:poornachandrasevatrust@gmail.com?subject=' + subject + '&body=' + body;
}

/* ─── SMOOTH NAV HIGHLIGHT ─── */
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section[id], div[id="home"]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--red)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
});