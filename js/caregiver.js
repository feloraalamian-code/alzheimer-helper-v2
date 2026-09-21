/**
 * Caregiver page logic — add and display reminders.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-reminder-form');
  const list = document.getElementById('reminder-list');

  function renderReminders() {
    const reminders = getReminders();
    list.innerHTML = '';

    if (reminders.length === 0) {
      const empty = document.createElement('li');
      empty.textContent = 'No reminders yet.';
      list.appendChild(empty);
      return;
    }

    reminders.forEach((reminder) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${reminder.title}</strong> — 
        ${reminder.time} (${reminder.type})
        <button class="btn-delete" data-id="${reminder.id}">Delete</button>
      `;
      list.appendChild(li);
    });

    document.querySelectorAll('.btn-delete').forEach((btn) => {
      btn.addEventListener('click', () => {
        deleteReminder(btn.getAttribute('data-id'));
        renderReminders();
      });
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('reminder-title').value.trim();
    const time = document.getElementById('reminder-time').value;
    const type = document.getElementById('reminder-type').value;

    if (!title || !time) return;

    addReminder(title, time, type);
    form.reset();
    renderReminders();
  });

  renderReminders();
});
