// data.js — Plasticology 2nd Edition 2026
const REVIEWS_API_URL = 'https://script.google.com/macros/s/AKfycbwFOrAT-iglbDfcilsB3fNFiF0iLhV_HUAQB8KevdhXh8Y-JQv2izZBP7xlYhWNxOOmRA/exec';

const R2 = 'https://pub-fb0d46cb77cb4e22b5863540fe118da4.r2.dev/Plasticology%202nd%20ED%202026%20Samples';

const SERIES_INTRO_URL = R2 + '/V1/2nd%20ED%20General%20Intro.pdf';

const BOOK_SET = {
  title: 'The Complete Plasticology Series',
  subtitle: 'All 3 Volumes — 2026 Second Edition',
  volumes: 3,
  pages: '1,200+',
  chapters: '56',
  lectureHours: '192+',
  mcqs: '11,000+',
};

const BOOKS = [
  {
    id: 'book1',
    title: 'Volume 1',
    subtitle: 'Fundamentals · Burns · Skin · Breast',
    color: '#7c3aed',
    cover:      R2 + '/V1/V1%20Front.JPG',
    backCover:  R2 + '/V1/V1%20Back.JPG',
    introUrl:   R2 + '/V1/V1%20Intro.pdf',
    samplesUrl: R2 + '/V1/V1%20Samples.pdf',
    indexUrl:   R2 + '/V1/V1%20Index.pdf',
    chapters: [
      'Principles & History of Plastic Surgery',
      'Skin Anatomy, Physiology & Wound Healing',
      'Flaps — Classification, Design & Management',
      'Grafts — Skin, Bone, Cartilage, Composite, Fat, Tendon & Nerve',
      'Tissue Expansion, NPWT, Lasers & Biomaterials',
      'Anesthesia & Modern Technology in Plastic Surgery',
      'Burn — Pathophysiology, Resuscitation & Acute Care',
      'Specialized Burn Categories',
      'Burn Reconstruction',
      'Skin Lesions & Cutaneous Malignancies',
      'Vascular Anomalies, Lymphedema & Tattoos',
      'Breast — Anatomy, Development & Clinical Evaluation',
      'Male Breast Pathologies',
      'Breast Tumors — Benign, Premalignant & Malignant',
      'Breast Reconstruction & Nipple-Areolar Reconstruction',
      'Reduction, Augmentation & Mastopexy',
      'Ethics, The Law & Medical Statistics',
      'Exam Strategy — Written & MCQ',
    ],
  },
  {
    id: 'book2',
    title: 'Volume 2',
    subtitle: 'Trunk · Lower Limb · Genitourinary · Hand & Upper Extremity',
    color: '#0891b2',
    cover:      R2 + '/V2/V2%20Front.JPG',
    backCover:  R2 + '/V2/V2%20Back.JPG',
    introUrl:   R2 + '/V2/V2%20Intro.pdf',
    samplesUrl: R2 + '/V2/V2%20Samples.pdf',
    indexUrl:   R2 + '/V2/V2%20Index.pdf',
    chapters: [
      'Thoracic Reconstruction',
      'Abdominal Reconstruction',
      'Pressure Sores — Diagnosis & Management',
      'Lower Limb Trauma & Reconstruction',
      'Chronic Ulcers & The Diabetic Foot',
      'Necrotizing Soft Tissue Infections (NSTI)',
      'Genitourinary Reconstruction & Gender Affirmation Surgery',
      'Hand & Wrist Examination, Applied Anatomy & Basic Principles',
      'Tendon Injuries & Pathologies',
      'Amputation, Replantation, Fingertip & Nail Bed Injuries',
      'Principles of Microsurgery, Replantation & Hand Transplantation',
      'Nerve Injuries, Compression Syndromes & Tendon Transfers',
      'Fractures & Dislocations of the Hand & Wrist',
      'Congenital Upper Extremity Anomalies & Thumb Reconstruction',
      'Brachial Plexus Injury',
      'Hand Infections, Compartment Syndrome & High-Pressure Injection Injuries',
      "Rheumatoid Arthritis, Osteoarthritis, Dupuytren's Contracture & Hand Tumors",
    ],
  },
  {
    id: 'book3',
    title: 'Volume 3',
    subtitle: 'Head & Neck · Aesthetic Surgery',
    color: '#db2777',
    cover:      R2 + '/V3/V3%20Front.JPG',
    backCover:  R2 + '/V3/V3%20Back.JPG',
    introUrl:   R2 + '/V3/V3%20Intro.pdf',
    samplesUrl: R2 + '/V3/V3%20Samples.pdf',
    indexUrl:   R2 + '/V3/V3%20Index.pdf',
    chapters: [
      'Head & Neck Embryology',
      'Congenital Ear & Otoplasty',
      'Cleft Lip & Congenital Nasal Anomalies',
      'Cleft Palate & Velopharyngeal Insufficiency',
      'Craniosynostosis, Craniofacial Clefts & Distraction Osteogenesis',
      'Face & Neck Anatomy & Facial Paralysis',
      'Head & Neck Masses & Swellings',
      'Head & Neck SCC — Workup, Staging & Treatment',
      'Head & Neck Reconstruction by Anatomic Region',
      'Facial Trauma & Skeletal Fractures',
      'Orthognathic Surgery',
      'Scalp, Calvarial, Eyelid & Nasal Reconstruction',
      'Lip & Cheek Reconstruction & Surgical Treatment of Migraine',
      'Facial Analysis & Facelift',
      'Blepharoplasty, Brow Lift & Rhinoplasty',
      'Genioplasty',
      'Body Contouring, Liposuction & Fat Injection',
      'Gluteal Augmentation & Body Lift',
      'Nonoperative Facial Rejuvenation, Fillers & Botox',
      'Noninvasive Body Contouring, Hair Transplantation & Female Genital Plastic Surgery',
      'Complications, Pain Management & Body Dysmorphic Disorder',
    ],
  },
];

