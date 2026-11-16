const SERVICE_DATA = {
  sizes: ['Small', 'Medium', 'Large', 'Giant'],
  
  // Table 3 & 8: À La Carte Services (Price & Duration)
  alaCarte: {
    bath_blowdry: {
      id: 'bath_blowdry',
      name: 'Bath and Blow-Dry',
      prices: { Small: 200, Medium: 350, Large: 450, Giant: 550 },
      durations: { Small: 30, Medium: 40, Large: 55, Giant: 65 }
    },
    dematting: {
      id: 'dematting',
      name: 'Dematting',
      prices: { Small: 150, Medium: 200, Large: 300, Giant: 400 },
      durations: { Small: 10, Medium: 15, Large: 25, Giant: 35 }
    },
    face_trim: {
      id: 'face_trim',
      name: 'Face Trim',
      prices: { Small: 100, Medium: 150, Large: 200, Giant: 250 },
      durations: { Small: 10, Medium: 15, Large: 20, Giant: 25 }
    },
    fur_bubbles_trim: {
      id: 'fur_bubbles_trim',
      name: 'Fur & Bubbles Trim (Paw Pad Trim)',
      prices: { Small: 100, Medium: 125, Large: 150, Giant: 175 },
      durations: { Small: 5, Medium: 10, Large: 10, Giant: 15 }
    },
    teeth_brushing: {
      id: 'teeth_brushing',
      name: 'Teeth Brushing',
      prices: { Small: 80, Medium: 100, Large: 125, Giant: 150 },
      durations: { Small: 5, Medium: 5, Large: 5, Giant: 10 }
    },
    nail_trimming: {
      id: 'nail_trimming',
      name: 'Nail Trimming',
      prices: { Small: 100, Medium: 125, Large: 150, Giant: 175 },
      durations: { Small: 5, Medium: 5, Large: 10, Giant: 10 }
    },
    ear_cleaning: {
      id: 'ear_cleaning',
      name: 'Ear Cleaning',
      prices: { Small: 100, Medium: 125, Large: 150, Giant: 175 },
      durations: { Small: 5, Medium: 5, Large: 10, Giant: 10 }
    }
  },

  // Table 4 & 9: Add-on Services
  addOns: {
    organic_shampoo: {
      id: 'organic_shampoo',
      name: 'Organic Shampoo Upgrade',
      prices: { Small: 100, Medium: 150, Large: 200, Giant: 250 },
      durations: { Small: 5, Medium: 10, Large: 10, Giant: 15 },
      note: 'Already included in Spa Grooming package and cannot be added twice.'
    },
    fur_conditioning: {
      id: 'fur_conditioning',
      name: 'Fur Conditioning Treatment',
      prices: { Small: 100, Medium: 150, Large: 200, Giant: 250 },
      durations: { Small: 5, Medium: 10, Large: 10, Giant: 15 },
      note: 'May be selected with any package or à la carte service.'
    },
    paw_balm: {
      id: 'paw_balm',
      name: 'Paw Balm Treatment',
      prices: { Small: 75, Medium: 100, Large: 125, Giant: 150 },
      durations: { Small: 5, Medium: 5, Large: 10, Giant: 10 },
      note: 'May be selected with any package or à la carte service.'
    }
  },

  // Table 5 & 10: Grooming Packages
  packages: {
    basic_grooming: {
      id: 'basic_grooming',
      name: 'Basic Grooming',
      prices: { Small: 450, Medium: 550, Large: 700, Giant: 850 },
      durations: { Small: 40, Medium: 50, Large: 75, Giant: 85 },
      inclusions: ['Bath and Blow Dry', 'Ear Cleaning', 'Nail Trimming']
    },
    full_grooming: {
      id: 'full_grooming',
      name: 'Full Grooming',
      prices: { Small: 650, Medium: 800, Large: 1000, Giant: 1200 },
      durations: { Small: 65, Medium: 90, Large: 125, Giant: 150 },
      inclusions: ['Bath', 'Blow Dry', 'Haircut', 'Ear Cleaning', 'Nail Trimming', 'Fur & Bubbles Trim (Paw Pad Trim)']
    },
    premium_grooming: {
      id: 'premium_grooming',
      name: 'Premium Grooming',
      prices: { Small: 850, Medium: 1050, Large: 1300, Giant: 1550 },
      durations: { Small: 80, Medium: 105, Large: 145, Giant: 175 },
      inclusions: ['Bath', 'Blow Dry', 'Haircut and Styling', 'Ear Cleaning', 'Nail Trimming', 'Teeth Brushing', 'Fur & Bubbles Trim (Paw Pad Trim)']
    },
    deshedding_package: {
      id: 'deshedding_package',
      name: 'De-Shedding Package',
      prices: { Small: 600, Medium: 750, Large: 950, Giant: 1150 },
      durations: { Small: 60, Medium: 80, Large: 115, Giant: 135 },
      inclusions: ['De-Shedding Treatment', 'Bath', 'Blow Dry', 'Nail Trimming', 'Ear Cleaning']
    },
    puppy_grooming: {
      id: 'puppy_grooming',
      name: 'Puppy Grooming',
      prices: { Small: 400, Medium: 500, Large: 650, Giant: 800 },
      durations: { Small: 50, Medium: 65, Large: 95, Giant: 110 },
      inclusions: ['Gentle Bath', 'Blow Dry', 'Nail Trimming', 'Ear Cleaning', 'Light Hair Trim']
    },
    spa_grooming: {
      id: 'spa_grooming',
      name: 'Spa Grooming',
      prices: { Small: 900, Medium: 1100, Large: 1350, Giant: 1600 },
      durations: { Small: 70, Medium: 95, Large: 130, Giant: 160 },
      inclusions: ['Bath', 'Blow Dry', 'Haircut', 'Organic Shampoo Upgrade', 'Teeth Brushing', 'Nail Trimming', 'Ear Cleaning']
    }
  },

  // Table 7: Shifts (4 hours each, max 3 pets per shift)
  shifts: [
    { id: 'shift_1', name: 'Shift 1 (Morning)', time: '7:00 AM – 11:00 AM', startHour: 7, durationHours: 4, maxCapacity: 3 },
    { id: 'shift_2', name: 'Shift 2 (Afternoon)', time: '12:00 NN – 4:00 PM', startHour: 12, durationHours: 4, maxCapacity: 3 },
    { id: 'shift_3', name: 'Shift 3 (Evening)', time: '5:00 PM – 9:00 PM', startHour: 17, durationHours: 4, maxCapacity: 3 }
  ],

  // Table 6: Weight Ranges
  getCategoryFromWeight: function(weightKg) {
    const w = parseFloat(weightKg);
    if (isNaN(w) || w <= 0) return 'Small';
    if (w <= 10) return 'Small';
    if (w <= 25) return 'Medium';
    if (w <= 30) return 'Large';
    return 'Giant';
  }
};

// GLOBAL STATE & STORAGE KEYS
const STORAGE_KEYS = {
  USERS: 'fb_users',
  CURRENT_USER: 'fb_current_user',
  BOOKINGS: 'fb_bookings',
  PETS: 'fb_pets',
  LAST_REF_NO: 'fb_last_ref_no'
};

// DEFAULT SEED DATA
function initializeDefaultData() {
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const defaultUsers = [
      {
        id: 'user_default_1',
        name: 'Mike Anthony Capulong',
        email: 'capawlong@gmail.com',
        password: 'password123',
        phone: '09171234567',
        birthdate: '1998-05-15',
        agreeTerms: true
      }
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
  }

  if (!localStorage.getItem(STORAGE_KEYS.PETS)) {
    const defaultPets = [
      {
        id: 'pet_1',
        userId: 'user_default_1',
        name: 'Zeus',
        species: 'Cat',
        breed: 'Persian Cat',
        weight: 4.5,
        careNotes: 'Gentle handling required; skin sensitivity near neck.',
        photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop'
      },
      {
        id: 'pet_2',
        userId: 'user_default_1',
        name: 'Bruno',
        species: 'Dog',
        breed: 'Golden Retriever',
        weight: 28.0,
        careNotes: 'Loves ear cleaning. Slight matting around tail.',
        photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.PETS, JSON.stringify(defaultPets));
  }

  if (!localStorage.getItem(STORAGE_KEYS.BOOKINGS)) {
    // Generate dates relative to current date
    const today = new Date();
    const dateStr1 = getFormattedDateStr(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2));
    const dateStr2 = getFormattedDateStr(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5));

    const defaultBookings = [
      {
        id: 'book_1',
        referenceNumber: '0000000145',
        userId: 'user_default_1',
        bookingType: 'alaCarte', // 'package' or 'alaCarte'
        packageId: null,
        selectedServices: ['bath_blowdry', 'face_trim'],
        selectedAddons: ['organic_shampoo'],
        pet: {
          name: 'Zeus',
          species: 'Cat',
          breed: 'Persian Cat',
          weight: 4.5,
          sizeCategory: 'Small',
          careNotes: 'Sensitive skin near neck',
          photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop'
        },
        appointmentDate: dateStr1,
        shiftId: 'shift_1',
        shiftName: 'Shift 1 (Morning)',
        shiftTime: '7:00 AM – 11:00 AM',
        estimatedDuration: 45,
        originalTotal: 400,
        isAwd: false,
        awdCondition: '',
        awdDocumentName: '',
        discountAmount: 0,
        totalAmount: 400,
        downPaymentAmount: 80, // 20%
        remainingBalance: 320, // 80%
        paymentOption: 'down', // 'down' or 'full'
        paymentStatus: 'Partially Paid', // 'Unpaid', 'Partially Paid', 'Fully Paid'
        bookingStatus: 'Confirmed', // 'On Hold', 'Confirmed', 'Cancelled', 'Past'
        createdAt: new Date().toISOString(),
        paymentDeadline: null,
        paymentTransactionRef: 'SIM-TXN-984021',
        paymentRecordedAt: new Date().toISOString()
      },
      {
        id: 'book_2',
        referenceNumber: '0000000140',
        userId: 'user_default_1',
        bookingType: 'package',
        packageId: 'basic_grooming',
        selectedServices: [],
        selectedAddons: [],
        pet: {
          name: 'Zeus',
          species: 'Cat',
          breed: 'Persian Cat',
          weight: 4.5,
          sizeCategory: 'Small',
          careNotes: 'Previous regular appointment',
          photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop'
        },
        appointmentDate: dateStr2,
        shiftId: 'shift_2',
        shiftName: 'Shift 2 (Afternoon)',
        shiftTime: '12:00 NN – 4:00 PM',
        estimatedDuration: 40,
        originalTotal: 450,
        isAwd: false,
        awdCondition: '',
        awdDocumentName: '',
        discountAmount: 0,
        totalAmount: 450,
        downPaymentAmount: 450,
        remainingBalance: 0,
        paymentOption: 'full',
        paymentStatus: 'Fully Paid',
        bookingStatus: 'Past',
        createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
        paymentDeadline: null,
        paymentTransactionRef: 'SIM-TXN-982100',
        paymentRecordedAt: new Date(Date.now() - 7 * 86400000).toISOString()
      }
    ];
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(defaultBookings));
  }

  if (!localStorage.getItem(STORAGE_KEYS.LAST_REF_NO)) {
    localStorage.setItem(STORAGE_KEYS.LAST_REF_NO, '145');
  }
}

// DATE HELPERS
function getFormattedDateStr(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Saves the signed-in user. remember=true keeps them signed in after the browser closes.
function saveCurrentUser(user, remember) {
  const json = JSON.stringify(user);
  if (remember) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, json);
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  } else {
    sessionStorage.setItem(STORAGE_KEYS.CURRENT_USER, json);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
}

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // 5MB

function validateUploadFile(file, allowedTypes, label) {
  if (!allowedTypes.includes(file.type)) {
    const names = allowedTypes.map(t => t === 'application/pdf' ? 'PDF' : t.split('/')[1].toUpperCase().replace('JPEG', 'JPG'));
    alert(`${label} must be a ${[...new Set(names)].join(', ')} file.`);
    return false;
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    alert(`${label} is too large. The maximum file size is 5MB.`);
    return false;
  }
  return true;
}

