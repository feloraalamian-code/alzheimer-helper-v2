/**
 * Constant key used for storing reminders in LocalStorage.
 */
const STORAGE_KEY = 'alzheimer-reminders';

/**
 * Retrieves all reminders from LocalStorage.
 * Handles parsing and fallback to an empty array if no data exists.
 * @returns {Array} Array of reminder objects.
 */
function getReminders() {
  const remindersJson = localStorage.getItem(STORAGE_KEY);
  if (!remindersJson) {
    return [];
  }
  try {
    return JSON.parse(remindersJson);
  } catch (error) {
    console.error('Error parsing reminders from LocalStorage:', error);
    return [];
  }
}

/**
 * Adds a new reminder to LocalStorage.
 * @param {string} title - Brief summary or title of the reminder.
 * @param {string} time - Time for the reminder (e.g., "08:00 AM" or ISO string).
 * @param {string} type - Category or type (e.g., "medication", "appointment", "task").
 * @returns {Object} The newly created reminder object.
 */
function addReminder(title, time, type) {
  const reminders = getReminders();

  const newReminder = {
    id: Date.now().toString(),
    title: title,
    time: time,
    type: type,
    createdAt: new Date().toISOString()
  };

  reminders.push(newReminder);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
  return newReminder;
}

/**
 * Deletes a reminder by its id.
 */
function deleteReminder(id) {
  const reminders = getReminders();
  const filtered = reminders.filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

/**
 * Clears all reminders from LocalStorage.
 */
function clearAllReminders() {
  localStorage.removeItem(STORAGE_KEY);
}
