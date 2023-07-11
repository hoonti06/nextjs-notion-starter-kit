import { siteConfig } from './lib/site-config'

export default siteConfig({
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'f6e6bca7e11b414bbbc96d596765c993',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'Lambd4',

  // basic site info (required)åå
  name: 'hm_dev',
  domain: 'hmdev.vercel.app',
  author: 'hanmil lee',

  // open graph metadata (optional)
  description: "Hanmil's Notion blog",
  // socialImageTitle: 'HM_dev',
  // socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'hanmilLee',
  linkedin: 'hanmil-lee-828a57187',
  instagram: '2hanmil',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:'https://hmdev.vercel.app/page-icon.jpg',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'hanmilLee/nextjs-notion-starter-kit',
 
  // Cusdis comment widget (optional)
  // cusdis: {
  //   appId: 'd39a1dc4-5580-4ad8-8d75-c6a486475b5a' // your website id
  // },
  
  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About me',
      pageId: 'a32a59aec23c41e08452757e94d96418'
    },
    // {
    //   title: 'About me',
    //   url: 'https://www.linkedin.com/in/hanmil-lee-828a57187/'
    // },
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  ]
})  
