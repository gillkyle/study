const slugify = require("slugify")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(
    `
      {
        tags: allMdx {
          group(field: frontmatter___tags) {
            fieldValue
            nodes {
              id
            }
          }
        }
      }
    `
  )

  result.data.tags.group.forEach(tag => {
    createPage({
      path: `/tags/${slugify(tag.fieldValue)}`,
      component: require.resolve(`./src/templates/tag.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
