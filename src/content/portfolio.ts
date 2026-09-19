export type Locale = "fa" | "en";

export const contactInfo = {
  email: "Mahrad.moslem@gmail.com",
  phone: "+98 912 034 7365",
  phoneDigits: "989120347365",
  telegram: "https://t.me/Mahrad13",
  telegramHandle: "@Mahrad13",
  whatsapp: "https://wa.me/989120347365",
  whatsappDisplay: "+98 912 034 7365",
  instagram: "https://www.instagram.com/mahrad.mslm",
  instagramHandle: "@mahrad.mslm",
  youtube: "https://youtube.com/@Mahrad_Mslm",
  youtubeHandle: "@Mahrad_Mslm",
};

type CoachingIcon =
  | "mountain"
  | "dumbbell"
  | "brain"
  | "route"
  | "shield"
  | "target"
  | "book";

export type PortfolioContent = {
  meta: { title: string; description: string };
  brand: string;
  nav: { path: string; label: string }[];
  navMoreLabel: string;
  home: {
    homeLabel: string;
    sectionsEyebrow: string;
    sectionsTitle: string;
    sections: { path: string; title: string; description: string }[];
  };
  cta: { workWithMe: string; explore: string; trainWithMe: string; getInTouch: string; learnMore: string; viewBook: string };
  hero: {
    tagline: string;
    headline: [string, string];
    intro: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: [string, string];
    paragraphs: string[];
  };
  clubs: {
    eyebrow: string;
    title: [string, string];
    intro: string;
    items: { name: string; role: string; description: string }[];
  };
  books: {
    eyebrow: string;
    title: [string, string];
    intro: string;
  };
  coaching: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { icon: CoachingIcon; title: string; description: string }[];
  };
  trainingCourses: {
    pageTitle: string;
    eyebrow: string;
    title: [string, string];
    intro: string;
    levelLabel: string;
    enrollCta: string;
    items: { title: string; level: string; description: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
  };
  routeMaps: {
    pageTitle: string;
    title: [string, string];
    viewWall: string;
    images: string;
    storyHeading: string;
    imagesHeading: string;
    previous: string;
    next: string;
    close: string;
  };
  expeditions: {
    eyebrow: string;
    title: [string, string];
    featured: {
      locationTag: string;
      label: string;
      title: string;
      location: string;
      difficulty: string;
      locationLabel: string;
      difficultyLabel: string;
      story: string;
      cta: string;
    };
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: [string, string, string][];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    channels: {
      whatsapp: string;
      instagram: string;
      email: string;
      youtube: string;
    };
  };
};

