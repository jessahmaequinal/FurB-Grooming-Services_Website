# Fur & Bubbles Grooming Services Website

**Development of a Website Appointment Management System for Fur & Bubbles Grooming Services**  
*A Web Development Project Proposal & Implementation*

- **Course & Section:** BSIS – 3C (Web Development, Lecture & Laboratory)
- **Presented to:** DR. Mary Joy D. Viñas

---

## Project Overview

This website was developed by 3rd-year **Bachelor of Science in Information Systems (BSIS – 3C)** students for **Fur & Bubbles Grooming Services**, a privately owned pet care business located along **Davila St., Navotas City, Philippines**. 

Fur & Bubbles is run by owner-operator **Paulene Serrano** with a dedicated 5-person team (three groomers: Jannel, Jenn, and Emman; two assistants: Mike and Jess). The salon serves dogs and cats with compassionate, hygienic, and stress-free grooming. This web-based appointment management system replaces the shop's previous manual logbooks and back-and-forth Messenger inquiries with an automated, customer-facing booking platform.

---

## Purpose

To eliminate long queues, phone inquiries, double-bookings, and misplaced pet records by providing:
- A structured, self-service online appointment system available 24/7.
- **Real-time shift capacity tracking** (maximum of 3 pets per shift across 3 daily shifts) to ensure stress-free care.
- Upfront and transparent pricing based on pet size classification (Small, Medium, Large, Giant).
- Digital pet profiles with health notes and photo uploads.
- Special handling for **Animals with Disability (AWD)** with a 20% demonstration discount.
- A **simulated QR payment process** (20% down payment or 100% full payment) with a 15-minute temporary reservation hold.
- Direct self-service appointment tracking, rescheduling, and cancellation with refund rules.

---

## Team Members & Roles

| Member | Role | Project Responsibilities |
|---|---|---|
| **Capulong, Mike Anthony A.** | **Project Manager** | Coordinates the project schedule, assigns responsibilities, monitors development progress, facilitates team communication, and ensures project requirements and deliverables are completed. |
| **Dela Vega, Emmanuel T.** | **Designer** | Plans and creates the website layout, visual design, wireframes, and user interface based on approved requirements and design specifications. |
| **Camacho, Franchesca Jannel R.** | **Content Writer** | Prepares, organizes, and reviews website content, including service descriptions, grooming information, instructions, and customer-facing text to ensure clarity and consistency. |
| **Abulencia, Jenna Paulene B.** | **Developer** | Develops the website pages, database connections, and planned system functions, including customer accounts, pet records, appointment scheduling, booking management, and payment-related workflows. |
| **Quinal, Jessah Mae C.** | **Researcher** | Gathers and organizes relevant references, documents system requirements, verifies supporting information, and helps ensure that the proposed system addresses the identified project needs. |

---

## Tools Used

- **Front-End Development:** HTML5, CSS3, JavaScript (ES6), Bootstrap 5.3
- **Cloud & Backend Services:** Firebase Authentication, Cloud Firestore, Firebase Storage, Firebase Hosting, Firebase Cloud Functions
- **Design & Prototyping:** Figma, Canva
- **Code Editor & Version Control:** Visual Studio Code, Git, GitHub
- **Deployment Platform:** GitHub Pages

---

## Site Structure

- `index.html` – **HomePage**: Welcoming hero section, quick hub navigation (Discover, Book a Service, Manage, Account), and shop introduction.
- `about.html` – **About Us**: Company history, mission, vision, meet-the-team profiles, and salon standards.
- `services.html` – **Services & Pricelist**: Complete catalog of Packages, À La Carte services, Add-ons, and pet weight sizing guide.
- `booking.html` – **Booking Flow & Account**: 5-step booking wizard (Service Selection, Shift Calendar, Account Access, Pet Form, Review & Payment), 15-minute hold timer, My Bookings, and Booking History.
- `contact.html` – **Contact Us**: Store location, 3-shift operating schedule, contact information, social links, and inquiry form.
- `faqs.html` – **Help & Legal**: Interactive FAQs accordion, Terms & Conditions, and Privacy Policy.
- `style.css` – Global styling, CSS custom properties, responsive layout grids, and component styles.
- `script.js` – Core application logic, shift capacity management, booking validation, localStorage persistence, and simulated payment flow.
- `assets/` – Vector logos, paw icons, and media assets.

---

## Design Concept

