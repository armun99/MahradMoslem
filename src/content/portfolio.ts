export type Locale = "fa" | "en";

export const contactInfo = {
  email: "Mahrad.moslem@gmail.com",
  phone: "+98 912 034 7365",
  phoneDigits: "989120347365",
  telegram: "https://t.me/Mahrad_mslm",
  telegramHandle: "@Mahrad_mslm",
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
  talentPrograms: {
    pageTitle: string;
    eyebrow: string;
    title: [string, string];
    intro: string;
    comingSoon: string;
    cta: string;
    galleryHeading: string;
    items: { title: string; role: string; description: string }[];
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
      telegram: string;
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
      { path: "/talent-training-design", label: "استعدادیابی، آموزش و طراحی" },
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
        {
          path: "/talent-training-design",
          title: "استعدادیابی، آموزش و طراحی",
          description: "سابقهٔ رسمی در استعدادیابی، آموزش تخصصی و طراحی تمرین و مسیر در گیلان و ایران.",
        },
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
          description: "آشنایی با تجهیزات، حرکات پایه و مقدمات سنگنوردی.",
        },
        {
          title: "تکنیک و قدرت سنگنوردی",
          level: "متوسط",
          description: "بهبود تکنیک، مسیر خوانی، افزایش قدرت اختصاصی و برنامه‌های تمرین.",
        },
        {
          title: "سنگنوردی فضای باز",
          level: "پیشرفته",
          description: "صعود در طبیعت، سیستم‌های پیشرفته، اصول حمایت در سنگنوردی و قضاوت و مدیریت ریسک.",
        },
        {
          title: "کوهنوردی و دیواره نوردی",
          level: "تخصصی",
          description: "آمادگی برای صعودهای کوهستانی ودیواره نوردی با برنامه‌ریزی حرفه‌ای و آشنایی با سیستم‌های کار با طناب",
        },
      ],
    },
    talentPrograms: {
      pageTitle: "استعدادیابی، آموزش و طراحی",
      eyebrow: "سابقه و تجربه",
      title: ["استعدادیابی،", "آموزش و طراحی"],
      intro:
        "این صفحه روایت تجربهٔ عملی است — نه فقط معرفی خدمات. سال‌ها مسئولیت رسمی در استعدادیابی، مربیگری تیم و تست‌های انتخابی، مشارکت در استاندارد آموزشی فدراسیون، و طراحی فنی تمرین و مسیر روی دیواره‌های ایران و گیلان.",
      comingSoon: "محتوای این بخش به‌زودی تکمیل می‌شود.",
      cta: "گفت‌وگو دربارهٔ تجربه و همکاری",
      galleryHeading: "از میدان عمل",
      items: [
        {
          title: "استعدادیابی",
          role: "ریاست کمیتهٔ استعدادیابی مرکز (رشت)",
          description:
            "هدایت فرآیند شناسایی و ارزیابی استعدادهای سنگنوردی در سطح مرکز و استان؛ طراحی نگاه فنی برای سنجش آمادگی، پتانسیل پیشرفت، و انتخاب مسیر مناسب هر سنگنورد. این تجربه در کنار مربیگری تست‌های انتخابی کوهنوردی و دیواره‌نوردی استان گیلان شکل گرفته است.",
        },
        {
          title: "آموزش و مربیگری",
          role: "مربی تیم سنگنوردی استان گیلان",
          description:
            "آموزش و آماده‌سازی سنگنوردان در سطح استانی — از تکنیک و آمادگی تا حضور در تست‌های انتخابی. عضو تیم تألیف طرح درس مربی راهنمای رشتهٔ صعودهای ورزشی فدراسیون کوهنوردی ایران؛ تجربهٔ انتقال دانش هم در میدان و هم در ساختار آموزشی رسمی.",
        },
        {
          title: "طراحی تمرین",
          role: "مدارک طراحی تمرین، بدنسازی و فانکشنال",
          description:
            "طراحی برنامه‌های تمرینی بر پایهٔ علم طراحی تمرین، بدنسازی و بدنسازی فانکشنال — با سابقهٔ کار عملی روی آمادگی اختصاصی سنگنوردی، پیشگیری از آسیب، و برنامه‌ریزی بلندمدت برای پیشرفت واقعی، نه تمرین پراکنده.",
        },
        {
          title: "طراحی مسیر و کروکی",
          role: "گشایش و ترمیم بیش از ۱۰۰ مسیر در ایران و گیلان",
          description:
            "طراحی فنی و گشایش مسیرهای اسپرت و دیواره‌نوردی، تهیه و تنظیم کروکی دیواره‌های گیلان، و ترمیم مسیرهای موجود. این کارنامه شامل دیواره‌های استان و مسیرهایی مانند گشایش مسیر گیلانی‌ها بر بیستون است — تجربهٔ میدانی که روی سنگ ساخته شده، نه فقط روی کاغذ.",
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
        telegram: "تلگرام",
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
      { path: "/talent-training-design", label: "Talent, Training & Design" },
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
        {
          path: "/talent-training-design",
          title: "Talent, Training & Design",
          description: "Proven experience in talent ID, specialist coaching, and training & route design in Gilan and Iran.",
        },
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
      eyebrow: "",
      title: ["Mahrad Moslem", "Tehran, 1992"],
      paragraphs: [
        "He has an associate degree in carpentry from Sweden and graduated in customs administration from Iran. He began climbing professionally in 2005 and after several years of effort and obtaining preliminary climbing qualifications, he immigrated to Sweden. During residence in Sweden, he added to his technical and administrative knowledge in rock climbing and mountaineering, and on returning to Iran has served climbing enthusiasts in areas such as training climbers: Establishment of the largest bouldering club in the north of the country, Altius Boulder Station. First Ascent Rock Climbing Club. Published several books on rock climbing, mountaineering and nature. Member of the team writing the lesson plan for the instructor guide in the sport climbing discipline of the Iranian Mountaineering Federation. Researched and published articles in the fields of rock climbing, canyoning and mountaineering.",
        "Technical route-setting of bigwall climbing and sports climbing routes on the walls of Iran and Gilan, preparation and arrangement of the contours (map-line) of the walls in Gilan, and 4-season bigwall and mountain climbs to various peaks and walls, has an active presence.",
        "His career includes the head of the Gilan Province Sports Climbing Committee and the head of the Talent Search Committee of the Center (Rasht).",
        "Obtaining instructor and coaching certificates in rock climbing, mountaineering, exercise design science, bodybuilding, functional bodybuilding, TRX, and cycle spinning. Ice climbing, dry tooling referee and route setter, mountain running (sky running) referee and route setter are seen.",
        "Some of his efforts include: Ascending 10 summits with heights over 4,000 meters in Alam-Kuh and Takht-e-Suleyman (the most technical climbing region in Iran), successful winter ascents to the summits of Damavand, Sabalan and Alam-Kuh (the highest summits of the country), opening Guilanian Route on Bistoun Kermanshah, winter ascent of the Bisotun Wall from the Eagles' route and a complete winter ascent of the Bisotun Peak's access — HEADLINE route (the highest wall in Iran), ascending both Hari Rost and Kermanshahiha on Alamkuh bigwall in 16 hours and 10 routes on Bistoun wall in 3 days, opening and rebolting more than 50 climbing routes in Iran, member of Guilan’s expedition selection committee, instructor of Guilan’s rock climbing team, winter expeditions to 7 summits in Alamkuh area in two days. Coach of the mountaineering and bigwall climbing selection tests in Gilan Province, coach of the Gilan Province rock climbing team.",
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
          description: "Gear, basic movement, and the fundamentals of rock climbing.",
        },
        {
          title: "Climbing Technique & Strength",
          level: "Intermediate",
          description: "Better technique, route reading, building climbing-specific strength, and training plans.",
        },
        {
          title: "Outdoor Sport Climbing",
          level: "Advanced",
          description:
            "Outdoor ascents, advanced systems, belaying principles in rock climbing, judgment, and risk management.",
        },
        {
          title: "Mountaineering & Bigwall Climbing",
          level: "Specialist",
          description:
            "Preparation for mountain and bigwall climbs with professional planning and familiarity with rope-work systems.",
        },
      ],
    },
    talentPrograms: {
      pageTitle: "Talent, Training & Design",
      eyebrow: "Track record",
      title: ["Talent,", "Training & Design"],
      intro:
        "This page is about proven experience — not a brochure. Years of official responsibility in talent identification, provincial team and selection-test coaching, federation instructor curriculum work, and technical design of training and routes across Iran and Gilan.",
      comingSoon: "Content for this section will be added soon.",
      cta: "Talk about experience & collaboration",
      galleryHeading: "From the field",
      items: [
        {
          title: "Talent identification",
          role: "Head of the Talent Search Committee — Rasht Center",
          description:
            "Led talent identification and assessment for climbers at city and provincial level — building a technical approach to readiness, potential, and the right development path. Reinforced by coaching Gilan’s mountaineering and bigwall selection tests.",
        },
        {
          title: "Coaching & education",
          role: "Coach of the Gilan Province rock climbing team",
          description:
            "Trained and prepared climbers at provincial level — from movement and conditioning to selection-test readiness. Member of the team writing the instructor lesson plan for sport climbing at the Iranian Mountaineering Federation: experience both in the field and in formal coaching standards.",
        },
        {
          title: "Training design",
          role: "Credentials in exercise design, bodybuilding & functional training",
          description:
            "Built training plans from exercise-design science, strength conditioning, and functional training — with a track record of climbing-specific preparation, injury prevention, and long-term programming for real progress, not scattered workouts.",
        },
        {
          title: "Route & topo design",
          role: "Opened or restored 100+ routes in Iran and Gilan",
          description:
            "Technical design and first ascents of sport and bigwall routes, line maps for Gilan walls, and restoration of existing lines — including work such as the Guilanian Route on Bisotun. Experience made on rock, not only on paper.",
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
      title: "Contact Us",
      intro: "",
      channels: {
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        email: "Email",
        telegram: "Telegram",
      },
    },
  },
};
