/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import Layout from "@narative/gatsby-theme-novela/src/components/Layout"

const TagsPage = ({ data, pageContext }) => {
  console.log(data)
  return (
    <Layout>
      <div
        sx={{
          margin: `50px auto`,
          width: `100%`,
          maxWidth: 1220,
          padding: `0 4rem`,
        }}
      >
        <h1
          sx={{
            fontSize: 36,
            color: `primary`,
          }}
        >
          {data.tagPosts.nodes.length} Post
          {data.tagPosts.nodes.length > 1 ? `s` : ``} tagged with{" "}
          {pageContext.tag}
        </h1>
        <div sx={{ mb: 4 }}>
          <Link sx={{ color: `secondary` }} to="/tags">
            Back to all tags >
          </Link>
        </div>
        <section sx={{ mb: 4 }}>
          {data.tagPosts.nodes.map(tag => (
            <div sx={{ my: 16, "*+*": { ml: 2 } }}>
              <Link
                to={slugify(tag.frontmatter.title, { lower: true })}
                sx={{ color: `accentLink`, fontSize: 20 }}
              >
                {tag.frontmatter.title}
              </Link>
              <span sx={{ color: `articleText` }}>
                · {tag.frontmatter.date}
              </span>
              <span sx={{ color: `secondary` }}>{tag.timeToRead} min read</span>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  query TagQuery($tag: String!) {
    tagPosts: allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        timeToRead
      }
    }
  }
`
