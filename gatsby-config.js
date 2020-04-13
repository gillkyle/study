module.exports = {
  siteMetadata: {
    title: `Study | Kyle Gill`,
    name: `Study | Kyle Gill`,
    siteUrl: `https://novela.narative.co`,
    description: `Weekly learnings, thoughts, and synthesis from the Scriptures.`,
    hero: {
      heading: `Weekly learnings, thoughts, and synthesis from the Scriptures.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gill_kyle`,
      },
      {
        name: `github`,
        url: `https://github.com/gillkyle`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Study | Kyle Gill`,
        short_name: `Study | Kyle Gill`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
}
