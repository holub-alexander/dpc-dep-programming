import React from 'react';
import Layout from '../components/layout';
import Seo from './../components/seo';
import AllEvents from './../components/AllEvents';

const Events = ({ location }) => {
  return (
    <>
      <Seo title='Все события' />
      <Layout>
        <AllEvents location={location} />
      </Layout>
    </>
  );
};

export default Events;
