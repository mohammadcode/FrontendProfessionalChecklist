   // داده‌های چک‌لیست
   const checklistData = {
    head: {
        title: "Head",
        description: "تنظیمات مربوط به بخش head صفحات HTML که برای سئو، عملکرد و نمایش صحیح صفحه حیاتی هستند.",
        items: [
            {
                id: "doctype",
                title: "Doctype",
                description: "Doctype از نوع HTML5 است و در بالای تمام صفحات HTML قرار دارد.",
                category: "HTML TAG"
            },
            {
                id: "charset",
                title: "Charset",
                description: "نوع کدگذاری (UTF-8) به درستی تعریف شده است.",
                category: "META TAG"
            },
            {
                id: "viewport",
                title: "Viewport",
                description: "تگ viewport برای نمایش صحیح در دستگاه‌های مختلف تنظیم شده است.",
                category: "META TAG"
            },
            {
                id: "title",
                title: "Title",
                description: "برای تمام صفحات عنوان (title) مناسبی تعریف شده است.",
                category: "META TAG"
            },
            {
                id: "description",
                title: "Meta Description",
                description: "توضیحات متا برای هر صفحه وجود دارد، منحصر به فرد است و بیش از 150 کاراکتر ندارد.",
                category: "META TAG"
            },
            {
                id: "favicons",
                title: "Favicons",
                description: "فاویکون‌های مختلف برای دستگاه‌ها و مرورگرهای مختلف ایجاد شده و به درستی لینک شده‌اند.",
                category: "META TAG"
            },
            {
                id: "apple-meta",
                title: "متا تگ‌های اپل",
                description: "متا تگ‌های مربوط به نمایش در دستگاه‌های اپل وجود دارد.",
                category: "META TAG"
            },
            {
                id: "windows-tiles",
                title: "Windows Tiles",
                description: "متا تگ‌های مربوط به نمایش در ویندوز وجود دارد.",
                category: "META TAG"
            },
            {
                id: "canonical",
                title: "Canonical",
                description: "از rel=\"canonical\" برای جلوگیری از محتوای تکراری استفاده شده است.",
                category: "META TAG"
            },
            {
                id: "lang-attribute",
                title: "ویژگی زبان",
                description: "ویژگی lang در تگ html مشخص شده و با زبان صفحه مطابقت دارد.",
                category: "HTML TAG"
            },
            {
                id: "direction-attribute",
                title: "ویژگی جهت",
                description: "جهت نوشتار (rtl/ltr) در تگ html مشخص شده است.",
                category: "HTML TAG"
            },
            {
                id: "conditional-comments",
                title: "نظرات شرطی",
                description: "برای IE در صورت نیاز از نظرات شرطی استفاده شده است.",
                category: "HTML TAG"
            },
            {
                id: "rss-feed",
                title: "فید RSS",
                description: "اگر پروژه شما وبلاگ است یا مقالاتی دارد، لینک RSS ارائه شده است.",
                category: "HTML TAG"
            },
            {
                id: "critical-css",
                title: "CSS بحرانی",
                description: "CSS بحرانی به درستی در HEAD تزریق شده است.",
                category: "HTML TAG CSS PERFORMANCE"
            },
            {
                id: "css-order",
                title: "ترتیب CSS",
                description: "تمام فایل‌های CSS قبل از فایل‌های JavaScript در HEAD بارگذاری می‌شوند.",
                category: "HTML TAG"
            },
            {
                id: "facebook-og",
                title: "Facebook Open Graph",
                description: "متا تگ‌های Open Graph برای اشتراک‌گذاری در فیسبوک وجود دارد.",
                category: "SOCIAL META TESTING"
            },
            {
                id: "twitter-card",
                title: "Twitter Card",
                description: "متا تگ‌های Twitter Card برای اشتراک‌گذاری در توییتر وجود دارد.",
                category: "SOCIAL META TESTING"
            }
        ]
    },
    html: {
        title: "HTML",
        description: "بهترین روش‌های ساختاردهی و نوشتن کدهای HTML برای دسترسی‌پذیری، سئو و عملکرد بهتر.",
        items: [
            {
                id: "semantic-elements",
                title: "عناصر معنایی HTML5",
                description: "از عناصر معنایی HTML5 به درستی استفاده شده است (header, section, footer, main...).",
                category: "HTML BEST PRACTICES"
            },
            {
                id: "error-pages",
                title: "صفحات خطا",
                description: "صفحات خطای 404 و 5xx وجود دارند.",
                category: "HTML BEST PRACTICES"
            },
            {
                id: "noopener",
                title: "Noopener",
                description: "برای لینک‌های خارجی با target=\"_blank\" از rel=\"noopener\" استفاده شده است.",
                category: "HTML BEST PRACTICES SECURITY"
            },
            {
                id: "clean-comments",
                title: "تمیز کردن کامنت‌ها",
                description: "کدهای غیرضروری و کامنت‌ها قبل از انتشار حذف شده‌اند.",
                category: "HTML BEST PRACTICES"
            },
            {
                id: "w3c-valid",
                title: "سازگاری با W3C",
                description: "تمام صفحات با ابزار W3C Validator تست شده‌اند.",
                category: "HTML TESTING"
            },
            {
                id: "html-lint",
                title: "HTML Lint",
                description: "از ابزارهایی برای تحلیل مشکلات کد HTML استفاده شده است.",
                category: "HTML TESTING"
            },
            {
                id: "link-checker",
                title: "بررسی لینک‌ها",
                description: "لینک‌های شکسته در صفحه وجود ندارد.",
                category: "HTML TESTING"
            },
            {
                id: "adblock-test",
                title: "تست Adblock",
                description: "محتوای وبسایت با فعال بودن Adblock به درستی نمایش داده می‌شود.",
                category: "HTML TESTING"
            }
        ]
    },
    webfonts: {
        title: "فونت‌های وب",
        description: "بهینه‌سازی و استفاده صحیح از فونت‌های وب برای عملکرد بهتر.",
        items: [
            {
                id: "webfont-format",
                title: "فرمت فونت‌های وب",
                description: "فرمت‌های WOFF, WOFF2 و TTF که توسط تمام مرورگرهای مدرن پشتیبانی می‌شوند استفاده شده است.",
                category: "WEBFONT"
            },
            {
                id: "webfont-size",
                title: "حجم فونت‌های وب",
                description: "حجم فونت‌های وب از 100 کیلوبایت (با احتساب تمام variants) بیشتر نیست.",
                category: "WEBFONT"
            },
            {
                id: "webfont-loader",
                title: "لودر فونت‌های وب",
                description: "برای کنترل رفتار بارگذاری از یک لودر فونت استفاده شده است.",
                category: "WEBFONT"
            }
        ]
    },
    css: {
        title: "CSS",
        description: "بهترین روش‌های نوشتن و بهینه‌سازی کدهای CSS برای عملکرد و نگهداری بهتر.",
        items: [
            {
                id: "responsive-design",
                title: "طراحی واکنش‌گرا",
                description: "وبسایت از طراحی واکنش‌گرا استفاده می‌کند.",
                category: "CSS"
            },
            {
                id: "css-print",
                title: "CSS چاپ",
                description: "استایل‌های مخصوص چاپ برای هر صفحه وجود دارد.",
                category: "CSS"
            },
            {
                id: "unique-id",
                title: "ID منحصر به فرد",
                description: "اگر از ID استفاده شده است، در هر صفحه منحصر به فرد هستند.",
                category: "CSS"
            },
            {
                id: "reset-css",
                title: "Reset CSS",
                description: "از یک Reset CSS (reset, normalize یا reboot) استفاده شده است.",
                category: "CSS"
            },
            {
                id: "js-prefix",
                title: "پیشوند JS",
                description: "تمام کلاس‌ها (یا IDهای) استفاده شده در فایل‌های JavaScript با js- شروع می‌شوند و در فایل‌های CSS استایل ندارند.",
                category: "JAVASCRIPT BEST PRACTICES"
            },
            {
                id: "inline-css",
                title: "CSS داخلی",
                description: "از CSS داخلی (در تگ style) یا inline CSS اجتناب شده است.",
                category: "CSS"
            },
            {
                id: "vendor-prefixes",
                title: "پیشوندهای فروشندگان",
                description: "پیشوندهای CSS vendor با توجه به سازگاری مرورگرها استفاده شده است.",
                category: "CSS"
            },
            {
                id: "css-concat",
                title: "الحاق فایل‌های CSS",
                description: "فایل‌های CSS در یک فایل واحد ترکیب شده‌اند (برای HTTP/2 ضروری نیست).",
                category: "CSS PERFORMANCE"
            },
            {
                id: "css-minify",
                title: "فشرده‌سازی CSS",
                description: "تمام فایل‌های CSS فشرده شده‌اند.",
                category: "CSS PERFORMANCE"
            },
            {
                id: "non-blocking-css",
                title: "CSS غیر مسدودکننده",
                description: "فایل‌های CSS به صورت غیر مسدودکننده بارگذاری می‌شوند تا DOM سریع‌تر لود شود.",
                category: "CSS PERFORMANCE"
            },
            {
                id: "stylelint",
                title: "Stylelint",
                description: "تمام فایل‌های CSS یا SCSS بدون خطا هستند.",
                category: "CSS TESTING"
            },
            {
                id: "responsive-test",
                title: "تست واکنش‌گرایی",
                description: "تمام صفحات با breakpointهای صحیح تست شده‌اند.",
                category: "CSS TESTING"
            },
            {
                id: "css-validator",
                title: "CSS Validator",
                description: "CSS تست شده و خطاهای مربوطه اصلاح شده‌اند.",
                category: "CSS TESTING"
            },
            {
                id: "desktop-browsers",
                title: "مرورگرهای دسکتاپ",
                description: "تمام صفحات در مرورگرهای فعلی دسکتاپ تست شده‌اند (Safari, Firefox, Chrome, IE, Edge...).",
                category: "CSS TESTING"
            },
            {
                id: "mobile-browsers",
                title: "مرورگرهای موبایل",
                description: "تمام صفحات در مرورگرهای فعلی موبایل تست شده‌اند (مرورگر پیش‌فرض, Chrome, Safari...).",
                category: "CSS TESTING"
            },
            {
                id: "os-test",
                title: "تست سیستم‌عامل",
                description: "تمام صفحات در سیستم‌عامل‌های فعلی تست شده‌اند (Windows, Android, iOS, Mac...).",
                category: "CSS TESTING"
            },
            {
                id: "direction-test",
                title: "تست جهت نوشتار",
                description: "تمام صفحات برای زبان‌های LTR و RTL در صورت نیاز تست شده‌اند.",
                category: "CSS TESTING"
            }
        ]
    },
    javascript: {
        title: "JavaScript",
        description: "بهترین روش‌های نوشتن و بهینه‌سازی کدهای JavaScript برای عملکرد و امنیت بهتر.",
        items: [
            {
                id: "js-inline",
                title: "JavaScript داخلی",
                description: "کد JavaScript داخلی (مخلوط با کد HTML) وجود ندارد.",
                category: "JAVASCRIPT"
            },
            {
                id: "js-concat",
                title: "الحاق فایل‌های JS",
                description: "فایل‌های JavaScript ترکیب شده‌اند.",
                category: "JAVASCRIPT"
            },
            {
                id: "js-minify",
                title: "فشرده‌سازی JS",
                description: "فایل‌های JavaScript فشرده شده‌اند (می‌توان از پسوند .min استفاده کرد).",
                category: "JAVASCRIPT"
            },
            {
                id: "js-security",
                title: "امنیت JavaScript",
                description: "مسائل امنیتی JavaScript بررسی شده‌اند.",
                category: "JAVASCRIPT SECURITY"
            },
            {
                id: "noscript-tag",
                title: "تگ noscript",
                description: "از تگ `<noscript>` در بدنه HTML استفاده شده است اگر اسکریپتی پشتیبانی نشود یا غیرفعال باشد.",
                category: "JAVASCRIPT"
            },
            {
                id: "non-blocking-js",
                title: "JS غیر مسدودکننده",
                description: "فایل‌های JavaScript به صورت async یا با defer بارگذاری می‌شوند.",
                category: "JAVASCRIPT PERFORMANCE"
            },
            {
                id: "modernizr",
                title: "Modernizr",
                description: "اگر نیاز به هدف قرار دادن ویژگی‌های خاص دارید، از یک Modernizr سفارشی استفاده کنید.",
                category: "JAVASCRIPT"
            },
            {
                id: "eslint",
                title: "ESLint",
                description: "هیچ خطایی توسط ESLint گزارش نشده است (بر اساس تنظیمات یا قوانین استاندارد).",
                category: "JAVASCRIPT TESTING"
            }
        ]
    },
    images: {
        title: "تصاویر",
        description: "بهینه‌سازی و استفاده صحیح از تصاویر برای عملکرد بهتر.",
        items: [
            {
                id: "image-optimize",
                title: "بهینه‌سازی تصاویر",
                description: "تمام تصاویر برای نمایش در مرورگر بهینه شده‌اند. برای صفحات مهم (مثل صفحه اصلی) می‌توان از فرمت WebP استفاده کرد.",
                category: "IMAGES BEST PRACTICES"
            },
            {
                id: "picture-srcset",
                title: "Picture/Srcset",
                description: "از picture/srcset برای ارائه مناسب‌ترین تصویر برای viewport کاربر استفاده شده است.",
                category: "IMAGES"
            },
            {
                id: "retina",
                title: "Retina",
                description: "تصاویر layout با کیفیت 2x یا 3x برای نمایش Retina ارائه شده‌اند.",
                category: "IMAGES"
            },
            {
                id: "sprite",
                title: "Sprite",
                description: "تصاویر کوچک (مثل آیکون‌ها) در یک فایل sprite قرار دارند (می‌توانند در یک تصویر SVG sprite باشند).",
                category: "IMAGES"
            },
            {
                id: "width-height",
                title: "عرض و ارتفاع",
                description: "ویژگی‌های width و height برای تگ <img> تنظیم شده است اگر اندازه نهایی تصویر مشخص است (برای سایزدهی با CSS می‌توان آن را حذف کرد).",
                category: "IMAGES"
            },
            {
                id: "alt-text",
                title: "متن جایگزین",
                description: "تمام تگ‌های <img> دارای متن جایگزین (alt) هستند که تصویر را به صورت بصری توصیف می‌کند.",
                category: "IMAGES"
            },
            {
                id: "lazy-load",
                title: "بارگذاری تنبل",
                description: "تصاویر به صورت lazy بارگذاری می‌شوند (همیشه یک fallback با noscript ارائه شده است).",
                category: "IMAGES PERFORMANCE"
            }
        ]
    },
    accessibility: {
        title: "دسترسی‌پذیری",
        description: "راهکارهای بهبود دسترسی‌پذیری برای تمام کاربران، از جمله افراد دارای معلولیت.",
        items: [
            {
                id: "progressive-enhancement",
                title: "بهبود تدریجی",
                description: "عملکردهای اصلی مانند نویگیشن اصلی و جستجو بدون JavaScript فعال کار می‌کنند.",
                category: "BEST PRACTICES"
            },
            {
                id: "color-contrast",
                title: "کنتراست رنگ",
                description: "کنتراست رنگ حداقل استاندارد WCAG AA (برای موبایل AAA) را رعایت می‌کند.",
                category: "BEST PRACTICES"
            },
            {
                id: "h1",
                title: "H1",
                description: "تمام صفحات دارای یک H1 هستند که عنوان وبسایت نیست.",
                category: "BEST PRACTICES SEO"
            },
            {
                id: "headings",
                title: "سرتیترها",
                description: "سرتیترها به درستی و به ترتیب استفاده شده‌اند (H1 تا H6).",
                category: "BEST PRACTICES"
            },
            {
                id: "input-types",
                title: "انواع inputهای HTML5",
                description: "از انواع خاص inputهای HTML5 استفاده شده است (مخصوصاً برای دستگاه‌های موبایل که کیبوردهای سفارشی نشان می‌دهند).",
                category: "BEST PRACTICES"
            },
            {
                id: "labels",
                title: "برچسب‌ها",
                description: "به هر عنصر فرم یک label مرتبط شده است. در صورت عدم نمایش label از aria-label استفاده شده است.",
                category: "BEST PRACTICES"
            },
            {
                id: "accessibility-test",
                title: "تست استانداردهای دسترسی‌پذیری",
                description: "از ابزار WAVE برای تست رعایت استانداردهای دسترسی‌پذیری استفاده شده است.",
                category: "TESTING"
            },
            {
                id: "keyboard-nav",
                title: "ناوبری با کیبورد",
                description: "وبسایت فقط با کیبورد و به ترتیب قابل پیش‌بینی قابل استفاده است. تمام عناصر interactive قابل دسترسی و استفاده هستند.",
                category: "TESTING"
            },
            {
                id: "screen-reader",
                title: "Screen Reader",
                description: "تمام صفحات در دو یا چند screen reader (مانند JAWS, VoiceOver و NVDA) تست شده‌اند.",
                category: "TESTING"
            },
            {
                id: "focus-style",
                title: "استایل فوکوس",
                description: "اگر focus غیرفعال شده است، با یک استایل قابل مشاهده در CSS جایگزین شده است.",
                category: "TESTING"
            }
        ]
    },
    performance: {
        title: "عملکرد",
        description: "بهینه‌سازی‌های مربوط به سرعت و عملکرد وبسایت.",
        items: [
            {
                id: "page-weight",
                title: "وزن صفحه",
                description: "وزن هر صفحه بین 0 تا 500 کیلوبایت است.",
                category: "PERFORMANCE"
            },
            {
                id: "minified-html",
                title: "فشرده‌سازی HTML",
                description: "HTML شما فشرده شده است.",
                category: "HTML PERFORMANCE"
            },
            {
                id: "lazy-loading",
                title: "بارگذاری تنبل",
                description: "تصاویر، اسکریپت‌ها و CSS به صورت lazy بارگذاری می‌شوند تا زمان پاسخ صفحه فعلی بهبود یابد.",
                category: "BEST PRACTICES"
            },
            {
                id: "cookie-size",
                title: "اندازه کوکی",
                description: "اگر از کوکی استفاده می‌کنید، مطمئن شوید هر کوکی بیش از 4096 بایت نباشد و نام دامنه شما بیش از 20 کوکی نداشته باشد.",
                category: "BEST PRACTICES"
            },
            {
                id: "third-party",
                title: "کامپوننت‌های شخص ثالث",
                description: "کامپوننت‌های شخص ثالث بهینه شده‌اند.",
                category: "BEST PRACTICES"
            },
            {
                id: "dns-prefetch",
                title: "پیش‌بارگذاری DNS",
                description: "DNS سرویس‌های شخص ثالث که ممکن است نیاز باشد، در زمان بیکاری با استفاده از dns-prefetch از قبل resolve شده است.",
                category: "REQUESTS"
            },
            {
                id: "preconnect",
                title: "Preconnect",
                description: "DNS lookup, TCP handshake و TLS negotiation برای سرویس‌هایی که به زودی نیاز خواهند شد، در زمان بیکاری با استفاده از preconnect انجام شده است.",
                category: "REQUESTS"
            },
            {
                id: "prefetch",
                title: "Prefetch",
                description: "منابعی که به زودی نیاز خواهند شد (مثل تصاویر lazy load) در زمان بیکاری با استفاده از prefetch از قبل درخواست شده‌اند.",
                category: "REQUESTS"
            },
            {
                id: "preload",
                title: "Preload",
                description: "منابع مورد نیاز در صفحه فعلی (مثل اسکریپت‌های انتهای body) با استفاده از preload از قبل بارگذاری شده‌اند.",
                category: "REQUESTS"
            },
            {
                id: "pagespeed",
                title: "Google PageSpeed",
                description: "تمام صفحات (نه فقط صفحه اصلی) تست شده و حداقل نمره 90/100 را دارند.",
                category: "TESTING"
            }
        ]
    },
    seo: {
        title: "سئو",
        description: "بهینه‌سازی‌های مربوط به موتورهای جستجو.",
        items: [
            {
                id: "google-analytics",
                title: "Google Analytics",
                description: "Google Analytics نصب و به درستی پیکربندی شده است.",
                category: "SEO"
            },
            {
                id: "headings-logic",
                title: "منطق سرتیترها",
                description: "متن سرتیترها به درک محتوای صفحه فعلی کمک می‌کند.",
                category: "SEO ACCESSIBILITY HTML"
            },
            {
                id: "sitemap-xml",
                title: "sitemap.xml",
                description: "فایل sitemap.xml وجود دارد و به Google Search Console ارسال شده است.",
                category: "SEO"
            },
            {
                id: "robots-txt",
                title: "robots.txt",
                description: "فایل robots.txt هیچ صفحه‌ای را مسدود نمی‌کند.",
                category: "SEO TESTING"
            },
            {
                id: "structured-data",
                title: "داده‌های ساختاریافته",
                description: "صفحاتی که از داده‌های ساختاریافته استفاده می‌کنند تست شده و بدون خطا هستند.",
                category: "SEO TESTING"
            },
            {
                id: "sitemap-html",
                title: "Sitemap HTML",
                description: "یک Sitemap HTML وجود دارد و از طریق لینک در فوتر وبسایت قابل دسترسی است.",
                category: "SEO HTML"
            },
            {
                id: "pagination-tags",
                title: "تگ‌های صفحه‌بندی",
                description: "برای محتوای صفحه‌بندی شده از rel=\"prev\" و rel=\"next\" استفاده شده است.",
                category: "SEO HTML"
            }
        ]
    }
};