const PLATFORM_FEATURES = [
  { icon: '🔍', title: 'Global Search Engine', en: 'Search any keyword across all MCQs and lectures instantly.', ar: 'ابحث عن أي كلمة داخل آلاف الأسئلة والمحاضرات في ثوانٍ.' },
  { icon: '🧠', title: 'Anki Flashcards',      en: 'Spaced repetition system — wrong answers come back until you get them right.', ar: 'نظام المراجعة المتباعدة — الأسئلة التي أخطأت فيها تعود تلقائياً.' },
  { icon: '🎯', title: 'Exam Simulator',        en: '100-question timed mock exams with full simulation of real conditions.', ar: 'محاكاة اختبارات حقيقية بمئة سؤال وضغط الوقت الفعلي.' },
  { icon: '🏥', title: 'OSCE Clinical Bank',    en: 'Full library of clinical scenarios mirroring real practical exams.', ar: 'بنك حالات إكلينيكية كاملة تحاكي الامتحانات العملية الفعلية.' },
  { icon: '🎙️', title: 'Plasticology Radio',   en: 'Audio recap library — revise while commuting, no screen needed.', ar: 'مكتبة صوتية للمراجعة السريعة — ذاكر أثناء التنقل بدون شاشة.' },
  { icon: '🐛', title: 'Mistake Hunter',         en: 'Auto-collects every wrong answer into targeted retry sessions.', ar: 'يجمع كل أخطائك ويبني منها جلسة مراجعة مستهدفة.' },
  { icon: '📊', title: 'Performance Analytics',  en: 'Charts, strength/weakness breakdown, and live Leaderboard ranking.', ar: 'رسوم بيانية للأداء وتحليل نقاط القوة والضعف مع الترتيب المباشر.' },
  { icon: '⚔️', title: 'Battle Arena',           en: 'Live real-time quiz duels against colleagues — earn bonus XP.', ar: 'تحديات مباشرة مع الزملاء في الوقت الفعلي مع نقاط إضافية.' },
];

const CURRICULUM = [
  { name: 'Fundamentals',                                hours: 22, vol: 1 },
  { name: 'Burn & Skin Lesions',                         hours: 18, vol: 1 },
  { name: 'Breast',                                      hours: 18, vol: 1 },
  { name: 'Head & Neck Congenitals',                     hours: 28, vol: 3 },
  { name: 'Head & Neck Trauma & Tumors',                 hours: 28, vol: 3 },
  { name: 'Upper Limb Congenitals & Pathologies',        hours: 22, vol: 2 },
  { name: 'Upper Limb Trauma & Reconstruction',          hours: 22, vol: 2 },
  { name: 'Lower Limb Anatomy, Trauma & Reconstruction', hours: 17, vol: 2 },
  { name: 'Chest, Trunk & Genitourinary',                hours: 17, vol: 2 },
  { name: 'Aesthetics',                                  hours: 0,  vol: 3, comingSoon: true },
];

const SERIAL_CODE_INFO = {
  location: 'Inside the back cover of Volume 1',
  gift: 'Exclusive platform features & access',
  moreGifts: true,
};

