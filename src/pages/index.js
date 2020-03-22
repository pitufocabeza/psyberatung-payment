import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


import Skus from '../components/Products/Skus'

const IndexPage = () => (
  <Layout>
    <SEO title="Psychologische Beratung" keywords={[`psychologisch`, `coaching`, `beratung`]} />
      <Skus />
  </Layout>
)

export default IndexPage
