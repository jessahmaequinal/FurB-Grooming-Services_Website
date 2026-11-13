# Fur & Bubbles Grooming Services Website

A modern, responsive web application and appointment booking management system for **Fur & Bubbles Grooming Services**, a premier pet salon located along **Davila St., Navotas City, Philippines**. Built for the BSIS Web Development project.

---

## 📁 Project Structure

```text
FurB Grooming Services/
├── index.html          # Home landing page with hero, mascot & quick hub cards
├── about.html          # About Us, shop background, mission, vision & grooming team
├── services.html       # Full pricelist (Packages, À la Carte, Add-ons & Sizing guide)
├── booking.html        # 5-step booking wizard, active holds, my bookings & profile
├── contact.html        # Shop location, shifts schedule, contact info & inquiry form
├── faqs.html           # FAQs accordion, Terms & Conditions & Privacy Policy
├── style.css           # Global stylesheet and CSS variables
├── script.js           # Shared application state, localStorage, and business logic
├── assets/             # Vector icons, logos, and media files
│   ├── logo.svg        # Official vector badge logo
│   └── README.md       # Media placement guide
├── .gitignore          # Git exclusion rules
├── LICENSE             # MIT Open Source License
└── README.md           # Project documentation
```

---

## 🌟 Key Features

1. **Shift-Based Appointment Scheduling (Daily Capacity Management)**:
   - **3 Shifts per day**:
     - **Shift 1**: 7:00 AM – 11:00 AM
     - *Break*: 11:00 AM – 12:00 NN
     - **Shift 2**: 12:00 NN – 4:00 PM
     - *Break*: 4:00 PM – 5:00 PM
     - **Shift 3**: 5:00 PM – 9:00 PM
   - Strict capacity limit: Maximum **3 pets per shift** to maintain calm, stress-free care.
   - Handled by **3 professional groomers** (Jannel, Jenn, Emman) and **2 assistants** (Mike, Jess).

2. **5-Step Booking Flow**:
   - **Step 1: Services**: Choose one Package OR multiple À la Carte services + optional Add-ons. Real-time duration & price calculation.
   - **Step 2: Schedule**: Interactive calendar with real-time shift capacity indicators.
   - **Step 3: Account**: Customer sign-in / registration with simulated OAuth (Google/Apple).
   - **Step 4: Pet Details**: Quick-select saved pets or register a new pet, upload required photo, and optional **Animals with Disability (AWD)** 20% discount declaration.
   - **Step 5: Review & Payment**: Summary breakdown with 20% down payment or 100% full payment options.

3. **15-Minute Payment Hold**:
   - Live countdown timer reserves shift capacity. If unpaid within 15 minutes, the slot is automatically released.

4. **Appointment Management & Policy Guarantees**:
   - **Reschedule**: Switch to another available shift without additional fees.
   - **Cancel with 24h Refund**: Cancellations made at least 24 hours prior to shift start receive a full simulated refund.
   - **Customer Profile & Pets**: Save multiple pet profiles for fast future bookings.

---

## 🎨 Color Palette

| Color | Hex | Usage |
|---|---|---|
| **Butterscotch** | `#FCB34F` | Highlights, badges, hero accent |
| **Navy Blue** | `#1F6590` | Primary branding, buttons, headers |
| **Rose Madder** | `#E62A34` | Prices, cancellation, alerts |
| **Forest Green** | `#31572C` | Confirmations, success badges |
| **Red Inferno** | `#4B0000` | Warnings, urgent notices |
| **Light Background** | `#F8F9FA` | Page background |

---

## 🚀 How to Run Locally

1. Clone or download this project folder.
2. Open the `FurB Grooming Services` folder in **Visual Studio Code** or your preferred editor.
3. Right-click `index.html` and select **Open with Live Server** (or open `index.html` directly in any web browser).

---

## 👥 Project Team & Credits

- **Founder & Manager:** Paulene Serrano
- **Grooming Stylists:** Jannel, Jenn, Emman
- **Assistant Specialists:** Mike, Jess
- **Course:** BSIS Web Development
