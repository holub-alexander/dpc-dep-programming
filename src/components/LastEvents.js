import React from 'react';
import ArticleCard from './ArticleCard';
import styled from 'styled-components';
import { Button } from './Button';

const LastEvents = () => {
  return (
    <LastEventsBox>
      <h2 className='hidden'>
        Донецкий политехнический колледж, отделение программирования: последние
        события
      </h2>
      <Container>
        <Title>Последние события</Title>
        <Events>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Events>
        <SeeAll>
          <Button>Все события</Button>
        </SeeAll>
      </Container>
    </LastEventsBox>
  );
};

const LastEventsBox = styled.div`
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

const Events = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(285px, 1fr));
  gap: 30px;
  margin-bottom: 45px;
`;

const SeeAll = styled.div`
  text-align: center;
`;

export default LastEvents;
