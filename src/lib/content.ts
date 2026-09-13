export const PHONE_DISPLAY_FR = "06 66 06 43 69";
export const PHONE_DISPLAY_INTL = "+212 6 66 06 43 69";
export const PHONE_TEL = "tel:+212666064369";
export const WHATSAPP = "https://wa.me/212666064369";
export const EMAIL = "alaouihanane2233@gmail.com";

export type Lang = "fr" | "ar";

type Content = {
  dir: "ltr" | "rtl";
  htmlLang: string;
  brand: string;
  brandRole: string;
  nav: { services: string; zone: string; about: string; pricing: string; contact: string };
  langLabel: string;
  callNow: string;
  whatsapp: string;
  hero: {
    badge: string;
    h1: string;
    tagline: string;
    call: string;
    whatsapp: string;
    stats: { value: string; label: string }[];
    imageAlt: string;
  };
  why: { title: string; subtitle: string; items: { title: string; text: string }[] };
  services: { title: string; subtitle: string; items: string[]; note: string };
  zone: { title: string; subtitle: string; text: string; areas: string[]; radius: string; center: string };
  availability: { title: string; items: { title: string; text: string }[] };
  about: { title: string; paragraphs: string[] };
  pricing: { title: string; cash: string; cashText: string; noInsurance: string; noInsuranceText: string; quote: string; quoteText: string };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    whatsapp: string;
    email: string;
    zone: string;
    zoneValue: string;
    availability: string;
    availabilityValue: string;
  };
  footer: { rights: string; disclaimer: string };
  seo: { title: string; description: string };
};

