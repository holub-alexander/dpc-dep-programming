import React from 'react';
import { BsCalendar } from 'react-icons/bs';
import styled from 'styled-components';
import { Button } from './Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ArticleCard = ({ info } = {}) => {
  const {
    url = '',
    title = 'Заголовок',
    descr = '',
    date = '',
    image,
    page = '',
  } = info;
  const formatDescr =
    descr && descr.length > 70 ? `${descr.slice(0, 70)}...` : descr;
  const img = getImage(image);

  return (
    <ArticleCardBox>
      <ArticleCardImg>
        <GatsbyImage image={img} alt={title} />
      </ArticleCardImg>
      <ArticleCardInfo>
        <Title>{title}</Title>
        <ArticleCardDescr>{formatDescr}</ArticleCardDescr>
        <ArticleCardFooter>
          <Button
            primary='true'
            to={`${page || window.location.pathname}/${url}`}
          >
            Читать
          </Button>
          <Calendar>
            <BsCalendar />
            {date}
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
  height: 209px;
  background-color: var(--border);

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