export const content: Record<Locale, PortfolioContent> = {
  fa: {
    meta: {
      title: "مهراد مسلم | مربی سنگنوردی رشت و گیلان",
      description:
        "مربی سنگنوردی و کوهنوردی در رشت و گیلان. آموزش سنگنوردی، دوره‌های تمرینی، کروکی مسیرها، بنیان‌گذار آلتیوس بولدر استیشن و باشگاه فرست اسنت.",
    },
    brand: "مهراد مسلم",
    nav: [
      { path: "/about", label: "بیوگرافی" },
      { path: "/books", label: "کتاب‌ها" },
      { path: "/routes-line-map", label: "کروکی مسیرها" },
      { path: "/gallery", label: "گالری" },
      { path: "/contact", label: "راه‌های ارتباطی" },
      { path: "/training-courses", label: "دوره‌های تمرینی" },
    ],
    navMoreLabel: "بیشتر",
    home: {
      homeLabel: "خانه",
      sectionsEyebrow: "کاوش",
      sectionsTitle: "سنگنوردی و کوهنوردی در رشت و گیلان",
      sections: [
        { path: "/about", title: "بیوگرافی", description: "بیوگرافی مربی سنگنوردی رشت؛ مسیر حرفه‌ای در ایران و سوئد." },
        { path: "/books", title: "کتاب‌ها", description: "کتاب‌ها و مقالات در سنگنوردی و کوهنوردی." },
        { path: "/routes-line-map", title: "کروکی مسیرها", description: "کروکی دیواره‌های گیلان و مسیرهایی که مهراد مسلم باز کرده است." },
        { path: "/gallery", title: "گالری", description: "عکس‌های دیوار، کوه، سفر و مربیگری در گیلان." },
        { path: "/contact", title: "راه‌های ارتباطی", description: "تماس با مربی سنگنوردی رشت." },
        { path: "/training-courses", title: "دوره‌های تمرینی", description: "آموزش و دوره‌های سنگنوردی در رشت و گیلان." },
      ],
    },
    cta: {
      workWithMe: "راه‌های ارتباطی",
      explore: "مسیر من",
      trainWithMe: "شروع تمرین",
      getInTouch: "ارسال پیام",
      learnMore: "بیشتر بدانید",
      viewBook: "مشاهده کتاب",
    },
    hero: {
      tagline: "",
      headline: ["هر مسیر، یک چالش.", "هر صعود، یک داستان."],
      intro: "",
      scroll: "",
    },
    about: {
      eyebrow: "داستان",
      title: ["مهراد مسلم", "ایران، تهران ۱۳۷۱"],
      paragraphs: [
        "دانش‌آموختهٔ رشتهٔ چوب (نجاری) از کشور سوئد و فارغ‌التحصیل رشتهٔ مدیریت گمرک در ایران است. او سنگنوردی را از سال ۱۳۸۴ به صورت حرفه‌ای آغاز کرد و پس از چند سال کوشش و کسب مدارک مقدماتی سنگنوردی به کشور سوئد مهاجرت کرد.",
        "وی در سال‌های مهاجرت به کشور سوئد به دانش فنی و توانمندی‌های تکنیکی و اجرایی خود در سنگنوردی و کوهنوردی افزود و در بازگشت به ایران در زمینهٔ آموزش به علاقه‌مندان سنگنوردی حضور فعال دارد: تأسیس بزرگ‌ترین باشگاه سنگنوردی بلدرینگ شمال کشور، آلتیوس بولدر استیشن؛ باشگاه سنگنوردی صعود اول؛ انتشار چند کتاب با موضوعات سنگنوردی، کوهنوردی و طبیعت؛ عضو تیم تألیف طرح درس مربی راهنمای رشتهٔ صعودهای ورزشی فدراسیون کوهنوردی ایران؛ و تحقیق و انتشار مقالات در زمینه‌های سنگنوردی، دره‌نوردی و کوهنوردی.",
        "در طراحی‌های فنی و گشایش مسیرهای دیواره‌نوردی و اسپرت بر دیواره‌های ایران و گیلان، تهیه و تنظیم کروکی دیواره‌های گیلان، و صعودهای چهارفصل دیواره‌ای و کوهستانی به قلل و دیواره‌های گوناگون حضور فعال دارد.",
        "در کارنامهٔ وی ریاست کمیتهٔ صعودهای ورزشی استان گیلان، ریاست کمیتهٔ استعدادیابی مرکز (رشت)، کسب مدارک مربیگری سنگنوردی، کوهنوردی، علم طراحی تمرین، بدنسازی، بدنسازی فانکشنال، تی‌آر‌ایکس، سایکل اسپینینگ، و داور و طراح یخنوردی و درای‌تولینگ و داور و طراح دوی کوهستان دیده می‌شود.",
        "برخی از کوشش‌های ورزشی وی عبارتند از: صعود به ۱۰ قلهٔ بیش از چهار هزار متر در منطقهٔ علم‌کوه و تخت سلیمان (فنی‌ترین منطقهٔ کوهستانی ایران)؛ صعودهای موفق زمستانی به قله‌های دماوند، سبلان و علم‌کوه (بلندترین قله‌های ایران)؛ گشایش مسیر گیلانی‌ها بر دیوارهٔ بیستون کرمانشاه؛ صعود زمستانی دیوارهٔ بیستون از مسیر عقاب‌ها و پیمایش کامل زمستانهٔ خط‌الرس قلهٔ بیستون (بلندترین دیوارهٔ ایران)؛ صعود دو مسیر هاری‌روست و کرمانشایی‌ها در ۱۶ ساعت بر دیوارهٔ علم‌کوه (فنی‌ترین دیوارهٔ ایران)؛ صعود ۱۰ مسیر بر دیوارهٔ بیستون در ۳ روز؛ گشایش و ترمیم بیش از ۱۰۰ مسیر سنگنوردی در ایران و گیلان؛ صعود تیمی زمستانه به ۷ قله در منطقهٔ علم‌کوه در ۲ روز؛ مربی تست‌های انتخابی کوهنوردی و دیواره‌نوردی استان گیلان؛ و مربی تیم سنگنوردی استان گیلان.",
      ],
    },
    clubs: {
      eyebrow: "باشگاه‌ها",
      title: ["جایی که", "سنگنوردان رشد می‌کنند."],
      intro:
        "بنیان‌گذاری و مدیریت باشگاه‌هایی که زیرساخت واقعی برای آموزش و پیشرفت سنگنوردان در شمال ایران فراهم کرده‌اند.",
      items: [
        {
          name: "آلتیوس بولدر استیشن",
          role: "بنیان‌گذار",
          description:
            "بزرگ‌ترین باشگاه بولدر در شمال کشور. فضایی برای تمرین، رقابت و پرورش نسل جدید سنگنوردان.",
        },
        {
          name: "باشگاه فرست اسنت",
          role: "بنیان‌گذار",
          description:
            "باشگاه سنگنوردی با تمرکز بر آموزش فنی، آمادگی دیوار و کوه، و همراهی سنگنوردان در مسیر پیشرفت.",
        },
      ],
    },
    books: {
      eyebrow: "کتاب‌ها و نوشتار",
      title: ["دانشی که", "ارث می‌ماند."],
      intro:
        "کتاب‌های منتشرشده مهراد مسلم در زمینه سنگنوردی، کوهنوردی و طبیعت.",
    },
    coaching: {
      eyebrow: "فلسفه مربیگری",
      title: "سنگنوردی فقط قدرت نیست.",
      intro:
        "پیشرفت واقعی از ترکیب تکنیک، قدرت، انضباط ذهنی، خواندن مسیر، ایمنی و شناخت حدود خودتان می‌آید.",
      items: [
        { icon: "mountain", title: "تکنیک سنگنوردی", description: "حرکت کارآمد و دقیق در هر سبک دیوار." },
        { icon: "dumbbell", title: "قدرت و آمادگی", description: "قدرت اختصاصی سنگنوردی بدون از دست دادن انعطاف." },
        { icon: "brain", title: "تمرین ذهنی", description: "تبدیل ترس و تردید به تمرکز و تصمیم‌گیری بهتر." },
        { icon: "route", title: "خواندن مسیر", description: "دیدن سکانس‌ها زودتر، صرفه‌جویی در انرژی." },
        { icon: "shield", title: "ایمنی فضای باز", description: "قضاوت درست، سیستم‌ها و احترام به محیط." },
        { icon: "target", title: "مربیگری عملکرد", description: "مسیر مشخص از سطح فعلی تا پیشرفت بعدی." },
        { icon: "book", title: "گواهینامه‌ها", description: "مربیگری سنگنوردی، کوهنوردی، طراحی تمرین، بدنسازی، TRX و داوری مسیر." },
      ],
    },
    gallery: {
      eyebrow:  "",
      title: "",
    },
    routeMaps: {
      pageTitle: "کروکی مسیرها",
      title: ["", ""],
      viewWall: "مشاهده دیوار",
      images: "تصویر",
      storyHeading: "",
      imagesHeading: "تصاویر",
      previous: "تصویر قبلی",
      next: "تصویر بعدی",
      close: "بستن",
    },
    trainingCourses: {
      pageTitle: "دوره‌های تمرینی",
      eyebrow: "آموزش",
      title: ["دوره‌های", "تمرینی."],
      intro:
        "دوره‌های ساختارمند برای سنگنوردان در سطوح مختلف — از مقدماتی تا پیشرفته — با تمرکز بر تکنیک، ایمنی و پیشرفت پایدار.",
      levelLabel: "سطح",
      enrollCta: "ثبت‌نام / اطلاعات بیشتر",
      items: [
        {
          title: "سنگنوردی مقدماتی",
          level: "مبتدی",
          description: "آشنایی با تجهیزات، بندبازی، حرکت پایه و ایمنی در دیوار.",
        },
        {
          title: "تکنیک و قدرت سنگنوردی",
          level: "متوسط",
          description: "بهبود تکنیک، خواندن مسیر، قدرت اختصاصی و برنامه تمرین.",
        },
        {
          title: "سنگنوردی فضای باز",
          level: "پیشرفته",
          description: "صعود در طبیعت، سیستم‌های پیشرفته، قضاوت و مدیریت ریسک.",
        },
        {
          title: "کوهنوردی و دیوار بزرگ",
          level: "تخصصی",
          description: "آمادگی برای صعودهای کوهستانی و دیوارهای بزرگ با برنامه‌ریزی حرفه‌ای.",
        },
      ],
    },
    expeditions: {
      eyebrow: "سفر و صعود",
      title: ["خطوطی که", "مرا ساختند."],
      featured: {
        locationTag: "دیوار بیستون",
        label: "صعود زمستانی · کرمانشاه",
        title: "HEADLINE",
        location: "بیستون، ایران",
        difficulty: "دیوار بزرگ · زمستان",
        locationLabel: "مکان",
        difficultyLabel: "درجه",
        story:
          "صعود کامل زمستانی مسیر HEADLINE روی قله دسترسی بیستون، بالاترین دیوار ایران. همچنین صعود زمستانی از مسیر عقاب‌ها و باز کردن مسیر گیلانیان. در علم‌کوه، صعود هر دو مسیر هری رست و کرمانشاهی‌ها در ۱۶ ساعت و ۱۰ مسیر روی دیوار بیستون در ۳ روز.",
        cta: "جزئیات بیشتر",
      },
    },
    testimonials: {
      eyebrow: "صدای دیوار",
      title: "اعتماد، کسب می‌شود",
      items: [
        ["مربیگری او نحوه برخورد من با حرکت سخت را عوض کرد. آرام، دقیق و شخصی.", "نام شاگرد", "سنگنورد ورزشی"],
        ["ترکیبی نادر از تجربه و فروتنی. فکر کردن را یاد می‌دهد، نه فقط قوی‌تر کشیدن.", "نام سنگنورد", "هم‌سفر"],
        ["بعد از هر جلسه برنامه روشن‌تر و اعتماد بیشتری به تصمیم‌هایم داشتم.", "نام مراجع", "سنگنورد فضای باز"],
      ],
    },
    contact: {
      eyebrow: "",
      title: "راه‌های ارتباطی",
      intro: "",
      channels: {
        whatsapp: "واتساپ",
        instagram: "اینستاگرام",
        email: "ایمیل",
        youtube: "یوتیوب",
      },
    },
  },
  en: {
    meta: {
      title: "Mahrad Moslem | Rock Climbing Coach in Rasht, Gilan",
      description:
        "Professional rock climbing and mountaineering coach in Rasht, Gilan. Training courses, route line maps, founder of Altius Boulder Station and First Ascent Club.",
    },
    brand: "Mahrad Moslem",
    nav: [
      { path: "/about", label: "Biography" },
      { path: "/books", label: "Books" },
      { path: "/routes-line-map", label: "Route Line Maps" },
      { path: "/gallery", label: "Gallery" },
      { path: "/contact", label: "Contact Us" },
      { path: "/training-courses", label: "Training Courses" },
    ],
    navMoreLabel: "More",
    home: {
      homeLabel: "Home",
      sectionsEyebrow: "Explore",
      sectionsTitle: "Rock climbing & coaching in Rasht, Gilan",
      sections: [
        { path: "/about", title: "Biography", description: "Biography of a Rasht rock climbing coach — career in Iran and Sweden." },
        { path: "/books", title: "Books", description: "Books and articles on climbing and mountaineering." },
        { path: "/routes-line-map", title: "Route Line Maps", description: "Gilan wall line maps and routes opened by Mahrad Moslem." },
        { path: "/gallery", title: "Gallery", description: "Photos from the wall, mountains, and coaching in Gilan." },
        { path: "/contact", title: "Contact Us", description: "Contact a rock climbing coach in Rasht." },
        { path: "/training-courses", title: "Training Courses", description: "Rock climbing training courses in Rasht and Gilan." },
      ],
    },
    cta: {
      workWithMe: "Contact Us",
      explore: "My Journey",
      trainWithMe: "Train With Me",
      getInTouch: "Get In Touch",
      learnMore: "Learn More",
      viewBook: "View Book",
    },
    hero: {
      tagline: "",
      headline: ["Every route tells a story.", "This is mine."],
      intro: "",
      scroll: "",
    },
    about: {
      eyebrow: "The story",
      title: ["More Than a", "Climber."],
      paragraphs: [
        "Mahrad Moslem was born in Tehran in 1992. He began climbing professionally in 2005, earned preliminary qualifications, then moved to Sweden where he expanded his technical and administrative knowledge in rock climbing and mountaineering, and completed an associate degree in carpentry.",
        "After returning to Iran, he trains climbers, founded major clubs, writes books, sets routes, and coaches provincial teams. He served as head of the Gilan Province Sport Climbing Committee and head of the Talent Search Committee in Rasht.",
        "He is a member of the team writing the instructor lesson plan for sport climbing in the Iranian Mountaineering Federation. He has opened or rebolted more than 50 routes in Iran and works on bigwall and sport route-setting across Gilan and the country.",
      ],
    },
    clubs: {
      eyebrow: "Clubs",
      title: ["Where Climbers", "Grow."],
      intro:
        "Founding and leading clubs that built real infrastructure for training and progression in northern Iran.",
      items: [
        {
          name: "Altius Boulder Station",
          role: "Founder",
          description:
            "The largest bouldering club in the north of the country. A space for training, competition, and developing the next generation.",
        },
        {
          name: "First Ascent Rock Climbing Club",
          role: "Founder",
          description:
            "A climbing club focused on technical training, wall and mountain preparation, and guiding climbers toward progress.",
        },
      ],
    },
    books: {
      eyebrow: "Books & writing",
      title: ["Knowledge Worth", "Passing On."],
      intro: "Books published by Mahrad Moslem on rock climbing, mountaineering, and nature.",
    },
    coaching: {
      eyebrow: "Coaching philosophy",
      title: "Climbing Is Not Just About Strength.",
      intro:
        "Real progress comes from balancing technique, strength, mental discipline, route reading, safety, and knowing your limits.",
      items: [
        { icon: "mountain", title: "Climbing Technique", description: "Efficient, precise movement across every style of rock." },
        { icon: "dumbbell", title: "Strength & Conditioning", description: "Climbing-specific power without losing mobility." },
        { icon: "brain", title: "Mental Training", description: "Turn fear and doubt into focus and better decisions." },
        { icon: "route", title: "Route Reading", description: "See sequences early and conserve energy on the wall." },
        { icon: "shield", title: "Outdoor Safety", description: "Sound judgment, systems, and respect for the environment." },
        { icon: "target", title: "Performance Coaching", description: "A clear path from your current level to the next breakthrough." },
        { icon: "book", title: "Certifications", description: "Rock climbing, mountaineering, exercise design, bodybuilding, TRX, and route-setting referee credentials." },
      ],
    },
    gallery: {
      eyebrow: "Field notes",
      title: "Life on the Rock",
    },
    routeMaps: {
      pageTitle: "Route Line Maps",
      title: ["Routes Opened", "by Mahrad Moslem."],
      viewWall: "View wall",
      images: "images",
      storyHeading: "Story",
      imagesHeading: "Images",
      previous: "Previous image",
      next: "Next image",
      close: "Close",
    },
    trainingCourses: {
      pageTitle: "Training Courses",
      eyebrow: "Education",
      title: ["Training", "Courses."],
      intro:
        "Structured programs for climbers at every level — from beginner to advanced — focused on technique, safety, and steady progress.",
      levelLabel: "Level",
      enrollCta: "Enroll / Learn more",
      items: [
        {
          title: "Intro to Rock Climbing",
          level: "Beginner",
          description: "Gear, belaying, fundamental movement, and wall safety.",
        },
        {
          title: "Climbing Technique & Strength",
          level: "Intermediate",
          description: "Better movement, route reading, climbing-specific strength, and training plans.",
        },
        {
          title: "Outdoor Sport Climbing",
          level: "Advanced",
          description: "Real rock ascents, advanced systems, judgment, and risk management.",
        },
        {
          title: "Mountaineering & Big Wall",
          level: "Specialist",
          description: "Preparation for alpine objectives and big walls with professional planning.",
        },
      ],
    },
    expeditions: {
      eyebrow: "Expeditions / Journey",
      title: ["Lines That", "Shaped Me."],
      featured: {
        locationTag: "Bisotun Wall",
        label: "Winter ascent · Kermanshah",
        title: "HEADLINE",
        location: "Bisotun, Iran",
        difficulty: "Bigwall · Winter",
        locationLabel: "Location",
        difficultyLabel: "Grade",
        story:
          "Full winter ascent of HEADLINE on the Bisotun access peak, the highest wall in Iran. Also winter ascent via the Eagles' route and the first ascent of the Guilanian Route. On Alam-Kuh, both Hari Rost and Kermanshahiha in 16 hours, and 10 routes on the Bisotun wall in 3 days.",
        cta: "Explore Journey",
      },
    },
    testimonials: {
      eyebrow: "Voices from the wall",
      title: "Trust Is Earned",
      items: [
        ["His coaching changed how I approach hard movement. Calm, precise, and deeply personal.", "Student Name", "Sport climber"],
        ["A rare mix of experience and humility. He teaches you to think, not just pull harder.", "Climber Name", "Expedition partner"],
        ["After every session I had a clearer plan and more confidence in my decisions.", "Client Name", "Outdoor climber"],
      ],
    },
    contact: {
      eyebrow: "",
      title: "Get in Touch",
      intro: "",
      channels: {
        telegram: "Telegram",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        email: "Email",
      },
    },
  },
};
