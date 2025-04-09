import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SweeTen Team',
  tagline: 'Documentation websites are funny to make',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sweetenteam.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SweeTenTeam', // Usually your GitHub org/user name.
  projectName: 'sweetenteam.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'SweeTen Team',
      logo: {
        alt: 'SweeTen Team Logo',
        src: 'img/sweetenteam.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentazione',
        },
        {
          to: 'docs/PB/Glossario',
          label: 'Glossario',
          position: 'left'
        },
        {
          to: 'about',
          label: 'About',
          position: 'left'
        },
        {
          href: 'https://github.com/SweeTenTeam/Docs',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',

      copyright: `Copyright © ${new Date().getFullYear()} SweeTenTeam, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
