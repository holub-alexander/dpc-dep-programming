import React from 'react';
import ArticleCard from './ArticleCard';
import styled from 'styled-components';
import { Button } from './Button';

const LastNews = () => {
  return (
    <LastNewsBox>
      <h2 className='hidden'>
        Донецкий политехнический колледж, отделение программирования: последние
        новости
      </h2>
      <Container>
        <Title>Последние новости</Title>
        <News>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </News>
        <SeeAll>
          <Button>Все новости</Button>
        </SeeAll>
      </Container>
    </LastNewsBox>
  );
};

const LastNewsBox = styled.div`
  margin-bottom: 65px;
`;

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

const News = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(285px, 1fr));
  gap: 30px;
  margin-bottom: 45px;
`;

const SeeAll = styled.div`
  text-align: center;
`;

export default LastNews;
