import React from 'react';
import Layout from '../components/layout';
import Seo from './../components/seo';
import AllEvents from './../components/AllEvents';

const Events = () => {
  return (
    <>
      <Seo title='Все события' />
      <Layout>
        <AllEvents />
      </Layout>
    </>
  );
};

export default Events;
