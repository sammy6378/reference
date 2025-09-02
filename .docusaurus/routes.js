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
    component: ComponentCreator('/docs', 'b01'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5e7'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3cb'),
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
                path: '/docs/CSS/box-model',
                component: ComponentCreator('/docs/CSS/box-model', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CSS/introduction-to-css',
                component: ComponentCreator('/docs/CSS/introduction-to-css', 'ead'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CSS/layout',
                component: ComponentCreator('/docs/CSS/layout', '9ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CSS/layout-techniques',
                component: ComponentCreator('/docs/CSS/layout-techniques', '5b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CSS/projects',
                component: ComponentCreator('/docs/CSS/projects', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CSS/selectors',
                component: ComponentCreator('/docs/CSS/selectors', 'c02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/CSS/selectors-and-properties',
                component: ComponentCreator('/docs/CSS/selectors-and-properties', 'cfe'),
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
                path: '/docs/Git/basic-commands',
                component: ComponentCreator('/docs/Git/basic-commands', '9c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/branching',
                component: ComponentCreator('/docs/Git/branching', '66c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/github-workflow',
                component: ComponentCreator('/docs/Git/github-workflow', '4c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/introduction-to-git',
                component: ComponentCreator('/docs/Git/introduction-to-git', 'edd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/projects',
                component: ComponentCreator('/docs/Git/projects', '47c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/actions-cicd',
                component: ComponentCreator('/docs/GitHub/actions-cicd', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/best-practices',
                component: ComponentCreator('/docs/GitHub/best-practices', '715'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/code-reviews',
                component: ComponentCreator('/docs/GitHub/code-reviews', '5e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/collaboration',
                component: ComponentCreator('/docs/GitHub/collaboration', '510'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/creating-cloning-repos',
                component: ComponentCreator('/docs/GitHub/creating-cloning-repos', '051'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/example-auto-deploy',
                component: ComponentCreator('/docs/GitHub/example-auto-deploy', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/git-clone',
                component: ComponentCreator('/docs/GitHub/git-clone', '06a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/hosting-github-pages',
                component: ComponentCreator('/docs/GitHub/hosting-github-pages', '166'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/introduction',
                component: ComponentCreator('/docs/GitHub/introduction', 'd15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/issues-discussions',
                component: ComponentCreator('/docs/GitHub/issues-discussions', 'c8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/pages',
                component: ComponentCreator('/docs/GitHub/pages', '8da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/projects-kanban',
                component: ComponentCreator('/docs/GitHub/projects-kanban', '43f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/protecting-branches',
                component: ComponentCreator('/docs/GitHub/protecting-branches', '26e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/uploading-project',
                component: ComponentCreator('/docs/GitHub/uploading-project', '380'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/what-is-github',
                component: ComponentCreator('/docs/GitHub/what-is-github', '760'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/workflows',
                component: ComponentCreator('/docs/GitHub/workflows', 'df0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GitHub/writing-good-readme',
                component: ComponentCreator('/docs/GitHub/writing-good-readme', 'e2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/accessibility-seo',
                component: ComponentCreator('/docs/HTML/accessibility-seo', 'a3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/attributes',
                component: ComponentCreator('/docs/HTML/attributes', '89d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/elements',
                component: ComponentCreator('/docs/HTML/elements', 'f34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/elements-and-attributes',
                component: ComponentCreator('/docs/HTML/elements-and-attributes', '81d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/forms',
                component: ComponentCreator('/docs/HTML/forms', 'ba9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/forms-and-input-types',
                component: ComponentCreator('/docs/HTML/forms-and-input-types', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/introduction-to-html',
                component: ComponentCreator('/docs/HTML/introduction-to-html', '259'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/media',
                component: ComponentCreator('/docs/HTML/media', '701'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/projects',
                component: ComponentCreator('/docs/HTML/projects', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/HTML/semantic-html',
                component: ComponentCreator('/docs/HTML/semantic-html', '57a'),
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
