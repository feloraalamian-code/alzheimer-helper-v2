/**
 * Storage wrapper for the Alzheimer's Helper PWA.
 * Uses LocalStorage with a prefix to avoid collisions.
 */

const STORAGE_PREFIX = 'alzheimer-';

/**
 * Saves any value to LocalStorage under the given key.
 * @param {string} key - The key (prefix will be added)
 * @param {*} value - The value to save (will be JSON.stringify'd)
 */
function saveData(key, value) {
  try {
    const fullKey = STORAGE_PREFIX + key;
    localStorage.setItem(fullKey, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
}

/**
 * Loads data from LocalStorage by key.
 * @param {string} key - The key (prefix will be added)
 * @returns {*} Parsed value or null if not found
 */
function loadData(key) {
  try {
    const fullKey = STORAGE_PREFIX + key;
    const json = localStorage.getItem(fullKey);
    if (!json) return null;
    return JSON.parse(json);
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
}

/**
 * Removes a specific key from LocalStorage.
 * @param {string} key - The key to remove
 */
function removeData(key) {
  try {
    const fullKey = STORAGE_PREFIX + key;
    localStorage.removeItem(fullKey);
    return true;
  } catch (error) {
    console.error('Error removing data:', error);
    return false;
  }
}

/**
 * Clears ALL keys with the app prefix from LocalStorage.
 * Does NOT touch other apps' data.
 */
function clearAllData() {
  try {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
}
