import React from 'react';
import Layout from './../components/layout';
import Seo from './../components/seo';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <>
      <Seo title='Галерея' />
      <Layout>
        <Gallery />
      </Layout>
    </>
  );
};

export default GalleryPage;
