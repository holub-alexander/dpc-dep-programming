import React from 'react';
import styled from 'styled-components';

import Layout from './../components/layout';
import { GlobalArticleStyles } from './../components/styles/GlobalArticleStyles';

const HelperPage = () => {
  return (
    <Layout>
      <GlobalArticleStyles />
      <HelperArticleBox>
        <Container>
          <div>
            <h1>Оформление HTML-страницы из Markdown</h1>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <pre>
              <code>
                # Header 1{'\n'}## Header 2{'\n'}### Header 3{'\n'}#### Header 4
                {'\n'}
                ##### Header 5{'\n'}###### Header 6{'\n'}
              </code>
            </pre>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
                viverra nec, fringilla in, laoreet vitae, risus.
              </p>
            </blockquote>
            <pre>
              <code>
                &gt; Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
                viverra nec, fringilla in, laoreet vitae, risus.{'\n'}
              </code>
            </pre>
            <blockquote>
              <h2>This is a header.</h2>
              <ol>
                <li>This is the first list item.</li>
                <li>This is the second list item.</li>
              </ol>
              <p>Here's some example code:</p>
              <pre>
                <code>Markdown.generate();{'\n'}</code>
              </pre>
            </blockquote>
            <pre>
              <code>
                &gt; ## This is a header.{'\n'}&gt; 1. This is the first list
                item.
                {'\n'}&gt; 2. This is the second list item.{'\n'}&gt;{'\n'}&gt;
                Here's some example code:{'\n'}&gt;{'\n'}&gt;{'     '}
                Markdown.generate();
                {'\n'}
              </code>
            </pre>
            <ul>
              <li>Red</li>
              <li>Green</li>
              <li>Blue</li>
            </ul>
            <ul>
              <li>Red</li>
              <li>Green</li>
              <li>Blue</li>
            </ul>
            <ul>
              <li>Red</li>
              <li>Green</li>
              <li>Blue</li>
            </ul>
            <pre>
              <code>
                - Red{'\n'}- Green{'\n'}- Blue{'\n'}
                {'\n'}* Red{'\n'}* Green{'\n'}* Blue{'\n'}
                {'\n'}- Red{'\n'}- Green{'\n'}- Blue{'\n'}
              </code>
            </pre>
            <ul>
              <li>
                <code>code goes</code> here in this line
              </li>
              <li>
                <strong>bold</strong> goes here
              </li>
            </ul>
            <pre>
              <code>
                - `code goes` here in this line{'\n'}- **bold** goes here{'\n'}
              </code>
            </pre>
            <ol>
              <li>Buy flour and salt</li>
              <li>Mix together with water</li>
              <li>Bake</li>
            </ol>
            <pre>
              <code>
                1. Buy flour and salt{'\n'}1. Mix together with water{'\n'}1.
                Bake
                {'\n'}
              </code>
            </pre>
            <ol>
              <li>
                <code>code goes</code> here in this line
              </li>
              <li>
                <strong>bold</strong> goes here
              </li>
            </ol>
            <pre>
              <code>
                1. `code goes` here in this line{'\n'}1. **bold** goes here
                {'\n'}
              </code>
            </pre>
            <p>Paragraph:</p>
            <pre>
              <code>Code{'\n'}</code>
            </pre>
            {/* */}
            <pre>
              <code>
                Paragraph:{'\n'}
                {'\n'}
                {'    '}Code{'\n'}
              </code>
            </pre>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <pre>
              <code>
                * * *{'\n'}
                {'\n'}***{'\n'}
                {'\n'}*****{'\n'}
                {'\n'}- - -{'\n'}
                {'\n'}---------------------------------------{'\n'}
              </code>
            </pre>
          </div>
        </Container>
      </HelperArticleBox>
    </Layout>
  );
};

const HelperArticleBox = styled.article`
  padding: 45px 0;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
`;

export default HelperPage;
