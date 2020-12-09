import React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Some of our Favorite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
