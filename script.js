// === CONFIGURE THESE ===
const GOOGLE_FORM_URL = 'https://forms.gle/your-form-id'; // replace with your link
const WHATSAPP_NUMBER = '+91XXXXXXXXXX'; // replace with your number
const CONTACT_EMAIL = 'contact@example.com'; // replace
const ENTRY_DEADLINE_IST = '2025-12-31T23:59:59+05:30'; // IST
const WINNER_ANNOUNCE_DATE = '2026-01-26';
// =======================

// Set link targets
['enterNowTop','enterNowHero','enterNowHow','enterNowFooter'].forEach(id=>{
  const el = document.getElementById(id);
  if (el) el.href = GOOGLE_FORM_URL;
});
document.getElementById('whatsappNumber').textContent = WHATSAPP_NUMBER;
document.getElementById('contactEmail').textContent = CONTACT_EMAIL;

// Countdown
function updateCountdown() {
  const target = new Date(ENTRY_DEADLINE_IST).getTime();
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById('countdownValue').textContent = `${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Entries so far: from ?count=12345 (stored in localStorage)
(function() {
  const params = new URLSearchParams(location.search);
  const param = parseInt(params.get('count') || '', 10);
  const stored = parseInt(localStorage.getItem('sc_entry_count') || '0', 10);
  let count = 0;
  if (!Number.isNaN(param)) {
    count = param;
    localStorage.setItem('sc_entry_count', String(param));
  } else if (!Number.isNaN(stored)) {
    count = stored;
  }
  document.getElementById('entriesSoFar').textContent = count.toLocaleString();
})();

// Newsletter dummy handler
document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  alert(`Thanks! We'll email updates to ${email}`);
  e.target.reset();
});
