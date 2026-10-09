/**
 * ============================================================================
 * FAi-Chatbot-RTL-Persian-Arabic - Smart RTL & Multilingual Assistant
 * Architecture & Core Engine authored by Aliz
 * All Rights Reserved © 2026 Aliz
 * ============================================================================
 */

const ALIZ_SUPPORTED_PLATFORMS = [
  { key: 'chatGpt', name: 'چت‌جی‌پی‌تی (ChatGPT)', domain: 'chatgpt.com', icon: 'chatgpt-icon.png' },
  { key: 'claude', name: 'کلاد (Claude)', domain: 'claude.ai', icon: 'claude-icon.png' },
  { key: 'gemini', name: 'گوگل جمنای (Gemini)', domain: 'gemini.google.com', icon: 'Gemini.png' },
  { key: 'deepseek', name: 'دیپ‌سیک (DeepSeek)', domain: 'chat.deepseek.com', icon: 'deepseek.jpg' },
  { key: 'perplexity', name: 'پرپلکسیتی (Perplexity)', domain: 'perplexity.ai', icon: 'perplexity.png' },
  { key: 'grok', name: 'گروک (Grok)', domain: 'grok.com', icon: 'gork.png' },
  { key: 'githubCopilot', name: 'گیت‌هاب کوپایلت', domain: 'github.com', icon: 'GithubCopilot.png' },
  { key: 'copilot', name: 'مایکروسافت کوپایلت', domain: 'copilot.microsoft.com', icon: 'copilot-icon.png' },
  { key: 'aiStudio', name: 'گوگل ای‌آی استودیو', domain: 'aistudio.google.com', icon: 'aistudio.png' },
  { key: 'notebooklm', name: 'نوتبوک ال‌ام (NotebookLM)', domain: 'notebooklm.google.com', icon: 'notebooklm.png' },
  { key: 'qwenlm', name: 'کوئن (Qwen)', domain: 'chat.qwen.ai', icon: 'qwen.png' },
  { key: 'poeCom', name: 'پو (Poe)', domain: 'poe.com', icon: 'poe.png' },
  { key: 'mistral', name: 'میسترال (Mistral)', domain: 'chat.mistral.ai', icon: 'chat-mistral.png' },
  { key: 'monica', name: 'مونیکا (Monica)', domain: 'monica.im', icon: 'monica.png' },
  { key: 'manus', name: 'مانوس (Manus)', domain: 'manus.im', icon: 'manus.png' },
  { key: 'kimi', name: 'کیمی (Kimi)', domain: 'kimi.ai', icon: 'kimi.png' },
  { key: 'blackbox', name: 'بلک‌باکس (Blackbox)', domain: 'blackbox.ai', icon: 'BlackBox.png' },
  { key: 'duckduckgo', name: 'داک‌داک‌گو هوش مصنوعی', domain: 'duckduckgo.com', icon: 'duckduckgo.png' },
  { key: 'youCom', name: 'یو دات کام (You.com)', domain: 'you.com', icon: 'you com.jpg' },
  { key: 'openrouter', name: 'اوپن روتر (OpenRouter)', domain: 'openrouter.ai', icon: 'openrouter.png' },
  { key: 'arena', name: 'ال‌ام آرنا (LMSYS Arena)', domain: 'lmarena.ai', icon: 'arena.png' },
  { key: 'minimax', name: 'مینی‌مکس (MiniMax)', domain: 'agent.minimax.io', icon: 'minimax.png' },
  { key: 'jules', name: 'جولز (Jules Google)', domain: 'jules.google.com', icon: 'jules.png' },
  { key: 'zai', name: 'زی آی (Z.ai)', domain: 'chat.z.ai', icon: 'z.ai.png' },
  { key: 'oneMinai', name: 'وان‌مین ای‌آی (1Min.AI)', domain: '1min.ai', icon: '1minai.png' },
  { key: 'writesonic', name: 'رایت‌سونیک (Writesonic)', domain: 'writesonic.com', icon: 'writesonic.png' },
  { key: 'lovable', name: 'لاوبل (Lovable.dev)', domain: 'lovable.dev', icon: 'lovable.png' },
  { key: 'gamma', name: 'گاما (Gamma App)', domain: 'gamma.app', icon: 'gama.png' },
  { key: 'ernie', name: 'ارنی بایدو (Baidu Ernie)', domain: 'ernie.baidu.com', icon: 'ernie.png' },
  { key: 'notion', name: 'نوشن (Notion AI)', domain: 'notion.so', icon: 'notion.png' },
  { key: 'cursor', name: 'کرسر (Cursor AI)', domain: 'cursor.com', icon: 'cursor.png' },
  { key: 'typingmind', name: 'تایپینگ مایند (TypingMind)', domain: 'typingmind.com', icon: 'typingmind.png' },
  { key: 'chatboxai', name: 'چت‌باکس (Chatbox AI)', domain: 'chatboxai.app', icon: 'chatboxai.png' },
  { key: 'huggingface', name: 'هاگینگ فیس (HuggingChat)', domain: 'huggingface.co', icon: 'huggingface.png' },
  { key: 'meta', name: 'متا ای‌آی (Meta AI)', domain: 'meta.ai', icon: 'meta.png' },
  { key: 'characterAi', name: 'کاراکتر ای‌آی', domain: 'character.ai', icon: 'character-ai.png' },
  { key: 'pi', name: 'پای (Pi.ai)', domain: 'pi.ai', icon: 'pi.png' },
  { key: 'genspark', name: 'جن‌اسپارک (Genspark)', domain: 'genspark.ai', icon: 'genspark.png' },
  { key: 'consensus', name: 'کنسنسوس (Consensus)', domain: 'consensus.app', icon: 'consensus.png' },
  { key: 'scispace', name: 'سای‌اسپیس (SciSpace)', domain: 'scispace.com', icon: 'scispace.png' },
  { key: 'elicit', name: 'الیسیت (Elicit)', domain: 'elicit.com', icon: 'elicit.png' },
  { key: 'synaps', name: 'سیناپس (Synaps)', domain: 'synaps.app', icon: 'synaps.png' },
  { key: 'mathgpt', name: 'مث جی‌پی‌تی (MathGPT)', domain: 'math-gpt.org', icon: 'mathgpt.png' },
  { key: 'longcat', name: 'لانگ کت (LongCat)', domain: 'longcat.ai', icon: 'longcat.png' },
  { key: 'lumo', name: 'لومو پروتون (Lumo)', domain: 'lumo.proton.me', icon: 'lumo-proton.png' },
  { key: 'googleLabs', name: 'گوگل لبز (Google Labs)', domain: 'labs.google', icon: 'labs-google.png' },
  { key: 'veo3', name: 'وئو ۳ (Veo 3)', domain: 'www-veo3.com', icon: 'veo3.png' },
  { key: 'fal', name: 'فال (fal.ai)', domain: 'fal.ai', icon: 'fal.png' },
  { key: 'bfl', name: 'بلک فارست (BFL)', domain: 'bfl.ai', icon: 'bfl.png' },
  { key: 't3chat', name: 'تی تری (T3 Chat)', domain: 't3.chat', icon: 't3-chat.png' },
  { key: 'digen', name: 'دیجن (Digen.ai)', domain: 'digen.ai', icon: 'digen.png' },
  { key: 'sakana', name: 'ساکانا (Sakana AI)', domain: 'sakana.ai', icon: 'sakana.png' },
  { key: 'dash0', name: 'دش زیرو (Dash0)', domain: 'dash0.com', icon: 'dash0.png' },
  { key: 'zerve', name: 'زرو (Zerve.ai)', domain: 'zerve.ai', icon: 'zerve.png' }
];

