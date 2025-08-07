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
    component: ComponentCreator('/reference/docs', '9b7'),
    routes: [
      {
        path: '/reference/docs',
        component: ComponentCreator('/reference/docs', 'b47'),
        routes: [
          {
            path: '/reference/docs',
            component: ComponentCreator('/reference/docs', '61e'),
            routes: [
              {
                path: '/reference/docs/getting-started',
                component: ComponentCreator('/reference/docs/getting-started', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/advanced',
                component: ComponentCreator('/reference/docs/Javascript/advanced', '0f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/basics',
                component: ComponentCreator('/reference/docs/Javascript/basics', '9d7'),
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
                path: '/reference/docs/Typescript/intro',
                component: ComponentCreator('/reference/docs/Typescript/intro', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Typescript/tips',
                component: ComponentCreator('/reference/docs/Typescript/tips', 'e8d'),
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
