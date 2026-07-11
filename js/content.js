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

  /* ---------------- COURSES (courses.html) ----------------
     label   = small caption on the photo
     tags    = the little red pills
     button  = text on the button
     accent  = true makes the button solid red, false = outline */
  courses: [
    {
      title: "Sainik School · RMS · RIMC",
      label: "FLAGSHIP PROGRAM",
      image: "assets/gallery-4.jpg",
      desc: "Complete AISSEE and RIMC entrance preparation — Mathematics, English, GK, Intelligence and interview readiness. Weekly mock tests, ranked leaderboards and no mercy on weak fundamentals.",
      tags: ["Online", "Offline", "Digital"],
      button: "Enroll Now",
      accent: true,
    },
    {
      title: "NDA · CDS · SSB",
      label: "OFFICER TRACK",
      image: "assets/gallery-2.jpg",
      desc: "Officer-grade preparation for written exams plus the full SSB assault course — psychology tests, GTO tasks and personal interview drills that break you down and rebuild you as selection material.",
      tags: ["Online", "Offline", "Hybrid"],
      button: "Enroll Now",
      accent: true,
    },
    {
      title: "Career Guidance",
      label: "STRATEGY DESK",
      image: "assets/gallery-6.jpg",
      desc: "ASIS Certification and PMR guidance for structured career mapping — for aspirants and parents charting the smartest route into the forces and beyond.",
      tags: ["ASIS Certification", "PMR Guidance"],
      button: "Know More",
      accent: false,
    },
    {
      title: "Digital Courses",
      label: "SELF-PACED",
      image: "assets/gallery-7.jpg",
      desc: "Self-paced recorded ammunition for Sainik School, RIMC and RMS — structured video lectures and workbooks. Train from anywhere, anytime, at your own command.",
      tags: ["Sainik School", "RIMC", "RMS"],
      button: "Buy Now",
      accent: false,
    },
  ],

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
