import React from "react"
import g from "glamorous"

import { rhythm } from "../utils/typography"
import Link from "gatsby-link"

export default ({ data }) => {
    console.log(data)
    const posts =  data.allMarkdownRemark.edges
        .filter(({node}) => node.fields.slug.startsWith('/posts/'));

    return (
        <div>
            <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
                Photography, Web and Tech
            </g.H1>
            <h4>
                {data.allMarkdownRemark.totalCount} Posts
            </h4>
            {posts.map(({ node }) =>
                <div>
                    <Link
                        to={node.fields.slug}
                        css={{ textDecoration: `none`, color: `inherit` }}
                    >
                        <g.H3 marginBottom={rhythm(1 / 4)}>
                            {node.frontmatter.title}{" "}
                            <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
                        </g.H3>
                        <p>
                            {node.excerpt}
                        </p>
                    </Link>
                </div>
            )}
        </div>
    )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`