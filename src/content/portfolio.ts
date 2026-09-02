export type Locale = "fa" | "en";

export const contactInfo = {
  email: "hello@example.com",
  phone: "+98 000 000 0000",
  instagram: "https://instagram.com/mahradmoslem",
  instagramHandle: "@mahradmoslem",
  youtube: "https://youtube.com/@mahradmoslem",
  youtubeHandle: "@mahradmoslem",
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
  cta: { workWithMe: string; explore: string; readStory: string; trainWithMe: string; getInTouch: string; learnMore: string; viewBook: string };
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
  achievements: {
    eyebrow: string;
    title: [string, string];
    stats: [string, string][];
    timelineLabel: string;
    timeline: [string, string, string][];
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
  quote: { text: [string, string]; attribution?: string };
  gallery: {
    eyebrow: string;
    title: string;
    categories: string[];
    items: { category: string; caption: string }[];
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
    form: {
      name: string;
      email: string;
      phone: string;
      experience: string;
      experienceOptions: string[];
      message: string;
    };
  };
};

export const content: Record<Locale, PortfolioContent> = {
  fa: {
    meta: {
      title: "مهراد مسلم | مربی سنگنوردی و کوهنوردی",
      description:
        "مربی حرفه‌ای سنگنوردی، کوهنوردی و نویسنده. بنیان‌گذار آلتیوس بولدر استیشن و باشگاه فرست اسنت.",
    },
    brand: "مهراد مسلم",
    nav: [
      { path: "/about", label: "بیوگرافی" },
      { path: "/books", label: "کتاب‌ها" },
      { path: "/routes-line-map", label: "نقشه خطوط مسیر" },
      { path: "/gallery", label: "گالری" },
      { path: "/contact", label: "تماس با ما" },
      { path: "/training-courses", label: "دوره‌های تمرینی" },
    ],
    navMoreLabel: "بیشتر",
    home: {
      homeLabel: "خانه",
      sectionsEyebrow: "کاوش",
      sectionsTitle: "بخش‌های سایت",
      sections: [
        { path: "/about", title: "بیوگرافی", description: "بیوگرافی، مسیر حرفه‌ای و تجربه در ایران و سوئد." },
        { path: "/books", title: "کتاب‌ها", description: "کتاب‌ها و مقالات در سنگنوردی و کوهنوردی." },
        { path: "/routes-line-map", title: "نقشه خطوط مسیر", description: "مسیرها و دیوارهایی که مهراد مسلم باز کرده و نقشه خطوط آن‌ها را ترسیم کرده است." },
        { path: "/gallery", title: "گالری", description: "عکس‌های دیوار، کوه، سفر و مربیگری." },
        { path: "/contact", title: "تماس با ما", description: "فرم تماس، ایمیل، تلفن و اینستاگرام." },
        { path: "/training-courses", title: "دوره‌های تمرینی", description: "دوره‌های آموزشی سنگنوردی و کوهنوردی." },
      ],
    },
    cta: {
      workWithMe: "همکاری با من",
      explore: "مسیر من",
      readStory: "ادامه داستان",
      trainWithMe: "شروع تمرین",
      getInTouch: "ارسال پیام",
      learnMore: "بیشتر بدانید",
      viewBook: "مشاهده کتاب",
    },
    hero: {
      tagline: "مربی سنگنوردی · کوهنوردی · نویسنده",
      headline: ["آموزش حرفه‌ای.", "صعود مطمئن."],
      intro:
        "بیش از دو دهه تجربه در دیوار، کوه و سالن. از مبتدی تا سطح حرفه‌ای، با برنامه‌ریزی دقیق و دانش فنی عمیق.",
      scroll: "اسکرول کنید",
    },
    about: {
      eyebrow: "داستان",
      title: ["فراتر از یک", "سنگنورد."],
      paragraphs: [
        "مهراد مسلم، متولد ۱۳۷۱ تهران. فعالیت حرفه‌ای سنگنوردی از ۱۳۸۴ آغاز شد. پس از کسب مدرک‌های مقدماتی، به سوئد مهاجرت کرد، در آنجا دانش فنی و اداری خود را در سنگنوردی و کوهنوردی گسترش داد و مدرک فنی‌حرفه‌ای نجاری نیز دریافت کرد.",
        "با بازگشت به ایران، در آموزش سنگنوردان، تأسیس باشگاه‌ها، نویسندگی، مسیرگذاری و مربیگری تیم‌های استانی فعال است. رئیس کمیته سنگنوردی ورزشی استان گیلان و رئیس کمیته استعدادیابی مرکز (رشت) بوده است.",
        "عضو تیم نگارش طرح درس مربیگری رشته سنگنوردی ورزشی فدراسیون کوهنوردی ایران. بیش از ۵۰ مسیر را در ایران باز کرده یا ری‌بولت کرده و در مسیرگذاری دیوارهای بزرگ و سنگنوردی ورزشی گیلان و ایران نقش دارد.",
      ],
    },
    achievements: {
      eyebrow: "به عدد",
      title: ["یک مسیر", "یک دستاورد."],
      stats: [
        ["۵۰+", "مسیر باز شده / ری‌بولت"],
        ["۱۰", "قله بالای ۴۰۰۰ متر"],
        ["۷", "قله زمستانی در دو روز"],
        ["چندین", "کتاب و مقاله"],
      ],
      timelineLabel: "نقاط عطف",
      timeline: [
        ["۱۳۸۴", "شروع سنگنوردی حرفه‌ای", "آغاز مسیر حرفه‌ای در دیوار و کوه."],
        ["سوئد", "تحصیل و تخصص", "گسترش دانش فنی سنگنوردی و کوهنوردی؛ مدرک نجاری از سوئد."],
        ["—", "آلتیوس بولدر استیشن", "بزرگ‌ترین باشگاه بولدر شمال کشور."],
        ["—", "باشگاه فرست اسنت", "تأسیس باشگاه سنگنوردی فرست اسنت."],
        ["—", "صعودهای زمستانی", "صعود زمستانی به دماوند، سبلان و علم‌کوه."],
        ["—", "مسیر گیلانیان، بیستون", "باز کردن مسیر گیلانیان روی دیوار بیستون کرمانشاه."],
        ["—", "HEADLINE، بیستون", "صعود کامل زمستانی مسیر HEADLINE روی بالاترین دیوار ایران."],
        ["—", "علم‌کوه، ۱۶ ساعت", "صعود هر دو مسیر هری رست و کرمانشاهی‌ها در ۱۶ ساعت."],
        ["—", "ریاست کمیته گیلان", "رئیس کمیته سنگنوردی ورزشی استان گیلان."],
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
    quote: {
      text: ["سود و زیان یکی دان،", "چون در قمار مایی"],
    },
    gallery: {
      eyebrow: "یادداشت‌های میدانی",
      title: "زندگی روی سنگ",
      categories: ["همه", "سنگنوردی", "کوه", "سفر", "مربیگری", "پشت صحنه"],
      items: [
        { category: "سنگنوردی", caption: "گرانیت طلایی" },
        { category: "پشت صحنه", caption: "بین تلاش‌ها" },
        { category: "سفر", caption: "خط آلپاین" },
        { category: "کوه", caption: "نور آخر" },
        { category: "کوه", caption: "بالای دره" },
        { category: "مربیگری", caption: "روی لبه تیز" },
      ],
    },
    routeMaps: {
      pageTitle: "نقشه خطوط مسیر",
      title: ["مسیرهای باز شده", "توسط مهراد مسلم."],
      viewWall: "مشاهده دیوار",
      images: "تصویر",
      storyHeading: "داستان",
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
      eyebrow: "همکاری با من",
      title: "آماده‌اید سنگنوردی‌تان را جلو ببرید؟",
      intro:
        "چه تازه شروع کرده باشید چه برای صعود بزرگ بعدی آماده شوید، در تماس باشیم.",
      form: {
        name: "نام",
        email: "ایمیل",
        phone: "تلفن",
        experience: "سطح تجربه",
        experienceOptions: ["مبتدی", "متوسط", "پیشرفته", "حرفه‌ای"],
        message: "پیام",
      },
    },
  },
  en: {
    meta: {
      title: "Mahrad Moslem | Rock Climbing & Mountaineering Coach",
      description:
        "Professional rock climbing coach, mountaineer, and author. Founder of Altius Boulder Station and First Ascent Rock Climbing Club.",
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
      sectionsTitle: "Site sections",
      sections: [
        { path: "/about", title: "Biography", description: "Biography, career path, and experience in Iran and Sweden." },
        { path: "/books", title: "Books", description: "Books and articles on climbing and mountaineering." },
        { path: "/routes-line-map", title: "Route Line Maps", description: "Walls and routes opened by Mahrad Moslem, with his line maps." },
        { path: "/gallery", title: "Gallery", description: "Photos from the wall, mountains, expeditions, and coaching." },
        { path: "/contact", title: "Contact Us", description: "Form, email, phone, and Instagram." },
        { path: "/training-courses", title: "Training Courses", description: "Structured rock climbing and mountaineering courses." },
      ],
    },
    cta: {
      workWithMe: "Work With Me",
      explore: "My Journey",
      readStory: "Read My Story",
      trainWithMe: "Train With Me",
      getInTouch: "Get In Touch",
      learnMore: "Learn More",
      viewBook: "View Book",
    },
    hero: {
      tagline: "Rock Climbing Coach · Mountaineer · Author",
      headline: ["Professional Training.", "Confident Ascents."],
      intro:
        "Over two decades on the wall, in the mountains, and in the gym. From beginner to elite, with precise programming and deep technical knowledge.",
      scroll: "Scroll to explore",
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
    achievements: {
      eyebrow: "By the numbers",
      title: ["One Move", "At a Time."],
      stats: [
        ["50+", "Routes opened / rebolted"],
        ["10", "Summits over 4,000 m"],
        ["7", "Winter summits in 2 days"],
        ["Several", "Books & articles"],
      ],
      timelineLabel: "Selected milestones",
      timeline: [
        ["2005", "Professional climbing begins", "The start of a career on rock and in the mountains."],
        ["Sweden", "Study & specialization", "Expanded climbing and mountaineering expertise; carpentry degree."],
        ["—", "Altius Boulder Station", "The largest bouldering club in northern Iran."],
        ["—", "First Ascent Club", "Founded the First Ascent Rock Climbing Club."],
        ["—", "Winter ascents", "Winter summits of Damavand, Sabalan, and Alam-Kuh."],
        ["—", "Guilanian Route, Bisotun", "Opened the Guilanian Route on the Bisotun wall, Kermanshah."],
        ["—", "HEADLINE, Bisotun", "Full winter ascent of HEADLINE on Iran's highest wall."],
        ["—", "Alam-Kuh, 16 hours", "Both Hari Rost and Kermanshahiha routes in 16 hours."],
        ["—", "Gilan committee head", "Head of the Gilan Province Sport Climbing Committee."],
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
    quote: {
      text: ["سود و زیان یکی دان،", "چون در قمار مایی"],
    },
    gallery: {
      eyebrow: "Field notes",
      title: "Life on the Rock",
      categories: ["All", "Climbing", "Mountains", "Expeditions", "Coaching", "Behind the Scenes"],
      items: [
        { category: "Climbing", caption: "Golden granite" },
        { category: "Behind the Scenes", caption: "Between attempts" },
        { category: "Expeditions", caption: "Alpine line" },
        { category: "Mountains", caption: "Last light" },
        { category: "Mountains", caption: "Above the valley" },
        { category: "Coaching", caption: "On the sharp end" },
      ],
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
      eyebrow: "Work with me",
      title: "Ready to Take Your Climbing Further?",
      intro:
        "Whether you're starting out or preparing for your next major ascent, let's talk.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        experience: "Experience level",
        experienceOptions: ["Beginner", "Intermediate", "Advanced", "Elite"],
        message: "Message",
      },
    },
  },
};
