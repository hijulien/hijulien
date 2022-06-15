// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'note',
  tagline: "Julien's note",
  url: 'https://hijulien.github.io',
  baseUrl: '/notes/',
  // url:'http://hijulien.gitee.io/',
  // baseUrl:'/note/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["zh"],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'front',
        path: 'front',
        routeBasePath: 'front',
        sidebarPath: require.resolve('./frontSidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'back',
        path: 'back',
        routeBasePath: 'back',
        sidebarPath: require.resolve('./backSidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'others',
        path: 'others',
        routeBasePath: 'others',
        sidebarPath: require.resolve('./othersSidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'xzl',
        path: 'xzl',
        routeBasePath: 'xzl',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hi Julien',
        logo: {
          alt: 'My Site Logo',
          src: 'img/julien.jpg',
        },
        items: [
          {
            type: "doc",
            path: "docs/something",
            docId: "第 1 章 内存与数据结构",
            label: '小专栏',
            position: 'right',
          },
          {
            to: '/front/JavaScript',
            label: '前端',
            position: 'left',
            activeBaseRegex: `/front/`,
          },
          {
            to: '/back/Linux',
            label: '后端',
            position: 'left',
            activeBaseRegex: `/back/`,
          },
          {
            to: '/others/Git',
            label: 'others',
            position: 'left',
            activeBaseRegex: `/others/`,
          },
          {
            href: 'https://github.com/hijulien/notes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright @ ${new Date().getFullYear()} The way of learning.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
