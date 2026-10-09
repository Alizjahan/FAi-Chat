<p align="center">
  <img src="header1.jpg" alt="FAi-Chatbot-RTL-Persian-Arabic Banner" width="100%">
</p>

<div align="center">

# FAi-Chatbot-RTL-Persian-Arabic
### Intelligent Persian & Arabic RTL Typography & Layout Engine for AI Chatbots

[![Release](https://img.shields.io/badge/Release-v1.1.0-0D9DF8?style=flat-square&logo=github)](https://github.com/Alizjahan/FAi-Chatbot-RTL-Persian-Arabic)
[![Manifest](https://img.shields.io/badge/Manifest-V3-34C6BF?style=flat-square&logo=googlechrome&logoColor=white)](https://github.com/Alizjahan/FAi-Chatbot-RTL-Persian-Arabic)
[![License](https://img.shields.io/badge/License-MIT-89DB76?style=flat-square)](https://opensource.org/licenses/MIT)
[![Maintainer](https://img.shields.io/badge/Maintainer-Alizjahan-0F6FFA?style=flat-square)](https://github.com/Alizjahan)

Read and write smoothly in Persian and Arabic inside modern AI conversational interfaces without affecting code blocks, math formulas, or markdown structures.

[English Documentation](#overview) | [راهنمای فارسی](./README_FA.md) | [الدليل العربي](./README_AR.md)

</div>

---

## Overview

**FAi-Chatbot-RTL-Persian-Arabic** is a modern browser extension built on Chrome Manifest V3, engineered to deliver intelligent right-to-left (RTL) reading, bidirectional sentence processing, and native Persian & Arabic typography across all leading AI chatbots and LLM platforms.

By combining mutation-driven DOM observation with surgical CSS isolation, FAi-Chatbot-RTL-Persian-Arabic resolves bidirectional alignment and layout distortion in streaming AI outputs while ensuring that code snippets, terminal commands, and mathematical formulations remain strictly Left-to-Right (LTR).

---

## Key Features

- **Dynamic Direction Detection (BiDi Engine)**: Real-time heuristic analysis of streaming AI responses with automated direction assignment based on linguistic composition.
- **Embedded Offline Fonts**:
  - **Dubai Font**: Crisp, modern, and high-readability typeface bundled locally for Arabic and Persian users.
  - **Vazirmatn Variable**: High-fidelity Persian font embedded in WOFF2 format. Zero external requests, 100% offline.
  - **Snapp Font**: Sleek modern display font bundled for Persian typography.
  - **System Fonts**: Instant support for locally installed typefaces (IRANSans, Sahel, Shabnam, Cairo, Amiri, Tahoma, etc.).
- **Strict Syntactic Code Isolation**: Fenced code blocks (`pre`, `code`), markdown tables, and inline syntax tokens stay locked in LTR with clean monospace typography.
- **Tri-lingual UI Controller (FA / AR / EN)**: Interactive popup manager featuring instant one-click language switching (`[FA 🌐]` / `[AR 🌐]` / `[EN 🌐]`) with seamless directional layout adaptation.
- **Pixel-Accurate Font Resizing**: Custom slider for live font scaling from 12px to 24px with one-click default reset (16px).
- **Extensive Platform Coverage**: Tailored support and compatibility bindings covering 54+ major artificial intelligence platforms.
- **Antigravity & Dark Theming**: Beautiful dark, light, and Antigravity-inspired cyan/star palette themes.
- **Zero External Telemetry**: Offline-first architecture operating exclusively within client-side permissions without external tracking endpoints.

---

## Supported Platforms

FAi-Chatbot-RTL-Persian-Arabic provides tailored compatibility rules and CSS bindings for 54+ major AI platforms, including:

| Category | Platforms |
| :--- | :--- |
| **Conversational LLMs** | ChatGPT, Claude, Google Gemini, DeepSeek, Grok, Microsoft Copilot, GitHub Copilot Chat, Perplexity AI, Poe, Mistral AI, Qwen, Kimi, Manus, Monica |
| **Research & Workspace** | NotebookLM, Google AI Studio, OpenRouter, LMSYS Chatbot Arena, Consensus, SciSpace, Elicit, Notion AI, Cursor |
| **Creative & Generation** | Lovable.dev, Gamma App, Writesonic, TypingMind, Chatbox AI, HuggingChat, Meta AI, Character.AI, Blackbox AI |

---

## Architecture & Technical Stack

```
FAi-Chatbot-RTL-Persian-Arabic/
├── manifest.json              # Chrome Manifest V3 configuration
├── index.html                 # Extension popup interface
├── popup.css                  # UI layout and thematic token styles
├── popup.js                   # Client state management, i18n & messaging controller
├── style.css                  # Global injected stylesheet for RTL & Typography
├── js/
│   ├── background.js          # Service worker lifecycle & tabs broadcasting
│   ├── content.js             # Core RTL detection & mutation observer engine
│   ├── manual-rtl.js          # Manual direction toggling controller
│   └── myJquery-3.7.1.js      # DOM utility helper
├── css/
│   ├── vazir.css              # Vazirmatn font-face definitions
│   ├── snapp.css              # Snapp font-face definitions
│   ├── dubai.css              # Dubai font-face definitions
│   └── fontiran-iranyekan.css # IranYekan definitions
├── fonts/                     # Bundled web fonts and font registry metadata
│   ├── fonts.json
│   ├── dubai/                 # Dubai Regular, Bold, Medium, Light
│   ├── snapp/
│   └── vazir/
└── images/                    # Extension and supported platform icons
```

---

## Installation

### Method 1: Extension Store / Developer Mode
1. Clone or download this repository:
   ```bash
   git clone https://github.com/Alizjahan/FAi-Chatbot-RTL-Persian-Arabic.git
   ```
2. Open Google Chrome (or any Chromium-based browser) and navigate to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** in the top-right corner.
4. Click on **Load unpacked** in the top-left toolbar.
5. Select the project directory (`Persian_RTL_new_ui`).
6. The extension is now active and ready to use.

---

## Configuration Settings

Accessible via the popup interface and synchronized through `chrome.storage.sync`:

| Setting | Description | Default |
| :--- | :--- | :--- |
| `globalEnabled` | Master activation toggle for RTL engine | `true` |
| `uiLang` | Active user interface language (`fa`, `ar`, `en`) | `fa` |
| `selectedFont` | Active font typeface (`vazir`, `snapp`, `dubai`, `custom_system`) | `vazir` |
| `customFontName` | Name of locally installed font on your OS | `""` |
| `fontScalePx` | Precise font size in pixels (12px – 24px) | `16` |
| `rtlAlgorithmMode` | Direction detection algorithm (`advanced_full`, `advanced_section`, `first_word`) | `advanced_full` |
| `flipRtlArrows` | Auto-mirror directional arrows in RTL text | `true` |
| `applyAlgorithmToCode` | Experimental handling for code blocks | `true` |
| `uiTheme` | Popup color scheme (`dark`, `light`, `antigravity`) | `dark` |
| `[platformKey]` | Individual enable/disable switch per supported AI service | `true` |

---

## Multi-Language Guides

- [راهنمای فارسی (Persian Documentation)](./README_FA.md)
- [الدليل العربي (Arabic Documentation)](./README_AR.md)

---

## Author & Maintainer

Developed with ❤️ by **Aliz ([@Alizjahan](https://github.com/Alizjahan))**
- GitHub: [@Alizjahan](https://github.com/Alizjahan)
- Telegram: [@Alizjahan](https://t.me/Alizjahan)

---

## License

This project is licensed under the [MIT License](LICENSE).
