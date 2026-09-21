# Architecture

## Tech Stack
- Frontend: HTML, CSS, JavaScript (vanilla)
- Framework: None (keep simple)
- Storage: LocalStorage only (mvp version)
- Notifications: Web Notifications API
- PWA: manifest.json + service worker
- Hosting: Netlify or GitHub Pages

## Main Components
- Reminder Manager (schedules + triggers)
- Notification Handler (alerts with sound)
- Emergency Button (tel: link)
- Caregiver Panel (CRUD for reminders)
- Data Store (simple localstorage wrapper)

## File Structure
- index.html (patient view)
- caregiver.html (caregiver view)
- css/style.css
- js/app.js, js/reminders.js, js/storage.js
- manifest.json
- service-worker.js