// مدیریت وضعیت
class ChecklistApp {
    constructor() {
        this.state = {
            checkedItems: this.loadProgress(),
            darkMode: false,
            currentCategory: null
        };
        
        this.init();
    }
    
    init() {
        this.renderCategories();
        this.setupEventListeners();
        this.calculateOverallProgress();
        
        // نمایش انیمیشن ورود
        setTimeout(() => {
            document.querySelectorAll('.category-card').forEach((card, index) => {
                card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
                card.style.opacity = '0';
            });
        }, 100);
    }
    
    loadProgress() {
        const savedProgress = localStorage.getItem('frontend-checklist-progress');
        if (savedProgress) {
            try {
                return JSON.parse(savedProgress);
            } catch (e) {
                return {};
            }
        }
        return {};
    }
    
    saveProgress() {
        localStorage.setItem(
            'frontend-checklist-progress', 
            JSON.stringify(this.state.checkedItems)
        );
        
        // تنظیم تاریخ انقضا برای 1 سال بعد
        const now = new Date();
        const expiryDate = new Date(now.setFullYear(now.getFullYear() + 1)).toUTCString();
        document.cookie = `frontend-checklist-expiry=${expiryDate}; expires=${expiryDate}; path=/`;
    }
    
    toggleItem(category, itemId) {
        if (!this.state.checkedItems[category]) {
            this.state.checkedItems[category] = {};
        }
        
        this.state.checkedItems[category][itemId] = !this.state.checkedItems[category][itemId];
        this.saveProgress();
        
        // اگر در صفحه جزئیات هستیم، پیشرفت آن بخش را به روز کنیم
        if (this.state.currentCategory === category) {
            this.renderCategoryDetails(category);
        }
        
        this.calculateOverallProgress();
        
        // اگر تمام آیتم‌های یک بخش تکمیل شد، کانفی نمایش دهیم
        if (this.isCategoryComplete(category)) {
            this.showConfetti();
        }
    }
    
