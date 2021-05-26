import React from 'react';
import AllNews from '../components/AllNews';
import Layout from '../components/layout';
import Seo from './../components/seo';

const News = () => {
  return (
    <>
      <Seo title='Главная страница' />
      <Layout>
        <AllNews />
      </Layout>
    </>
  );
};

export default News;