const ALIZ_I18N = {
  fa: {
    langCode: 'FA',
    dir: 'rtl',
    htmlLang: 'fa',
    langBtnTitle: 'تغییر زبان (فارسی / العربية / English)',
    themeBtnTitle: (themeName) => `تم فعلی: ${themeName} (برای تغییر کلیک کنید)`,
    gearBtnTitle: 'تنظیمات پیشرفته',
    subtitle: 'راست‌چین چت‌بات هوش مصنوعی',
    activationTitle: 'فعال‌سازی راست‌چین',
    statusOn: 'روشن',
    statusOff: 'خاموش',
    mainTab: 'اصلی و سرویس‌ها',
    drawerTitle: 'الگوریتم تشخیص جهت متن',
    drawerCloseTitle: 'بستن تنظیمات',
    algoLabel: 'شیوه آنالیز جملات و پیام‌ها:',
    badgeSmart: 'موتور هوشمند',
    algoOptions: {
      advanced_full: 'تحلیل پیشرفته یکپارچه (توصیه‌شده)',
      advanced_section: 'تحلیل پیشرفته بخش‌ها',
      first_word: 'تشخیص بر مبنای واژه آغازین'
    },
    algoHelp: 'کل پیام پردازش شده و برای چت‌های طولانی و متن‌های ترکیبی فارسی و انگلیسی بهینه‌ترین دقت را ارائه می‌دهد.',
    flipArrowsTitle: 'برعکس کردن فلش‌ها در متن راست‌چین',
    applyToCodeTitle: 'اعمال روی باکس کدها (Markdown)',
    badgeBeta: 'آزمایشی',
    drawerInfoTitle: 'راهنمای عملکرد',
    drawerInfoText: 'افزونه FAi-Chat تغییرات پیام‌های چت را به سرعت تشخیص داده و بدون تداخل در بلوک‌های کد یا فرمول‌ها، جهت متن را هماهنگ می‌سازد.',
    fontSectionTitle: 'تنظیمات قلم (فونت)',
    badgeActiveFont: 'قلم فعال',
    fontLabel: 'فونت:',
    fontOptions: {
      vazir: 'وزیرمتن (پیش‌فرض)',
      snapp: 'اسنپ (Snapp)',
      dubai: 'دبی (Dubai)',
      custom_system: 'فونت دلخواه از سیستم...'
    },
    systemFontsLabel: 'قلم‌های شناسایی‌شده در سیستم:',
    systemFontsDefault: '-- انتخاب قلم از سیستم --',
    manualFontLabel: 'یا نام فونت نصب‌شده را تایپ کنید:',
    customFontPlaceholder: 'مثلاً: Tahoma یا B Nazanin',
    customFontSubmit: 'ثبت',
    customFontSaved: 'ثبت شد!',
    fontSizeLabel: 'اندازه فونت:',
    resetFontSizeTitle: 'بازنشانی اندازه فونت به حالت پیش‌فرض (16px)',
    servicesSectionTitle: 'سرویس‌های هوش مصنوعی',
    activeCountBadge: (active, total) => `فعال: ${active} / ${total}`,
    searchPlaceholder: 'جستجوی سرویس (مثلاً ChatGPT, Claude)...',
    noSitesFound: 'سایتی با این عنوان یافت نشد.',
    openSiteTitle: (name) => `باز کردن وب‌سایت ${name}`
  },
  ar: {
    langCode: 'AR',
    dir: 'rtl',
    htmlLang: 'ar',
    langBtnTitle: 'تغيير اللغة (فارسی / العربية / English)',
    themeBtnTitle: (themeName) => `السمة الحالية: ${themeName} (انقر للتغيير)`,
    gearBtnTitle: 'الإعدادات المتقدمة',
    subtitle: 'محاذاة لليمين لروبوتات الذكاء الاصطناعي',
    activationTitle: 'تفعيل المحاذاة لليمين',
    statusOn: 'مفعل',
    statusOff: 'معطل',
    mainTab: 'الرئيسية والخدمات',
    drawerTitle: 'خوارزمية تحديد اتجاه النص',
    drawerCloseTitle: 'إغلاق الإعدادات',
    algoLabel: 'طريقة تحليل الجمل والرسائل:',
    badgeSmart: 'محرك ذكي',
    algoOptions: {
      advanced_full: 'التحليل المتقدم الشامل (موصى به)',
      advanced_section: 'التحليل المتقدم للأقسام',
      first_word: 'الكشف بناءً على الكلمة الأولى'
    },
    algoHelp: 'تتم معالجة الرسالة بأكملها لتوفير أعلى دقة للمحادثات الطويلة والنصوص ثنائية اللغة العربية والإنجليزية.',
    flipArrowsTitle: 'عكس اتجاه الأسهم في النصوص اليمينية',
    applyToCodeTitle: 'تطبيق على مربعات الأكواد (Markdown)',
    badgeBeta: 'تجريبي',
    drawerInfoTitle: 'دليل الاستخدام',
    drawerInfoText: 'تقوم إضافة FAi-Chat باكتشاف تغييرات الرسائل فورياً وتنسيق اتجاه النص دون المساس بكتل الأكواد أو المعادلات.',
    fontSectionTitle: 'إعدادات الخط',
    badgeActiveFont: 'الخط النشط',
    fontLabel: 'الخط:',
    fontOptions: {
      vazir: 'وزیر متن (افتراضي)',
      snapp: 'سناب (Snapp)',
      dubai: 'دبي (Dubai)',
      custom_system: 'خط مخصص من النظام...'
    },
    systemFontsLabel: 'الخطوط المكتشفة في النظام:',
    systemFontsDefault: '-- اختر خطاً من النظام --',
    manualFontLabel: 'أو اكتب اسم الخط المثبت:',
    customFontPlaceholder: 'مثال: Tahoma أو Traditional Arabic',
    customFontSubmit: 'حفظ',
    customFontSaved: 'تم الحفظ!',
    fontSizeLabel: 'حجم الخط:',
    resetFontSizeTitle: 'إعادة تعيين حجم الخط إلى الافتراضي (16 بكسل)',
    servicesSectionTitle: 'خدمات الذكاء الاصطناعي',
    activeCountBadge: (active, total) => `مفعل: ${active} / ${total}`,
    searchPlaceholder: 'بحث عن خدمة (مثل ChatGPT, Claude)...',
    noSitesFound: 'لم يتم العثور على أي موقع بهذا الاسم.',
    openSiteTitle: (name) => `فتح موقع ${name}`
  },
  en: {
    langCode: 'EN',
    dir: 'ltr',
    htmlLang: 'en',
    langBtnTitle: 'Change Language (فارسی / العربية / English)',
    themeBtnTitle: (themeName) => `Current Theme: ${themeName} (Click to change)`,
    gearBtnTitle: 'Advanced Settings',
    subtitle: 'RTL AI Chatbot Assistant',
    activationTitle: 'Enable RTL Layout',
    statusOn: 'ON',
    statusOff: 'OFF',
    mainTab: 'Home & Services',
    drawerTitle: 'Text Direction Algorithm',
    drawerCloseTitle: 'Close Settings',
    algoLabel: 'Sentence Analysis Method:',
    badgeSmart: 'Smart Engine',
    algoOptions: {
      advanced_full: 'Advanced Unified Analysis (Recommended)',
      advanced_section: 'Advanced Section Analysis',
      first_word: 'First Word Detection'
    },
    algoHelp: 'Full message processing for maximum precision in long conversations and bilingual text.',
    flipArrowsTitle: 'Flip Directional Arrows in RTL',
    applyToCodeTitle: 'Apply to Code Blocks (Markdown)',
    badgeBeta: 'Beta',
    drawerInfoTitle: 'How It Works',
    drawerInfoText: 'FAi-Chat smoothly detects incoming streaming responses and aligns direction without altering code blocks or math formulas.',
    fontSectionTitle: 'Typography & Font Settings',
    badgeActiveFont: 'Active Font',
    fontLabel: 'Font:',
    fontOptions: {
      vazir: 'Vazirmatn (Default)',
      snapp: 'Snapp',
      dubai: 'Dubai',
      custom_system: 'Custom System Font...'
    },
    systemFontsLabel: 'Detected System Fonts:',
    systemFontsDefault: '-- Select font from system --',
    manualFontLabel: 'Or type installed font name:',
    customFontPlaceholder: 'e.g. Segoe UI, Tahoma, Arial',
    customFontSubmit: 'Apply',
    customFontSaved: 'Saved!',
    fontSizeLabel: 'Font Size:',
    resetFontSizeTitle: 'Reset font size to default (16px)',
    servicesSectionTitle: 'Supported AI Services',
    activeCountBadge: (active, total) => `Active: ${active} / ${total}`,
    searchPlaceholder: 'Search AI service (e.g. ChatGPT, Claude)...',
    noSitesFound: 'No AI service found matching this keyword.',
    openSiteTitle: (name) => `Open ${name} website`
  }
};

