import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/reference/__docusaurus/debug',
    component: ComponentCreator('/reference/__docusaurus/debug', '696'),
    exact: true
  },
  {
    path: '/reference/__docusaurus/debug/config',
    component: ComponentCreator('/reference/__docusaurus/debug/config', '6ab'),
    exact: true
  },
  {
    path: '/reference/__docusaurus/debug/content',
    component: ComponentCreator('/reference/__docusaurus/debug/content', 'd1e'),
    exact: true
  },
  {
    path: '/reference/__docusaurus/debug/globalData',
    component: ComponentCreator('/reference/__docusaurus/debug/globalData', 'ec2'),
    exact: true
  },
  {
    path: '/reference/__docusaurus/debug/metadata',
    component: ComponentCreator('/reference/__docusaurus/debug/metadata', 'ee5'),
    exact: true
  },
  {
    path: '/reference/__docusaurus/debug/registry',
    component: ComponentCreator('/reference/__docusaurus/debug/registry', '39f'),
    exact: true
  },
  {
    path: '/reference/__docusaurus/debug/routes',
    component: ComponentCreator('/reference/__docusaurus/debug/routes', '6bd'),
    exact: true
  },
  {
    path: '/reference/docs',
    component: ComponentCreator('/reference/docs', 'c5b'),
    routes: [
      {
        path: '/reference/docs',
        component: ComponentCreator('/reference/docs', 'fb5'),
        routes: [
          {
            path: '/reference/docs',
            component: ComponentCreator('/reference/docs', 'dd7'),
            routes: [
              {
                path: '/reference/docs/getting-started',
                component: ComponentCreator('/reference/docs/getting-started', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/intro',
                component: ComponentCreator('/reference/docs/intro', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/js/advanced',
                component: ComponentCreator('/reference/docs/js/advanced', '378'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/js/basics',
                component: ComponentCreator('/reference/docs/js/basics', 'c79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/react-native/components',
                component: ComponentCreator('/reference/docs/react-native/components', '8b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/react-native/setup',
                component: ComponentCreator('/reference/docs/react-native/setup', 'b56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/ts/intro',
                component: ComponentCreator('/reference/docs/ts/intro', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/ts/tips',
                component: ComponentCreator('/reference/docs/ts/tips', '27d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/reference/',
    component: ComponentCreator('/reference/', 'a57'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
