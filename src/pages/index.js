import * as React from 'react';
import Hero from '../components/Hero';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <Layout>
      <Hero />
    </Layout>
  </>
);

export default IndexPage;
