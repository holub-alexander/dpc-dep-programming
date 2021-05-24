import * as React from 'react';
import Hero from '../components/Hero';
import LastNews from '../components/LastNews';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <Layout>
      <Hero />
      <LastNews />
    </Layout>
  </>
);

export default IndexPage;
