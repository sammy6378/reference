/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro", // Welcome to My Documentation
    "getting-started", // Getting Started (added after intro)
    {
      type: "category",
      label: "📚 Learning",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "🌐 JavaScript",
          collapsible: true,
          collapsed: true,
          items: ["js/basics", "js/advanced"],
        },
        {
          type: "category",
          label: "🔷 TypeScript",
          collapsible: true,
          collapsed: true,
          items: ["ts/intro", "ts/tips"],
        },
        {
          type: "category",
          label: "📱 React Native",
          collapsible: true,
          collapsed: true,
          items: ["react-native/setup", "react-native/components"],
        },
      ],
    },
  ],
};

export default sidebars;
