import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Gastyby Practice</h1>
    <p>Welcome to my exmaple website. This is just an exmaple.</p>
    <p>Inflation is going to fuck us all </p>
  </Layout>
)

export default IndexPage
