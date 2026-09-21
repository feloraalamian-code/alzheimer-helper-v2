/**
 * Patient page logic — handle button clicks.
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnMedication = document.getElementById('btn-medication');
  const btnEvents = document.getElementById('btn-events');
  const btnEmergency = document.getElementById('btn-emergency');
  const display = document.getElementById('reminders-display');

  /**
   * Show reminders filtered by type.
   */
  function showReminders(type) {
    const all = getReminders();
    const filtered = all.filter(r => r.type === type);

    if (filtered.length === 0) {
      display.innerHTML = `<p>No ${type}s yet.</p>`;
      return;
    }

    display.innerHTML = filtered.map(r => `
      <div class="reminder-card">
        <strong>${r.title}</strong>
        <span>${r.time}</span>
      </div>
    `).join('');
  }

  if (btnMedication) {
    btnMedication.addEventListener('click', () => showReminders('medication'));
  }

  if (btnEvents) {
    btnEvents.addEventListener('click', () => showReminders('event'));
  }

  if (btnEmergency) {
    btnEmergency.addEventListener('click', () => {
      window.location.href = 'tel:+1234567890';
    });
  }
});