    isItemChecked(category, itemId) {
        return !!this.state.checkedItems[category]?.[itemId];
    }
    
    calculateCategoryProgress(category) {
        const items = checklistData[category]?.items || [];
        if (items.length === 0) return 0;
        
        const checkedCount = items.filter(item => this.isItemChecked(category, item.id)).length;
        return Math.round((checkedCount / items.length) * 100);
    }
    
    isCategoryComplete(category) {
        return this.calculateCategoryProgress(category) === 100;
    }
    
    calculateOverallProgress() {
        let totalItems = 0;
        let checkedItems = 0;
        
        Object.keys(checklistData).forEach(category => {
            checklistData[category].items.forEach(item => {
                totalItems++;
                if (this.isItemChecked(category, item.id)) {
                    checkedItems++;
                }
            });
        });
        
        const progress = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
        
        document.querySelector('.progress-value').textContent = `${progress}%`;
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        document.getElementById('completed-count').textContent = checkedItems;
        document.getElementById('total-count').textContent = totalItems;
        
        return progress;
    }
    
    renderCategories() {
        const container = document.getElementById('categories-container');
        container.innerHTML = '';
        
        Object.keys(checklistData).forEach(category => {
            const progress = this.calculateCategoryProgress(category);
            const isComplete = this.isCategoryComplete(category);
            
            const card = document.createElement('div');
            card.className = `category-card ${isComplete ? 'complete' : ''}`;
            card.dataset.category = category;
            
            card.innerHTML = `
                <div class="category-header">
                    <h3 class="category-title">${checklistData[category].title}</h3>
                    <div class="category-progress">
                        <span class="category-progress-value">${progress}%</span>
                    </div>
                </div>
                <p class="category-description">${checklistData[category].description}</p>
                <button class="view-details-btn">مشاهده جزئیات</button>
            `;
            
            container.appendChild(card);
        });
    }
    