// Shrinks a photo (max 600px) and saves it as JPEG so it fits in localStorage
function compressImageToDataUrl(file, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, 600 / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
       callback(canvas.toDataURL('image/jpeg', 0.8));
    };
    img.onerror = () => alert('This image could not be read. Please try another photo.');
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function formatMonthYear(dateStr) {
  if (!dateStr) return '';
  const [y, m] = dateStr.split('-');
  return new Date(parseInt(y), parseInt(m) - 1, 1)
    .toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatDateReadable(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// GENERATE UNIQUE 10-DIGIT BOOKING REFERENCE NUMBER
function generateBookingReferenceNumber() {
  let lastNo = parseInt(localStorage.getItem(STORAGE_KEYS.LAST_REF_NO) || '145', 10);
  lastNo += 1;
  localStorage.setItem(STORAGE_KEYS.LAST_REF_NO, String(lastNo));
  return String(lastNo).padStart(10, '0');
}

// APP CORE CONTROLLER
const App = {
  currentView: 'home-view',
  currentUser: null,
  
  // CURRENT BOOKING DRAFT (Kept across steps and auth)
  bookingDraft: {
    bookingType: 'package', // 'package' or 'alaCarte'
    packageId: 'basic_grooming',
    selectedAlaCarte: [],
    selectedAddOns: [],
    weight: 5.0,
    isWeightEstimated: false,
    sizeCategory: 'Small',
    date: '',
    shiftId: 'shift_1',
    petId: '',
    petName: '',
    species: 'Dog',
    breed: '',
    careNotes: '',
    petPhoto: '',
    isAwd: false,
    awdCondition: '',
    awdDocumentName: '',
    awdConfirmed: false,
    paymentOption: 'down', // 'down' or 'full'
    activeHoldBookingId: null
  },

  // Calendar State
  calendarMonth: new Date().getMonth(),
  calendarYear: new Date().getFullYear(),

  // Active Hold Timer
  holdTimerInterval: null,
  holdRemainingSeconds: 0,

  // ROUTE TO PAGE MAP
  pageMap: {
    'home-view': 'index.html',
    'services-view': 'services.html',
    'booking-view': 'booking.html',
    'my-bookings-view': 'booking.html?view=my-bookings-view',
    'booking-history-view': 'booking.html?view=booking-history-view',
    'profile-view': 'booking.html?view=profile-view',
    'pets-view': 'booking.html?view=pets-view',
    'about-view': 'about.html',
    'contact-view': 'contact.html',
    'faqs-view': 'faqs.html',
    'terms-view': 'faqs.html?view=terms-view',
    'privacy-view': 'faqs.html?view=privacy-view'
  },

  init: function() {
    initializeDefaultData();
    this.currentUser = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.CURRENT_USER) || localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || 'null');
    this.migrateLegacyBookings();
    this.updateUserNavigation();
    this.checkAndExpireHolds();
    this.checkPastBookings();
    this.renderServicesAndPricelist();
    this.initEventListeners();

    // Determine target view from query, hash, data attribute, or first section
    const urlParams = new URLSearchParams(window.location.search);
    const viewFromParam = urlParams.get('view');
    const viewFromHash = window.location.hash ? window.location.hash.substring(1) : null;
    const bodyDefault = document.body.dataset.defaultView;
    const firstSection = document.querySelector('.view-section');

    const targetView = viewFromParam || viewFromHash || bodyDefault || (firstSection ? firstSection.id : 'home-view');
    
    if (document.getElementById(targetView)) {
      this.routeTo(targetView);
        } else if (firstSection) {
      this.routeTo(firstSection.id);
    }

    // Header "Sign In" on other pages opens the standalone sign-in screen
    if (viewFromParam === 'sign-in') {
      this.openStandaloneAuth();
    }

    // Run hold & past checker every 10 seconds
    setInterval(() => {
      this.checkAndExpireHolds();
      this.checkPastBookings();
    }, 10000);
  },

  // Older saved bookings may have no amountPaid; work it out so they don't show PHP 0
  migrateLegacyBookings: function() {
    const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
    let changed = false;
    bookings.forEach(b => {
      if (typeof b.amountPaid !== 'number') {
        if (b.paymentStatus === 'Fully Paid') b.amountPaid = b.totalAmount;
        else if (b.paymentStatus === 'Partially Paid') b.amountPaid = Math.max(0, b.totalAmount - (b.remainingBalance || 0));
        else b.amountPaid = 0;
        changed = true;
      }
    });
    if (changed) localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
  },

  // ROUTING & NAVIGATION
  routeTo: function(viewId) {
    const target = document.getElementById(viewId);
    if (!target) {
      // If the view exists on a different page, navigate to that page
      const destination = this.pageMap[viewId] || 'index.html';
      window.location.href = destination;
      return;
    }

    this.currentView = viewId;
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const onclickAttr = link.getAttribute('onclick') || '';
      const hrefAttr = link.getAttribute('href') || '';
      const viewMatch = onclickAttr.match(/routeTo\('([^']+)'\)/);
      let isActive = false;
      if (viewMatch) {
        isActive = (viewMatch[1] === viewId);
      } else if (hrefAttr && !hrefAttr.startsWith('javascript')) {
        isActive = (hrefAttr.split('?')[0] === currentPage) && viewId !== 'my-bookings-view' && viewId !== 'booking-history-view';
      }
      link.classList.toggle('active', isActive);
    });

    // Close any open account dropdown
    const dd = document.getElementById('accountDropdown');
    if (dd) dd.classList.remove('show');

    // Specific view setups
    if (viewId === 'home-view') {
      this.updateHomeGreeting();
    } else if (viewId === 'booking-view') {
      this.setupBookingStep(1);
    } else if (viewId === 'my-bookings-view') {
      this.renderMyBookings();
    } else if (viewId === 'booking-history-view') {
      this.renderBookingHistory();
    } else if (viewId === 'profile-view') {
      this.renderProfileView();
    } else if (viewId === 'pets-view') {
      this.renderPetsView();
    } else if (viewId === 'services-view') {
      this.renderServicesAndPricelist();
    }
  },

  updateUserNavigation: function() {
    const user = this.currentUser;
    const guestNavs = document.querySelectorAll('.nav-guest-only');
    const authNavs = document.querySelectorAll('.nav-auth-only');
    const userNameDisplay = document.getElementById('navUserNameDisplay');
    const userEmailDisplay = document.getElementById('navUserEmailDisplay');
    const userAvatarInitials = document.getElementById('navUserAvatarInitials');

    if (user) {
      guestNavs.forEach(el => el.style.display = 'none');
      authNavs.forEach(el => el.style.display = 'flex');
      if (userNameDisplay) userNameDisplay.textContent = user.name;
      if (userEmailDisplay) userEmailDisplay.textContent = user.email;
      if (userAvatarInitials) {
        userAvatarInitials.textContent = user.name.charAt(0).toUpperCase();
      }
      this.updateActiveBookingsBadge();
    } else {
      guestNavs.forEach(el => el.style.display = 'flex');
      authNavs.forEach(el => el.style.display = 'none');
    }
  },

  updateHomeGreeting: function() {
    const greetingEl = document.getElementById('homeGreetingText');
    if (!greetingEl) return;
    if (this.currentUser) {
      const firstName = this.currentUser.name.split(' ')[0].toUpperCase();
      greetingEl.textContent = `HI, ${firstName}!`;
    } else {
      greetingEl.textContent = 'PAMPER YOUR PET WITH EXPERT CARE';
    }
  },

  updateActiveBookingsBadge: function() {
    if (!this.currentUser) return;
    const bookings = this.getBookings().filter(b => 
      b.userId === this.currentUser.id && 
      (b.bookingStatus === 'On Hold' || b.bookingStatus === 'Confirmed')
    );
    const badge = document.getElementById('myBookingsCountBadge');
    if (badge) {
      if (bookings.length > 0) {
        badge.textContent = bookings.length;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    }
  },

  // CAPACITY & SHIFT MANAGEMENT ENGINE
  getBookings: function() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
  },

  saveBookings: function(bookings) {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    this.updateActiveBookingsBadge();
  },

  getShiftCapacityInfo: function(dateStr, shiftId) {
    const bookings = this.getBookings();
    const activeShiftBookings = bookings.filter(b => 
      b.appointmentDate === dateStr &&
      b.shiftId === shiftId &&
      (b.bookingStatus === 'Confirmed' || b.bookingStatus === 'On Hold')
    );
    const bookedCount = activeShiftBookings.length;
    const remaining = Math.max(0, 3 - bookedCount);
    return {
      bookedCount: bookedCount,
      remaining: remaining,
      isFull: remaining <= 0
    };
  },

  isDateFullyBooked: function(dateStr) {
    return SERVICE_DATA.shifts.every(shift => {
      const cap = this.getShiftCapacityInfo(dateStr, shift.id);
      return cap.isFull;
    });
  },

  // CHECK AND AUTO-EXPIRE 15-MINUTE HOLDS
  checkAndExpireHolds: function() {
    const bookings = this.getBookings();
    let updated = false;
    const now = Date.now();

    bookings.forEach(b => {
      if (b.bookingStatus === 'On Hold' && b.paymentDeadline) {
        const deadlineTime = new Date(b.paymentDeadline).getTime();
        if (now >= deadlineTime) {
          b.bookingStatus = 'Cancelled';
          b.paymentStatus = 'Unpaid';
          b.cancellationReason = 'Expired 15-minute hold deadline';
          updated = true;
          // If this was our current active hold, stop timer
          if (App.bookingDraft.activeHoldBookingId === b.id) {
            App.stopHoldTimer();
            App.showHoldExpiredModal();
          }
        }
      }
    });

    if (updated) {
      this.saveBookings(bookings);
      if (this.currentView === 'my-bookings-view') {
        this.renderMyBookings();
      }
    }
  },

  // AUTO-MARK PAST BOOKINGS
  checkPastBookings: function() {
    const bookings = this.getBookings();
    let updated = false;
    const now = new Date();

    bookings.forEach(b => {
      if (b.bookingStatus === 'Confirmed' && b.appointmentDate) {
        const [y, m, d] = b.appointmentDate.split('-').map(Number);
        const shift = SERVICE_DATA.shifts.find(s => s.id === b.shiftId);
        const endHour = shift ? shift.startHour + shift.durationHours : 21;
        const shiftEndTime = new Date(y, m - 1, d, endHour, 0, 0);

        if (now > shiftEndTime) {
          b.bookingStatus = 'Past';
          updated = true;
        }
      }
    });

    if (updated) {
      this.saveBookings(bookings);
      if (this.currentView === 'my-bookings-view') this.renderMyBookings();
      if (this.currentView === 'booking-history-view') this.renderBookingHistory();
    }
  },

  // PRICING & DURATION CALCULATION ENGINE
  calculateBookingTotals: function(draft) {
    const size = draft.sizeCategory || SERVICE_DATA.getCategoryFromWeight(draft.weight);
    let originalTotal = 0;
    let totalDuration = 0;
    const serviceListDisplay = [];
    const inclusionsDisplay = [];

    if (draft.bookingType === 'package') {
      const pkg = SERVICE_DATA.packages[draft.packageId] || SERVICE_DATA.packages['basic_grooming'];
      originalTotal += pkg.prices[size];
      totalDuration += pkg.durations[size];
      serviceListDisplay.push({
        name: pkg.name + ` (${size})`,
        price: pkg.prices[size],
        duration: pkg.durations[size],
        isPackage: true
      });
      pkg.inclusions.forEach(inc => inclusionsDisplay.push(inc));
    } else {
      // À La Carte
      (draft.selectedAlaCarte || []).forEach(srvId => {
        const srv = SERVICE_DATA.alaCarte[srvId];
        if (srv) {
          originalTotal += srv.prices[size];
          totalDuration += srv.durations[size];
          serviceListDisplay.push({
            name: srv.name + ` (${size})`,
            price: srv.prices[size],
            duration: srv.durations[size],
            isPackage: false
          });
        }
      });
    }

    // Add-on extras (Rules: Table 4 notes)
    // Organic Shampoo Upgrade is already included in Spa Grooming; must not be charged again!
    (draft.selectedAddOns || []).forEach(addonId => {
      if (draft.bookingType === 'package' && draft.packageId === 'spa_grooming' && addonId === 'organic_shampoo') {
        // Already included in Spa Grooming! Exclude from double counting
        return;
      }
      const addon = SERVICE_DATA.addOns[addonId];
      if (addon) {
        originalTotal += addon.prices[size];
        totalDuration += addon.durations[size];
        serviceListDisplay.push({
          name: addon.name + ` (Add-on - ${size})`,
          price: addon.prices[size],
          duration: addon.durations[size],
          isAddon: true
        });
      }
    });

    // Animals with Disability (AWD) 20% demonstration discount
    let discountAmount = 0;
    if (draft.isAwd) {
      discountAmount = Math.round(originalTotal * 0.20);
    }
    const finalTotal = Math.max(0, originalTotal - discountAmount);

    // 20% Down Payment vs 80% Cash Balance
    const downPaymentAmount = Math.round(finalTotal * 0.20);
    const remainingBalance = finalTotal - downPaymentAmount;

    const isExceeding240 = totalDuration > 240;

    return {
      sizeCategory: size,
      originalTotal: originalTotal,
      discountAmount: discountAmount,
      totalAmount: finalTotal,
      downPaymentAmount: downPaymentAmount,
      remainingBalance: remainingBalance,
      totalDuration: totalDuration,
      isExceeding240: isExceeding240,
      serviceListDisplay: serviceListDisplay,
      inclusionsDisplay: inclusionsDisplay
    };
  },

  // BOOKING WIZARD STEP CONTROLLER
    currentStep: 1,

  // Stepper clicks only go BACK, and not once payment has started
  goToStep: function(n) {
    if (n < this.currentStep && this.currentStep < 6) {
      this.setupBookingStep(n);
    }
  },

  // STEPPER CLICK HANDLER (blocks jumping ahead without required info)
  goToStep: function(step) {
    // Payment and confirmation can't be reached by clicking the stepper
    const draft = this.bookingDraft;
    if (draft.activeHoldBookingId) return; // booking already submitted

    // Can't jump past Services/Schedule without a valid selection
    if (step >= 3 && !draft.date) {
      alert('Please choose an appointment date and shift first.');
      this.setupBookingStep(2);
      return;
    }
    // Pet details required before Review
    if (step === 5 && !draft.petName) {
      alert('Please complete the pet details first.');
      this.setupBookingStep(4);
      return;
    }
    this.setupBookingStep(step);
  },

  // BOOKING WIZARD STEP CONTROLLER
  setupBookingStep: function(stepNumber) {
    // Leaving the sign-in step ends the standalone sign-in screen
    if (stepNumber !== 3) {
      this.standaloneAuth = false;
      const stepperEl = document.querySelector('.stepper-wrapper');
      if (stepperEl) stepperEl.style.display = '';
    }

    // Guests cannot go past the sign-in step
    if (!this.currentUser && stepNumber >= 4) {
      alert('Please sign in or create an account to continue your booking.');
      stepNumber = 3;
    }
    // A date and shift must be chosen before steps 3-5
    if (stepNumber >= 3 && stepNumber <= 5 && (!this.bookingDraft.date || !this.bookingDraft.shiftId)) {
      stepNumber = 2;
    }
    // A pet must be entered before the review step
    if (stepNumber === 5 && !this.bookingDraft.petName) {
      stepNumber = 4;
    }
    this.currentStep = stepNumber;

    // Hide all steps
    document.querySelectorAll('.booking-wizard-step').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.step-item').forEach(el => el.classList.remove('active'));

    // Highlight stepper
    for (let i = 1; i <= 7; i++) {
      const stepItem = document.getElementById(`stepperItem${i}`);
      if (stepItem) {
        if (i < stepNumber) {
          stepItem.classList.add('completed');
          stepItem.classList.remove('active');
        } else if (i === stepNumber) {
          stepItem.classList.add('active');
          stepItem.classList.remove('completed');
        } else {
          stepItem.classList.remove('active', 'completed');
        }
      }
    }

    const currentStepDiv = document.getElementById(`bookingStep${stepNumber}`);
    if (currentStepDiv) {
      currentStepDiv.classList.add('active');
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    // Step-specific renderers
    if (stepNumber === 1) {
      this.renderServiceSelectionStep();
    } else if (stepNumber === 2) {
      this.renderScheduleStep();
    } else if (stepNumber === 3) {
      // If user is already logged in, jump automatically to Step 4!
      if (this.currentUser) {
        this.setupBookingStep(4);
        return;
      }
      this.renderAuthStep();
    } else if (stepNumber === 4) {
      this.renderPetFormStep();
    } else if (stepNumber === 5) {
      this.renderBookingReviewStep();
    } else if (stepNumber === 6) {
      this.renderSubmitAndPayStep();
    } else if (stepNumber === 7) {
      this.renderConfirmationStep();
    }
  },

  // STEP 1: SELECT SERVICES
  renderServiceSelectionStep: function() {
    const draft = this.bookingDraft;
    
    // Toggle Booking Type Pill
    const pkgTab = document.getElementById('tabBookingPackage');
    const alaTab = document.getElementById('tabBookingAlaCarte');
    const pkgContainer = document.getElementById('packageSelectionContainer');
    const alaContainer = document.getElementById('alaCarteSelectionContainer');

    if (draft.bookingType === 'package') {
      pkgTab.classList.add('active');
      alaTab.classList.remove('active');
      pkgContainer.style.display = 'block';
      alaContainer.style.display = 'none';
    } else {
      alaTab.classList.add('active');
      pkgTab.classList.remove('active');
      alaContainer.style.display = 'block';
      pkgContainer.style.display = 'none';
    }

    // Populate Weight Input
    const weightInput = document.getElementById('inputPetWeight');
    if (weightInput) weightInput.value = draft.weight;

    const estCheck = document.getElementById('checkWeightEstimated');
    if (estCheck) estCheck.checked = draft.isWeightEstimated;

    // Recalculate Size Category
    draft.sizeCategory = SERVICE_DATA.getCategoryFromWeight(draft.weight);
    this.updateSizeBadgeUI(draft.sizeCategory);

    // Render Package Cards
    this.renderPackageCards();

    // Render À La Carte Checkboxes
    this.renderAlaCarteCheckboxes();

    // Render Add-on Checkboxes
    this.renderAddonCheckboxes();

    // Update Live Running Calculation
    this.updateLiveRunningSummary();
  },

  updateSizeBadgeUI: function(size) {
    const badge = document.getElementById('assignedSizeBadge');
    if (badge) {
      badge.textContent = `${size} (Automatic)`;
      badge.className = `size-category-badge badge-${size.toLowerCase()}`;
    }
  },

  renderPackageCards: function() {
    const container = document.getElementById('packagesCardsList');
    if (!container) return;
    const size = this.bookingDraft.sizeCategory;
    const selectedPkg = this.bookingDraft.packageId;

    let html = '';
    Object.values(SERVICE_DATA.packages).forEach(pkg => {
      const isSelected = selectedPkg === pkg.id;
      const price = pkg.prices[size];
      const duration = pkg.durations[size];
      const inclusionsHtml = pkg.inclusions.map(inc => `<li>${inc}</li>`).join('');

      html += `
        <div class="package-card ${isSelected ? 'selected' : ''}" onclick="App.selectPackage('${pkg.id}')">
          <div class="package-card-header">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h3 class="package-name" style="font-size:1.15rem; color:var(--color-navy);">${pkg.name}</h3>
              <input type="radio" name="selectedPackageRadio" value="${pkg.id}" ${isSelected ? 'checked' : ''}>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-top:8px;">
              <span class="package-price-tag">₱${price.toLocaleString()}</span>
              <span class="package-duration-tag">⏱️ ${duration} mins</span>
            </div>
          </div>
          <ul class="inclusions-list">
            ${inclusionsHtml}
          </ul>
        </div>
      `;
    });
    container.innerHTML = html;
  },

  switchServiceTab: function(type) {
    this.bookingDraft.bookingType = type;
    if (type === 'package') {
      if (!this.bookingDraft.packageId) {
        this.bookingDraft.packageId = 'basic_grooming';
      }
    } else if (type === 'alaCarte') {
      if (!this.bookingDraft.selectedAlaCarte || this.bookingDraft.selectedAlaCarte.length === 0) {
        this.bookingDraft.selectedAlaCarte = ['bath_blowdry'];
      }
    }
    this.renderServiceSelectionStep();
  },

  selectPackage: function(pkgId) {
    this.bookingDraft.bookingType = 'package';
    this.bookingDraft.packageId = pkgId;
    const pkgTab = document.getElementById('tabBookingPackage');
    const alaTab = document.getElementById('tabBookingAlaCarte');
    const pkgContainer = document.getElementById('packageSelectionContainer');
    const alaContainer = document.getElementById('alaCarteSelectionContainer');
    if (pkgTab) pkgTab.classList.add('active');
    if (alaTab) alaTab.classList.remove('active');
    if (pkgContainer) pkgContainer.style.display = 'block';
    if (alaContainer) alaContainer.style.display = 'none';

    this.renderPackageCards();
    this.renderAddonCheckboxes();
    this.updateLiveRunningSummary();
  },

  renderAlaCarteCheckboxes: function() {
    const container = document.getElementById('alaCarteCheckboxList');
    if (!container) return;
    const size = this.bookingDraft.sizeCategory;
    const selected = this.bookingDraft.selectedAlaCarte || [];

    let html = '';
    Object.values(SERVICE_DATA.alaCarte).forEach(srv => {
      const isChecked = selected.includes(srv.id);
      const price = srv.prices[size];
      const duration = srv.durations[size];

      html += `
        <div class="item-checkbox-row ${isChecked ? 'checked' : ''}" onclick="App.toggleAlaCarte('${srv.id}')">
          <div class="item-left">
            <input type="checkbox" id="ala_${srv.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); App.toggleAlaCarte('${srv.id}')">
            <div>
              <div class="item-name">${srv.name}</div>
              <div class="item-subtext">Estimated duration: ${duration} mins</div>
            </div>
          </div>
          <div class="item-price">₱${price.toLocaleString()}</div>
        </div>
      `;
    });
    container.innerHTML = html;
  },

  toggleAlaCarte: function(srvId) {
    this.bookingDraft.bookingType = 'alaCarte';
    const pkgTab = document.getElementById('tabBookingPackage');
    const alaTab = document.getElementById('tabBookingAlaCarte');
    const pkgContainer = document.getElementById('packageSelectionContainer');
    const alaContainer = document.getElementById('alaCarteSelectionContainer');
    if (pkgTab) pkgTab.classList.remove('active');
    if (alaTab) alaTab.classList.add('active');
    if (pkgContainer) pkgContainer.style.display = 'none';
    if (alaContainer) alaContainer.style.display = 'block';

    let list = this.bookingDraft.selectedAlaCarte || [];
    if (list.includes(srvId)) {
      list = list.filter(id => id !== srvId);
    } else {
      list.push(srvId);
    }
    this.bookingDraft.selectedAlaCarte = list;
    this.renderAlaCarteCheckboxes();
    this.updateLiveRunningSummary();
  },

  renderAddonCheckboxes: function() {
    const container = document.getElementById('addonsCheckboxList');
    if (!container) return;
    const size = this.bookingDraft.sizeCategory;
    const selected = this.bookingDraft.selectedAddOns || [];
    const isSpaSelected = (this.bookingDraft.bookingType === 'package' && this.bookingDraft.packageId === 'spa_grooming');

    let html = '';
    Object.values(SERVICE_DATA.addOns).forEach(addon => {
      let isChecked = selected.includes(addon.id);
      let isDisabled = false;
      let extraNote = '';

      if (addon.id === 'organic_shampoo' && isSpaSelected) {
        isDisabled = true;
        isChecked = false;
        extraNote = '<span style="color:var(--color-forest); font-weight:700;">(Already included in Spa Grooming package)</span>';
      }

      const price = addon.prices[size];
      const duration = addon.durations[size];

      html += `
        <div class="item-checkbox-row ${isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}" 
             ${!isDisabled ? `onclick="App.toggleAddon('${addon.id}')"` : ''} 
             style="${isDisabled ? 'opacity:0.6; cursor:not-allowed;' : ''}">
          <div class="item-left">
            <input type="checkbox" id="addon_${addon.id}" ${isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''} 
                   onclick="event.stopPropagation(); App.toggleAddon('${addon.id}')">
            <div>
              <div class="item-name">${addon.name} ${extraNote}</div>
              <div class="item-subtext">${addon.note} • Duration: +${duration} mins</div>
            </div>
          </div>
          <div class="item-price">₱${price.toLocaleString()}</div>
        </div>
      `;
    });
    container.innerHTML = html;
  },

  toggleAddon: function(addonId) {
    if (this.bookingDraft.bookingType === 'package' && this.bookingDraft.packageId === 'spa_grooming' && addonId === 'organic_shampoo') {
      return;
    }
    let list = this.bookingDraft.selectedAddOns || [];
    if (list.includes(addonId)) {
      list = list.filter(id => id !== addonId);
    } else {
      list.push(addonId);
    }
    this.bookingDraft.selectedAddOns = list;
    this.renderAddonCheckboxes();
    this.updateLiveRunningSummary();
  },

  onWeightChanged: function() {
    const weightVal = parseFloat(document.getElementById('inputPetWeight').value);
    if (!isNaN(weightVal) && weightVal > 0) {
      this.bookingDraft.weight = weightVal;
      this.bookingDraft.sizeCategory = SERVICE_DATA.getCategoryFromWeight(weightVal);
      this.updateSizeBadgeUI(this.bookingDraft.sizeCategory);
      this.renderPackageCards();
      this.renderAlaCarteCheckboxes();
      this.renderAddonCheckboxes();
      this.updateLiveRunningSummary();
    }
  },

  updateLiveRunningSummary: function() {
    const calc = this.calculateBookingTotals(this.bookingDraft);

    const priceEl = document.getElementById('runningSummaryPrice');
    const durEl = document.getElementById('runningSummaryDuration');
    const sizeEl = document.getElementById('runningSummarySize');
    const warningEl = document.getElementById('durationExceededWarning');
    const nextBtn = document.getElementById('btnServiceStepNext');

    if (priceEl) priceEl.textContent = `₱${calc.originalTotal.toLocaleString()}`;
    if (sizeEl) sizeEl.textContent = calc.sizeCategory;
    if (durEl) {
      durEl.textContent = `${calc.totalDuration} / 240 mins`;
      durEl.className = calc.isExceeding240 ? 'running-stat-value danger' : 'running-stat-value';
    }

    if (calc.isExceeding240) {
      if (warningEl) {
        warningEl.style.display = 'block';
        warningEl.textContent = `Estimated duration (${calc.totalDuration} mins) exceeds the shift limit of 240 minutes (4 hours). Please remove some services or add-ons.`;
      }
      if (nextBtn) nextBtn.disabled = true;
    } else {
      if (warningEl) warningEl.style.display = 'none';
      // Ensure at least one service is selected
      const hasSelection = (this.bookingDraft.bookingType === 'package' && this.bookingDraft.packageId) ||
                           (this.bookingDraft.bookingType === 'alaCarte' && (this.bookingDraft.selectedAlaCarte || []).length > 0);
      if (nextBtn) nextBtn.disabled = !hasSelection;
    }
  },

  // STEP 2: APPOINTMENT SCHEDULE & CALENDAR
  renderScheduleStep: function() {
    this.renderCalendar();
    this.renderShiftsList();
  },

  renderCalendar: function() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const titleEl = document.getElementById('calendarMonthYearTitle');
    if (titleEl) {
      titleEl.textContent = `${monthNames[this.calendarMonth]} ${this.calendarYear}`;
    }

    const grid = document.getElementById('calendarDaysGrid');
    if (!grid) return;

    const firstDayIndex = new Date(this.calendarYear, this.calendarMonth, 1).getDay();
    const daysInMonth = new Date(this.calendarYear, this.calendarMonth + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let html = '';
    // Empty cells before first day
    for (let i = 0; i < firstDayIndex; i++) {
      html += `<div class="calendar-day disabled"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(this.calendarYear, this.calendarMonth, d);
      const dateStr = getFormattedDateStr(cellDate);
      const isPast = cellDate < today;
      const isFullyBooked = !isPast && this.isDateFullyBooked(dateStr);
      const isSelected = this.bookingDraft.date === dateStr;

      let classes = 'calendar-day';
      if (isPast) classes += ' disabled';
      if (isFullyBooked) classes += ' fully-booked';
      if (isSelected) classes += ' selected';

      html += `
        <div class="${classes}" ${(!isPast && !isFullyBooked) ? `onclick="App.selectBookingDate('${dateStr}')"` : ''}>
          <span>${d}</span>
        </div>
      `;
    }
    grid.innerHTML = html;

    // Update Selected Date Display
    const dateDisplay = document.getElementById('selectedDateDisplaySummary');
    if (dateDisplay) {
      dateDisplay.textContent = this.bookingDraft.date ? formatDateReadable(this.bookingDraft.date) : 'Please select a date';
    }
  },

  prevCalendarMonth: function() {
    this.calendarMonth--;
    if (this.calendarMonth < 0) {
      this.calendarMonth = 11;
      this.calendarYear--;
    }
    this.renderCalendar();
  },

  nextCalendarMonth: function() {
    this.calendarMonth++;
    if (this.calendarMonth > 11) {
      this.calendarMonth = 0;
      this.calendarYear++;
    }
    this.renderCalendar();
  },

  selectBookingDate: function(dateStr) {
    this.bookingDraft.date = dateStr;
    this.renderCalendar();
    this.renderShiftsList();
  },

  renderShiftsList: function() {
    const container = document.getElementById('shiftsSelectionList');
    if (!container) return;

    const dateStr = this.bookingDraft.date;
    const nextBtn = document.getElementById('btnScheduleStepNext');
    const shiftSummary = document.getElementById('selectedShiftDisplaySummary');

    if (!dateStr) {
      container.innerHTML = '<p style="color:var(--color-text-muted); font-style:italic;">Please choose a date on the calendar to see the available shifts.</p>';
      if (nextBtn) nextBtn.disabled = true;
      if (shiftSummary) shiftSummary.textContent = 'Please select a shift';
      return;
    }

    const calc = this.calculateBookingTotals(this.bookingDraft);

    let html = '';
    SERVICE_DATA.shifts.forEach((shift, index) => {
      const cap = this.getShiftCapacityInfo(dateStr, shift.id);
      const isSelected = this.bookingDraft.shiftId === shift.id;
      const isFull = cap.isFull;

      let capClass = 'capacity-available';
      let capText = `${cap.remaining} of ${shift.maxCapacity} slots open`;
      if (cap.remaining === 1) {
        capClass = 'capacity-limited';
        capText = '1 slot left!';
      } else if (isFull) {
        capClass = 'capacity-full';
        capText = 'FULLY BOOKED';
      }

      html += `
        <div class="shift-card ${isSelected && !isFull ? 'selected' : ''} ${isFull ? 'disabled' : ''}" 
             ${!isFull ? `onclick="App.selectShift('${shift.id}')"` : ''}>
          <div class="shift-card-header">
            <span class="shift-name">${shift.name}</span>
            <span class="shift-capacity-pill ${capClass}">${capText}</span>
          </div>
          <div class="shift-time">🕒 ${shift.time} (Max 3 pets per shift)</div>
          <div style="font-size:0.8rem; color:var(--color-text-muted); margin-top:4px;">
            Estimated Grooming Duration: ${calc.totalDuration} minutes (within 4-hour limit)
          </div>
        </div>
      `;

      // Render Break indicators as specified in proposal:
      // "The 11:00 AM–12:00 NN and 4:00 PM–5:00 PM periods are unavailable for booking."
      if (index === 0) {
        html += `<div class="break-banner">☕ 11:00 AM – 12:00 NN (Break & Sanitation Period - Unavailable)</div>`;
      } else if (index === 1) {
        html += `<div class="break-banner">☕ 4:00 PM – 5:00 PM (Break & Sanitation Period - Unavailable)</div>`;
      }
    });

    container.innerHTML = html;

    const chosenShift = SERVICE_DATA.shifts.find(s => s.id === this.bookingDraft.shiftId);
    const currentShiftCap = chosenShift ? this.getShiftCapacityInfo(dateStr, chosenShift.id) : null;
    const shiftOk = !!chosenShift && !currentShiftCap.isFull;
    if (nextBtn) {
      nextBtn.disabled = !shiftOk;
    }
    if (shiftSummary) {
      shiftSummary.textContent = shiftOk ? `${chosenShift.name} (${chosenShift.time})` : 'Please select a shift';
    }
  },

  selectShift: function(shiftId) {
    const cap = this.getShiftCapacityInfo(this.bookingDraft.date, shiftId);
    if (!cap.isFull) {
      this.bookingDraft.shiftId = shiftId;
      this.renderShiftsList();
    }
  },

    // STEP 3: AUTHENTICATION (Sign In / Register / Simulated OAuth)
  standaloneAuth: false,

  // Sign In / Create Account on its own (not part of a booking)
  openStandaloneAuth: function() {
    if (this.currentUser) {
      this.routeTo('my-bookings-view');
      return;
    }
    this.routeTo('booking-view');
    this.standaloneAuth = true;
    this.setupBookingStep(3);
  },

  // After login/register: continue the booking, or go to My Bookings if standalone
  afterAuthSuccess: function() {
    if (this.standaloneAuth) {
      this.standaloneAuth = false;
      const stepperEl = document.querySelector('.stepper-wrapper');
      if (stepperEl) stepperEl.style.display = '';
      this.routeTo('my-bookings-view');
    } else {
      this.setupBookingStep(4);
    }
  },

  renderAuthStep: function() {
    const standalone = this.standaloneAuth;
    document.getElementById('authStepTitle').textContent = standalone ? 'Sign In / Create Account' : 'Step 3: Customer Sign In / Register';
    document.getElementById('authStepSubtitle').textContent = standalone
      ? 'Access your bookings, saved pets, and account details.'
      : 'Your selected services, date, and shift are securely saved.';
    document.getElementById('authBackBtn').style.display = standalone ? 'none' : '';
    const stepperEl = document.querySelector('.stepper-wrapper');
    if (stepperEl) stepperEl.style.display = standalone ? 'none' : '';
    this.switchAuthTab('login');
  },

  switchAuthTab: function(tabName) {
    const loginTab = document.getElementById('tabAuthLogin');
    const registerTab = document.getElementById('tabAuthRegister');
    const loginForm = document.getElementById('authLoginForm');
    const registerForm = document.getElementById('authRegisterForm');

    if (tabName === 'login') {
      loginTab.classList.add('active');
      registerTab.classList.remove('active');
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    } else {
      registerTab.classList.add('active');
      loginTab.classList.remove('active');
      registerForm.style.display = 'block';
      loginForm.style.display = 'none';
    }
  },

    handleLogin: function(e) {
    if (e) e.preventDefault();
    const email = document.getElementById('loginEmailInput').value.trim();
    const password = document.getElementById('loginPasswordInput').value;
    const remember = document.getElementById('loginRememberMe')?.checked;

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (user) {
      this.currentUser = user;
      // Remember me: persist across browser restarts. Otherwise: this tab session only.
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      sessionStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      if (remember) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      } else {
        sessionStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      }
      this.updateUserNavigation();
      this.afterAuthSuccess();
    } else {
      alert('Invalid email or password. Please try again. (Demo account: capawlong@gmail.com / password123)');
    }
  },

  handleRegister: function(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('regNameInput').value.trim();
    const email = document.getElementById('regEmailInput').value.trim();
    const password = document.getElementById('regPasswordInput').value;
    const confirmPassword = document.getElementById('regConfirmPasswordInput').value;
    const birthdate = document.getElementById('regBirthdateInput').value;
    const phone = document.getElementById('regPhoneInput').value.trim();
    const agree = document.getElementById('regAgreeCheckbox').checked;

    if (!agree) {
      alert('Please agree to the Terms and Conditions and Privacy Policy.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      alert('This email address is already registered. Please sign in instead.');
      return;
    }

    const newUser = {
      id: 'user_' + Date.now(),
      name: name,
      email: email,
      password: password,
      phone: phone,
      birthdate: birthdate,
      agreeTerms: true
    };
    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

    this.currentUser = newUser;
    saveCurrentUser(newUser, true);
    this.updateUserNavigation();
    alert('Account created successfully!');
    this.afterAuthSuccess();
  },

  // SIMULATED GOOGLE / APPLE SIGN-IN
  simulatedOAuth: function(provider) {
    const modal = document.getElementById('oauthModal');
    const modalTitle = document.getElementById('oauthModalTitle');
    const modalList = document.getElementById('oauthAccountList');

    modalTitle.textContent = `Continue with ${provider}`;
    if (provider === 'Google') {
      modalList.innerHTML = `
        <div style="border:1px solid #ddd; border-radius:8px; padding:12px; margin-bottom:10px; cursor:pointer; display:flex; align-items:center; gap:12px;" onclick="App.completeOAuth('Mike Anthony Capulong', 'capawlong@gmail.com')">
          <div style="width:36px; height:36px; border-radius:50%; background:#4285F4; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold;">M</div>
          <div>
            <strong>Mike Anthony Capulong</strong><br>
            <small style="color:#666;">capawlong@gmail.com</small>
          </div>
        </div>
        <div style="border:1px solid #ddd; border-radius:8px; padding:12px; cursor:pointer; display:flex; align-items:center; gap:12px;" onclick="App.completeOAuth('Jenna Paulene Abulencia', 'jenna.abulencia@gmail.com')">
          <div style="width:36px; height:36px; border-radius:50%; background:#34A853; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold;">J</div>
          <div>
            <strong>Jenna Paulene Abulencia</strong><br>
            <small style="color:#666;">jenna.abulencia@gmail.com</small>
          </div>
        </div>
      `;
    } else {
      modalList.innerHTML = `
        <div style="border:1px solid #ddd; border-radius:8px; padding:12px; cursor:pointer; display:flex; align-items:center; gap:12px;" onclick="App.completeOAuth('Mike Anthony Capulong', 'capulong.mike@icloud.com')">
          <div style="width:36px; height:36px; border-radius:50%; background:#000; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold;">🍎</div>
          <div>
            <strong>Sign in with Apple ID</strong><br>
            <small style="color:#666;">capulong.mike@icloud.com</small>
          </div>
        </div>
      `;
    }
    modal.classList.add('show');
  },

  completeOAuth: function(name, email) {
    document.getElementById('oauthModal').classList.remove('show');
    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      user = {
        id: 'user_oauth_' + Date.now(),
        name: name,
        email: email,
        password: 'oauth_simulated_password',
        phone: '09170000000',
        birthdate: '2000-01-01',
        agreeTerms: true
      };
      users.push(user);
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }
        this.currentUser = user;
    saveCurrentUser(user, true);
    this.updateUserNavigation();
    this.afterAuthSuccess();
  },

  // STEP 4: PET FORM
  renderPetFormStep: function() {
    const draft = this.bookingDraft;
    const allPets = JSON.parse(localStorage.getItem(STORAGE_KEYS.PETS) || '[]');
    const userPets = allPets.filter(p => p.userId === this.currentUser.id);

    const selectorContainer = document.getElementById('savedPetsSelectorContainer');
    if (selectorContainer) {
      if (userPets.length > 0) {
        let cardsHtml = `
          <div class="saved-pet-card ${!draft.petId ? 'selected' : ''}" onclick="App.selectNewPetOption()">
            <div class="saved-pet-avatar">➕</div>
            <div><strong>+ Register New Pet</strong><br><small style="color:#666;">Create pet profile</small></div>
          </div>
        `;
        userPets.forEach(p => {
          const isSelected = draft.petId === p.id;
          cardsHtml += `
            <div class="saved-pet-card ${isSelected ? 'selected' : ''}" onclick="App.selectSavedPet('${p.id}')">
              <img src="${p.photo || 'https://via.placeholder.com/60'}" class="saved-pet-avatar" alt="${p.name}">
              <div>
                <strong>${p.name}</strong> (${p.species})<br>
                <small style="color:#666;">${p.breed} • ${p.weight}kg</small>
              </div>
            </div>
          `;
        });
        selectorContainer.innerHTML = cardsHtml;
        selectorContainer.style.display = 'grid';
      } else {
        selectorContainer.style.display = 'none';
      }
    }

    // Pre-fill fields
    document.getElementById('petFormName').value = draft.petName || '';
    document.getElementById('petFormBreed').value = draft.breed || '';
    document.getElementById('petFormWeight').value = draft.weight || '';
    document.getElementById('petFormCareNotes').value = draft.careNotes || '';

    // Species radio
    const dogRadio = document.getElementById('speciesDog');
    const catRadio = document.getElementById('speciesCat');
    if (dogRadio && catRadio) {
      dogRadio.checked = (draft.species === 'Dog');
      catRadio.checked = (draft.species === 'Cat');
    }

    // Photo preview
    const previewImg = document.getElementById('petPhotoPreview');
    const previewPlaceholder = document.getElementById('petPhotoPlaceholder');
    if (draft.petPhoto) {
      previewImg.src = draft.petPhoto;
      previewImg.style.display = 'block';
      if (previewPlaceholder) previewPlaceholder.style.display = 'none';
    } else {
      previewImg.style.display = 'none';
      if (previewPlaceholder) previewPlaceholder.style.display = 'block';
    }

    // AWD Checkbox & Details
    const awdCheckbox = document.getElementById('checkAwdDiscount');
    const awdDetailsBox = document.getElementById('awdDetailsBox');
    const awdConditionInput = document.getElementById('inputAwdCondition');
    const awdConfirmCheckbox = document.getElementById('checkAwdConfirmation');

    if (awdCheckbox) awdCheckbox.checked = draft.isAwd;
    if (awdDetailsBox) awdDetailsBox.style.display = draft.isAwd ? 'block' : 'none';
    if (awdConditionInput) awdConditionInput.value = draft.awdCondition || '';
    if (awdConfirmCheckbox) awdConfirmCheckbox.checked = draft.awdConfirmed;

    // Assigned size display in Pet Form
    const confirmedSizeDisplay = document.getElementById('petFormConfirmedSize');
    if (confirmedSizeDisplay) {
      confirmedSizeDisplay.textContent = draft.sizeCategory;
      confirmedSizeDisplay.className = `size-category-badge badge-${draft.sizeCategory.toLowerCase()}`;
    }
  },

  selectSavedPet: function(petId) {
    const allPets = JSON.parse(localStorage.getItem(STORAGE_KEYS.PETS) || '[]');
    const pet = allPets.find(p => p.id === petId);
    if (pet) {
      this.bookingDraft.petId = pet.id;
      this.bookingDraft.petName = pet.name;
      this.bookingDraft.species = pet.species;
      this.bookingDraft.breed = pet.breed;
      this.bookingDraft.weight = pet.weight;
      this.bookingDraft.careNotes = pet.careNotes || '';
      this.bookingDraft.petPhoto = pet.photo || '';
      this.bookingDraft.sizeCategory = SERVICE_DATA.getCategoryFromWeight(pet.weight);
      this.renderPetFormStep();
    }
  },

  selectNewPetOption: function() {
    this.bookingDraft.petId = '';
    this.bookingDraft.petName = '';
    this.bookingDraft.species = 'Dog';
    this.bookingDraft.breed = '';
    this.bookingDraft.careNotes = '';
    this.bookingDraft.petPhoto = '';
    this.renderPetFormStep();
  },

  onPetFormWeightChanged: function() {
    const w = parseFloat(document.getElementById('petFormWeight').value);
    if (!isNaN(w) && w > 0) {
      this.bookingDraft.weight = w;
      const oldSize = this.bookingDraft.sizeCategory;
      const newSize = SERVICE_DATA.getCategoryFromWeight(w);
      this.bookingDraft.sizeCategory = newSize;

      const confirmedSizeDisplay = document.getElementById('petFormConfirmedSize');
      if (confirmedSizeDisplay) {
        confirmedSizeDisplay.textContent = newSize;
        confirmedSizeDisplay.className = `size-category-badge badge-${newSize.toLowerCase()}`;
      }

      // Check if shift duration changed
      const calc = this.calculateBookingTotals(this.bookingDraft);
      if (calc.isExceeding240) {
        alert(`Warning: The updated pet weight and size result in a total duration of ${calc.totalDuration} minutes, which exceeds the 240-minute limit. Please adjust services.`);
      }
    }
  },

    handlePetPhotoUpload: function(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (!validateUploadFile(file, ['image/jpeg', 'image/png'], 'Pet photo')) {
      event.target.value = '';
      return;
    }
    compressImageToDataUrl(file, (dataUrl) => {
      App.bookingDraft.petPhoto = dataUrl;
      const previewImg = document.getElementById('petPhotoPreview');
      const placeholder = document.getElementById('petPhotoPlaceholder');
      previewImg.src = dataUrl;
      previewImg.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    });
  },

    handleAwdDocUpload: function(event) {
    const file = event.target.files[0];
    const fileNameEl = document.getElementById('awdUploadedDocName');
    if (!file) return;
    if (!validateUploadFile(file, ['application/pdf', 'image/jpeg', 'image/png'], 'Supporting document')) {
      event.target.value = '';
      App.bookingDraft.awdDocumentName = '';
      if (fileNameEl) fileNameEl.style.display = 'none';
      return;
    }
    App.bookingDraft.awdDocumentName = file.name;
    if (fileNameEl) {
      fileNameEl.textContent = `Attached: ${file.name}`;
      fileNameEl.style.display = 'block';
    }
  },

  toggleAwdSection: function() {
    const isChecked = document.getElementById('checkAwdDiscount').checked;
    this.bookingDraft.isAwd = isChecked;
    document.getElementById('awdDetailsBox').style.display = isChecked ? 'block' : 'none';
  },

  validateAndSavePetForm: function() {
    const name = document.getElementById('petFormName').value.trim();
    const breed = document.getElementById('petFormBreed').value.trim();
    const weight = parseFloat(document.getElementById('petFormWeight').value);
    const careNotes = document.getElementById('petFormCareNotes').value.trim();
    const species = document.querySelector('input[name="petSpeciesRadio"]:checked').value;

    if (!name) {
      alert('Please enter your pet’s name.');
      return;
    }
    if (!breed) {
      alert('Please enter your pet’s breed.');
      return;
    }
    if (isNaN(weight) || weight <= 0) {
      alert('Please enter a valid pet weight in kilograms.');
      return;
    }

    // Photo is required for new pet profile
    if (!this.bookingDraft.petPhoto && !this.bookingDraft.petId) {
      alert('A pet photo is required when creating a pet profile.');
      return;
    }

    // AWD validation
    if (this.bookingDraft.isAwd) {
      const condition = document.getElementById('inputAwdCondition').value.trim();
      const confirmed = document.getElementById('checkAwdConfirmation').checked;
      if (!condition) {
        alert('Please provide a description of your pet’s disability or special needs.');
        return;
      }
      if (!confirmed) {
        alert('Please confirm that the information submitted about the pet’s disability is accurate.');
        return;
      }
      this.bookingDraft.awdCondition = condition;
      this.bookingDraft.awdConfirmed = confirmed;
    }

    // Save to draft
    this.bookingDraft.petName = name;
    this.bookingDraft.species = species;
    this.bookingDraft.breed = breed;
    this.bookingDraft.weight = weight;
    this.bookingDraft.careNotes = careNotes;
    this.bookingDraft.sizeCategory = SERVICE_DATA.getCategoryFromWeight(weight);

    // If new pet profile, also persist to user's saved pets!
    if (!this.bookingDraft.petId) {
      const allPets = JSON.parse(localStorage.getItem(STORAGE_KEYS.PETS) || '[]');
      const newPet = {
        id: 'pet_' + Date.now(),
        userId: this.currentUser.id,
        name: name,
        species: species,
        breed: breed,
        weight: weight,
        careNotes: careNotes,
        photo: this.bookingDraft.petPhoto
      };
      allPets.push(newPet);
      localStorage.setItem(STORAGE_KEYS.PETS, JSON.stringify(allPets));
      this.bookingDraft.petId = newPet.id;
    }

    this.setupBookingStep(5);
  },

  // STEP 5: BOOKING REVIEW & EDIT LOOP
  renderBookingReviewStep: function() {
    const confirmBox = document.getElementById('reviewConfirmAccurate');
    if (confirmBox) confirmBox.checked = false;

    const draft = this.bookingDraft;
    const calc = this.calculateBookingTotals(draft);
    const shift = SERVICE_DATA.shifts.find(s => s.id === draft.shiftId) || SERVICE_DATA.shifts[0];

    // Appointment Details
    document.getElementById('reviewAppointmentDate').textContent = formatDateReadable(draft.date);
    document.getElementById('reviewAppointmentShift').textContent = `${shift.name} (${shift.time})`;

    // Pet Details
    document.getElementById('reviewPetName').textContent = `${draft.petName} (${draft.species})`;
    document.getElementById('reviewPetBreed').textContent = draft.breed;
    document.getElementById('reviewPetWeight').textContent = `${draft.weight} kg (Category: ${calc.sizeCategory})`;
    document.getElementById('reviewPetNotes').textContent = draft.careNotes || 'None';
    
    const photoEl = document.getElementById('reviewPetPhoto');
    if (photoEl && draft.petPhoto) {
      photoEl.src = draft.petPhoto;
      photoEl.style.display = 'block';
    } else if (photoEl) {
      photoEl.style.display = 'none';
    }

    // Services Itemized List
    const servicesListEl = document.getElementById('reviewServicesList');
    let srvHtml = '';
    calc.serviceListDisplay.forEach(item => {
      srvHtml += `
        <tr>
          <td>${item.name}</td>
          <td style="text-align:right; font-weight:700;">₱${item.price.toLocaleString()}</td>
        </tr>
      `;
    });

    if (calc.inclusionsDisplay.length > 0) {
      srvHtml += `
        <tr>
          <td colspan="2" style="font-size:0.82rem; color:#666; padding-left:12px;">
            <em>Inclusions: ${calc.inclusionsDisplay.join(', ')}</em>
          </td>
        </tr>
      `;
    }

    // Subtotal
    srvHtml += `
      <tr style="border-top:1px solid #ddd;">
        <td><strong>Booking Total</strong></td>
        <td style="text-align:right; font-weight:700;">₱${calc.originalTotal.toLocaleString()}</td>
      </tr>
    `;

    // AWD Discount (if applicable)
    if (draft.isAwd && calc.discountAmount > 0) {
      srvHtml += `
        <tr class="discount-row">
          <td><strong>Animals with Disability (AWD) 20% Demonstration Discount</strong><br><small>Condition: ${draft.awdCondition}</small></td>
          <td style="text-align:right; font-weight:700; color:var(--color-rose);">-₱${calc.discountAmount.toLocaleString()}</td>
        </tr>
        <tr class="total-row">
          <td><strong>Discounted Booking Total</strong></td>
          <td style="text-align:right; font-weight:800; color:var(--color-navy); font-size:1.2rem;">₱${calc.totalAmount.toLocaleString()}</td>
        </tr>
      `;
    } else {
      srvHtml += `
        <tr class="total-row">
          <td><strong>Final Booking Total</strong></td>
          <td style="text-align:right; font-weight:800; color:var(--color-navy); font-size:1.2rem;">₱${calc.totalAmount.toLocaleString()}</td>
        </tr>
      `;
    }

    servicesListEl.innerHTML = srvHtml;

    // Estimated Duration
    const durEl = document.getElementById('reviewEstimatedDuration');
    durEl.textContent = `${calc.totalDuration} minutes (Shift limit: 240 mins)`;

    // Payment Breakdown preview
    document.getElementById('reviewDownPaymentAmount').textContent = `₱${calc.downPaymentAmount.toLocaleString()}`;
    document.getElementById('reviewRemainingBalanceAmount').textContent = `₱${calc.remainingBalance.toLocaleString()}`;
  },

  // STEP 6: SUBMIT & PAY (15-Minute Countdown & Simulated QR)
  submitBookingAndOpenPayment: function() {
    const draft = this.bookingDraft;
    const confirmBox = document.getElementById('reviewConfirmAccurate');
    if (confirmBox && !confirmBox.checked) {
      alert('Please tick the box to confirm that your booking details are accurate before submitting.');
      return;
    }

    // Check capacity first to avoid race conditions!
    const cap = this.getShiftCapacityInfo(draft.date, draft.shiftId);
    if (cap.isFull) {
      alert('We are sorry, but the selected shift has just reached its maximum capacity of 3 pets. Please select another shift or date.');
      this.setupBookingStep(2);
      return;
    }

    const calc = this.calculateBookingTotals(draft);
    const shift = SERVICE_DATA.shifts.find(s => s.id === draft.shiftId);
    const refNo = generateBookingReferenceNumber();
    const deadline = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 minutes hold

    const newBooking = {
      id: 'book_' + Date.now(),
      referenceNumber: refNo,
      userId: this.currentUser.id,
      bookingType: draft.bookingType,
      packageId: draft.bookingType === 'package' ? draft.packageId : null,
      selectedServices: draft.bookingType === 'alaCarte' ? draft.selectedAlaCarte : [],
      selectedAddons: draft.selectedAddOns || [],
      pet: {
        name: draft.petName,
        species: draft.species,
        breed: draft.breed,
        weight: draft.weight,
        sizeCategory: calc.sizeCategory,
        careNotes: draft.careNotes,
        photo: draft.petPhoto
      },
      appointmentDate: draft.date,
      shiftId: draft.shiftId,
      shiftName: shift.name,
      shiftTime: shift.time,
      estimatedDuration: calc.totalDuration,
      originalTotal: calc.originalTotal,
      isAwd: draft.isAwd,
      awdCondition: draft.awdCondition || '',
      awdDocumentName: draft.awdDocumentName || '',
      discountAmount: calc.discountAmount,
      totalAmount: calc.totalAmount,
      downPaymentAmount: calc.downPaymentAmount,
      remainingBalance: calc.remainingBalance,
      paymentOption: draft.paymentOption || 'down',
      paymentStatus: 'Unpaid',
      bookingStatus: 'On Hold', // RESERVED CAPACITY
      createdAt: new Date().toISOString(),
      paymentDeadline: deadline,
      paymentTransactionRef: null,
      paymentRecordedAt: null
    };

    // Save booking into list with 'On Hold' status
    const bookings = this.getBookings();
    bookings.push(newBooking);
    this.saveBookings(bookings);

    draft.activeHoldBookingId = newBooking.id;

    // Proceed to Step 6 (Payment)
    this.setupBookingStep(6);
  },

  renderSubmitAndPayStep: function() {
    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === this.bookingDraft.activeHoldBookingId);
    if (!booking) {
      alert('Hold session not found. Please start booking again.');
      this.setupBookingStep(1);
      return;
    }

    // Start 15-Minute Countdown Timer
    this.startHoldTimer(booking.paymentDeadline);

    // Reference & Amounts
    document.getElementById('payStepRefNumber').textContent = `Ref #${booking.referenceNumber}`;
    document.getElementById('payOptionDownAmount').textContent = `₱${booking.downPaymentAmount.toLocaleString()}`;
    document.getElementById('payOptionRemainingText').textContent = `₱${booking.remainingBalance.toLocaleString()}`;
    document.getElementById('payOptionFullAmount').textContent = `₱${booking.totalAmount.toLocaleString()}`;

    // Select payment option
    this.selectPaymentOption(this.bookingDraft.paymentOption || 'down');
  },

  selectPaymentOption: function(option) {
    this.bookingDraft.paymentOption = option;
    const downCard = document.getElementById('payCardDown');
    const fullCard = document.getElementById('payCardFull');

    if (option === 'down') {
      downCard.classList.add('selected');
      fullCard.classList.remove('selected');
    } else {
      fullCard.classList.add('selected');
      downCard.classList.remove('selected');
    }

    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === this.bookingDraft.activeHoldBookingId);
    if (booking) {
      booking.paymentOption = option;
      this.saveBookings(bookings);

      const payAmount = (option === 'down') ? booking.downPaymentAmount : booking.totalAmount;
      document.getElementById('payAmountDueDisplay').textContent = `₱${payAmount.toLocaleString()}`;
      
      // Update simulated QR Code SVG
      this.generateSimulatedQR(booking.referenceNumber, payAmount);
    }
  },

  generateSimulatedQR: function(refNo, amount) {
    const qrContainer = document.getElementById('simulatedQrSvgContainer');
    if (!qrContainer) return;

    // Draw realistic QR pattern with center icon
    qrContainer.innerHTML = `
      <svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" fill="#ffffff" />
        <!-- Position Markers -->
        <rect x="10" y="10" width="40" height="40" fill="#000" />
        <rect x="16" y="16" width="28" height="28" fill="#fff" />
        <rect x="22" y="22" width="16" height="16" fill="#000" />
        
        <rect x="110" y="10" width="40" height="40" fill="#000" />
        <rect x="116" y="16" width="28" height="28" fill="#fff" />
        <rect x="122" y="22" width="16" height="16" fill="#000" />
        
        <rect x="10" y="110" width="40" height="40" fill="#000" />
        <rect x="16" y="116" width="28" height="28" fill="#fff" />
        <rect x="22" y="122" width="16" height="16" fill="#000" />
        
        <!-- Data Patterns -->
        <rect x="58" y="14" width="8" height="8" fill="#000" />
        <rect x="74" y="14" width="8" height="8" fill="#000" />
        <rect x="90" y="14" width="8" height="8" fill="#000" />
        <rect x="58" y="30" width="16" height="8" fill="#000" />
        <rect x="82" y="30" width="8" height="16" fill="#000" />
        <rect x="98" y="30" width="8" height="8" fill="#000" />

        <rect x="14" y="58" width="8" height="8" fill="#000" />
        <rect x="30" y="58" width="8" height="8" fill="#000" />
        <rect x="14" y="74" width="16" height="8" fill="#000" />
        <rect x="38" y="74" width="8" height="16" fill="#000" />
        <rect x="14" y="90" width="8" height="8" fill="#000" />

        <rect x="110" y="58" width="8" height="8" fill="#000" />
        <rect x="126" y="58" width="16" height="8" fill="#000" />
        <rect x="118" y="74" width="8" height="16" fill="#000" />
        <rect x="134" y="82" width="8" height="8" fill="#000" />

        <rect x="58" y="110" width="8" height="16" fill="#000" />
        <rect x="74" y="118" width="16" height="8" fill="#000" />
        <rect x="98" y="110" width="8" height="8" fill="#000" />
        <rect x="58" y="134" width="16" height="8" fill="#000" />
        <rect x="82" y="134" width="8" height="8" fill="#000" />
        <rect x="98" y="126" width="16" height="16" fill="#000" />
        <rect x="122" y="122" width="8" height="8" fill="#000" />
        <rect x="138" y="130" width="8" height="8" fill="#000" />

        <!-- Center Fur & Bubbles Mascot Icon -->
        <circle cx="80" cy="80" r="16" fill="#1F6590" />
        <text x="80" y="85" font-size="12" text-anchor="middle" fill="#FCB34F" font-weight="bold">🐾</text>
      </svg>
    `;
  },

  startHoldTimer: function(deadlineIso) {
    this.stopHoldTimer();
    const deadlineTime = new Date(deadlineIso).getTime();

    const updateDisplay = () => {
      const now = Date.now();
      const diffMs = deadlineTime - now;

      if (diffMs <= 0) {
        this.stopHoldTimer();
        this.checkAndExpireHolds();
        return;
      }

      const totalSec = Math.floor(diffMs / 1000);
      const m = Math.floor(totalSec / 60);
      const s = totalSec % 60;
      const displayStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

      const el = document.getElementById('paymentTimerCountdownDisplay');
      if (el) el.textContent = displayStr;
    };

    updateDisplay();
    this.holdTimerInterval = setInterval(updateDisplay, 1000);
  },

  stopHoldTimer: function() {
    if (this.holdTimerInterval) {
      clearInterval(this.holdTimerInterval);
      this.holdTimerInterval = null;
    }
  },

  showHoldExpiredModal: function() {
    alert('Your 15-minute hold has expired and the reserved appointment slot has been automatically released. Please submit a new booking if you would like to proceed.');
    this.routeTo('my-bookings-view');
  },

  // CANCEL PENDING HOLD PAYMENT
  cancelActiveHold: function() {
    if (confirm('Are you sure you want to cancel this booking and release the held slot?')) {
      const bookings = this.getBookings();
      const booking = bookings.find(b => b.id === this.bookingDraft.activeHoldBookingId);
      if (booking) {
        booking.bookingStatus = 'Cancelled';
        booking.paymentStatus = 'Unpaid';
        booking.cancellationReason = 'Cancelled by customer during payment hold';
        this.saveBookings(bookings);
      }
      this.stopHoldTimer();
      alert('The booking has been cancelled and the slot has been released.');
      this.routeTo('my-bookings-view');
    }
  },

  // CONFIRM SIMULATED PAYMENT
  confirmSimulatedPayment: function() {
    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === this.bookingDraft.activeHoldBookingId);
    if (!booking) {
      alert('Booking not found.');
      return;
    }

        // The hold must still be active (not expired or cancelled) before payment is recorded
    const holdExpired = booking.paymentDeadline && Date.now() >= new Date(booking.paymentDeadline).getTime();
    if (booking.bookingStatus !== 'On Hold' || holdExpired) {
      this.stopHoldTimer();
      this.checkAndExpireHolds();
      alert('Your 15-minute hold has expired and the slot was released. Please submit a new booking.');
      this.routeTo('my-bookings-view');
      return;
    }

    this.stopHoldTimer();

    const isDown = (booking.paymentOption === 'down');
    const amountPaid = isDown ? booking.downPaymentAmount : booking.totalAmount;
    const remainingBalance = isDown ? booking.remainingBalance : 0;
    const paymentStatus = isDown ? 'Partially Paid' : 'Fully Paid';

    // Update booking record
    booking.bookingStatus = 'Confirmed';
    booking.paymentStatus = paymentStatus;
    booking.amountPaid = amountPaid;
    booking.remainingBalance = remainingBalance;
    booking.paymentRecordedAt = new Date().toISOString();
    booking.paymentTransactionRef = 'SIM-TXN-' + Math.floor(100000 + Math.random() * 900000);
    booking.paymentDeadline = null; // Clear hold deadline

    this.saveBookings(bookings);

    // Proceed to Step 7 (Confirmation Screen)
    this.setupBookingStep(7);
  },

  // STEP 7: BOOKING CONFIRMATION
  renderConfirmationStep: function() {
    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === this.bookingDraft.activeHoldBookingId);
    if (!booking) return;

    document.getElementById('confirmRefNumber').textContent = booking.referenceNumber;
    document.getElementById('confirmDateShift').textContent = `${formatDateReadable(booking.appointmentDate)} • ${booking.shiftName} (${booking.shiftTime})`;
    document.getElementById('confirmBookingStatus').textContent = booking.bookingStatus;
    document.getElementById('confirmPetDetails').textContent = `${booking.pet.name} (${booking.pet.breed}, ${booking.pet.weight}kg - ${booking.pet.sizeCategory})`;

    const servicesNames = [];
    if (booking.bookingType === 'package') {
      const pkg = SERVICE_DATA.packages[booking.packageId];
      if (pkg) servicesNames.push(pkg.name);
    } else {
      (booking.selectedServices || []).forEach(sId => {
        const s = SERVICE_DATA.alaCarte[sId];
        if (s) servicesNames.push(s.name);
      });
    }
    (booking.selectedAddons || []).forEach(aId => {
      const a = SERVICE_DATA.addOns[aId];
      if (a) servicesNames.push(`+ ${a.name}`);
    });

    document.getElementById('confirmServicesDetails').textContent = servicesNames.join(', ');
    document.getElementById('confirmTotalAmount').textContent = `₱${booking.totalAmount.toLocaleString()}`;
    document.getElementById('confirmAmountPaid').textContent = `₱${booking.amountPaid.toLocaleString()} (${booking.paymentStatus})`;
    
    const balanceRow = document.getElementById('confirmRemainingBalanceRow');
    const balanceVal = document.getElementById('confirmRemainingBalance');
    if (booking.remainingBalance > 0) {
      balanceRow.style.display = 'table-row';
      balanceVal.textContent = `₱${booking.remainingBalance.toLocaleString()} (Cash at Shop)`;
    } else {
      balanceRow.style.display = 'none';
    }
  },

  // RESET DRAFT AND START FRESH BOOKING
  startNewBooking: function() {
    this.bookingDraft = {
      bookingType: 'package',
      packageId: 'basic_grooming',
      selectedAlaCarte: [],
      selectedAddOns: [],
      weight: 5.0,
      isWeightEstimated: false,
      sizeCategory: 'Small',
      date: '',
      shiftId: '',
      petId: '',
      petName: '',
      species: 'Dog',
      breed: '',
      careNotes: '',
      petPhoto: '',
      isAwd: false,
      awdCondition: '',
      awdDocumentName: '',
      awdConfirmed: false,
      paymentOption: 'down',
      activeHoldBookingId: null
    };
    this.routeTo('booking-view');
  },

  // MY BOOKINGS (Upcoming: On Hold & Confirmed)
  renderMyBookings: function() {
    if (!this.currentUser) {
      this.routeTo('booking-view');
      return;
    }

    const container = document.getElementById('myBookingsListContainer');
    if (!container) return;

    const allBookings = this.getBookings();
    const upcoming = allBookings.filter(b => 
      b.userId === this.currentUser.id && 
      (b.bookingStatus === 'On Hold' || b.bookingStatus === 'Confirmed')
    );

    if (upcoming.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:40px 20px; background:#fff; border-radius:12px; border:1px solid #ddd;">
          <div style="font-size:3rem; margin-bottom:12px;">🐶</div>
          <h3>No Upcoming Bookings Found</h3>
          <p style="color:#666; margin-bottom:20px;">You do not have any active appointments right now.</p>
          <button class="btn btn-primary" onclick="App.startNewBooking()">Book an Appointment Now</button>
        </div>
      `;
      return;
    }

        // Sort by the dropdown value
    const myOrder = document.getElementById('myBookingsSortOrderSelect')?.value || 'soonest';
    upcoming.sort((a, b) => {
      const diff = new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime();
      return myOrder === 'soonest' ? diff : -diff;
    });

    let html = '';
    let lastMonth = '';
    upcoming.forEach(b => {
      // Month heading whenever the month changes
      const monthLabel = formatMonthYear(b.appointmentDate);
      if (monthLabel !== lastMonth) {
        html += `<h3 class="booking-month-heading">${monthLabel}</h3>`;
        lastMonth = monthLabel;
      }

      const isOnHold = (b.bookingStatus === 'On Hold');
      const isConfirmed = (b.bookingStatus === 'Confirmed');

      const servicesSummary = b.bookingType === 'package' 
        ? (SERVICE_DATA.packages[b.packageId] ? SERVICE_DATA.packages[b.packageId].name : 'Package')
        : (b.selectedServices.map(s => SERVICE_DATA.alaCarte[s] ? SERVICE_DATA.alaCarte[s].name : s).join(', '));

      html += `
        <div class="booking-item-card">
          <div class="booking-card-top">
            <div>
              <span style="font-weight:800; font-family:var(--font-heading); color:var(--color-navy); font-size:1.15rem;">
                Ref #${b.referenceNumber}
              </span>
              <span style="margin: 0 8px; color:#bbb;">|</span>
              <span style="font-weight:700;">${formatDateReadable(b.appointmentDate)}</span>
              <span style="margin: 0 8px; color:#bbb;">|</span>
              <span>${b.shiftName} (${b.shiftTime})</span>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
              <span class="badge-status ${isOnHold ? 'status-on-hold' : 'status-confirmed'}">
                ${b.bookingStatus}
              </span>
              <span class="badge-status ${b.paymentStatus === 'Fully Paid' ? 'status-fully-paid' : (b.paymentStatus === 'Partially Paid' ? 'status-partially-paid' : 'status-unpaid')}">
                ${b.paymentStatus}
              </span>
            </div>
          </div>

          <div class="booking-card-body">
            <img src="${b.pet.photo || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100'}" class="booking-pet-thumb" alt="${b.pet.name}">
            
            <div>
              <h4 style="margin-bottom:4px; font-size:1.1rem; color:var(--color-navy);">${b.pet.name} (${b.pet.species} • ${b.pet.breed})</h4>
              <p style="font-size:0.9rem; color:#444; margin-bottom:4px;"><strong>Services:</strong> ${servicesSummary}</p>
              <p style="font-size:0.85rem; color:#666;">
                <strong>Total Amount:</strong> ₱${b.totalAmount.toLocaleString()} 
                ${b.discountAmount > 0 ? `<span style="color:var(--color-rose); font-weight:700;">(AWD 20% Applied)</span>` : ''}
              </p>
              ${isOnHold ? `
                <p style="font-size:0.9rem; color:var(--color-inferno); font-weight:800; margin-top:4px;">
                  ⏱️ Pay before ${b.paymentDeadline ? new Date(b.paymentDeadline).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : 'the deadline'} or this slot will be released.
                </p>
              ` : b.remainingBalance > 0 ? `
                <p style="font-size:0.9rem; color:var(--color-inferno); font-weight:800; margin-top:4px;">
                  ⚠️ Remaining Balance: ₱${b.remainingBalance.toLocaleString()} (Pay in cash at shop before grooming)
                </p>
              ` : `
                <p style="font-size:0.85rem; color:var(--color-forest); font-weight:700; margin-top:4px;">
                  ✓ Fully Paid online
                </p>
              `}
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              ${isOnHold ? `
                <button class="btn btn-primary btn-sm" onclick="App.resumePayment('${b.id}')">Pay Now (On Hold)</button>
                <button class="btn btn-rose btn-sm" onclick="App.cancelBookingFromList('${b.id}')">Cancel Slot</button>
              ` : `
                <button class="btn btn-navy btn-sm" onclick="App.openRescheduleModal('${b.id}')">Reschedule</button>
                <button class="btn btn-outline btn-sm" style="color:var(--color-rose); border-color:var(--color-rose);" onclick="App.openCancelModal('${b.id}')">Cancel</button>
                <button class="btn btn-outline btn-sm" onclick="App.viewBookingDetailsModal('${b.id}')">View Details</button>
              `}
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  resumePayment: function(bookingId) {
    this.bookingDraft.activeHoldBookingId = bookingId;
    this.setupBookingStep(6);
  },

  // BOOKING HISTORY (Past & Cancelled bookings)
  renderBookingHistory: function() {
    if (!this.currentUser) {
      this.routeTo('booking-view');
      return;
    }

    const container = document.getElementById('bookingHistoryListContainer');
    if (!container) return;

    const allBookings = this.getBookings();
    let historyList = allBookings.filter(b => 
      b.userId === this.currentUser.id && 
      (b.bookingStatus === 'Past' || b.bookingStatus === 'Cancelled')
    );

    const sortOrder = document.getElementById('historySortOrderSelect')?.value || 'newest';
    historyList.sort((a, b) => {
      const dateA = new Date(a.appointmentDate).getTime();
      const dateB = new Date(b.appointmentDate).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    if (historyList.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:40px 20px; background:#fff; border-radius:12px; border:1px solid #ddd;">
          <div style="font-size:3rem; margin-bottom:12px;">📜</div>
          <h3>No Booking History Found</h3>
          <p style="color:#666;">Completed or cancelled appointments will appear here.</p>
        </div>
      `;
      return;
    }

    let html = '';
    let lastMonth = '';
    historyList.forEach(b => {
      const monthLabel = formatMonthYear(b.appointmentDate);
      if (monthLabel !== lastMonth) {
        html += `<h3 class="booking-month-heading">${monthLabel}</h3>`;
        lastMonth = monthLabel;
      }

      const isPast = (b.bookingStatus === 'Past');
      const servicesSummary = b.bookingType === 'package' 
        ? (SERVICE_DATA.packages[b.packageId] ? SERVICE_DATA.packages[b.packageId].name : 'Package')
        : (b.selectedServices.map(s => SERVICE_DATA.alaCarte[s] ? SERVICE_DATA.alaCarte[s].name : s).join(', '));

      html += `
        <div class="booking-item-card" style="opacity: 0.95;">
          <div class="booking-card-top">
            <div>
              <span style="font-weight:800; font-family:var(--font-heading); color:var(--color-navy); font-size:1.15rem;">
                Ref #${b.referenceNumber}
              </span>
              <span style="margin: 0 8px; color:#bbb;">|</span>
              <span style="font-weight:700;">${formatDateReadable(b.appointmentDate)}</span>
              <span style="margin: 0 8px; color:#bbb;">|</span>
              <span>${b.shiftName} (${b.shiftTime})</span>
            </div>
            <div style="display:flex; gap:8px; align-items:center;">
              <span class="badge-status ${isPast ? 'status-past' : 'status-cancelled'}">
                ${b.bookingStatus}
              </span>
              <span class="badge-status ${b.paymentStatus === 'Fully Paid' ? 'status-fully-paid' : (b.paymentStatus === 'Partially Paid' ? 'status-partially-paid' : 'status-unpaid')}">
                ${b.paymentStatus}
              </span>
            </div>
          </div>

          <div class="booking-card-body">
            <img src="${b.pet.photo || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100'}" class="booking-pet-thumb" alt="${b.pet.name}">
            
            <div>
              <h4 style="margin-bottom:4px; font-size:1.1rem; color:var(--color-navy);">${b.pet.name} (${b.pet.species} • ${b.pet.breed})</h4>
              <p style="font-size:0.9rem; color:#444; margin-bottom:4px;"><strong>Services:</strong> ${servicesSummary}</p>
              <p style="font-size:0.85rem; color:#666;">
                <strong>Total Amount:</strong> ₱${b.totalAmount.toLocaleString()} | 
                <strong>Amount Paid:</strong> ₱${(b.amountPaid || 0).toLocaleString()} 
                ${b.discountAmount > 0 ? `<span style="color:var(--color-rose);"> (20% AWD Discount Applied)</span>` : ''}
              </p>
              ${b.cancellationReason ? `
                <p style="font-size:0.8rem; color:var(--color-rose); margin-top:4px;"><strong>Cancellation Note:</strong> ${b.cancellationReason}</p>
              ` : ''}
            </div>

            <div>
              <button class="btn btn-outline btn-sm" onclick="App.viewBookingDetailsModal('${b.id}')">View Record</button>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  // RESCHEDULE LOGIC (Strictly follows proposal page 34-35)
  // "The system automatically checks the requested shift's remaining capacity before processing... 
  // The new appointment capacity must be successfully reserved before the original appointment slot is released to prevent overbooking.
  // Rescheduling does not initiate a new payment countdown or require the customer to pay again."
  rescheduleTargetBookingId: null,

  openRescheduleModal: function(bookingId) {
    this.rescheduleTargetBookingId = bookingId;
    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    document.getElementById('rescheduleRefText').textContent = `Ref #${booking.referenceNumber}`;
    document.getElementById('rescheduleCurrentDateShift').textContent = `${formatDateReadable(booking.appointmentDate)} - ${booking.shiftName}`;

    // Default to tomorrow or booking date
    const dateInput = document.getElementById('rescheduleNewDateInput');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = getFormattedDateStr(tomorrow);
    dateInput.min = getFormattedDateStr(tomorrow);

    this.updateRescheduleShifts();
    document.getElementById('rescheduleModal').classList.add('show');
  },

  updateRescheduleShifts: function() {
    const dateInput = document.getElementById('rescheduleNewDateInput');
    const shiftsSelect = document.getElementById('rescheduleShiftSelect');
    const dateStr = dateInput.value;

    if (!dateStr) return;

    shiftsSelect.innerHTML = '';
    SERVICE_DATA.shifts.forEach(shift => {
      const cap = this.getShiftCapacityInfo(dateStr, shift.id);
      const opt = document.createElement('option');
      opt.value = shift.id;
      opt.textContent = `${shift.name} (${shift.time}) — ${cap.remaining} of 3 slots available`;
      if (cap.isFull) {
        opt.disabled = true;
        opt.textContent += ' [FULL]';
      }
      shiftsSelect.appendChild(opt);
    });
  },

  confirmReschedule: function() {
    const bookingId = this.rescheduleTargetBookingId;
    const dateStr = document.getElementById('rescheduleNewDateInput').value;
    const shiftId = document.getElementById('rescheduleShiftSelect').value;

    if (!dateStr || !shiftId) {
      alert('Please select a valid date and available shift.');
      return;
    }

    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    // Check capacity first
    const cap = this.getShiftCapacityInfo(dateStr, shiftId);
    if (cap.isFull) {
      alert('Selected shift has no available slots. Please choose another shift.');
      return;
    }

    // Reserve new slot before releasing old slot
    const shift = SERVICE_DATA.shifts.find(s => s.id === shiftId);
    booking.appointmentDate = dateStr;
    booking.shiftId = shift.id;
    booking.shiftName = shift.name;
    booking.shiftTime = shift.time;
    booking.rescheduledAt = new Date().toISOString();

    this.saveBookings(bookings);
    document.getElementById('rescheduleModal').classList.remove('show');
    alert(`Appointment successfully rescheduled to ${formatDateReadable(dateStr)} (${shift.name})! Reference number and payment remain unchanged.`);
    this.renderMyBookings();
  },

  // CANCELLATION LOGIC (Strictly follows proposal page 35)
  // "If the customer cancels at least 24 hours before the scheduled appointment start time, the system records a full simulated refund...
  // If cancellation occurs less than 24 hours before... no simulated refund is issued."
  cancelTargetBookingId: null,

  openCancelModal: function(bookingId) {
    this.cancelTargetBookingId = bookingId;
    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    document.getElementById('cancelModalRefText').textContent = `Ref #${booking.referenceNumber}`;
    document.getElementById('cancelModalAppointmentText').textContent = `${formatDateReadable(booking.appointmentDate)} - ${booking.shiftName} (${booking.shiftTime})`;

    // Check 24-hour threshold
    const [y, m, d] = booking.appointmentDate.split('-').map(Number);
    const shift = SERVICE_DATA.shifts.find(s => s.id === booking.shiftId);
    const shiftStartTime = new Date(y, m - 1, d, shift ? shift.startHour : 8, 0, 0).getTime();
    const now = Date.now();
    const hoursDifference = (shiftStartTime - now) / (1000 * 60 * 60);

    const isEligibleForRefund = (hoursDifference >= 24);
    const refundInfoEl = document.getElementById('cancelModalRefundNotice');

    if (isEligibleForRefund) {
      refundInfoEl.innerHTML = `
        <div class="alert alert-success" style="margin-bottom:0;">
          <div>
            <strong>✓ Full Simulated Refund Eligible (≥ 24 Hours Notice)</strong><br>
            Cancellation is being made ${Math.floor(hoursDifference)} hours prior to the appointment. A full simulated refund of 
            <strong>₱${(booking.amountPaid || 0).toLocaleString()}</strong> will be processed immediately.
          </div>
        </div>
      `;
    } else {
      refundInfoEl.innerHTML = `
        <div class="alert alert-danger" style="margin-bottom:0;">
          <div>
            <strong>⚠️ No Simulated Refund Eligible (&lt; 24 Hours Notice)</strong><br>
            Cancellation is being made less than 24 hours before the appointment shift. As per Fur & Bubbles policy, payments made are non-refundable for late cancellations.
          </div>
        </div>
      `;
    }

    document.getElementById('cancelModal').classList.add('show');
  },

  confirmCancellation: function() {
    const bookingId = this.cancelTargetBookingId;
    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    const [y, m, d] = booking.appointmentDate.split('-').map(Number);
    const shift = SERVICE_DATA.shifts.find(s => s.id === booking.shiftId);
    const shiftStartTime = new Date(y, m - 1, d, shift ? shift.startHour : 8, 0, 0).getTime();
    const now = Date.now();
    const isEligibleForRefund = ((shiftStartTime - now) / (1000 * 60 * 60)) >= 24;

    booking.bookingStatus = 'Cancelled';
    booking.cancelledAt = new Date().toISOString();
    booking.remainingBalance = 0; // Clear unpaid balance

    if (isEligibleForRefund) {
      booking.simulatedRefundAmount = booking.amountPaid || 0;
      booking.cancellationReason = `Cancelled ≥24h in advance. Full simulated refund of ₱${booking.simulatedRefundAmount.toLocaleString()} recorded.`;
    } else {
      booking.simulatedRefundAmount = 0;
      booking.cancellationReason = `Cancelled <24h in advance. Not eligible for simulated refund.`;
    }

    this.saveBookings(bookings);
    document.getElementById('cancelModal').classList.remove('show');
    alert('The appointment has been successfully cancelled and the grooming slot capacity has been released.');
    this.renderMyBookings();
  },

  cancelBookingFromList: function(bookingId) {
    if (confirm('Cancel this On Hold booking and release the slot?')) {
      const bookings = this.getBookings();
      const booking = bookings.find(b => b.id === bookingId);
      if (booking) {
        booking.bookingStatus = 'Cancelled';
        booking.paymentStatus = 'Unpaid';
        booking.cancellationReason = 'Cancelled by customer';
        this.saveBookings(bookings);
      }
      this.renderMyBookings();
    }
  },

  // VIEW BOOKING DETAILS MODAL
  viewBookingDetailsModal: function(bookingId) {
    const bookings = this.getBookings();
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    const modal = document.getElementById('detailsModal');
    const content = document.getElementById('detailsModalContent');

    const servicesSummary = booking.bookingType === 'package' 
      ? (SERVICE_DATA.packages[booking.packageId] ? SERVICE_DATA.packages[booking.packageId].name : 'Package')
      : (booking.selectedServices.map(s => SERVICE_DATA.alaCarte[s] ? SERVICE_DATA.alaCarte[s].name : s).join(', '));

    const addonsSummary = (booking.selectedAddons || []).map(a => SERVICE_DATA.addOns[a] ? SERVICE_DATA.addOns[a].name : a).join(', ') || 'None';

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <span class="booking-ref-number" style="font-size:1.4rem; padding:6px 14px; margin:0;">Ref #${booking.referenceNumber}</span>
        <span class="badge-status ${booking.bookingStatus === 'Confirmed' ? 'status-confirmed' : (booking.bookingStatus === 'On Hold' ? 'status-on-hold' : (booking.bookingStatus === 'Past' ? 'status-past' : 'status-cancelled'))}">
          ${booking.bookingStatus}
        </span>
      </div>

      <div style="display:grid; grid-template-columns:100px 1fr; gap:16px; margin-bottom:18px;">
        <img src="${booking.pet.photo || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100'}" style="width:100px; height:100px; border-radius:12px; object-fit:cover; border:2px solid #ddd;" alt="${booking.pet.name}">
        <div>
          <h4 style="font-size:1.2rem; color:var(--color-navy); margin-bottom:4px;">${booking.pet.name}</h4>
          <p style="font-size:0.9rem; color:#555;"><strong>Species & Breed:</strong> ${booking.pet.species} • ${booking.pet.breed}</p>
          <p style="font-size:0.9rem; color:#555;"><strong>Weight & Category:</strong> ${booking.pet.weight} kg (${booking.pet.sizeCategory})</p>
          <p style="font-size:0.9rem; color:#555;"><strong>Care Notes:</strong> ${booking.pet.careNotes || 'None'}</p>
        </div>
      </div>

      <div style="background:var(--color-navy-light); padding:14px; border-radius:8px; margin-bottom:18px;">
        <h5 style="color:var(--color-navy); margin-bottom:6px;">Appointment Details</h5>
        <p style="font-size:0.92rem;"><strong>Date:</strong> ${formatDateReadable(booking.appointmentDate)}</p>
        <p style="font-size:0.92rem;"><strong>Shift:</strong> ${booking.shiftName} (${booking.shiftTime})</p>
        <p style="font-size:0.92rem;"><strong>Location:</strong> Fur & Bubbles Grooming Services, Davila St., Navotas City</p>
        <p style="font-size:0.92rem;"><strong>Estimated Duration:</strong> ${booking.estimatedDuration} minutes</p>
      </div>

      <div style="margin-bottom:18px;">
        <h5 style="color:var(--color-navy); margin-bottom:8px;">Services & Pricing</h5>
        <p style="font-size:0.9rem;"><strong>Main Service:</strong> ${servicesSummary}</p>
        <p style="font-size:0.9rem;"><strong>Add-on Extras:</strong> ${addonsSummary}</p>
        ${booking.isAwd ? `
          <div class="alert alert-info" style="margin-top:10px; padding:10px;">
            <strong>🐾 Animals with Disability (AWD) Discount Applied:</strong> 20% Demonstration Discount.<br>
            <small>Declared Condition: ${booking.awdCondition}</small>
          </div>
        ` : ''}
      </div>

      <div style="border-top:1px solid #ddd; padding-top:12px; font-size:0.95rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span>Total Booking Amount:</span>
          <strong>₱${booking.totalAmount.toLocaleString()}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span>Simulated Amount Paid:</span>
          <strong style="color:var(--color-forest);">₱${(booking.amountPaid || 0).toLocaleString()} (${booking.paymentStatus})</strong>
        </div>
        ${booking.remainingBalance > 0 ? `
          <div style="display:flex; justify-content:space-between; margin-bottom:4px; color:var(--color-inferno); font-weight:800;">
            <span>Remaining Cash Balance:</span>
            <span>₱${booking.remainingBalance.toLocaleString()} (Pay at shop before grooming)</span>
          </div>
        ` : ''}
        ${booking.paymentTransactionRef ? `
          <div style="font-size:0.8rem; color:#777; margin-top:8px;">
            Transaction Ref: ${booking.paymentTransactionRef} • Recorded at ${new Date(booking.paymentRecordedAt).toLocaleString()}
          </div>
        ` : ''}
      </div>
    `;

    modal.classList.add('show');
  },

  // USER PROFILE & SAVED PETS MANAGEMENT
  renderProfileView: function() {
    if (!this.currentUser) {
      this.routeTo('booking-view');
      return;
    }

    const nameEl = document.getElementById('profileNameInput');
    const emailEl = document.getElementById('profileEmailInput');
    const phoneEl = document.getElementById('profilePhoneInput');
    const bdayEl = document.getElementById('profileBirthdateInput');

    if (nameEl) nameEl.value = this.currentUser.name || '';
    if (emailEl) emailEl.value = this.currentUser.email || '';
    if (phoneEl) phoneEl.value = this.currentUser.phone || '';
    if (bdayEl) bdayEl.value = this.currentUser.birthdate || '';
  },

  renderPetsView: function() {
    if (!this.currentUser) {
      this.routeTo('booking-view');
      return;
    }
    this.renderProfilePetsList();
  },

  saveProfileChanges: function(e) {
    if (e) e.preventDefault();
    this.currentUser.name = document.getElementById('profileNameInput').value.trim();
    this.currentUser.phone = document.getElementById('profilePhoneInput').value.trim();
    this.currentUser.birthdate = document.getElementById('profileBirthdateInput').value;

    saveCurrentUser(this.currentUser, !sessionStorage.getItem(STORAGE_KEYS.CURRENT_USER));

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    const idx = users.findIndex(u => u.id === this.currentUser.id);
    if (idx !== -1) {
      users[idx] = this.currentUser;
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }

    this.updateUserNavigation();
    alert('Account details updated successfully!');
  },

  renderProfilePetsList: function() {
    const container = document.getElementById('profilePetsListContainer');
    if (!container) return;

    const allPets = JSON.parse(localStorage.getItem(STORAGE_KEYS.PETS) || '[]');
    const userPets = allPets.filter(p => p.userId === this.currentUser.id);

    if (userPets.length === 0) {
      container.innerHTML = `<p style="color:#666; font-style:italic;">No saved pets found. Click "Add New Pet" to create a pet profile.</p>`;
      return;
    }

    let html = '';
    userPets.forEach(p => {
      const size = SERVICE_DATA.getCategoryFromWeight(p.weight);
      html += `
        <div style="border:1px solid #ddd; border-radius:12px; padding:16px; display:flex; gap:16px; align-items:center; background:#fff; margin-bottom:12px;">
          <img src="${p.photo || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100'}" style="width:70px; height:70px; border-radius:12px; object-fit:cover;" alt="${p.name}">
          <div style="flex:1;">
            <h4 style="color:var(--color-navy); margin-bottom:2px;">${p.name} <span class="size-category-badge badge-${size.toLowerCase()}" style="font-size:0.75rem; padding:2px 8px;">${size} (${p.weight} kg)</span></h4>
            <p style="font-size:0.85rem; color:#666;">${p.species} • ${p.breed}</p>
            <p style="font-size:0.85rem; color:#555; margin-top:4px;"><em>${p.careNotes || 'No special notes'}</em></p>
          </div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <button class="btn btn-outline btn-sm" onclick="App.openEditPetModal('${p.id}')">Edit</button>
            <button class="btn btn-primary btn-sm" onclick="App.startBookingForPet('${p.id}')">Book with Pet</button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  startBookingForPet: function(petId) {
    this.startNewBooking();
    this.selectSavedPet(petId);
    this.routeTo('booking-view');
  },

  openAddPetModal: function() {
  document.getElementById('modalAddPetName').value = '';
  document.getElementById('modalAddPetBreed').value = '';
  document.getElementById('modalAddPetWeight').value = '';
  document.getElementById('modalAddPetNotes').value = '';
  document.getElementById('modalAddPetPhoto').value = '';
  this.tempModalPetPhoto = '';
  this.editingPetId = null;
  document.getElementById('modalAddPetSpecies').value = 'Dog';
  document.getElementById('addPetModalTitle').textContent = 'Add New Pet Profile';
  document.getElementById('addPetSaveBtn').textContent = 'Save Pet Profile';
  document.getElementById('modalAddPetPhotoPreview').style.display = 'none';
  document.getElementById('addPetModal').classList.add('show');
},

tempModalPetPhoto: '',
editingPetId: null,

openEditPetModal: function(petId) {
  const allPets = JSON.parse(localStorage.getItem(STORAGE_KEYS.PETS) || '[]');
  const pet = allPets.find(p => p.id === petId && p.userId === this.currentUser.id);
  if (!pet) return;

  this.editingPetId = pet.id;
  this.tempModalPetPhoto = pet.photo || '';
  document.getElementById('modalAddPetName').value = pet.name;
  document.getElementById('modalAddPetSpecies').value = pet.species;
  document.getElementById('modalAddPetBreed').value = pet.breed;
  document.getElementById('modalAddPetWeight').value = pet.weight;
  document.getElementById('modalAddPetNotes').value = pet.careNotes || '';
  document.getElementById('modalAddPetPhoto').value = '';
  document.getElementById('addPetModalTitle').textContent = 'Edit Pet Profile';
  document.getElementById('addPetSaveBtn').textContent = 'Save Changes';
  const preview = document.getElementById('modalAddPetPhotoPreview');
  preview.src = this.tempModalPetPhoto;
  preview.style.display = this.tempModalPetPhoto ? 'block' : 'none';
  document.getElementById('addPetModal').classList.add('show');
},

  handleModalPetPhotoUpload: function(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (!validateUploadFile(file, ['image/jpeg', 'image/png'], 'Pet photo')) {
      event.target.value = '';
      return;
    }
    compressImageToDataUrl(file, (dataUrl) => {
      App.tempModalPetPhoto = dataUrl;
      const preview = document.getElementById('modalAddPetPhotoPreview');
      preview.src = dataUrl;
      preview.style.display = 'block';
    });
  },

  saveNewPetFromModal: function() {
    const name = document.getElementById('modalAddPetName').value.trim();
    const species = document.getElementById('modalAddPetSpecies').value;
    const breed = document.getElementById('modalAddPetBreed').value.trim();
    const weight = parseFloat(document.getElementById('modalAddPetWeight').value);
    const notes = document.getElementById('modalAddPetNotes').value.trim();

    if (!name || !breed || isNaN(weight) || weight <= 0) {
      alert('Please fill out all required pet fields (Name, Breed, Weight).');
      return;
    }

    if (!this.tempModalPetPhoto) {
      alert('A pet photo is required for the pet profile.');
      return;
    }

        const allPets = JSON.parse(localStorage.getItem(STORAGE_KEYS.PETS) || '[]');
    const isEditing = !!this.editingPetId;

    if (isEditing) {
      const idx = allPets.findIndex(p => p.id === this.editingPetId && p.userId === this.currentUser.id);
      if (idx === -1) { alert('Could not find this pet profile.'); return; }
      allPets[idx] = Object.assign({}, allPets[idx], {
        name: name, species: species, breed: breed,
        weight: weight, careNotes: notes, photo: this.tempModalPetPhoto
      });
    } else {
      allPets.push({
        id: 'pet_' + Date.now(),
        userId: this.currentUser.id,
        name: name, species: species, breed: breed,
        weight: weight, careNotes: notes, photo: this.tempModalPetPhoto
      });
    }

    localStorage.setItem(STORAGE_KEYS.PETS, JSON.stringify(allPets));
    document.getElementById('addPetModal').classList.remove('show');
    this.editingPetId = null;
    this.renderProfilePetsList();
    alert(isEditing ? 'Pet profile updated successfully!' : 'Pet profile added successfully!');
  },

  // LOGOUT
  handleLogout: function() {
    if (confirm('Are you sure you want to log out?')) {
      this.currentUser = null;
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      sessionStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      this.updateUserNavigation();
      this.routeTo('home-view');
    }
  },

  // SERVICES & PRICELIST FULL TABLES (Tables 3, 4, 5)
  renderServicesAndPricelist: function() {
    // Render Packages Table 5
    const pkgTableBody = document.getElementById('pricelistPackagesTableBody');
    if (pkgTableBody) {
      let html = '';
      Object.values(SERVICE_DATA.packages).forEach(pkg => {
        html += `
          <tr>
            <td><strong>${pkg.name}</strong></td>
            <td>${pkg.inclusions.join(', ')}</td>
            <td style="font-weight:700;">₱${pkg.prices.Small.toLocaleString()}</td>
            <td style="font-weight:700;">₱${pkg.prices.Medium.toLocaleString()}</td>
            <td style="font-weight:700;">₱${pkg.prices.Large.toLocaleString()}</td>
            <td style="font-weight:700;">₱${pkg.prices.Giant.toLocaleString()}</td>
          </tr>
        `;
      });
      pkgTableBody.innerHTML = html;
    }

    // Render À La Carte Table 3
    const alaTableBody = document.getElementById('pricelistAlaCarteTableBody');
    if (alaTableBody) {
      let html = '';
      Object.values(SERVICE_DATA.alaCarte).forEach(srv => {
        html += `
          <tr>
            <td><strong>${srv.name}</strong></td>
            <td style="font-weight:700;">₱${srv.prices.Small.toLocaleString()}</td>
            <td style="font-weight:700;">₱${srv.prices.Medium.toLocaleString()}</td>
            <td style="font-weight:700;">₱${srv.prices.Large.toLocaleString()}</td>
            <td style="font-weight:700;">₱${srv.prices.Giant.toLocaleString()}</td>
          </tr>
        `;
      });
      alaTableBody.innerHTML = html;
    }

    // Render Add-on Table 4
    const addonTableBody = document.getElementById('pricelistAddonsTableBody');
    if (addonTableBody) {
      let html = '';
      Object.values(SERVICE_DATA.addOns).forEach(addon => {
        html += `
          <tr>
            <td><strong>${addon.name}</strong><br><small style="color:#666;">${addon.note}</small></td>
            <td style="font-weight:700;">₱${addon.prices.Small.toLocaleString()}</td>
            <td style="font-weight:700;">₱${addon.prices.Medium.toLocaleString()}</td>
            <td style="font-weight:700;">₱${addon.prices.Large.toLocaleString()}</td>
            <td style="font-weight:700;">₱${addon.prices.Giant.toLocaleString()}</td>
          </tr>
        `;
      });
      addonTableBody.innerHTML = html;
    }
  },

  // FORGOT PASSWORD SIMULATION
  handleForgotPassword: function() {
    const email = prompt('Please enter your registered email address for password reset:');
    if (email) {
      alert(`Firebase Authentication simulated: A password-reset link has been sent to ${email}. Please check your inbox and follow the instructions to create a new password.`);
    }
  },

  // EVENT LISTENERS INITIALIZATION
  initEventListeners: function() {
    // Account Menu Dropdown Toggle
    const accBtn = document.getElementById('accountMenuToggleBtn');
    const accDropdown = document.getElementById('accountDropdown');
    if (accBtn && accDropdown) {
      accBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        accDropdown.classList.toggle('show');
      });
      document.addEventListener('click', () => {
        accDropdown.classList.remove('show');
      });
    }

    // Modal close buttons
    document.querySelectorAll('.modal-close-btn, .btn-modal-cancel').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
      });
    });
  }
};

// Initialize App when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
