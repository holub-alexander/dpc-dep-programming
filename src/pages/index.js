import * as React from 'react';
import Contacts from '../components/Contacts';
import Hero from '../components/Hero';
import LastEvents from '../components/LastEvents';
import LastNews from '../components/LastNews';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <Layout>
      <h1 className='hidden'>
        Донецкий политехнический колледж, отделение Программирование в
        компьютерных системах
      </h1>
      <Hero />
      <LastNews />
      <LastEvents />
      <Contacts />
    </Layout>
  </>
);

export default IndexPage;
