export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614925b340f45600bb854858',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uv2j1bdk',
                  apiId: '622cf3e6-b893-46a5-8dca-a8a5689b8327'
                },
                {
                  buildHookId: '614925b342a6f500ef0556b8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v1da3vft',
                  apiId: '63be48f5-fb9b-496c-bb4f-952ede6438d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmannfeld/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v1da3vft.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
