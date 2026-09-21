# 🧠 Alzheimer's Helper PWA

A progressive web application designed to help Alzheimer's patients 
with their daily tasks, while giving caregivers an easy way to manage reminders.

---

## 📋 Project Overview

This project was built as part of an **AIDLC** (AI-Driven Development Lifecycle) 
course, following the full lifecycle: Inception → Design → Construction → Testing → Deployment.

**Author:** Flora Khorsand  
**Date:** September 2026  
**Course:** AIDLC Project

---

## ✨ Features

### Patient View (index.html)
- 💊 Medication Button — shows medication reminders
- 📅 Events Button — shows event reminders
- 🚨 Emergency Call Button — one-tap call to caregiver
- 📱 Large, accessible UI — designed for elderly users
- ♿ WCAG AA compliant — big fonts, high contrast

### Caregiver View (caregiver.html)
- ➕ Add Reminders — title, time, type
- 📋 View All Reminders — list with details
- 🗑️ Delete Reminders — one-tap removal
- 🔗 Switch to Patient View

### PWA Features
- 📴 Offline Support — works without internet
- 📱 Installable — can be added to home screen
- ⚡ Fast Loading — cache-first strategy

---

## 🛠️ Tech Stack

- HTML5 — semantic markup
- CSS3 — responsive, accessible design
- JavaScript (Vanilla) — no frameworks
- LocalStorage — client-side data persistence
- Service Worker — offline capability
- Web App Manifest — PWA installability

---

## 📁 File Structure

aidlcprojectss/
├── docs/
├── css/
├── js/
├── index.html
├── caregiver.html
├── manifest.json
├── service-worker.js
└── README.md

---

## 🚀 How to Run Locally

1. Open the folder in VS Code
2. Install Live Server extension
3. Right-click index.html → Open with Live Server
4. Open http://127.0.0.1:5500/index.html

---

## 📖 How to Use

### For Caregivers:
1. Open caregiver.html
2. Fill in the form
3. Click Add Reminder

### For Patients:
1. Open index.html
2. Click Medication or Events to see reminders
3. Click Emergency Call to call caregiver

---

## 📊 AIDLC Phases Completed

- ✅ Inception — vision, requirements, user stories
- ✅ Design — architecture, tech stack
- ✅ Construction — HTML, CSS, JS, PWA files
- ✅ Testing — manual testing
- ✅ Deployment — via Netlify

---

## 🔮 Future Improvements

- [ ] Backend for cross-device sync
- [ ] Push notifications
- [ ] Real phone number for emergency
- [ ] Voice reminders
- [ ] Multi-language support

---

**Built with ❤️ using AIDLC methodology**