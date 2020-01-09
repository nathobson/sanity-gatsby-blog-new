export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e16db868e0e91f8a604b1e2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-new-studio',
                  apiId: '3b96dccb-f150-4cf5-bdd5-8369f0248416'
                },
                {
                  buildHookId: '5e16db86d2b961dcab3a8276',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-new',
                  apiId: 'f31b4f3d-f538-42fb-b087-52b85eb78b35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathobson/sanity-gatsby-blog-new',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-new.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
