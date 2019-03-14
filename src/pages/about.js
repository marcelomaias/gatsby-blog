import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import filesPic from "../images/files.png"
import mdPic from "../images/md.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div className="about-page">
      <p>
        This blog is made with <a href="https://www.gatsbyjs.org">Gatsby</a>,
        which uses <a href="https://graphql.org/">GraphQL</a> to query a
        specified folder in the file system for markdown files and loads them as
        blog posts.
      </p>
      <figure>
        <img src={filesPic} alt="Files" />
        <figcaption>The "posts" folder containing markdown files.</figcaption>
      </figure>
      <figure>
        <img src={mdPic} alt="Markdown" />
        <figcaption>A markdown file with information about the post</figcaption>
      </figure>
    </div>
  </Layout>
)

export default AboutPage
