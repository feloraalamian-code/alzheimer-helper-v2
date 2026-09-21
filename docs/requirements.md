# Requirements

## Functional Requirements

- FR-1: Medication reminder with schedule and alarm
  [MVP: In-app alerts when tab is open. Background notifications
   via Service Worker in next version.]

- FR-2: Event reminder for meals and appointments
  [MVP: Same as FR-1 — in-app reminders only.]

- FR-3: Emergency call button with one tap
  [MVP: Uses tel: link to call preconfigured number.]

- FR-4: Caregiver dashboard to manage reminders
  [MVP: Same device + LocalStorage. Remote sync in future version.]

- FR-5: Large accessible UI with high contrast
  [MVP: WCAG AA compliance, font ≥ 24px, buttons ≥ 80px.]

- FR-6: Offline support as PWA
  [MVP: Service Worker + manifest. Cache static assets.]

## Non-Functional Requirements

- NFR-1: Performance — page load under 2 seconds
- NFR-2: Accessibility — WCAG AA, ARIA labels
- NFR-3: Reliability — works offline after first load
- NFR-4: Security — no sensitive data stored externally
- NFR-5: Usability — max 2 taps for critical actions

## User Stories (brief)

### For Patients
- As a patient, I want to hear my medication reminder aloud.
- As a patient, I want a big red button to call my caregiver.

### For Caregivers
- As a caregiver, I want to add reminders to the patient's device.
- As a caregiver, I want to see if the patient took their medication.
