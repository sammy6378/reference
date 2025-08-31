import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0eb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f00'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'bee'),
            routes: [
              {
                path: '/docs/category/beginner',
                component: ComponentCreator('/docs/category/beginner', '616'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/intermediate',
                component: ComponentCreator('/docs/category/intermediate', 'd33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/javascript',
                component: ComponentCreator('/docs/category/javascript', '59a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/arrays',
                component: ComponentCreator('/docs/Javascript/Beginner/arrays', '1a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/control-structures',
                component: ComponentCreator('/docs/Javascript/Beginner/control-structures', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/functions',
                component: ComponentCreator('/docs/Javascript/Beginner/functions', '18d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/introduction-to-javascript',
                component: ComponentCreator('/docs/Javascript/Beginner/introduction-to-javascript', '1db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/loops',
                component: ComponentCreator('/docs/Javascript/Beginner/loops', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/objects',
                component: ComponentCreator('/docs/Javascript/Beginner/objects', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/operators',
                component: ComponentCreator('/docs/Javascript/Beginner/operators', '49f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/projects',
                component: ComponentCreator('/docs/Javascript/Beginner/projects', 'df7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Beginner/variables-and-datatypes',
                component: ComponentCreator('/docs/Javascript/Beginner/variables-and-datatypes', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/advanced-functions',
                component: ComponentCreator('/docs/Javascript/Intermediate/advanced-functions', '4cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/async-javascript',
                component: ComponentCreator('/docs/Javascript/Intermediate/async-javascript', 'b07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/async-javascript/async-await',
                component: ComponentCreator('/docs/Javascript/Intermediate/async-javascript/async-await', '0c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/async-javascript/asynchronous-operations',
                component: ComponentCreator('/docs/Javascript/Intermediate/async-javascript/asynchronous-operations', '1c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/async-javascript/callbacks',
                component: ComponentCreator('/docs/Javascript/Intermediate/async-javascript/callbacks', '1c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/async-javascript/promises',
                component: ComponentCreator('/docs/Javascript/Intermediate/async-javascript/promises', '17c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/dom-manipulation',
                component: ComponentCreator('/docs/Javascript/Intermediate/dom-manipulation', '78d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/error-handling',
                component: ComponentCreator('/docs/Javascript/Intermediate/error-handling', '138'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/es6-features',
                component: ComponentCreator('/docs/Javascript/Intermediate/es6-features', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/final-projects',
                component: ComponentCreator('/docs/Javascript/Intermediate/final-projects', '331'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Javascript/Intermediate/json-apis',
                component: ComponentCreator('/docs/Javascript/Intermediate/json-apis', '041'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/react-native/components',
                component: ComponentCreator('/docs/react-native/components', 'c89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/react-native/Introduction',
                component: ComponentCreator('/docs/react-native/Introduction', '226'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/react-native/setup',
                component: ComponentCreator('/docs/react-native/setup', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/patterns',
                component: ComponentCreator('/docs/React/patterns', 'e63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/React/setup',
                component: ComponentCreator('/docs/React/setup', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Typescript/intro',
                component: ComponentCreator('/docs/Typescript/intro', '9e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Typescript/tips',
                component: ComponentCreator('/docs/Typescript/tips', 'ba8'),
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
