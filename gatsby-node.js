exports.onCreateNode = ({ node, getNodesByType, actions }) => {
  const { createNodeField } = actions
  // get Mdx Nodes that should align with the Article post type
  const MdxNodes = getNodesByType(`Mdx`)

  // only add to Article nodes
  if (node.internal.type === "Article") {
    // find the matching Mdx node for the Article
    const matchingMdxNode = MdxNodes.find(
      mdxNode => mdxNode.frontmatter.title === node.title
    )

    // add the tags field from the Mdx frontmatter
    createNodeField({
      node,
      name: "tags",
      value:
        matchingMdxNode.frontmatter.tags && matchingMdxNode.frontmatter.tags,
    })
  }
}
