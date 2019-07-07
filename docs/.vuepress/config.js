const sidebarEn = require("./sidebars/en.json");
const sidebarRu = require("./sidebars/ru.json");

module.exports = {
  base: "/feynman-lectures/",
  // base: process.env.NODE_ENV === 'production' ? '/lucidum101/' : '/',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Feynman lectures",
      description: "Lectures on physics by Richard Feynman"
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Фейнмановские лекции",
      description: "Лекции по физике Ричарда Фейнмана"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "🇺🇸 English",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",

        // algolia docsearch options for current locale
        algolia: {},
        sidebar: sidebarEn
      },
      "/ru/": {
        selectText: "Языки",
        label: "🇷🇺 Русский",
        editLinkText: "Редактировать страницу на GitHub",
        algolia: {},
        sidebar: sidebarRu
      }
    }
  },
  plugins: [
    [
      "mathjax",
      {
        target: "chtml",
        macros: {
          "~=": "\\approx",
          "=/=": "\\ne",
          "+-": "\\pm",
          "=>": "\\implies",
          "<=": "\\impliedby",
          "<=>": "\\iff",
          "->": "\\to",
          "<-": "\\gets",
          "<->": "\\leftrightarrow",
          "...": "\\dots",
          "***": "\\cdots",
          "*": "\\cdot",
          "-:": "\\div",
          "\\deg": "^\\circ",
          "(": "\\left(",
          ")": "\\right)"
        }
        // presets: [
        //     '\\def\\lr#1#2#3{\\left#1#2\\right#3}',
        //     '\\def{#1}/{#2}{\\dfrac{#1}{#2}}',
        // ]
      }
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: "img.zoom-img",
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16,
          background: "#ddd",
          scrollOffset: 10
        }
      }
    ],
    // Below 2 plugins can conflict with each other, nedd to test
    "vuepress-plugin-smooth-scroll",
    "@vuepress/active-header-links",
    // Export to PDF, need to resolve conflict
    "vuepress-plugin-export",
    // Back to top button
    "@vuepress/back-to-top",
    // Reading progress
    "reading-progress",
    // Progress bar?
    "@vuepress/nprogress",
    // Search
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ],
    // Progressive Web App
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "New content is available.",
            buttonText: "Refresh"
          },
          "/ru/": {
            message: "На сайте появилось много нового.",
            buttonText: "Обновить"
          }
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ typographer: true });
    }
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
      }
    ]
  ]
};