    renderCategoryDetails(category) {
        this.state.currentCategory = category;
        const categoryData = checklistData[category];
        const progress = this.calculateCategoryProgress(category);
        
        // به روزرسانی هدر
        document.getElementById('details-title').textContent = categoryData.title;
        document.getElementById('category-progress-value').textContent = `${progress}%`;
        document.getElementById('category-progress-bar').style.width = `${progress}%`;
        
        // رندر آیتم‌ها
        const container = document.getElementById('checklist-items');
        container.innerHTML = '';
        
        categoryData.items.forEach(item => {
            const isChecked = this.isItemChecked(category, item.id);
            
            const itemEl = document.createElement('div');
            itemEl.className = `checklist-item ${isChecked ? 'checked' : ''}`;
            itemEl.innerHTML = `
                <div class="item-header">
                    <input type="checkbox" id="${item.id}" class="item-checkbox" ${isChecked ? 'checked' : ''}>
                    <label for="${item.id}" class="item-title">${item.title}</label>
                    <span class="item-category">${item.category}</span>
                </div>
                <div class="item-description">${item.description}</div>
            `;
            
            container.appendChild(itemEl);
        });
        
        // نمایش صفحه جزئیات
        document.getElementById('categories-section').style.display = 'none';
        document.getElementById('details-section').style.display = 'block';
        
        // انیمیشن برای آیتم‌ها
        setTimeout(() => {
            document.querySelectorAll('.checklist-item').forEach((item, index) => {
                item.style.animation = `fadeIn 0.3s ease-out ${index * 0.05}s forwards`;
                item.style.opacity = '0';
            });
        }, 100);
    }
    
