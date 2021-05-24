import React from 'react';
import ArticleCard from './ArticleCard';
import styled from 'styled-components';

const LastNews = () => {
  return (
    <div>
      <Container>
        <Title>Последние новости</Title>
        <LatestNewsBox>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </LatestNewsBox>
      </Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 35px;
`;

const LatestNewsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(285px, 1fr));
  gap: 30px;
`;

export default LastNews;
