import React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
