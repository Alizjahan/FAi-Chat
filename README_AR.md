<p align="center">
  <img src="header1.jpg" alt="FAi-Chatbot-RTL-Persian-Arabic Banner" width="100%">
</p>

# دليل إضافة FAi-Chatbot-RTL-Persian-Arabic

إضافة **FAi-Chatbot-RTL-Persian-Arabic** هي إضافة حديثة لمتصفح Chrome مبنية على Manifest V3، صُممت لتوفير المحاذاة الذكية من اليمين إلى اليسار (RTL) وضبط الخطوط العربية والفارسية بدقة فائقة عبر جميع روبوتات الذكاء الاصطناعي ومنصات النماذج اللغوية الكبيرة (LLMs).

[English Documentation](./README.md) | [راهنمای فارسی](./README_FA.md) | [الدليل العربي](./README_AR.md)

---

## 🎯 معالجة ذكية وعزل دقيق للأكواد البرمجية

تعتمد الإضافة على محرك فحص لحظي دقيق لتنسيق النصوص مع الحفاظ الكامل على سلامة الكود البرمجي:

- **الأجزاء التي تشملها الإضافة**:
  - رسائل المستخدم في المحادثة (User Prompts)
  - ردود المساعد الذكي (AI Responses)
  - حقل إدخال الرسائل (Chat Input Box)
  - العناوين، الفقرات، القوائم والاقتباسات داخل المحادثة
- **الأجزاء التي تبقى يسار-إلى-يمين (LTR) دون أي مساس**:
  - كتل الشيفرات البرمجية (`pre` و `code`)
  - المعادلات الرياضية وصيغ LaTeX
  - الجداول باللغة الإنجليزية وأسماء المتغيرات
  - أزرار النسخ وعناصر التحكم

---

## ✨ الميزات الرئيسية

- **خطوط مدمجة تعمل دون اتصال بالإنترنت (Offline Fonts)**:
  - **خط دبي (Dubai Font)**: خط رسمي وعصري عالي الوضوح مثالي للقراءة العربية والفارسية مدمج محلياً بالكامل.
  - **خط وزير متن (Vazirmatn Variable)**: خط قياسي أنيق مدمج بصيغة WOFF2.
  - **خط سناب (Snapp)**: خط شاشات حديث وأنيق.
  - **دعم خطوط النظام**: إمكانية استخدام أي خط مثبت على نظام التشغيل بسهولة (مثل Traditional Arabic, Amiri, Cairo, Tahoma...).
- **واجهة مستخدم ثلاثية اللغات (عربي | فارسي | إنجليزي)**:
  - زر تبديل كبسولي أنيق مع أيقونة الكرة الأرضية (`[FA 🌐]` / `[AR 🌐]` / `[EN 🌐]`) للتحويل الفوري بين اللغات واتجاه الواجهة بنقرة واحدة.
- **تغيير حجم الخط بالبكسل (px)**:
  - شريط تمرير لتغيير حجم الخط بدقة من 12px إلى 24px مع زر إعادة ضبط فوري للحجم الافتراضي (16px).
- **كشف تلقائي فوري لاتجاه النص**:
  - خوارزميات ذكية لمعالجة النصوص ثنائية اللغة وتحديد الاتجاه المناسب لكل فقرة.
- **دعم شامل لأكثر من 50 منصة ذكاء اصطناعي**:
  - مفاتيح تحكم منفصلة لتفعيل أو تعطيل الإضافة على كل منصة على حدة (ChatGPT, Claude, Gemini, DeepSeek, Grok, NotebookLM وغيرها).
- **سمات بصرية أنيقة (داكن، فاتح، آنتي غرافيتي)**:
  - تصاميم متناسقة ومريحة للعين مع إمكانية التبديل السريع.
- **أمان تام وعمل دون اتصال (Offline-first)**:
  - بدون إرسال أي بيانات تتبع أو طلبات خارجية إلى أي خادم.

---

## 🌐 المنصات المدعومة

| الفئة | المنصات |
| :--- | :--- |
| **روبوتات المحادثة** | ChatGPT, Claude, Google Gemini, DeepSeek, Grok, Microsoft Copilot, GitHub Copilot Chat, Perplexity AI, Poe, Mistral AI, Qwen, Kimi, Manus, Monica |
| **بيئات الأبحاث والمساحات** | NotebookLM, Google AI Studio, OpenRouter, LMSYS Chatbot Arena, Consensus, SciSpace, Elicit, Notion AI, Cursor |
| **أدوات الإنتاج والبرمجة** | Lovable.dev, Gamma App, Writesonic, TypingMind, Chatbox AI, HuggingChat, Meta AI, Character.AI, Blackbox AI |

---

## 🚀 طرق التثبيت

### التثبيت اليدوي على متصفح Google Chrome ومتصفحات Chromium:
1. قم بتنزيل أو استنساخ المستودع:
   ```bash
   git clone https://github.com/Alizjahan/FAi-Chatbot-RTL-Persian-Arabic.git
   ```
2. افتح متصفح Chrome وانتقل إلى:
   ```
   chrome://extensions/
   ```
3. قم بتفعيل **Developer mode** من الزاوية العلوية اليمنى.
4. اضغط على زر **Load unpacked**.
5. حدد مجلد المشروع (`Persian_RTL_new_ui`).
6. تم تحميل الإضافة وهي جاهزة للعمل فوراً.

---

## ⚙️ الإعدادات المتاحة (Settings)

يمكن تعديل الإعدادات عبر النافذة المنبثقة وتتم مزامنتها عبر `chrome.storage.sync`:

| الإعداد | الوصف | القيمة الافتراضية |
| :--- | :--- | :--- |
| `globalEnabled` | تفعيل أو تعطيل محرك المحاذاة بالكامل | `true` |
| `uiLang` | لغة واجهة الإضافة (`fa`, `ar`, `en`) | `fa` |
| `selectedFont` | الخط النشط (`vazir`, `snapp`, `dubai`, `custom_system`) | `vazir` |
| `customFontName` | اسم الخط المثبت على النظام في حال التخصيص | `""` |
| `fontScalePx` | حجم الخط بالبكسل (12px إلى 24px) | `16` |
| `rtlAlgorithmMode` | خوارزمية تحديد الاتجاه (`advanced_full`, `advanced_section`, `first_word`) | `advanced_full` |
| `flipRtlArrows` | عكس اتجاه الأسهم في النصوص اليمينية | `true` |
| `applyAlgorithmToCode` | تفعيل تجريبي لمعالجة مربعات الأكواد | `true` |
| `uiTheme` | السمة اللونية للواجهة (`dark`, `light`, `antigravity`) | `dark` |
| `[platformKey]` | مفتاح تفعيل منفصل لكل منصة ذكاء اصطناعي | `true` |

---

## 👨‍💻 المطور

تم التطوير بواسطة **Aliz ([@Alizjahan](https://github.com/Alizjahan))**
- غيت هاب: [https://github.com/Alizjahan](https://github.com/Alizjahan)
- تيليجرام: [https://t.me/Alizjahan](https://t.me/Alizjahan)

---

## 📄 الترخيص

هذا المشروع مرخص بموجب رخصة [MIT License](LICENSE).
