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
    path: '/reference/search',
    component: ComponentCreator('/reference/search', '083'),
    exact: true
  },
  {
    path: '/reference/docs',
    component: ComponentCreator('/reference/docs', '5b1'),
    routes: [
      {
        path: '/reference/docs',
        component: ComponentCreator('/reference/docs', '5c5'),
        routes: [
          {
            path: '/reference/docs',
            component: ComponentCreator('/reference/docs', '565'),
            routes: [
              {
                path: '/reference/docs/getting-started',
                component: ComponentCreator('/reference/docs/getting-started', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/arrays',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/arrays', '740'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/control-structures',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/control-structures', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/functions',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/functions', '798'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/introduction-to-javascript',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/introduction-to-javascript', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/loops',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/loops', '78f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/objects',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/objects', 'a09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/operators',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/operators', '5cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/projects',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/projects', 'cc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Beginner/variables-and-datatypes',
                component: ComponentCreator('/reference/docs/Javascript/Beginner/variables-and-datatypes', '5fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/advanced-functions',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/advanced-functions', 'd81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/async-javascript',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/async-javascript', 'a8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/async-javascript/async-await',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/async-javascript/async-await', '8d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/async-javascript/asynchronous-operations',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/async-javascript/asynchronous-operations', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/async-javascript/callbacks',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/async-javascript/callbacks', 'b77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/async-javascript/promises',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/async-javascript/promises', '5f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/dom-manipulation',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/dom-manipulation', 'fc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/error-handling',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/error-handling', '649'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/es6-features',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/es6-features', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/final-projects',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/final-projects', '791'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/Javascript/Intermediate/json-apis',
                component: ComponentCreator('/reference/docs/Javascript/Intermediate/json-apis', 'c42'),
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
                path: '/reference/docs/React/patterns',
                component: ComponentCreator('/reference/docs/React/patterns', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/reference/docs/React/setup',
                component: ComponentCreator('/reference/docs/React/setup', '898'),
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
