import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/Layout"

const IndexPage = () => {

  return (
    <Layout> 
      <h1>Whatever</h1>
      <h2> I'm David, a full stack developer living in NYC</h2>

      <p> Contact page <Link to = "/contact">Contact me</Link> </p>

    </Layout>
  )
}

export default IndexPage