const FAQ_DATA = [
  {
    q: '🎁 Where is the serial code and what does it unlock?',
    ar_q: 'أين الكود السري وماذا يفتح؟',
    a: "The unique serial code is printed on a sticker inside the back cover of Volume 1. Enter it on the login page or in your Profile after signing up — it unlocks a free gift and bonus platform access. Some codes carry surprise rewards beyond the standard gift!",
    ar_a: 'الكود السري مطبوع على ملصق داخل الغلاف الخلفي للجزء الأول. أدخله في صفحة تسجيل الدخول أو في بروفايلك بعد إنشاء الحساب — يفتح لك هدية مجانية وامتيازات إضافية على المنصة.',
    highlight: true,
  },
  {
    q: 'I have a serial code but no account — how do I use it?',
    ar_q: 'عندي كود لكن ما عندي حساب — كيف أستخدمه؟',
    a: 'On the login page, tap "Have a book serial code?" to expand the field, enter your code, then tap "Save Code". Create your account (or log in if you already have one) — the code is applied automatically.',
    ar_a: 'في صفحة تسجيل الدخول، اضغط على "عندك كود كتاب؟" وأدخل الكود، ثم اضغط "حفظ الكود". أنشئ حسابك (أو سجل دخولك إن كان لديك حساب) — يتطبق الكود تلقائياً.',
  },
  {
    q: 'Can I use the serial code if I already have an existing account?',
    ar_q: 'هل يمكن استخدام الكود وأنا عندي حساب قديم؟',
    a: 'Yes. Go to your Profile page after logging in → "Secret Access" section → enter the code. It works on existing accounts.',
    ar_a: 'نعم. بعد تسجيل الدخول اذهب لصفحة البروفايل → خانة "Secret Access" → أدخل الكود.',
  },
  {
    q: 'What is the difference between Residents bundles and Exam bundles?',
    ar_q: 'ما الفرق بين باقات المقيم وباقات الامتحانات؟',
    a: "Residents bundles focus on one rotation at a time. Exam bundles (Ultimate plans) are comprehensive packages for intensive revision before Master's, PhD, or Fellowship exams.",
    ar_a: 'باقات المقيم مخصصة للتركيز على موضوع محدد أثناء الـ Rotation. أما باقات الامتحانات فهي شاملة للمراجعة السريعة قبل الامتحانات.',
  },
  {
    q: 'Is the QBank included free in Full packages?',
    ar_q: 'هل بنك الأسئلة مجاني في الباقات الكاملة؟',
    a: 'Yes. Every Ultimate plan automatically includes the complete 11,000+ MCQ bank at no extra cost.',
    ar_a: 'نعم. عند اشتراكك في أي من باقات الشرح الكثيف، سيتم تفعيل بنك الأسئلة الكامل مجاناً.',
  },
  {
    q: 'Does the platform work on mobile and tablet?',
    ar_q: 'هل المنصة تعمل على الموبايل والتابلت؟',
    a: 'Fully responsive. Works on desktop, tablet, and mobile. You can also install it as a PWA from the browser for offline access.',
    ar_a: 'متجاوبة بالكامل وتعمل على جميع الأجهزة. يمكنك أيضاً تثبيتها كتطبيق من المتصفح للوصول دون إنترنت.',
  },
  {
    q: 'What payment methods are accepted?',
    ar_q: 'ما هي طرق الدفع المتاحة؟',
    a: 'Instapay, Vodafone Cash, Western Union, Binance, Wise, and bank transfer (EGP or USD IBAN). Contact us on Telegram.',
    ar_a: 'إنستاباي، فودافون كاش، ويسترن يونيون، بينانس، وايز، وتحويل بنكي. تواصل معنا على تيليجرام.',
  },
];

const COMMUNITY = [
  { label: 'Academy Facebook Group', url: 'https://www.facebook.com/groups/912100319624846',             icon: '👥' },
  { label: 'Study Camp Group',       url: 'https://www.facebook.com/groups/3334492170114962/',            icon: '📚' },
  { label: 'Official Telegram',      url: 'https://t.me/EgyPSA',                                          icon: '📢' },
  { label: 'Telegram Discussion',    url: 'https://t.me/joinchat/WHEthd8_TLosaDKR',                       icon: '💬' },
  { label: 'YouTube Channel',        url: 'https://www.youtube.com/channel/UC-JTAKMZZ9qcC5eqc9PvDeA',    icon: '▶️' },
];

const WHATSAPP_NUMBER = '201008688791';
const PLATFORM_URL = 'https://plasticology.surgerymastersacademy.com';

