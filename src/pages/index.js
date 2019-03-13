import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog Page" />

      {data.allMarkdownRemark.edges.map(post => (
        <div className="post-item" key={post.node.id}>
          <div className="post-item-date">
            <div>{post.node.frontmatter.date}</div>
            <small>By {post.node.frontmatter.author}</small>
          </div>
          <div className="post-item-content">
            <h2>
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h2>

            <p>{post.node.frontmatter.summary}</p>
            <Link to={post.node.frontmatter.path}>Read More</Link>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            path
            summary
          }
        }
      }
    }
  }
`
export default BlogPage
