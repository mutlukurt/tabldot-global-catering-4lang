export type Language = 'en' | 'zh' | 'ru' | 'tr';

export interface Translations {
  nav: {
    home: string;
    services: string;
    order: string;
    testimonials: string;
    health: string;
    about: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      ctaSecondary: string;
    };
    features: {
      title: string;
      quality: {
        title: string;
        description: string;
      };
      fresh: {
        title: string;
        description: string;
      };
      custom: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
    };
    stats: {
      clients: string;
      meals: string;
      experience: string;
      satisfaction: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    corporate: {
      title: string;
      description: string;
    };
    events: {
      title: string;
      description: string;
    };
    daily: {
      title: string;
      description: string;
    };
    special: {
      title: string;
      description: string;
    };
  };
  order: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      service: string;
      guests: string;
      date: string;
      time: string;
      message: string;
      submit: string;
      submitting: string;
    };
    success: string;
    error: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  health: {
    title: string;
    subtitle: string;
    certifications: {
      title: string;
      description: string;
    };
    hygiene: {
      title: string;
      description: string;
    };
    ingredients: {
      title: string;
      description: string;
    };
    allergens: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    mission: string;
    vision: string;
  };
  footer: {
    contact: string;
    followUs: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      order: 'Order Now',
      testimonials: 'Testimonials',
      health: 'Health & Safety',
      about: 'About Us',
    },
    home: {
      hero: {
        title: 'Premium Catering Solutions for Every Occasion',
        subtitle: 'Experience world-class culinary excellence with fresh, healthy, and delicious meals delivered to your doorstep',
        cta: 'Order Now',
        ctaSecondary: 'View Menu',
      },
      features: {
        title: 'Why Choose Tabldot',
        quality: {
          title: 'Premium Quality',
          description: 'We use only the finest ingredients sourced from trusted suppliers',
        },
        fresh: {
          title: 'Always Fresh',
          description: 'Meals prepared daily with the freshest ingredients available',
        },
        custom: {
          title: 'Customizable Menus',
          description: 'Tailored solutions to meet your specific dietary needs and preferences',
        },
        delivery: {
          title: 'Timely Delivery',
          description: 'Reliable and punctual service for all your catering needs',
        },
      },
      stats: {
        clients: 'Happy Clients',
        meals: 'Meals Served',
        experience: 'Years Experience',
        satisfaction: 'Satisfaction Rate',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive catering solutions tailored to your needs',
      corporate: {
        title: 'Corporate Catering',
        description: 'Professional meal solutions for offices, meetings, and corporate events with flexible menu options',
      },
      events: {
        title: 'Event Catering',
        description: 'Exceptional catering for weddings, parties, and special celebrations with personalized service',
      },
      daily: {
        title: 'Daily Meal Plans',
        description: 'Healthy and balanced daily meal subscriptions delivered fresh to your location',
      },
      special: {
        title: 'Special Dietary Needs',
        description: 'Customized menus for vegetarian, vegan, gluten-free, and other dietary requirements',
      },
    },
    order: {
      title: 'Place Your Order',
      subtitle: 'Fill out the form below and our team will contact you shortly',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company Name (Optional)',
        service: 'Select Service',
        guests: 'Number of Guests',
        date: 'Event Date',
        time: 'Event Time',
        message: 'Additional Requirements',
        submit: 'Submit Order',
        submitting: 'Submitting...',
      },
      success: 'Order submitted successfully! We will contact you soon.',
      error: 'Failed to submit order. Please try again.',
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Trusted by hundreds of satisfied customers',
    },
    health: {
      title: 'Health & Safety Standards',
      subtitle: 'Your health and safety are our top priorities',
      certifications: {
        title: 'Food Safety Certifications',
        description: 'We maintain all required food safety certifications including HACCP, ISO 22000, and local health department approvals. Our facilities are regularly inspected and audited to ensure compliance with international standards.',
      },
      hygiene: {
        title: 'Hygiene Protocols',
        description: 'Our kitchen staff follows strict hygiene protocols including regular hand washing, use of protective equipment, and sanitization of all work surfaces. All employees undergo regular health screenings and food safety training.',
      },
      ingredients: {
        title: 'Quality Ingredients',
        description: 'We source ingredients from certified suppliers who meet our stringent quality standards. All produce is thoroughly washed and inspected. We maintain proper cold chain management from sourcing to delivery.',
      },
      allergens: {
        title: 'Allergen Management',
        description: 'We take allergen management seriously with dedicated preparation areas and clear labeling. Our team is trained to handle special dietary requirements and prevent cross-contamination.',
      },
    },
    about: {
      title: 'About Tabldot',
      subtitle: 'Delivering Excellence in Every Meal',
      mission: 'Our mission is to provide exceptional catering services that exceed expectations through quality ingredients, professional service, and culinary excellence.',
      vision: 'To be the most trusted catering partner for businesses and individuals, known for our commitment to quality, health, and customer satisfaction.',
    },
    footer: {
      contact: 'Contact Us',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      order: '立即订购',
      testimonials: '客户评价',
      health: '健康与安全',
      about: '关于我们',
    },
    home: {
      hero: {
        title: '各种场合的优质餐饮解决方案',
        subtitle: '体验世界级烹饪卓越，新鲜、健康、美味的餐点送到您家门口',
        cta: '立即订购',
        ctaSecondary: '查看菜单',
      },
      features: {
        title: '为什么选择Tabldot',
        quality: {
          title: '优质品质',
          description: '我们只使用来自可信供应商的最优质食材',
        },
        fresh: {
          title: '始终新鲜',
          description: '每日使用最新鲜的食材精心准备',
        },
        custom: {
          title: '可定制菜单',
          description: '量身定制的解决方案满足您的特定饮食需求和偏好',
        },
        delivery: {
          title: '准时送达',
          description: '为您的所有餐饮需求提供可靠准时的服务',
        },
      },
      stats: {
        clients: '满意客户',
        meals: '已供应餐点',
        experience: '年经验',
        satisfaction: '满意度',
      },
    },
    services: {
      title: '我们的服务',
      subtitle: '量身定制的全面餐饮解决方案',
      corporate: {
        title: '企业餐饮',
        description: '为办公室、会议和企业活动提供专业餐饮解决方案，菜单选项灵活',
      },
      events: {
        title: '活动餐饮',
        description: '为婚礼、派对和特殊庆典提供卓越的餐饮服务和个性化服务',
      },
      daily: {
        title: '每日餐饮计划',
        description: '健康均衡的每日餐饮订阅，新鲜送达您的位置',
      },
      special: {
        title: '特殊饮食需求',
        description: '为素食、纯素、无麸质和其他饮食要求定制菜单',
      },
    },
    order: {
      title: '下订单',
      subtitle: '填写下面的表格，我们的团队将很快与您联系',
      form: {
        name: '全名',
        email: '电子邮件地址',
        phone: '电话号码',
        company: '公司名称（可选）',
        service: '选择服务',
        guests: '宾客人数',
        date: '活动日期',
        time: '活动时间',
        message: '其他要求',
        submit: '提交订单',
        submitting: '提交中...',
      },
      success: '订单提交成功！我们将尽快与您联系。',
      error: '提交订单失败。请重试。',
    },
    testimonials: {
      title: '客户评价',
      subtitle: '受到数百位满意客户的信赖',
    },
    health: {
      title: '健康与安全标准',
      subtitle: '您的健康和安全是我们的首要任务',
      certifications: {
        title: '食品安全认证',
        description: '我们保持所有必需的食品安全认证，包括HACCP、ISO 22000和当地卫生部门的批准。我们的设施定期接受检查和审计，以确保符合国际标准。',
      },
      hygiene: {
        title: '卫生规程',
        description: '我们的厨房员工遵循严格的卫生规程，包括定期洗手、使用防护设备和消毒所有工作表面。所有员工都接受定期健康检查和食品安全培训。',
      },
      ingredients: {
        title: '优质食材',
        description: '我们从符合严格质量标准的认证供应商处采购食材。所有农产品都经过彻底清洗和检查。我们从采购到配送保持适当的冷链管理。',
      },
      allergens: {
        title: '过敏原管理',
        description: '我们认真对待过敏原管理，设有专门的准备区域和清晰的标签。我们的团队经过培训，可以处理特殊饮食要求并防止交叉污染。',
      },
    },
    about: {
      title: '关于Tabldot',
      subtitle: '每一餐都追求卓越',
      mission: '我们的使命是通过优质食材、专业服务和烹饪卓越提供超出预期的卓越餐饮服务。',
      vision: '成为企业和个人最值得信赖的餐饮合作伙伴，以我们对质量、健康和客户满意度的承诺而闻名。',
    },
    footer: {
      contact: '联系我们',
      followUs: '关注我们',
      rights: '版权所有。',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      order: 'Заказать',
      testimonials: 'Отзывы',
      health: 'Здоровье и Безопасность',
      about: 'О нас',
    },
    home: {
      hero: {
        title: 'Премиальные кейтеринговые решения на любой случай',
        subtitle: 'Испытайте мировое кулинарное совершенство со свежими, здоровыми и вкусными блюдами с доставкой к вашему порогу',
        cta: 'Заказать сейчас',
        ctaSecondary: 'Посмотреть меню',
      },
      features: {
        title: 'Почему Tabldot',
        quality: {
          title: 'Премиум качество',
          description: 'Мы используем только лучшие ингредиенты от проверенных поставщиков',
        },
        fresh: {
          title: 'Всегда свежее',
          description: 'Блюда готовятся ежедневно из самых свежих доступных ингредиентов',
        },
        custom: {
          title: 'Настраиваемые меню',
          description: 'Индивидуальные решения для удовлетворения ваших конкретных диетических потребностей и предпочтений',
        },
        delivery: {
          title: 'Своевременная доставка',
          description: 'Надежный и пунктуальный сервис для всех ваших кейтеринговых потребностей',
        },
      },
      stats: {
        clients: 'Довольных клиентов',
        meals: 'Подано блюд',
        experience: 'Лет опыта',
        satisfaction: 'Уровень удовлетворенности',
      },
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Комплексные кейтеринговые решения, адаптированные под ваши потребности',
      corporate: {
        title: 'Корпоративный кейтеринг',
        description: 'Профессиональные решения по питанию для офисов, встреч и корпоративных мероприятий с гибкими вариантами меню',
      },
      events: {
        title: 'Кейтеринг мероприятий',
        description: 'Исключительный кейтеринг для свадеб, вечеринок и особых торжеств с персонализированным обслуживанием',
      },
      daily: {
        title: 'Ежедневные планы питания',
        description: 'Здоровые и сбалансированные ежедневные подписки на питание с доставкой свежих блюд в ваше место',
      },
      special: {
        title: 'Специальные диетические потребности',
        description: 'Настроенные меню для вегетарианцев, веганов, безглютеновых и других диетических требований',
      },
    },
    order: {
      title: 'Оформить заказ',
      subtitle: 'Заполните форму ниже, и наша команда свяжется с вами в ближайшее время',
      form: {
        name: 'Полное имя',
        email: 'Адрес электронной почты',
        phone: 'Номер телефона',
        company: 'Название компании (необязательно)',
        service: 'Выберите услугу',
        guests: 'Количество гостей',
        date: 'Дата мероприятия',
        time: 'Время мероприятия',
        message: 'Дополнительные требования',
        submit: 'Отправить заказ',
        submitting: 'Отправка...',
      },
      success: 'Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.',
      error: 'Не удалось отправить заказ. Пожалуйста, попробуйте снова.',
    },
    testimonials: {
      title: 'Что говорят наши клиенты',
      subtitle: 'Нам доверяют сотни довольных клиентов',
    },
    health: {
      title: 'Стандарты здоровья и безопасности',
      subtitle: 'Ваше здоровье и безопасность - наши главные приоритеты',
      certifications: {
        title: 'Сертификаты пищевой безопасности',
        description: 'Мы поддерживаем все необходимые сертификаты пищевой безопасности, включая HACCP, ISO 22000 и одобрения местных органов здравоохранения. Наши объекты регулярно проверяются и проходят аудит для обеспечения соответствия международным стандартам.',
      },
      hygiene: {
        title: 'Протоколы гигиены',
        description: 'Наш кухонный персонал следует строгим протоколам гигиены, включая регулярное мытье рук, использование защитного оборудования и дезинфекцию всех рабочих поверхностей. Все сотрудники проходят регулярные медицинские осмотры и обучение пищевой безопасности.',
      },
      ingredients: {
        title: 'Качественные ингредиенты',
        description: 'Мы закупаем ингредиенты у сертифицированных поставщиков, которые соответствуют нашим строгим стандартам качества. Вся продукция тщательно моется и проверяется. Мы поддерживаем надлежащее управление холодовой цепью от закупки до доставки.',
      },
      allergens: {
        title: 'Управление аллергенами',
        description: 'Мы серьезно относимся к управлению аллергенами с выделенными зонами приготовления и четкой маркировкой. Наша команда обучена работать с особыми диетическими требованиями и предотвращать перекрестное загрязнение.',
      },
    },
    about: {
      title: 'О Tabldot',
      subtitle: 'Совершенство в каждом блюде',
      mission: 'Наша миссия - предоставлять исключительные кейтеринговые услуги, превосходящие ожидания благодаря качественным ингредиентам, профессиональному обслуживанию и кулинарному совершенству.',
      vision: 'Быть самым надежным кейтеринговым партнером для бизнеса и частных лиц, известным своей приверженностью к качеству, здоровью и удовлетворенности клиентов.',
    },
    footer: {
      contact: 'Свяжитесь с нами',
      followUs: 'Подписывайтесь на нас',
      rights: 'Все права защищены.',
    },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      order: 'Sipariş Ver',
      testimonials: 'Yorumlar',
      health: 'Sağlık ve Güvenlik',
      about: 'Hakkımızda',
    },
    home: {
      hero: {
        title: 'Her Etkinlik İçin Premium Catering Çözümleri',
        subtitle: 'Kapınıza kadar teslim edilen taze, sağlıklı ve lezzetli yemeklerle dünya standartlarında mutfak mükemmelliği deneyimleyin',
        cta: 'Sipariş Ver',
        ctaSecondary: 'Menüyü Görüntüle',
      },
      features: {
        title: 'Neden Tabldot',
        quality: {
          title: 'Premium Kalite',
          description: 'Sadece güvenilir tedarikçilerden en kaliteli malzemeleri kullanıyoruz',
        },
        fresh: {
          title: 'Her Zaman Taze',
          description: 'Yemekler her gün en taze malzemelerle hazırlanır',
        },
        custom: {
          title: 'Özelleştirilebilir Menüler',
          description: 'Özel diyet ihtiyaçlarınızı ve tercihlerinizi karşılamak için özel çözümler',
        },
        delivery: {
          title: 'Zamanında Teslimat',
          description: 'Tüm catering ihtiyaçlarınız için güvenilir ve dakik hizmet',
        },
      },
      stats: {
        clients: 'Mutlu Müşteri',
        meals: 'Servis Edilen Yemek',
        experience: 'Yıl Deneyim',
        satisfaction: 'Memnuniyet Oranı',
      },
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'İhtiyaçlarınıza özel kapsamlı catering çözümleri',
      corporate: {
        title: 'Kurumsal Catering',
        description: 'Ofisler, toplantılar ve kurumsal etkinlikler için esnek menü seçenekleriyle profesyonel yemek çözümleri',
      },
      events: {
        title: 'Etkinlik Catering',
        description: 'Düğünler, partiler ve özel kutlamalar için kişiselleştirilmiş hizmetle olağanüstü catering',
      },
      daily: {
        title: 'Günlük Yemek Planları',
        description: 'Lokasyonunuza taze teslim edilen sağlıklı ve dengeli günlük yemek abonelikleri',
      },
      special: {
        title: 'Özel Diyet İhtiyaçları',
        description: 'Vejetaryen, vegan, glütensiz ve diğer diyet gereksinimleri için özelleştirilmiş menüler',
      },
    },
    order: {
      title: 'Sipariş Verin',
      subtitle: 'Aşağıdaki formu doldurun, ekibimiz en kısa sürede sizinle iletişime geçecektir',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta Adresi',
        phone: 'Telefon Numarası',
        company: 'Şirket Adı (İsteğe Bağlı)',
        service: 'Hizmet Seçin',
        guests: 'Misafir Sayısı',
        date: 'Etkinlik Tarihi',
        time: 'Etkinlik Saati',
        message: 'Ek Gereksinimler',
        submit: 'Siparişi Gönder',
        submitting: 'Gönderiliyor...',
      },
      success: 'Sipariş başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.',
      error: 'Sipariş gönderilemedi. Lütfen tekrar deneyin.',
    },
    testimonials: {
      title: 'Müşterilerimiz Ne Diyor',
      subtitle: 'Yüzlerce memnun müşterinin güvendiği',
    },
    health: {
      title: 'Sağlık ve Güvenlik Standartları',
      subtitle: 'Sağlığınız ve güvenliğiniz en önemli önceliklerimizdir',
      certifications: {
        title: 'Gıda Güvenliği Sertifikaları',
        description: 'HACCP, ISO 22000 ve yerel sağlık departmanı onayları dahil tüm gerekli gıda güvenliği sertifikalarını koruyoruz. Tesislerimiz uluslararası standartlara uygunluğu sağlamak için düzenli olarak denetlenir ve incelenir.',
      },
      hygiene: {
        title: 'Hijyen Protokolleri',
        description: 'Mutfak personelimiz düzenli el yıkama, koruyucu ekipman kullanımı ve tüm çalışma yüzeylerinin dezenfeksiyonu dahil olmak üzere katı hijyen protokollerini takip eder. Tüm çalışanlar düzenli sağlık taramaları ve gıda güvenliği eğitimi alır.',
      },
      ingredients: {
        title: 'Kaliteli Malzemeler',
        description: 'Katı kalite standartlarımızı karşılayan sertifikalı tedarikçilerden malzeme temin ediyoruz. Tüm ürünler iyice yıkanır ve denetlenir. Tedarikten teslimata kadar uygun soğuk zincir yönetimi sağlıyoruz.',
      },
      allergens: {
        title: 'Alerjen Yönetimi',
        description: 'Özel hazırlama alanları ve açık etiketleme ile alerjen yönetimini ciddiye alıyoruz. Ekibimiz özel diyet gereksinimlerini ele almak ve çapraz kontaminasyonu önlemek için eğitilmiştir.',
      },
    },
    about: {
      title: 'Tabldot Hakkında',
      subtitle: 'Her Yemekte Mükemmellik Sunuyoruz',
      mission: 'Misyonumuz, kaliteli malzemeler, profesyonel hizmet ve mutfak mükemmelliği ile beklentileri aşan olağanüstü catering hizmetleri sunmaktır.',
      vision: 'Kalite, sağlık ve müşteri memnuniyetine olan bağlılığımızla tanınan, işletmeler ve bireyler için en güvenilir catering ortağı olmak.',
    },
    footer: {
      contact: 'İletişim',
      followUs: 'Bizi Takip Edin',
      rights: 'Tüm hakları saklıdır.',
    },
  },
};
