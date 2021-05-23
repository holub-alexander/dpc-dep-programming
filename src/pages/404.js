import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <h1>404: Такая страница не найдена</h1>
    <p>Пожалуйста, введите правильный адрес страницы</p>
  </Layout>
);

export default NotFoundPage;
