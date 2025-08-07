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
      title: "Nuvex",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Docs",
        },
        {
          type: "dropdown",
          label: "Technologies",
          position: "right",
          items: [
            { to: "/docs/js/basics", label: "JavaScript" },
            { to: "/docs/ts/intro", label: "TypeScript" },
            { to: "/docs/react-native/setup", label: "React Native" },
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
          title: "About",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Contributing",
              href: "https://github.com/sammy6378/reference/blob/main/CONTRIBUTING.md",
            },
            {
              label: "License",
              href: "https://github.com/sammy6378/reference/blob/main/LICENSE",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
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
            {
              label: "Advanced Topics",
              to: "/docs/js/advanced",
            },
          ],
        },
        {
          title: "Community & Social",
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
              label: "Issues",
              href: "https://github.com/sammy6378/reference/issues",
            },
            {
              label: "Discord",
              href: "https://discord.gg/your-server",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sponsored by Nuvex.`,
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
          sidebarPath: "./Sidebar.ts",
          editUrl: "https://github.com/sammy6378/reference/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
