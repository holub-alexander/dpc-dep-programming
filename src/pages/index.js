import * as React from 'react';
import Hero from '../components/Hero';
import LastEvents from '../components/LastEvents';
import LastNews from '../components/LastNews';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <Layout>
      <Hero />
      <LastNews />
      <LastEvents />
    </Layout>
  </>
);

export default IndexPage;
