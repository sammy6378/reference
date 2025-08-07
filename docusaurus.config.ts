import { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "JS, TS & React Native Docs",
  tagline: "Documentation for JavaScript, TypeScript, and React Native",
  url: "https://sammy6378.github.io",
  baseUrl: "/reference/",
  favicon: "img/favicon.ico",
  organizationName: "sammy6378",
  projectName: "reference",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themeConfig: {
    navbar: {
      title: "Docs",
      logo: {
        alt: "Modern JavaScript Documentation",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          to: "/docs/getting-started",
          position: "left",
          label: "Get Started",
        },
        {
          type: "dropdown",
          label: "Documentation",
          position: "left",
          items: [
            {
              to: "/docs/js/basics",
              label: "JavaScript Basics",
            },
            {
              to: "/docs/js/advanced",
              label: "Advanced JavaScript",
            },
            {
              to: "/docs/ts/intro",
              label: "TypeScript",
            },
            {
              to: "/docs/react-native/setup",
              label: "React Native Setup",
            },
            {
              to: "/docs/react-native/components",
              label: "RN Components",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Resources",
          position: "left",
          items: [
            {
              href: "https://github.com/sammy6378/reference/blob/main/CONTRIBUTING.md",
              label: "Contributing",
            },
            {
              href: "https://github.com/sammy6378/reference/discussions",
              label: "Community",
            },
            {
              href: "https://github.com/sammy6378/reference/issues",
              label: "Support",
            },
          ],
        },
        {
          href: "https://github.com/sammy6378/reference",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "JavaScript",
              to: "/docs/js/basics",
            },
            {
              label: "TypeScript",
              to: "/docs/ts/intro",
            },
            {
              label: "React Native",
              to: "/docs/react-native/setup",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Advanced Topics",
              to: "/docs/js/advanced",
            },
            {
              label: "Contributing Guide",
              href: "https://github.com/sammy6378/reference/blob/main/CONTRIBUTING.md",
            },
            {
              label: "License",
              href: "https://github.com/sammy6378/reference/blob/main/LICENSE",
            },
            {
              label: "Changelog",
              href: "https://github.com/sammy6378/reference/releases",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/sammy6378/reference",
            },
            {
              label: "Discussions",
              href: "https://github.com/sammy6378/reference/discussions",
            },
            {
              label: "Issues & Bug Reports",
              href: "https://github.com/sammy6378/reference/issues",
            },
            {
              label: "Discord Community",
              href: "https://discord.gg/sammy_in_tech",
            },
          ],
        },
        {
          title: "Sponsor",
          items: [
            {
              label: "Nuvex Solutions",
              href: "https://nuvex.com",
            },
            {
              label: "Support the Project",
              href: "https://github.com/sponsors/sammy6378",
            },
            {
              label: "Contact Us",
              href: "mailto:contact@nuvex.com",
            },
            {
              label: "Partnership",
              href: "mailto:partnerships@nuvex.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Modern JavaScript Documentation. Proudly sponsored by <a href="https://nuvex.com" target="_blank" rel="noopener noreferrer">Nuvex Solutions</a>. Built with ❤️ for the developer community.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "diff", "json"],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false, // Disable system preference to avoid conflicts
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/sammy6378/reference/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

export default config;