### 🎨 Color Scheme
- **Butterscotch (`#FCB34F`)**: Main accents, highlights, icons, package cards, headings, and decorative elements.
- **Light Navy Blue (`#1F6590`)**: Primary brand color for main backgrounds, navigation, service cards, links, and appointment elements.
- **Rose Madder (`#E62A34`)**: Important highlights, prices, selected services, and attention-grabbing accents.
- **Forest (`#31572C`)**: Primary confirmation buttons and successful action indicators (e.g., Confirm & Book).
- **Red Inferno (`#4B0000`)**: Cautionary notes, warnings, important reminders, and cancellation alerts.

### 🔤 Typography
- **Fredoka**: Main page headings, hero titles, section titles, and grooming package names.
- **Nunito**: Button labels, body text, form inputs, notes/warnings, and navigation links.

### 📐 Layout & Architecture
- Fully responsive, mobile-first design built with semantic HTML5 and CSS Flexbox/Grid.
- Card-based interface with clear status indicators (On Hold, Confirmed, Cancelled, Past).
- Accessible contrasts and consistent spacing across all pages.

---

## Key System Features

1. **Shift-Based Appointment Scheduling (4-Hour Windows):**
   - **Shift 1 (Morning):** 7:00 AM – 11:00 AM
   - *Staff Break:* 11:00 AM – 12:00 NN
   - **Shift 2 (Afternoon):** 12:00 NN – 4:00 PM
   - *Staff Break:* 4:00 PM – 5:00 PM
   - **Shift 3 (Evening):** 5:00 PM – 9:00 PM
   - **Capacity:** Fixed limit of **3 pets per shift** (max 240 minutes per pet) to guarantee individual attention.

2. **Automated Pet Size Classification:**
   - **Small:** 10 kg and below
   - **Medium:** Above 10 kg up to 25 kg
   - **Large:** Above 25 kg up to 30 kg
   - **Giant:** Above 30 kg (no upper limit)

3. **15-Minute Payment Capacity Hold:**
   - Submitting a booking locks the shift slot for 15 minutes. If unpaid, the slot automatically releases back to public availability.

4. **Animals with Disability (AWD) Support:**
   - 20% discount automatically applied upon declaring pet special needs and submitting optional verification documents.

5. **Simulated Payment Workflow:**
   - Customers can choose **20% Down Payment** (remaining 80% balance settled in cash at the salon) or **Full Payment** via demonstration QR code.

6. **Self-Service Rescheduling & Cancellation:**
   - Reschedule to any open shift with available capacity.
   - Cancellations made **≥ 24 hours** prior receive a full simulated refund; cancellations under 24 hours forfeit refund eligibility.

---

## Deployment

- **GitHub Repository:** [https://github.com/jessahmaequinal/FurB-Grooming-Services_Website](https://github.com/jessahmaequinal/FurB-Grooming-Services_Website)
- **Live Website:** [https://jessahmaequinal.github.io/FurB-Grooming-Services_Website](https://jessahmaequinal.github.io/FurB-Grooming-Services_Website)

---

## Lessons Learned

- **Capacity & State Logic:** Modeled shift capacity limits, temporary holds, and real-time validations in browser storage.
- **Requirement Translation:** Successfully converted a 54-page project proposal specification into an interactive, user-friendly digital application.
- **Collaborative Engineering:** Coordinated roles across Project Management, UI/UX Design, Content Writing, Development, and Research using Git version control.
- **Design System Consistency:** Applied a brand color palette and paired fonts (`Fredoka` & `Nunito`) for optimal readability and pet-brand appeal.
- **Web Standards & Deployment:** Implemented semantic HTML5, accessible forms, responsive CSS, and live GitHub Pages hosting.

---

## Timeline

| Phase / Day | Task & Activities | Schedule |
|---|---|---|
| **Phase 1: Planning** (Day 1–6) | Final requirements review, system scope definition, and project planning | October 3–8, 2026 |
| **Phase 2: Content & UI** (Day 7–13) | Website content planning, wireframe design, and user interface drafting | October 9–15, 2026 |
| **Phase 3: Core Pages** (Day 14–20) | Responsive HTML/CSS structure, customer account layout, and database setup | October 16–22, 2026 |
| **Phase 4: Features** (Day 21–27) | Shift scheduling engine, AWD discount, simulated QR payment, and reschedule/cancel logic | October 23–29, 2026 |
| **Phase 5: Testing & QA** (Day 28–34) | Functional testing, input validation, bug fixes, and documentation refinement | October 30 – November 5, 2026 |
| **Phase 6: Deployment** | GitHub repository setup, live GitHub Pages launch, and final adjustments | November 21–23, 2026 |
| **Phase 7: Submission** | Final project proposal documentation and code submission | November 26, 2026 |