const ALIZ_LANG_CYCLE = ['fa', 'ar', 'en'];

document.addEventListener('DOMContentLoaded', async () => {
  // Aliz DOM References
  const alizLangSwitchBtn = document.getElementById('langSwitchBtn');
  const alizLangCodeText = document.getElementById('langCodeText');
  const alizGlobalToggle = document.getElementById('globalEnableToggle');
  const alizToggleStatusLabel = document.getElementById('globalToggleStateText');
  const alizOpenDrawerBtn = document.getElementById('openSettingsDrawerBtn');
  const alizCloseDrawerBtn = document.getElementById('closeSettingsDrawerBtn');
  const alizSettingsDrawer = document.getElementById('settingsDrawer');
  const alizBackdropMask = document.getElementById('drawerBackdrop');
  const alizThemeSwitchBtn = document.getElementById('themeCycleBtn');

  // Algorithm & Detection Controls
  const alizAlgoSelect = document.getElementById('algorithmSelect');
  const alizFlipArrowsSwitch = document.getElementById('flipArrowsToggle');
  const alizApplyToCodeSwitch = document.getElementById('applyToCodeToggle');

  // Font Typography Controls
  const alizFontSelect = document.getElementById('fontSelect');
  const alizCustomFontContainer = document.getElementById('customFontGroup');
  const alizSystemPickerWrapper = document.getElementById('systemFontSelectWrapper');
  const alizSystemPickerSelect = document.getElementById('systemFontSelect');
  const alizManualFontField = document.getElementById('customFontInput');
  const alizSaveFontBtn = document.getElementById('applyCustomFontBtn');
  const alizFontScaleRange = document.getElementById('fontScaleSlider');
  const alizFontScaleBadge = document.getElementById('fontScaleValue');
  const alizResetFontSizeBtn = document.getElementById('resetFontSizeBtn');

  // Services & Filtering Controls
  const alizActiveCounterBadge = document.getElementById('activeSitesCount');
  const alizSearchField = document.getElementById('siteSearchInput');
  const alizPlatformListContainer = document.getElementById('sitesList');

  // Themes Config
  const ALIZ_COLOR_THEMES = [
    {
      id: 'light',
      title: 'تم روشن',
      icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    },
    {
      id: 'dark',
      title: 'تم تاریک',
      icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
    },
    {
      id: 'antigravity',
      title: 'تم آنتی‌گرویتی (رنگ‌های لوگو)',
      icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="url(#starGrad)" stroke="#34C6BF" stroke-width="1.5"><defs><linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0F6FFA"/><stop offset="35%" stop-color="#0D9DF8"/><stop offset="70%" stop-color="#34C6BF"/><stop offset="92%" stop-color="#89DB76"/><stop offset="100%" stop-color="#FA9138"/></linearGradient></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
    }
  ];

  let alizCurrentThemeIndex = 1;
  let alizCurrentLanguage = 'fa';

  function alizApplyThemePalette(themeId) {
    const idx = ALIZ_COLOR_THEMES.findIndex(t => t.id === themeId);
    alizCurrentThemeIndex = idx !== -1 ? idx : 1;
    const currentTheme = ALIZ_COLOR_THEMES[alizCurrentThemeIndex];

    document.body.setAttribute('data-theme', currentTheme.id);
    if (alizThemeSwitchBtn) {
      alizThemeSwitchBtn.innerHTML = currentTheme.icon;
      const i18n = ALIZ_I18N[alizCurrentLanguage] || ALIZ_I18N.fa;
      alizThemeSwitchBtn.title = i18n.themeBtnTitle(currentTheme.title);
    }
  }

  if (alizThemeSwitchBtn) {
    alizThemeSwitchBtn.addEventListener('click', async () => {
      alizCurrentThemeIndex = (alizCurrentThemeIndex + 1) % ALIZ_COLOR_THEMES.length;
      const nextTheme = ALIZ_COLOR_THEMES[alizCurrentThemeIndex].id;
      alizApplyThemePalette(nextTheme);
      await chrome.storage.sync.set({ uiTheme: nextTheme });
    });
  }

  // Drawer Animation Controls
  function alizShowSettingsDrawer() {
    if (alizSettingsDrawer && alizBackdropMask) {
      alizSettingsDrawer.classList.add('open');
      alizBackdropMask.classList.add('open');
      alizSettingsDrawer.setAttribute('aria-hidden', 'false');
    }
  }

  function alizHideSettingsDrawer() {
    if (alizSettingsDrawer && alizBackdropMask) {
      alizSettingsDrawer.classList.remove('open');
      alizBackdropMask.classList.remove('open');
      alizSettingsDrawer.setAttribute('aria-hidden', 'true');
    }
  }

  if (alizOpenDrawerBtn) alizOpenDrawerBtn.addEventListener('click', alizShowSettingsDrawer);
  if (alizCloseDrawerBtn) alizCloseDrawerBtn.addEventListener('click', alizHideSettingsDrawer);
  if (alizBackdropMask) alizBackdropMask.addEventListener('click', alizHideSettingsDrawer);

  // Storage Ingestion & Initialization
  const alizPlatformKeys = ALIZ_SUPPORTED_PLATFORMS.map(s => s.key);
  const alizRequiredConfigKeys = [
    'uiLang',
    'uiTheme',
    'globalEnabled',
    'rtlAlgorithmMode',
    'flipRtlArrows',
    'applyAlgorithmToCode',
    'selectedFont',
    'customFontName',
    'fontScale',
    'fontScalePx',
    ...alizPlatformKeys
  ];

  const alizStoredConfig = await chrome.storage.sync.get(alizRequiredConfigKeys);

  // Set initial language from storage (default 'fa')
  alizCurrentLanguage = alizStoredConfig.uiLang || 'fa';

  // Apply Theme
  alizApplyThemePalette(alizStoredConfig.uiTheme || 'dark');

  // Master Global Activation Switch
  const alizIsExtensionEnabled = alizStoredConfig.globalEnabled !== false;
  if (alizGlobalToggle) {
    alizGlobalToggle.checked = alizIsExtensionEnabled;
    const initialI18n = ALIZ_I18N[alizCurrentLanguage] || ALIZ_I18N.fa;
    if (alizToggleStatusLabel) {
      alizToggleStatusLabel.textContent = alizIsExtensionEnabled ? initialI18n.statusOn : initialI18n.statusOff;
      alizToggleStatusLabel.className = `badge-status-pill ${alizIsExtensionEnabled ? 'badge-status-on' : 'badge-status-off'}`;
    }

    alizGlobalToggle.addEventListener('change', async (event) => {
      const activeState = event.target.checked;
      const i18n = ALIZ_I18N[alizCurrentLanguage] || ALIZ_I18N.fa;
      if (alizToggleStatusLabel) {
        alizToggleStatusLabel.textContent = activeState ? i18n.statusOn : i18n.statusOff;
        alizToggleStatusLabel.className = `badge-status-pill ${activeState ? 'badge-status-on' : 'badge-status-off'}`;
      }
      await chrome.storage.sync.set({ globalEnabled: activeState });

      // Live dispatch to tab contents
      try {
        const alizAllTabs = await chrome.tabs.query({});
        alizAllTabs.forEach(tab => {
          if (tab.id) {
            chrome.tabs.sendMessage(tab.id, { action: activeState ? 'enableRtl' : 'disableRtl' }).catch(() => {});
          }
        });
      } catch (err) {}
    });
  }

  // Algorithm Settings Setup
  if (alizAlgoSelect) {
    alizAlgoSelect.value = alizStoredConfig.rtlAlgorithmMode || 'advanced_full';
    alizAlgoSelect.addEventListener('change', async (e) => {
      await chrome.storage.sync.set({ rtlAlgorithmMode: e.target.value });
    });
  }

  if (alizFlipArrowsSwitch) {
    alizFlipArrowsSwitch.checked = alizStoredConfig.flipRtlArrows !== false;
    alizFlipArrowsSwitch.addEventListener('change', async (e) => {
      await chrome.storage.sync.set({ flipRtlArrows: e.target.checked });
    });
  }

  if (alizApplyToCodeSwitch) {
    alizApplyToCodeSwitch.checked = alizStoredConfig.applyAlgorithmToCode !== false;
    alizApplyToCodeSwitch.addEventListener('change', async (e) => {
      await chrome.storage.sync.set({ applyAlgorithmToCode: e.target.checked });
    });
  }

  // Dynamic UI Font Switcher for Popup Itself
  function alizApplyPopupUiFont(fontId, customName = '') {
    let targetFamily = "'Vazirmatn', 'vazir', sans-serif";
    if (fontId === 'snapp') {
      targetFamily = "'Snapp', 'snapp', sans-serif";
    } else if (fontId === 'dubai') {
      targetFamily = "'Dubai', 'dubai', sans-serif";
    } else if (fontId === 'custom_system' && customName) {
      targetFamily = `'${customName}', sans-serif`;
    } else if (fontId === 'vazir') {
      targetFamily = "'Vazirmatn', 'vazir', sans-serif";
    }

    document.documentElement.style.setProperty('--font-family', targetFamily);
    document.body.style.fontFamily = targetFamily;
  }

  // Font Typography Configuration
  const alizActiveFont = alizStoredConfig.selectedFont || 'vazir';
  const alizCustomFontTitle = alizStoredConfig.customFontName || '';

  // Apply font immediately to popup UI
  alizApplyPopupUiFont(alizActiveFont, alizCustomFontTitle);

  if (alizFontSelect) {
    if (alizActiveFont === 'custom_system' || (alizActiveFont !== 'vazir' && alizActiveFont !== 'snapp' && alizActiveFont !== 'dubai')) {
      alizFontSelect.value = 'custom_system';
      if (alizCustomFontContainer) alizCustomFontContainer.style.display = 'block';
      if (alizManualFontField) alizManualFontField.value = alizCustomFontTitle || alizActiveFont;
    } else {
      alizFontSelect.value = alizActiveFont;
      if (alizCustomFontContainer) alizCustomFontContainer.style.display = 'none';
    }

    alizFontSelect.addEventListener('change', async (e) => {
      const selectedVal = e.target.value;
      if (selectedVal === 'custom_system') {
        if (alizCustomFontContainer) alizCustomFontContainer.style.display = 'block';
        await alizPopulateLocalSystemFonts();
      } else {
        if (alizCustomFontContainer) alizCustomFontContainer.style.display = 'none';
        alizApplyPopupUiFont(selectedVal);
        await chrome.storage.sync.set({ selectedFont: selectedVal });
      }
    });
  }

  if (alizSaveFontBtn) {
    alizSaveFontBtn.addEventListener('click', async () => {
      const typedFontName = alizManualFontField ? alizManualFontField.value.trim() : '';
      if (typedFontName) {
        alizApplyPopupUiFont('custom_system', typedFontName);
        await chrome.storage.sync.set({
          selectedFont: 'custom_system',
          customFontName: typedFontName
        });
        const i18n = ALIZ_I18N[alizCurrentLanguage] || ALIZ_I18N.fa;
        alizSaveFontBtn.textContent = i18n.customFontSaved;
        setTimeout(() => {
          const curI18n = ALIZ_I18N[alizCurrentLanguage] || ALIZ_I18N.fa;
          alizSaveFontBtn.textContent = curI18n.customFontSubmit;
        }, 1500);
      }
    });
  }

  if (alizManualFontField) {
    alizManualFontField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && alizSaveFontBtn) alizSaveFontBtn.click();
    });
  }

  // Typography: Font Size Adjustment in Pixels (12px to 24px, default 16px)
  const alizDefaultFontSize = 16;
  let alizActivePx = alizStoredConfig.fontScalePx;
  if (!alizActivePx) {
    if (alizStoredConfig.fontScale) {
      alizActivePx = Math.round((alizStoredConfig.fontScale * 16) / 100);
      alizActivePx = Math.min(24, Math.max(12, alizActivePx));
    } else {
      alizActivePx = alizDefaultFontSize;
    }
  }

  if (alizFontScaleRange) {
    alizFontScaleRange.value = alizActivePx;
    if (alizFontScaleBadge) alizFontScaleBadge.textContent = `${alizActivePx}px`;

    alizFontScaleRange.addEventListener('input', (e) => {
      const parsedPx = parseInt(e.target.value, 10);
      if (alizFontScaleBadge) alizFontScaleBadge.textContent = `${parsedPx}px`;
      const calculatedScale = Math.round((parsedPx / 16) * 100);
      chrome.runtime.sendMessage({ action: 'previewFontScale', scale: calculatedScale, px: parsedPx });
    });

    alizFontScaleRange.addEventListener('change', async (e) => {
      const parsedPx = parseInt(e.target.value, 10);
      const calculatedScale = Math.round((parsedPx / 16) * 100);
      await chrome.storage.sync.set({ fontScale: calculatedScale, fontScalePx: parsedPx });
    });
  }

  // Reset Font Size Button
  if (alizResetFontSizeBtn && alizFontScaleRange) {
    alizResetFontSizeBtn.addEventListener('click', async () => {
      alizFontScaleRange.value = alizDefaultFontSize;
      if (alizFontScaleBadge) alizFontScaleBadge.textContent = `${alizDefaultFontSize}px`;
      chrome.runtime.sendMessage({ action: 'previewFontScale', scale: 100, px: alizDefaultFontSize });
      await chrome.storage.sync.set({ fontScale: 100, fontScalePx: alizDefaultFontSize });
    });
  }

  // Render Platform Items List
  let alizCurrentPlatformStatus = {};
  ALIZ_SUPPORTED_PLATFORMS.forEach(p => {
    alizCurrentPlatformStatus[p.key] = alizStoredConfig[p.key] !== undefined ? alizStoredConfig[p.key] : true;
  });

  function alizRefreshActiveCounter() {
    if (!alizActiveCounterBadge) return;
    const activeCount = Object.values(alizCurrentPlatformStatus).filter(Boolean).length;
    const i18n = ALIZ_I18N[alizCurrentLanguage] || ALIZ_I18N.fa;
    alizActiveCounterBadge.textContent = i18n.activeCountBadge(activeCount, ALIZ_SUPPORTED_PLATFORMS.length);
  }

  function alizRenderPlatformsList(filterKeyword = '') {
    if (!alizPlatformListContainer) return;
    alizPlatformListContainer.innerHTML = '';
    const cleanedKeyword = filterKeyword.toLowerCase().trim();
    const i18n = ALIZ_I18N[alizCurrentLanguage] || ALIZ_I18N.fa;

    const matchedPlatforms = ALIZ_SUPPORTED_PLATFORMS.filter(p => {
      if (!cleanedKeyword) return true;
      return p.name.toLowerCase().includes(cleanedKeyword) ||
             p.domain.toLowerCase().includes(cleanedKeyword) ||
             p.key.toLowerCase().includes(cleanedKeyword);
    });

    if (matchedPlatforms.length === 0) {
      const emptyIndicator = document.createElement('div');
      emptyIndicator.style.textAlign = 'center';
      emptyIndicator.style.padding = '18px';
      emptyIndicator.style.color = 'var(--text-muted)';
      emptyIndicator.textContent = i18n.noSitesFound;
      alizPlatformListContainer.appendChild(emptyIndicator);
      return;
    }

    matchedPlatforms.forEach(platform => {
      const isPlatformActive = alizCurrentPlatformStatus[platform.key] !== false;

      const cardRow = document.createElement('div');
      cardRow.className = 'site-item';

      const detailsWrap = document.createElement('div');
      detailsWrap.className = 'site-info clickable';
      detailsWrap.title = i18n.openSiteTitle(platform.name);

      const iconImg = document.createElement('img');
      iconImg.className = 'site-icon';
      iconImg.src = `images/sites/${platform.icon}`;
      iconImg.alt = platform.name;
      iconImg.onerror = () => { iconImg.src = 'images/icon-16.png'; };

      const titlesWrap = document.createElement('div');
      titlesWrap.className = 'site-name-wrap';

      const faNameSpan = document.createElement('span');
      faNameSpan.className = 'site-name-fa';
      faNameSpan.textContent = platform.name;

      titlesWrap.appendChild(faNameSpan);
      detailsWrap.appendChild(iconImg);
      detailsWrap.appendChild(titlesWrap);

      // Clicking site name / icon directly opens the site in a new tab
      detailsWrap.addEventListener('click', () => {
        const targetUrl = platform.domain.startsWith('http') ? platform.domain : `https://${platform.domain}`;
        chrome.tabs.create({ url: targetUrl });
      });

      const toggleSwitchLabel = document.createElement('label');
      toggleSwitchLabel.className = 'switch';

      const toggleCheck = document.createElement('input');
      toggleCheck.type = 'checkbox';
      toggleCheck.checked = isPlatformActive;

      toggleCheck.addEventListener('change', async (e) => {
        const isNowChecked = e.target.checked;
        alizCurrentPlatformStatus[platform.key] = isNowChecked;
        await chrome.storage.sync.set({ [platform.key]: isNowChecked });
        alizRefreshActiveCounter();
      });

      const sliderDecoration = document.createElement('span');
      sliderDecoration.className = 'slider round';

      toggleSwitchLabel.appendChild(toggleCheck);
      toggleSwitchLabel.appendChild(sliderDecoration);

      cardRow.appendChild(detailsWrap);
      cardRow.appendChild(toggleSwitchLabel);
      alizPlatformListContainer.appendChild(cardRow);
    });

    alizRefreshActiveCounter();
  }

  if (alizSearchField) {
    alizSearchField.addEventListener('input', (e) => {
      alizRenderPlatformsList(e.target.value);
    });
  }

  // Local System Fonts Lookup
  async function alizPopulateLocalSystemFonts() {
    const i18n = ALIZ_I18N[alizCurrentLanguage] || ALIZ_I18N.fa;
    if ('queryLocalFonts' in window) {
      try {
        const systemFontsList = await window.queryLocalFonts();
        if (systemFontsList && systemFontsList.length > 0 && alizSystemPickerSelect) {
          const distinctFontFamilies = [...new Set(systemFontsList.map(f => f.family))].sort();

          alizSystemPickerSelect.innerHTML = `<option value="">${i18n.systemFontsDefault}</option>`;
          distinctFontFamilies.forEach(family => {
            const optElem = document.createElement('option');
            optElem.value = family;
            optElem.textContent = family;
            if (alizManualFontField && family === alizManualFontField.value) optElem.selected = true;
            alizSystemPickerSelect.appendChild(optElem);
          });

          if (alizSystemPickerWrapper) alizSystemPickerWrapper.style.display = 'block';

          alizSystemPickerSelect.addEventListener('change', (e) => {
            if (e.target.value && alizManualFontField) {
              alizManualFontField.value = e.target.value;
              if (alizSaveFontBtn) alizSaveFontBtn.click();
            }
          });
        }
      } catch (err) {
        console.warn('[Aliz Engine] System fonts lookup warning:', err);
        if (alizSystemPickerWrapper) alizSystemPickerWrapper.style.display = 'none';
      }
    } else {
      if (alizSystemPickerWrapper) alizSystemPickerWrapper.style.display = 'none';
    }
  }

  // Language Switcher Controller
  function alizApplyLanguage(langCode) {
    const i18n = ALIZ_I18N[langCode] || ALIZ_I18N.fa;
    alizCurrentLanguage = langCode;

    // 1. Document Direction & Lang
    document.documentElement.setAttribute('dir', i18n.dir);
    document.documentElement.setAttribute('lang', i18n.htmlLang);

    // 2. Language Switcher Button Text & Title
    if (alizLangCodeText) alizLangCodeText.textContent = i18n.langCode;
    if (alizLangSwitchBtn) alizLangSwitchBtn.title = i18n.langBtnTitle;

    // 3. Header
    const subtitleEl = document.querySelector('.brand-text .subtitle');
    if (subtitleEl) subtitleEl.textContent = i18n.subtitle;
    if (alizOpenDrawerBtn) alizOpenDrawerBtn.title = i18n.gearBtnTitle;

    // 4. Master Activation
    const actTitle = document.querySelector('.activation-title');
    if (actTitle) actTitle.textContent = i18n.activationTitle;
    if (alizToggleStatusLabel) {
      const isChecked = alizGlobalToggle ? alizGlobalToggle.checked : true;
      alizToggleStatusLabel.textContent = isChecked ? i18n.statusOn : i18n.statusOff;
    }

    // 5. Main Tab
    const mainTabSpan = document.querySelector('.main-tab-item span');
    if (mainTabSpan) mainTabSpan.textContent = i18n.mainTab;

    // 6. Settings Drawer
    const drawerTitleSpan = document.querySelector('.drawer-title span');
    if (drawerTitleSpan) drawerTitleSpan.textContent = i18n.drawerTitle;
    if (alizCloseDrawerBtn) alizCloseDrawerBtn.title = i18n.drawerCloseTitle;

    const algoLabel = document.querySelector('label[for="algorithmSelect"]');
    if (algoLabel) algoLabel.textContent = i18n.algoLabel;
    const badgeSmart = document.querySelector('.form-label-row .badge-accent');
    if (badgeSmart) badgeSmart.textContent = i18n.badgeSmart;

    if (alizAlgoSelect) {
      const optAdvFull = alizAlgoSelect.querySelector('option[value="advanced_full"]');
      if (optAdvFull) optAdvFull.textContent = i18n.algoOptions.advanced_full;
      const optAdvSec = alizAlgoSelect.querySelector('option[value="advanced_section"]');
      if (optAdvSec) optAdvSec.textContent = i18n.algoOptions.advanced_section;
      const optFirstWord = alizAlgoSelect.querySelector('option[value="first_word"]');
      if (optFirstWord) optFirstWord.textContent = i18n.algoOptions.first_word;
    }

    const algoHelp = document.querySelector('.drawer-body .help-text');
    if (algoHelp) algoHelp.textContent = i18n.algoHelp;

    const flipTitle = alizFlipArrowsSwitch ? alizFlipArrowsSwitch.closest('.setting-toggle-row')?.querySelector('.toggle-title') : null;
    if (flipTitle) flipTitle.textContent = i18n.flipArrowsTitle;

    const applyCodeTitle = alizApplyToCodeSwitch ? alizApplyToCodeSwitch.closest('.setting-toggle-row')?.querySelector('.toggle-title') : null;
    if (applyCodeTitle) applyCodeTitle.textContent = i18n.applyToCodeTitle;

    document.querySelectorAll('.drawer-body .badge-muted').forEach(badge => {
      badge.textContent = i18n.badgeBeta;
    });

    const drawerInfoH = document.querySelector('.drawer-info-header span');
    if (drawerInfoH) drawerInfoH.textContent = i18n.drawerInfoTitle;
    const drawerInfoP = document.querySelector('.drawer-info-text');
    if (drawerInfoP) drawerInfoP.textContent = i18n.drawerInfoText;

    // 7. Font Section
    const fontCardTitle = document.querySelector('.card:first-of-type .card-title span');
    if (fontCardTitle) fontCardTitle.textContent = i18n.fontSectionTitle;
    const fontCardBadge = document.querySelector('.card:first-of-type .card-header .badge-accent');
    if (fontCardBadge) fontCardBadge.textContent = i18n.badgeActiveFont;

    const fontLabel = document.querySelector('label[for="fontSelect"]');
    if (fontLabel) fontLabel.textContent = i18n.fontLabel;

    if (alizFontSelect) {
      const optVazir = alizFontSelect.querySelector('option[value="vazir"]');
      if (optVazir) optVazir.textContent = i18n.fontOptions.vazir;
      const optSnapp = alizFontSelect.querySelector('option[value="snapp"]');
      if (optSnapp) optSnapp.textContent = i18n.fontOptions.snapp;
      const optDubai = alizFontSelect.querySelector('option[value="dubai"]');
      if (optDubai) optDubai.textContent = i18n.fontOptions.dubai;
      const optCustom = alizFontSelect.querySelector('option[value="custom_system"]');
      if (optCustom) optCustom.textContent = i18n.fontOptions.custom_system;
    }

    const sysFontLabel = document.querySelector('label[for="systemFontSelect"]');
    if (sysFontLabel) sysFontLabel.textContent = i18n.systemFontsLabel;
    const sysDefaultOpt = alizSystemPickerSelect ? alizSystemPickerSelect.querySelector('option[value=""]') : null;
    if (sysDefaultOpt) sysDefaultOpt.textContent = i18n.systemFontsDefault;

    const manualFontLabel = document.querySelector('label[for="customFontInput"]');
    if (manualFontLabel) manualFontLabel.textContent = i18n.manualFontLabel;
    if (alizManualFontField) alizManualFontField.placeholder = i18n.customFontPlaceholder;
    if (alizSaveFontBtn && alizSaveFontBtn.textContent !== i18n.customFontSaved) {
      alizSaveFontBtn.textContent = i18n.customFontSubmit;
    }

    const fontSizeLabel = document.querySelector('.slider-label-text');
    if (fontSizeLabel) fontSizeLabel.textContent = i18n.fontSizeLabel;
    if (alizResetFontSizeBtn) alizResetFontSizeBtn.title = i18n.resetFontSizeTitle;

    // 8. Services Section
    const servCardTitle = document.querySelector('.card:nth-of-type(2) .card-title span');
    if (servCardTitle) servCardTitle.textContent = i18n.servicesSectionTitle;
    if (alizSearchField) alizSearchField.placeholder = i18n.searchPlaceholder;

    // Theme title update
    const currentTheme = ALIZ_COLOR_THEMES[alizCurrentThemeIndex];
    if (alizThemeSwitchBtn && currentTheme) {
      alizThemeSwitchBtn.title = i18n.themeBtnTitle(currentTheme.title);
    }

    // Refresh active counter & list titles
    alizRefreshActiveCounter();
    alizRenderPlatformsList(alizSearchField ? alizSearchField.value : '');
  }

  // Language Switch Button Click Handler (Cycle fa -> ar -> en)
  if (alizLangSwitchBtn) {
    alizLangSwitchBtn.addEventListener('click', async () => {
      const currentIndex = ALIZ_LANG_CYCLE.indexOf(alizCurrentLanguage);
      const nextLang = ALIZ_LANG_CYCLE[(currentIndex + 1) % ALIZ_LANG_CYCLE.length];
      alizApplyLanguage(nextLang);
      await chrome.storage.sync.set({ uiLang: nextLang });
    });
  }

  // Apply initial language from storage
  alizApplyLanguage(alizCurrentLanguage);

  // Developer Profile Link Handler
  const alizDevProfileLink = document.querySelector('.dev-link');
  if (alizDevProfileLink) {
    alizDevProfileLink.addEventListener('click', (e) => {
      e.preventDefault();
      const profileUrl = alizDevProfileLink.getAttribute('href');
      if (profileUrl) {
        if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
          chrome.tabs.create({ url: profileUrl });
        } else {
          window.open(profileUrl, '_blank', 'noopener,noreferrer');
        }
      }
    });
  }
});