    setupEventListeners() {
        // کلیک روی کارت‌های دسته‌بندی
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.category-card');
            if (card) {
                const category = card.dataset.category;
                this.renderCategoryDetails(category);
            }
            
            // دکمه بازگشت
            if (e.target.closest('#back-btn')) {
                document.getElementById('details-section').style.display = 'none';
                document.getElementById('categories-section').style.display = 'block';
                this.state.currentCategory = null;
                this.renderCategories();
            }
            
            // کلیک روی آیتم‌های چک‌لیست
            const checkbox = e.target.closest('.item-checkbox');
            if (checkbox && this.state.currentCategory) {
                const itemId = checkbox.id;
                this.toggleItem(this.state.currentCategory, itemId);
                
                // به روزرسانی آیتم در UI
                const itemEl = checkbox.closest('.checklist-item');
                itemEl.classList.toggle('checked', checkbox.checked);
                
                // به روزرسانی پیشرفت
                const progress = this.calculateCategoryProgress(this.state.currentCategory);
                document.getElementById('category-progress-value').textContent = `${progress}%`;
                document.getElementById('category-progress-bar').style.width = `${progress}%`;
            }
            
            // کلیک روی عنوان آیتم برای نمایش/مخفی کردن توضیحات
            const itemTitle = e.target.closest('.item-title');
            if (itemTitle) {
                const itemEl = itemTitle.closest('.checklist-item');
                itemEl.classList.toggle('item-expanded');
            }
        });
        
        // دکمه حالت تاریک
        document.getElementById('dark-mode-btn').addEventListener('click', () => {
            this.state.darkMode = !this.state.darkMode;
            document.body.classList.toggle('dark-mode', this.state.darkMode);
            
            // تغییر آیکون
            const icon = document.querySelector('#dark-mode-btn svg');
            if (this.state.darkMode) {
                icon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
            } else {
                icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
            }
        });
        
        // دکمه خروجی گرفتن
        document.getElementById('export-btn').addEventListener('click', () => {
            this.exportChecklist();
        });
    }
    
    showConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    exportChecklist() {
        let output = `چک‌لیست فرانت‌اند - وضعیت پیشرفت\n`;
        output += `تاریخ: ${new Date().toLocaleDateString('fa-IR')}\n\n`;
        
        // پیشرفت کلی
        const overallProgress = this.calculateOverallProgress();
        output += `پیشرفت کلی: ${overallProgress}%\n\n`;
        
        // جزئیات هر دسته
        Object.keys(checklistData).forEach(category => {
            const progress = this.calculateCategoryProgress(category);
            output += `\n${checklistData[category].title}: ${progress}%\n`;
            output += `${'='.repeat(checklistData[category].title.length + 10)}\n`;
            
            checklistData[category].items.forEach(item => {
                const isChecked = this.isItemChecked(category, item.id);
                output += `${isChecked ? '✓' : '✗'} ${item.title}\n`;
            });
        });
        
        // ایجاد فایل و دانلود
        const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `frontend-checklist-${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// راه‌اندازی برنامه
document.addEventListener('DOMContentLoaded', () => {
    new ChecklistApp();
    
    // اضافه کردن استایل برای انیمیشن‌ها
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .complete {
            position: relative;
            overflow: hidden;
        }
        
        .complete::after {
            content: '✓';
            position: absolute;
            top: 10px;
            left: 10px;
            background: var(--success);
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(0, 184, 148, 0.3);
        }
    `;
    document.head.appendChild(style);
});