function buildOrderMessage() {
  return (
    'السلام عليكم يا دكتور بيشوى 👋\n\nبتواصل من خلال موقع Plasticology Books\n\n' +
    'عايز أطلب:\n📚 سلسلة Plasticology الكاملة — 3 أجزاء (الطبعة الثانية 2026)\n\n' +
    '• الجزء الأول: Fundamentals, Burns, Skin, Breast\n' +
    '• الجزء الثاني: Trunk, Lower Limb, Genitourinary, Hand & Upper Extremity\n' +
    '• الجزء الثالث: Head & Neck, Aesthetic Surgery\n\n' +
    'برجاء تأكيد التوافر وطريقة الدفع. شكراً!'
  );
}

// Fallback testimonials (shown if API is unavailable)
const TESTIMONIALS_FALLBACK = [
  { initials: 'د. أ. م.', country: 'eg', title: 'زمالة مصرية', quote: 'بصراحة يا جماعة، إبداع مصري يفوق العالمية! الكتاب ده مش مجرد مرجع، ده كورس كامل شارح نفسه. كل حاجة مترتبة والتنظيم خرافي.' },
  { initials: 'د. س. ع.', country: 'ly', title: 'ماجستير جراحة تجميل', quote: 'الكتاب هذا هلبا ممتاز، شامل المنهج كله ومفيشي حاجة ناقصة. أحلى شي الحواشي العربية اللي تسهل الفهم.' },
  { initials: 'د. ع. ج.', country: 'iq', title: 'بورد عراقي', quote: 'عاشت إيدكم على هالكتاب! أول مرة أشوف مرجع بجراحة التجميل بهالدقة والشمولية. هذا الكتاب هو الأول من نوعه بالعراق والوطن العربي.' },
  { initials: 'د. ر. خ.', country: 'jo', title: 'بورد أردني', quote: 'عنجد إشي بيرفع الراس. الكتاب مرتب بطريقة بتخليك تحفظ المعلومة من أول مرة.' },
  { initials: 'د. ف. ح.', country: 'eg', title: 'طبيب مقيم', quote: 'الكتاب تحفة فنية وعلمية. بنصح بيه أي حد في رحلته في جراحة التجميل.' },
  { initials: 'د. ي. ق.', country: 'iq', title: 'ماجستير جراحة تجميل', quote: 'هذا مو بس كتاب، هذا موسوعة. التنظيم مالته يخليك تعرف توصل للمعلومة بثواني. شغل مصريين يبيض الوجه.' },
  { initials: 'د. ح. أ.', country: 'eg', title: 'طبيب مقيم', quote: 'أجمل حاجة هي التكامل بين الكتاب والمنصة. الروح المصرية في الشرح بتخلي أصعب معلومة توصل بسهولة.' },
  { initials: 'د. ف. ا', country: 'sa', title: 'بورد سعودي', quote: 'من السعودية أحيي الدكتور بيشوي. الجداول في الكتاب قصة ثانية، تلخص فصول كاملة بطريقة بصرية مذهلة.' },
  { initials: 'د. ن. عباس', country: 'jo', title: 'طبيب مقيم', quote: 'الكتاب والمنصة بيكملوا بعض بشكل مثالي. بدرس المحاضرة على المنصة وبتابع من الكتاب، المعلومة بتثبت 100%.' },
  { initials: 'د. م. الساعدي', country: 'iq', title: 'ماجستير جراحة تجميل', quote: 'الروح المصرية بالشرح تخبل! دكتور بيشوي كأنه صديق يشرحلك، مو دكتور يلقي محاضرة.' },
  { initials: 'د. إ. المنصوري', country: 'ly', title: 'بورد ليبي', quote: 'الكتاب مع المنصة منظومة متكاملة. ما سبتوش حاجة للصدفة. شغل نظيف هلبا. تحية من طرابلس.' },
  { initials: 'د. ك. س.', country: 'eg', title: 'زمالة مصرية', quote: 'كنت بستخدم المنصة من فترة، ولما جبت الكتاب حسيت إن الصورة كملت. دكتور بيشوي عمل معادلة صعبة ومحدش عملها قبله.' },
  { initials: 'د. هـ. العبدالله', country: 'kw', title: 'بورد كويتي', quote: 'الجداول المنظمة والحواشي العربية بالكتاب سهلت عليّ المراجعة بشكل كبير. إبداع مصري أصيل.' },
  { initials: 'د. ز. طارق', country: 'iq', title: 'طبيب مقيم', quote: 'شرح دكتور بيشوي بيه روح مصرية حلوة، يوصل الفكرة ببساطة وبدون تعقيد. الكتاب والمنصة واحد يكمل الثاني.' },
  { initials: 'د. م. ا', country: 'om', title: 'بورد عماني', quote: 'أعجبني جدًا ربط الكتاب بالمنصة التفاعلية. أقرأ الفصل ثم أتوجه مباشرة لحل الأسئلة المتعلقة به.' },
  { initials: 'د. ر. فؤاد', country: 'eg', title: 'ماجستير جراحة تجميل', quote: 'الجداول في الكتاب عبقرية، بتلخص صفحات طويلة في مكان واحد. ولما تحتاج تفاصيل أكتر بتلاقيها في شرح دكتور بيشوي على المنصة.' },
  { initials: 'د. ع. صالح', country: 'ye', title: 'بورد عربي', quote: 'الروح المصرية في الشرح خفيفة على القلب وتساعد على الفهم. الكتاب مع المنصة ثنائي لا يقهر لأي امتحان.' },
  { initials: 'د. ل. المغربي', country: 'ly', title: 'طبيب مقيم', quote: 'أكثر ما يميز Plasticology هو التكامل. الكتاب للدراسة العميقة والمنصة للتطبيق والمراجعة.' },
  { initials: 'د. و. الأحمد', country: 'jo', title: 'ماجستير جراحة تجميل', quote: 'الكتاب والمنصة مع بعض أفضل طريقة للمذاكرة. إبداع دكتور بيشوي واضح في كل تفصيلة.' },
  { initials: 'د. ب. ناصر', country: 'bh', title: 'بورد عربي', quote: 'الجداول المنظمة في الكتاب تختصر الكثير من الوقت. دكتور بيشوي قدم لنا عملاً متكاملاً بروح مصرية أصيلة.' },
  { initials: 'د. ش. السيد', country: 'eg', title: 'زمالة مصرية', quote: 'المنصة والكتاب وجهان لعملة واحدة. شرح دكتور بيشوي الرائع والجداول المنظمة جعلوا المذاكرة أسهل وأمتع.' },
  { initials: 'د. ق. العاني', country: 'iq', title: 'بورد عراقي', quote: 'تناغم الكتاب مع المنصة فكرة عظيمة. طريقة دكتور بيشوي في الشرح مميزة وبها روح مصرية لطيفة.' },
  { initials: 'د. أ. سالم', country: 'ly', title: 'ماجستير جراحة تجميل', quote: 'المنصة تكمل الكتاب بشكل مثالي. أفضل تجربة تعليمية في جراحة التجميل.' },
  { initials: 'د. ط. منصور', country: 'eg', title: 'طبيب مقيم', quote: 'الروح المصرية في الشرح مع الجداول المنظمة والأسئلة على المنصة... ثلاثية نجاح مضمونة.' },
  { initials: 'د. ج. ا', country: 'ae', title: 'بورد عربي', quote: 'الكتاب والمنصة يقدمان تجربة تعليمية متكاملة. إبداع الدكتور بيشوي واضح في كل صفحة وكل فيديو.' },
  { initials: 'د. ف. ا', country: 'sa', title: 'زمالة سعودية', quote: 'أفضل ما في هذه المنظومة هو التكامل. شرح دكتور بيشوي بروح مصرية خفيفة جعل المادة محبوبة.' },
  { initials: 'د. ن. العراقي', country: 'iq', title: 'طبيب مقيم', quote: 'إبداع مصري خالص. دكتور بيشوي قدم محتوى عالمي بروح عربية. الكتاب بجداوله والمنصة بأسئلتها الذكية هما كل ما يحتاجه أي متدرب.' },
  { initials: 'د. ر. عبدالله', country: 'sa', title: 'بورد سعودي', quote: 'عمل متقن ومدروس. الكتاب بجداوله المنظمة والمنصة التفاعلية يقدمان أفضل ما يمكن الحصول عليه.' },
  { initials: 'د. هـ. خليل', country: 'eg', title: 'طبيب مقيم', quote: 'الجمع بين الكتاب والمنصة هو سر التفوق. تجربة فريدة لا يمكن الاستغناء عنها.' },
  { initials: 'د. و. ا', country: 'eg', title: 'زمالة مصرية', quote: 'أخيرًا محتوى عربي ينافس بقوة. شرح دكتور بيشوي والجداول المنظمة هما العمود الفقري لهذه المنظومة الرائعة.' },
];
