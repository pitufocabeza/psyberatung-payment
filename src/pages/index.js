import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Checkout from '../components/checkout'

import Skus from '../components/Products/Skus'

const IndexPage = () => (
  <Layout>
    <SEO title="Psychologische Beratung" keywords={[`gatsby`, `application`, `react`]} />
      <Skus />
  </Layout>
)

export default IndexPage
