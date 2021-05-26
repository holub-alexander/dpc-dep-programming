import React from 'react';
import AllNews from '../components/AllNews';
import Layout from '../components/layout';
import Seo from './../components/seo';

const News = ({ location }) => {
  return (
    <>
      <Seo title='Все новости' />
      <Layout>
        <AllNews location={location} />
      </Layout>
    </>
  );
};

export default News;
