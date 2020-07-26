/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import Layout from "@narative/gatsby-theme-novela/src/components/Layout"

const TagsPage = ({ data }) => {
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
            color: `primary`,
            fontSize: 36,
          }}
        >
          All Tags
        </h1>
        <section sx={{ mb: 4 }}>
          {data.tags.group.map(tag => (
            <div sx={{ my: 24 }}>
              <Link
                sx={{ color: `articleText`, "&:hover": { color: `accent` } }}
                to={`/tags/${slugify(tag.fieldValue)}`}
              >
                <span sx={{ fontSize: 20 }}>
                  {tag.fieldValue} ({tag.nodes.length})
                </span>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
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