export const content: Record<Lang, Content> = {
  fr: {
    dir: "ltr",
    htmlLang: "fr",
    brand: "Hanane Alaoui",
    brandRole: "Infirmière à domicile — Agadir",
    nav: {
      services: "Services",
      zone: "Zone d'intervention",
      about: "À propos",
      pricing: "Tarifs",
      contact: "Contact",
    },
    langLabel: "العربية",
    callNow: "Appeler",
    whatsapp: "WhatsApp",
    hero: {
      badge: "Disponible 7j/7 · Urgences possibles",
      h1: "Hanane Alaoui — Infirmière libérale à Agadir",
      tagline:
        "Plus de 40 ans d'expérience au service de votre santé. Soins infirmiers à domicile, à Agadir et dans un rayon de 30 km, 7j/7, y compris les urgences.",
      call: "Appeler maintenant",
      whatsapp: "Écrire sur WhatsApp",
      stats: [
        { value: "40+", label: "années d'expérience" },
        { value: "7j/7", label: "week-ends et jours fériés" },
        { value: "30 km", label: "autour d'Agadir" },
      ],
      imageAlt: "Infirmière prodiguant des soins à domicile à un patient âgé",
    },
    why: {
      title: "Pourquoi me choisir",
      subtitle: "Une expérience rare, une disponibilité réelle, une rigueur constante.",
      items: [
        {
          title: "40 ans d'expérience",
          text: "Quatre décennies de pratique en soins infirmiers, auprès de patients de tous âges.",
        },
        {
          title: "Disponible 7j/7",
          text: "Week-ends et jours fériés inclus, sans interruption de suivi.",
        },
        {
          title: "Interventions d'urgence",
          text: "Urgences possibles, y compris la nuit, selon la localisation et la disponibilité.",
        },
        {
          title: "Soins à domicile",
          text: "Déplacement partout à Agadir et jusqu'à 30 km aux alentours.",
        },
        {
          title: "Discrétion et hygiène",
          text: "Respect strict des protocoles d'hygiène, discrétion et rigueur professionnelle.",
        },
      ],
    },
    services: {
      title: "Services infirmiers à domicile",
      subtitle: "Des soins complets, réalisés chez vous, dans le confort et la sécurité.",
      items: [
        "Injections (intramusculaires, sous-cutanées, intraveineuses)",
        "Pansements simples et complexes",
        "Prélèvements sanguins à domicile",
        "Perfusions",
        "Sondages urinaires",
        "Suivi post-opératoire",
        "Soins aux personnes âgées et dépendantes",
        "Soins palliatifs",
        "Vaccination",
        "Surveillance du diabète (glycémie, injections d'insuline)",
        "Soins de stomie",
        "Tout autre acte infirmier à domicile sur demande",
      ],
      note: "Un soin ne figure pas dans cette liste ? Appelez-moi, nous en parlons directement.",
    },
    zone: {
      title: "Zone d'intervention",
      subtitle: "Agadir et environ 30 km alentour.",
      text: "Je me déplace dans toute la ville d'Agadir ainsi que dans les communes et quartiers situés dans un rayon d'environ 30 km. Contactez-moi pour connaître le délai d'intervention selon votre adresse.",
      areas: [
        "Agadir centre",
        "Talborjt",
        "Hay Mohammadi",
        "Dakhla",
        "Founty / Cité Suisse",
        "Anza",
        "Tikiouine",
        "Ait Melloul",
        "Inezgane",
        "Dcheira",
        "Taghazout",
        "Aourir",
      ],
      radius: "≈ 30 km",
      center: "Agadir",
    },
    availability: {
      title: "Disponibilité & réactivité",
      items: [
        { title: "7j/7", text: "Du lundi au dimanche, week-ends et jours fériés inclus." },
        { title: "Urgences de nuit", text: "Interventions nocturnes possibles selon la disponibilité." },
        { title: "Délai estimé", text: "Appelez ou écrivez sur WhatsApp : je vous indique aussitôt le délai selon votre localisation." },
      ],
    },
    about: {
      title: "À propos",
      paragraphs: [
        "Infirmière libérale à Agadir, j'exerce depuis plus de quarante ans. Ces années m'ont appris qu'un soin réussi ne se limite pas au geste technique : il tient aussi à l'écoute, à la patience et à la confiance installée avec le patient et sa famille.",
        "J'interviens à domicile pour éviter des déplacements pénibles aux personnes fragiles, âgées ou en convalescence. Chaque intervention est réalisée avec les mêmes exigences : hygiène irréprochable, respect des prescriptions, discrétion absolue.",
        "Vous pouvez m'appeler directement pour exposer votre situation. Je vous répondrai avec franchise sur ce qui est possible, dans quel délai et dans quelles conditions.",
      ],
    },
    pricing: {
      title: "Tarifs & modalités",
      cash: "Paiement en espèces uniquement",
      cashText: "Le règlement s'effectue en espèces, à l'issue de l'intervention.",
      noInsurance: "Aucune prise en charge",
      noInsuranceText: "Les soins ne sont pas pris en charge par la CNSS, la CNOPS ni par les assurances privées.",
      quote: "Devis rapide",
      quoteText: "Le tarif dépend de l'acte réalisé et du déplacement. Un appel ou un message WhatsApp suffit pour obtenir une estimation claire.",
    },
    contact: {
      title: "Contact",
      subtitle: "Le plus simple reste l'appel direct, surtout en cas d'urgence.",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      email: "Email",
      zone: "Zone",
      zoneValue: "Agadir et environs (30 km)",
      availability: "Disponibilité",
      availabilityValue: "7j/7, urgences possibles",
    },
    footer: {
      rights: "Hanane Alaoui — Infirmière libérale à domicile, Agadir.",
      disclaimer: "Soins infirmiers sur prescription médicale. Paiement en espèces uniquement.",
    },
    seo: {
      title: "Hanane Alaoui — Infirmière à domicile à Agadir, 7j/7",
      description:
        "Infirmière libérale à Agadir et 30 km alentour : injections, pansements, prises de sang, perfusions, soins aux personnes âgées. 40 ans d'expérience, 7j/7, urgences.",
    },
  },
  ar: {
    dir: "rtl",
    htmlLang: "ar",
    brand: "حنان العلوي",
    brandRole: "ممرضة بالمنزل — أكادير",
    nav: {
      services: "الخدمات",
      zone: "نطاق التدخل",
      about: "من أنا",
      pricing: "الأتعاب",
      contact: "الاتصال",
    },
    langLabel: "Français",
    callNow: "اتصال",
    whatsapp: "واتساب",
    hero: {
      badge: "متوفرة 7 أيام في الأسبوع · الحالات المستعجلة ممكنة",
      h1: "حنان العلوي — ممرضة حرة بأكادير",
      tagline:
        "أزيد من 40 سنة من الخبرة في خدمة صحتكم. خدمات تمريضية بالمنزل، في أكادير وفي دائرة 30 كيلومترًا، طيلة أيام الأسبوع، بما في ذلك الحالات المستعجلة.",
      call: "اتصلوا الآن",
      whatsapp: "المراسلة عبر واتساب",
      stats: [
        { value: "+40", label: "سنة من الخبرة" },
        { value: "7/7", label: "بما في ذلك العطل والأعياد" },
        { value: "30 كلم", label: "حول أكادير" },
      ],
      imageAlt: "ممرضة تقدم الرعاية لمريض مسن في منزله",
    },
    why: {
      title: "لماذا تختارونني",
      subtitle: "خبرة نادرة، توفر حقيقي، والتزام مهني دائم.",
      items: [
        {
          title: "40 سنة من الخبرة",
          text: "أربعة عقود من الممارسة التمريضية مع مرضى من مختلف الأعمار.",
        },
        {
          title: "متوفرة طيلة الأسبوع",
          text: "بما في ذلك عطل نهاية الأسبوع والأعياد، دون انقطاع في المتابعة.",
        },
        {
          title: "تدخلات مستعجلة",
          text: "إمكانية التدخل في الحالات المستعجلة، حتى ليلاً، حسب الموقع والتوفر.",
        },
        {
          title: "العلاج في المنزل",
          text: "التنقل داخل مدينة أكادير وإلى غاية 30 كيلومترًا حولها.",
        },
        {
          title: "السرية والنظافة",
          text: "احترام صارم لبروتوكولات النظافة، مع السرية التامة والدقة المهنية.",
        },
      ],
    },
    services: {
      title: "خدمات تمريضية بالمنزل",
      subtitle: "رعاية شاملة تُقدَّم في منزلكم، في راحة وأمان.",
      items: [
        "الحقن (العضلي، تحت الجلد، الوريدي)",
        "تضميد الجروح البسيطة والمعقدة",
        "سحب عينات الدم بالمنزل",
        "التسريب الوريدي (السيروم)",
        "القثطرة البولية",
        "المتابعة بعد العمليات الجراحية",
        "رعاية المسنين والأشخاص في وضعية تبعية",
        "الرعاية التلطيفية",
        "التلقيح",
        "مراقبة داء السكري (قياس السكر وحقن الأنسولين)",
        "العناية بفتحة الاستئصال (الستوما)",
        "أي عمل تمريضي آخر بالمنزل عند الطلب",
      ],
      note: "لم تجدوا الخدمة المطلوبة في القائمة؟ اتصلوا بي وسنتحدث في الأمر مباشرة.",
    },
    zone: {
      title: "نطاق التدخل",
      subtitle: "أكادير وحوالي 30 كيلومترًا حولها.",
      text: "أتنقل داخل مدينة أكادير بأكملها وكذلك إلى الجماعات والأحياء الواقعة في دائرة تقارب 30 كيلومترًا. اتصلوا بي لمعرفة مدة الوصول حسب عنوانكم.",
      areas: [
        "وسط أكادير",
        "تالبرجت",
        "الحي المحمدي",
        "الداخلة",
        "فونتي / المدينة السويسرية",
        "أنزا",
        "تيكيوين",
        "أيت ملول",
        "إنزكان",
        "الدشيرة",
        "تغازوت",
        "أورير",
      ],
      radius: "≈ 30 كلم",
      center: "أكادير",
    },
    availability: {
      title: "التوفر وسرعة التدخل",
      items: [
        { title: "7 أيام في الأسبوع", text: "من الاثنين إلى الأحد، بما في ذلك العطل والأعياد." },
        { title: "الحالات المستعجلة ليلاً", text: "إمكانية التدخل الليلي حسب التوفر." },
        { title: "مدة الوصول", text: "اتصلوا أو راسلوني عبر واتساب، وسأخبركم فورًا بمدة الوصول حسب موقعكم." },
      ],
    },
    about: {
      title: "من أنا",
      paragraphs: [
        "أنا ممرضة حرة بأكادير، أمارس هذه المهنة منذ أزيد من أربعين سنة. علمتني هذه السنوات أن نجاح العلاج لا يقتصر على الجانب التقني، بل يقوم أيضًا على الإنصات والصبر والثقة المتبادلة مع المريض وأسرته.",
        "أتدخل في المنزل لتجنيب الأشخاص الهشّين والمسنين والنقاهين عناء التنقل. وتُنجَز كل زيارة بالمتطلبات نفسها: نظافة تامة، واحترام للوصفة الطبية، وسرية مطلقة.",
        "يمكنكم الاتصال بي مباشرة لعرض حالتكم، وسأجيبكم بصراحة عمّا هو ممكن، وفي أي أجل، وبأي شروط.",
      ],
    },
    pricing: {
      title: "الأتعاب وطرق الأداء",
      cash: "الأداء نقدًا فقط",
      cashText: "يتم الأداء نقدًا بعد انتهاء التدخل.",
      noInsurance: "بدون تغطية صحية",
      noInsuranceText: "الخدمات غير مغطاة من طرف الصندوق الوطني للضمان الاجتماعي (CNSS) ولا CNOPS ولا شركات التأمين الخاصة.",
      quote: "تقدير سريع للثمن",
      quoteText: "يتوقف الثمن على نوع العمل التمريضي وعلى التنقل. تكفي مكالمة أو رسالة واتساب للحصول على تقدير واضح.",
    },
    contact: {
      title: "الاتصال",
      subtitle: "الاتصال المباشر هو الأسرع، خاصة في الحالات المستعجلة.",
      phone: "الهاتف",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      zone: "نطاق التدخل",
      zoneValue: "أكادير ونواحيها (30 كلم)",
      availability: "التوفر",
      availabilityValue: "7 أيام في الأسبوع، مع إمكانية التدخل المستعجل",
    },
    footer: {
      rights: "حنان العلوي — ممرضة حرة بالمنزل، أكادير.",
      disclaimer: "الخدمات التمريضية تُقدَّم بناءً على وصفة طبية. الأداء نقدًا فقط.",
    },
    seo: {
      title: "حنان العلوي — ممرضة بالمنزل بأكادير، 7 أيام في الأسبوع",
      description:
        "ممرضة حرة بأكادير وفي دائرة 30 كلم: الحقن، التضميد، تحاليل الدم، التسريب، رعاية المسنين. أزيد من 40 سنة خبرة، طيلة الأسبوع، مع الحالات المستعجلة.",
    },
  },
};
