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
                  buildHookId: '5e2d22b0dab7168372fb3004',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iijtsfzj',
                  apiId: '1619b8c1-7336-4ba4-ad03-10371c81df08'
                },
                {
                  buildHookId: '5e2d22b0b1f2ea6139aa4832',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cju4i2wx',
                  apiId: 'edaea942-3726-45a2-acbc-fbc92f4f556d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fabio0305/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cju4i2wx.netlify.com', category: 'apps'}
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
