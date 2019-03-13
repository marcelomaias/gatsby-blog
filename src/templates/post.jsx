import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Link to="/">Go back</Link>
      <div className="post">
        <h1>{frontmatter.title}</h1>
        <small>
          Posted by {frontmatter.author} on {frontmatter.date}
        </small>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Link to="/">Go back</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        author
        date
        path
      }
      html
    }
  }
`
