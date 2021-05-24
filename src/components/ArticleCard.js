import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { BsCalendar } from 'react-icons/bs';
import styled from 'styled-components';
import { Button } from './Button';

const ArticleCard = () => {
  return (
    <ArticleCardBox>
      <ArticleCardImg>
        <StaticImage
          src={'../assets/images/hero-slide-1.jpg'}
          alt='Text'
          formats={['avif', 'webp', 'jpg']}
        />
      </ArticleCardImg>
      <ArticleCardInfo>
        <Title>Новость 1</Title>
        <ArticleCardDescr>
          Текст описывающий содержание первой статьи.
        </ArticleCardDescr>
        <ArticleCardFooter>
          <Button primary='true' to={'/'}>
            Читать
          </Button>
          <Calendar>
            <BsCalendar />
            23.02.21
          </Calendar>
        </ArticleCardFooter>
      </ArticleCardInfo>
    </ArticleCardBox>
  );
};

const ArticleCardBox = styled.div`
  border: 1px solid #e8e8e8;
  max-height: 483px;
  border-radius: 7px;
  overflow-y: hidden;
`;

const ArticleCardImg = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  ::after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ArticleCardInfo = styled.div`
  padding: 30px 25px;
`;

const Title = styled.h3`
  margin: 0 0 15px;
  font-weight: 500;
  font-size: 21px;
  color: #212121;
`;

const ArticleCardDescr = styled.p`
  margin: 0 0 25px;
  padding: 0;
  color: #424242;
  font-size: 15px;
`;

const ArticleCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Calendar = styled.p`
  margin: 0;
  padding: 0;

  svg {
    margin-right: 7px;
  }
`;

export default ArticleCard;
