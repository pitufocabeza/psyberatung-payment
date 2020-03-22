import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Zahlung erfolgreich." />
    <h1>Zahlung erfolgreich!</h1>
    <Link to="/">Shop again</Link>
  </Layout>
)

export default SecondPage
