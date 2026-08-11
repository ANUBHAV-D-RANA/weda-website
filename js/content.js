/* ============================================================
   WEDA SITE CONTENT — edit this file to add/remove things.
   No coding knowledge needed. Rules:
   1. Every item lives between { ... } braces, ending with a comma.
   2. TO REMOVE something: delete its whole { ... }, block.
   3. TO ADD something: copy an existing { ... }, block, paste it
      below, and change the text/image.
   4. Images: put the photo file inside the assets/ folder first,
      then write its name here as "assets/your-photo.jpg".
   After editing, redeploy (ask Claude: "deploy the site").
   ============================================================ */

window.WEDA_CONTENT = {

  /* ============================================================
     1. COURSES  (courses.html)
     Four main categories. "programs" = the exam names listed
     inside the category. "tags" = the little red pills.
     accent: true = solid red button, false = outline button.
     ============================================================ */
  courses: [
    {
      title: "School Entrance Exams",
      label: "CLASS 6 & CLASS 9 ENTRY",
      image: "assets/course-1.jpg",
      programs: ["Sainik School", "RMS", "UP Sainik School", "JNV"],
      desc: "One structured track for every school-level entrance: Mathematics, English, General Knowledge, Intelligence and interview readiness. Weekly mock tests, ranked leaderboards and no mercy on weak fundamentals.",
      tags: ["Online", "Offline", "Digital"],
      button: "Enquire Now",
      accent: true,
    },
    {
      title: "RIMC",
      label: "RASHTRIYA INDIAN MILITARY COLLEGE",
      image: "assets/course-2.jpg",
      programs: ["Written Exam", "Viva Voce", "Medical Guidance"],
      desc: "Dedicated preparation for the Rashtriya Indian Military College entrance — Mathematics, English and General Knowledge, followed by Viva Voce interview drills. Fundamentals before speed, then full-length mocks under exam timing.",
      tags: ["Online", "Offline", "Digital"],
      button: "Enquire Now",
      accent: true,
    },
    {
      title: "NDA",
      label: "NATIONAL DEFENCE ACADEMY",
      image: "assets/course-3.jpg",
      programs: ["Mathematics", "General Ability Test", "Current Affairs"],
      desc: "Officer-grade preparation for the NDA written examination, built around the full syllabus with weekly testing and doubt-clearing from mentors who have taught on both sides of the selection board.",
      tags: ["Online", "Offline", "Hybrid"],
      button: "Enquire Now",
      accent: true,
    },
    {
      title: "SSB",
      label: "SERVICES SELECTION BOARD",
      image: "assets/course-4.jpg",
      programs: ["Psychology Tests", "GTO Tasks", "Personal Interview"],
      desc: "The full SSB assault course — screening, psychology tests, GTO ground tasks and personal interview drills that break a candidate down and rebuild them as selection material.",
      tags: ["Online", "Offline", "Hybrid"],
      button: "Enquire Now",
      accent: true,
    },
  ],

  /* ============================================================
     2. DIGITAL COURSES  (courses.html #digital)
     Self-paced recorded courses. Change "link" to point
     somewhere else if the store URL ever changes.
     ============================================================ */
  digital: {
    title: "Digital Courses",
    desc: "Self-paced recorded ammunition — structured video lectures and digital workbooks you can start today. Train from anywhere, anytime, at your own command.",
    link: "https://ewfqe.courses.store/",
    button: "Explore Digital Courses",
    items: [
      { name: "Sainik School", note: "Recorded lectures + workbooks" },
      { name: "RIMC",          note: "Recorded lectures + workbooks" },
      { name: "RMS",           note: "Recorded lectures + workbooks" },
    ],
  },

  /* ============================================================
     3. LOW-COST LEARNING  (courses.html #lowcost)
     ============================================================ */
  lowcost: {
    title: "Learn More. Spend Less. Prepare Better.",
    desc: "Access valuable defence-exam preparation content at little to no cost through our YouTube channel.",
    link: "https://www.youtube.com/@TheWinningEdgeDefence",
    button: "Subscribe to Our YouTube Channel",
  },

  /* ============================================================
     4. THE TEAM  (about.html)
     CAPTAIN     = leadership
     STRIKERS    = mentors / faculty
     GOALKEEPER  = support team
     ============================================================ */

  /* --- STRIKERS: mentors. Add/remove whole { ... }, blocks. --- */
  strikers: [
    { name: "Neeraj Sir",     photo: "assets/mentor-neeraj.jpg",    subject: "G.K. · Mathematics",        id: "WE/01" },
    { name: "Niharika Gupta", photo: "assets/mentor-niharika.jpg",  subject: "Mathematics",               id: "WE/02" },
    { name: "Pratima Jadon",  photo: "assets/mentor-pratima.jpg",   subject: "English",                   id: "WE/03" },
    { name: "Rajvinder Kaur", photo: "assets/mentor-rajvinder.jpg", subject: "Mathematics",               id: "WE/04" },
    { name: "Sonil Mam",      photo: "assets/mentor-sonil.jpg",     subject: "General Knowledge",         id: "WE/05" },
    { name: "Tanmay Gupta",   photo: "assets/mentor-tanmay.jpg",    subject: "Intelligence & Reasoning",  id: "WE/06" },
  ],

  /* --- GOALKEEPER: support team.
     >>> PLACEHOLDER <<< These are ROLES, not real named people.
     Replace "name" with the actual person once you confirm who
     handles each desk, or delete any block you do not need. --- */
  goalkeeper: [
    {
      role: "Admissions & Counselling",
      name: "[ Add name ]",
      desc: "Guides parents through course selection, eligibility and the enrollment process.",
    },
    {
      role: "Student Support",
      name: "[ Add name ]",
      desc: "Handles class schedules, doubt sessions, study material and day-to-day cadet queries.",
    },
    {
      role: "Parent Coordination",
      name: "[ Add name ]",
      desc: "Keeps families updated on attendance, test performance and preparation progress.",
    },
  ],

  /* ============================================================
     5. FEE STRUCTURE  (fees.html)

     >>>>>>>>>>>>>>>>  IMPORTANT  <<<<<<<<<<<<<<<<
     EVERY NUMBER BELOW IS A PLACEHOLDER. Nothing here has been
     taken from a real WEDA fee document — no fee PDF was supplied.
     Replace each "—" with the real amount from the official fee
     structure BEFORE showing this page to parents.
     Set  published: true  once the real numbers are in; that
     removes the warning banner on the page.
     ============================================================ */
  fees: {
    published: false,
    note: "Fees shown are inclusive of GST where applicable. Registration fee is one-time and non-refundable.",
    programs: [
      {
        program: "School Entrance Exams",
        sub: "Sainik School | RMS | UP Sainik School | JNV",
        rows: [
          { particular: "Registration Fee", y1: "—", y2: "—", y3: "—" },
          { particular: "Tuition Fee",      y1: "—", y2: "—", y3: "—" },
          { particular: "Study Material",   y1: "—", y2: "—", y3: "—" },
          { particular: "Hostel Fee",       y1: "—", y2: "—", y3: "—" },
        ],
        total: { y1: "—", y2: "—", y3: "—" },
      },
      {
        program: "RIMC",
        sub: "Rashtriya Indian Military College",
        rows: [
          { particular: "Registration Fee", y1: "—", y2: "—", y3: "—" },
          { particular: "Tuition Fee",      y1: "—", y2: "—", y3: "—" },
          { particular: "Study Material",   y1: "—", y2: "—", y3: "—" },
          { particular: "Hostel Fee",       y1: "—", y2: "—", y3: "—" },
        ],
        total: { y1: "—", y2: "—", y3: "—" },
      },
      {
        program: "NDA",
        sub: "National Defence Academy",
        rows: [
          { particular: "Registration Fee", y1: "—", y2: "—", y3: "—" },
          { particular: "Tuition Fee",      y1: "—", y2: "—", y3: "—" },
          { particular: "Study Material",   y1: "—", y2: "—", y3: "—" },
          { particular: "Hostel Fee",       y1: "—", y2: "—", y3: "—" },
        ],
        total: { y1: "—", y2: "—", y3: "—" },
      },
      {
        program: "SSB",
        sub: "Services Selection Board",
        rows: [
          { particular: "Registration Fee", y1: "—", y2: "—", y3: "—" },
          { particular: "Tuition Fee",      y1: "—", y2: "—", y3: "—" },
          { particular: "Study Material",   y1: "—", y2: "—", y3: "—" },
        ],
        total: { y1: "—", y2: "—", y3: "—" },
      },
    ],
  },

  /* ============================================================
     6. GALLERY  (gallery.html) — exactly three categories.
     ============================================================ */
  galleryTabs: {
    achievements: [
      { image: "assets/achiever-1.jpg", caption: "THE BATCH",     hold: "pin"  },
      { image: "assets/achiever-2.jpg", caption: "CLASSROOM OPS", hold: "tape" },
      { image: "assets/achiever-3.jpg", caption: "THE GRIND",     hold: "pin"  },
      { image: "assets/achiever-4.jpg", caption: "MESS HALL",     hold: "tape" },
    ],
    mentors: [
      { image: "assets/mentor-neeraj.jpg",    caption: "NEERAJ SIR",     hold: "pin"  },
      { image: "assets/mentor-niharika.jpg",  caption: "NIHARIKA GUPTA", hold: "tape" },
      { image: "assets/mentor-pratima.jpg",   caption: "PRATIMA JADON",  hold: "pin"  },
      { image: "assets/mentor-rajvinder.jpg", caption: "RAJVINDER KAUR", hold: "tape" },
      { image: "assets/mentor-sonil.jpg",     caption: "SONIL MAM",      hold: "pin"  },
      { image: "assets/mentor-tanmay.jpg",    caption: "TANMAY GUPTA",   hold: "tape" },
    ],
    activities: [
      { image: "assets/gallery-3.jpg", caption: "FORMATION",       hold: "pin"  },
      { image: "assets/gallery-1.jpg", caption: "THE UNIT",        hold: "tape" },
      { image: "assets/gallery-4.jpg", caption: "DRILLS",          hold: "pin"  },
      { image: "assets/gallery-5.jpg", caption: "FIELDCRAFT",      hold: "tape" },
      { image: "assets/gallery-6.jpg", caption: "DISCIPLINE",      hold: "pin"  },
      { image: "assets/gallery-7.jpg", caption: "ESPRIT DE CORPS", hold: "tape" },
      { image: "assets/gallery-2.jpg", caption: "TRAINING CAMP",   hold: "pin"  },
      { image: "assets/gallery-8.webp",caption: "ON THE GROUND",   hold: "tape" },
    ],
  },

  /* ------- OPERATIONS BOARD photos (about.html) -------
     hold = "pin" (red pin) or "tape" (tape strip) */
  gallery: [
    { image: "assets/gallery-3.jpg", caption: "FORMATION",      hold: "pin"  },
    { image: "assets/gallery-1.jpg", caption: "THE UNIT",       hold: "tape" },
    { image: "assets/gallery-4.jpg", caption: "DRILLS",         hold: "pin"  },
    { image: "assets/gallery-5.jpg", caption: "FIELDCRAFT",     hold: "tape" },
    { image: "assets/gallery-6.jpg", caption: "DISCIPLINE",     hold: "pin"  },
    { image: "assets/gallery-7.jpg", caption: "ESPRIT DE CORPS",hold: "tape" },
  ],

  /* ------- ACHIEVER WALL photos (results.html) ------- */
  achievers: [
    { image: "assets/achiever-1.jpg", caption: "THE BATCH",     hold: "pin"  },
    { image: "assets/achiever-2.jpg", caption: "CLASSROOM OPS", hold: "tape" },
    { image: "assets/achiever-3.jpg", caption: "THE GRIND",     hold: "pin"  },
    { image: "assets/achiever-4.jpg", caption: "MESS HALL",     hold: "tape" },
  ],

  /* ------- FILMSTRIP photos (results.html, auto-scrolling) ------- */
  filmstrip: [
    "assets/gallery-2.jpg",
    "assets/gallery-4.jpg",
    "assets/gallery-5.jpg",
    "assets/gallery-6.jpg",
    "assets/gallery-7.jpg",
    "assets/gallery-8.webp",
  ],

};
