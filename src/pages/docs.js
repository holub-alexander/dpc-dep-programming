import React from 'react';
import Seo from './../components/seo';
import Layout from './../components/layout';
import Docs from './../components/Docs';

const DocsPage = () => {
  return (
    <>
      <Seo title='Документы' />
      <Layout>
        <Docs />
      </Layout>
    </>
  );
};

export default DocsPage;
