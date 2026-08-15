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
     1c. HOMEPAGE — OUR PREPARATION  (index.html)
     One card per exam. "note" is the small supporting line.
     "entry" is the little label in the corner of the card.

     NOTE: these cards are deliberately text-only. The old
     assets/course-*.jpg files are advertising creatives with text
     baked into them ("BEST RIMC COACHING…"), so they cropped badly
     and did not match their card. To use photographs here, drop
     clean per-exam photos into assets/ and add an
     image: "assets/your-photo.jpg" line to any block below.
     ============================================================ */
  preparation: [
    { name: "Sainik School", entry: "Class 6 & 9", note: "AISSEE entrance preparation for both entry points.", link: "courses.html#course-1" },
    { name: "RMS",           entry: "School Entry", note: "Rashtriya Military School entrance preparation.",   link: "courses.html#course-1" },
    { name: "RIMC",          entry: "Class 8 Entry", note: "Written exam, Viva Voce and interview readiness.",  link: "courses.html#course-2" },
    { name: "NDA",           entry: "Officer Entry", note: "Written examination plus full SSB preparation.",    link: "courses.html#course-3" },
  ],

  /* ============================================================
     1d. HOMEPAGE — WEDA ECOSYSTEM  (index.html)
     Four compact tiles. Change "link" only to a real URL.
     ============================================================ */
  ecosystem: [
    {
      name: "WEDA App",
      tag: "Digital Learning",
      text: "Video courses, mock tests, practice sets and study resources on your phone.",
      cta: "Explore WEDA App",
      link: "https://ewfqe.courses.store/",
    },
    {
      name: "WEDA Books",
      tag: "Study Material",
      text: "Preparation books and practice resources for RIMC, Sainik School and RMS.",
      cta: "Explore WEDA Books",
      link: "https://wedabooks.com/",
    },
    {
      name: "WEDA Defence Plus",
      tag: "Video Platform",
      text: "The extended video guidance channel for defence aspirants.",
      cta: "Watch on YouTube",
      link: "https://www.youtube.com/@thewinningedgedefenceplus",
    },
    /* WEDA Gurukool is intentionally not listed — there is no public link
       for it yet. To add it back, copy one of the blocks above, change the
       name/tag/text and put the real URL in "link". */
  ],

  /* ============================================================
     1e. HOMEPAGE — PREPARATION JOURNEY strip  (index.html)
     ============================================================ */
  journey: ["Learn", "Practice", "Test", "Analyse", "Improve"],

  /* ============================================================
     1f. GOOGLE REVIEWS  (index.html)
     Reviews are pulled live from the official Google listing by
     /api/reviews — nothing is written here by hand on purpose.
     profileUrl = the public listing people can click through to.
     ============================================================ */
  googleReviews: {
    profileUrl: "https://share.google/UaB1ukRY7ot2y6hwH",
    listingName: "The Winning Edge - RIMC, RMS, Sainik School Coaching in Dehradun",

    /* Headline numbers shown next to the stars.
       Update these whenever the real figures on the listing change. */
    rating: 4.6,
    total: 350,

    /* ---------------------------------------------------------------
       REVIEWS SHOWN ON THE HOMEPAGE

       How this works: if a Google API key is ever configured, the page
       uses live data from /api/reviews and ignores this list entirely.
       Until then it shows the reviews below.

       >>> IMPORTANT <<<
       These were carried over from WEDA's own existing website, where
       they appeared under the 4.6-star Google badge. They have NOT been
       checked against the live Google listing. Confirm each one is a
       real Google review, or replace the list with copies of the real
       ones. Never add a review that was not actually written by a
       customer on Google.

       ORDER = the order they appear on the page. Put the newest review
       first. (Nobody can work out "latest" automatically from this file —
       it has no dates until you add them.)

       TO EDIT: each review is one { ... }, block.
       name  = reviewer's name exactly as it appears on Google
       stars = 1 to 5
       when  = e.g. "3 months ago"  (leave "" to hide the date)
       text  = the review, copied word for word — do not rewrite it
       photo = OPTIONAL reviewer picture, e.g. "assets/review-anita.jpg".
               Save the image into the assets/ folder first. If you leave
               photo out, the card shows a red circle with their initial.
       --------------------------------------------------------------- */
    reviews: [
      { name: "Sumit",         stars: 5, when: "", photo: "", text: "The disciplined environment prepares students not just academically but mentally and physically for a career in the armed forces." },
      { name: "Amit Mishra",   stars: 5, when: "", photo: "", text: "Best coaching for RIMC preparation in Dehradun! Focus on written exams and personality development — crucial for SSB interviews." },
      { name: "Shivam Katyal", stars: 5, when: "", photo: "", text: "Remarkable improvement — rigorous training with strong focus on current affairs, maths and English boosted my son's confidence." },
      { name: "Amrita Kaur",   stars: 5, when: "", photo: "", text: "The Winning Edge lives up to its name! Intensive study plan focused on the RIMC syllabus and weekly tests for consistent preparation." },
      { name: "R. K.",         stars: 5, when: "", photo: "", text: "Wonderful coaching helped my son crack AISSEE and get selected in Sainik School Satara. Sincere thanks to Col. Amardeep Sir and team." },
      { name: "Satwant Singh", stars: 5, when: "", photo: "", text: "Better experience for a better future — my son attended summer camp at WEDA. The best coaching centre." },
      { name: "Kanakalata Devi", stars: 5, when: "", photo: "", text: "Doing a great job — teaching with care and moral values, without any fee. Jai Hind, saluting Sir!" },
      { name: "Jyoti Thakur",  stars: 5, when: "", photo: "", text: "Everything was planned at their best level — the webinar enhanced the knowledge of students brilliantly." },
    ],
  },

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

  /* --- STRIKERS: mentors, shown as a photo carousel.
     Names come from the supplied photo filenames. No subject or
     designation is listed because none was supplied — add a
     role: "Mathematics" line to any block if you want one shown. --- */
  strikers: [
    { name: "Neeraj Sir",      photo: "assets/striker-neeraj-sir.jpg" },
    { name: "Bimla Ma'am",     photo: "assets/striker-bimla-maam.jpg" },
    { name: "Kamal Ma'am",     photo: "assets/striker-kamal-maam.jpg" },
    { name: "Varun Sir",       photo: "assets/striker-varun-sir.jpg" },
    { name: "Mahrose Sir",     photo: "assets/striker-mahrose-sir.jpg" },
    { name: "Pankaj Sir",      photo: "assets/striker-pankaj-sir.jpg" },
    { name: "Parveen Jha Sir", photo: "assets/striker-parveen-jha-sir.jpg" },
    { name: "Vikram Sir",      photo: "assets/striker-vikram-sir.jpg" },
    { name: "Ankit Sir",       photo: "assets/striker-ankit-sir.jpg" },
  ],

  /* --- GOALKEEPER: support team, shown as a photo carousel.
     Names come from the supplied photo filenames. --- */
  goalkeeper: [
    { name: "Anjali Ma'am",   photo: "assets/keeper-anjali-maam.jpg" },
    { name: "Anshul Ma'am",   photo: "assets/keeper-anshul-maam.jpg" },
    { name: "Jaanvi Ma'am",   photo: "assets/keeper-jaanvi-maam.jpg" },
    { name: "Jagriti Ma'am",  photo: "assets/keeper-jagriti-maam.jpg" },
    { name: "Jyoti Ma'am",    photo: "assets/keeper-jyoti-maam.jpg" },
    { name: "Karan Sir",      photo: "assets/keeper-karan-sir.jpg" },
    { name: "Raveena Ma'am",  photo: "assets/keeper-raveena-maam.jpg" },
    { name: "Sumit Sir",      photo: "assets/keeper-sumit-sir.jpg" },
    { name: "Harshita Ma'am", photo: "assets/keeper-harshita-maam.jpg" },
    { name: "Tripti Ma'am",   photo: "assets/keeper-tripti-maam.jpg" },
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

  /* ------- ACHIEVERS carousel (about.html) -------
     Split out of the two 3x3 collage sheets, one badge per file.
     No names attached: none were supplied, and these are children —
     add  name: "..."  to a block only if you have permission to publish
     it, and it will appear as a caption under the photo. */
  achieverBadges: [
    { image: "assets/achiever-01.jpg" },
    { image: "assets/achiever-02.jpg" },
    { image: "assets/achiever-03.jpg" },
    { image: "assets/achiever-04.jpg" },
    { image: "assets/achiever-05.jpg" },
    { image: "assets/achiever-06.jpg" },
    { image: "assets/achiever-07.jpg" },
    { image: "assets/achiever-08.jpg" },
    { image: "assets/achiever-09.jpg" },
    { image: "assets/achiever-10.jpg" },
    { image: "assets/achiever-11.jpg" },
    { image: "assets/achiever-12.jpg" },
    { image: "assets/achiever-13.jpg" },
    { image: "assets/achiever-14.jpg" },
    { image: "assets/achiever-15.jpg" },
    { image: "assets/achiever-16.jpg" },
    { image: "assets/achiever-17.jpg" },
    { image: "assets/achiever-18.jpg" },
  ],

  /* ------- GALLERY carousel (about.html) -------
     Life at the academy. All 3:2 so the frame never jumps.
     caption is optional — leave "" for no label. */
  gallery: [
    { image: "assets/camp-img-9332.jpg", caption: "" },
    { image: "assets/camp-untitled-design-67.jpg", caption: "" },
    { image: "assets/camp-img-1252.jpg", caption: "" },
    { image: "assets/camp-img-9672.jpg", caption: "" },
    { image: "assets/camp-img-1262.jpg", caption: "" },
    { image: "assets/camp-img-9576.jpg", caption: "" },
    { image: "assets/camp-aasz6511.jpg", caption: "" },
    { image: "assets/camp-img-9531.jpg", caption: "" },
    { image: "assets/camp-img-6250.jpg", caption: "" },
    { image: "assets/camp-img-1005.jpg", caption: "" },
    { image: "assets/camp-img-6087.jpg", caption: "" },
    { image: "assets/camp-img-0962.jpg", caption: "" },
    { image: "assets/camp-img-6112.jpg", caption: "" },
    { image: "assets/camp-img-6526.jpg", caption: "" },
    { image: "assets/camp-whatsapp-image-2025-12-27-at-9-18-29-am.jpg", caption: "" },
    { image: "assets/camp-whatsapp-image-2026-01-01-at-10-22-50-pm.jpg", caption: "" },
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
