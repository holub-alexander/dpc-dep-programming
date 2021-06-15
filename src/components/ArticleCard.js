import React from 'react';
import { BsCalendar } from 'react-icons/bs';
import styled from 'styled-components';
import { Button } from './Button';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ArticleCard = ({ location, info } = {}) => {
  const {
    url = '',
    title = 'Заголовок',
    descr = '',
    date = '',
    image,
    page = '',
  } = info;
  const img = getImage(image);

  const formatText = (text, length) => {
    return text && text.length > length ? `${text.slice(0, length)}...` : text;
  };

  const dateArr = date.split('.');

  return (
    <ArticleCardBox>
      <ArticleCardImg to={`${page || location.pathname}/${url}`}>
        {image ? <GatsbyImage image={img} alt={title} /> : null}
      </ArticleCardImg>
      <ArticleCardInfo>
        <Title>{formatText(title, 52)}</Title>
        <ArticleCardDescr>{formatText(descr, 90)}</ArticleCardDescr>
        <ArticleCardFooter>
          <Button primary='true' to={`${page || location.pathname}/${url}`}>
            Читать
          </Button>
          <Calendar>
            <BsCalendar />
            {`${dateArr[0]}.${dateArr[1]}.${dateArr[2].slice(-2)}`}
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
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
`;

const ArticleCardImg = styled(Link)`
  overflow: hidden;
  display: flex;
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 209px;
  flex-shrink: 0;
  background-color: var(--border);

  ::after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    transition: background-color 0.2s ease-in;
  }

  :hover::after,
  :focus::after {
    background-color: rgba(6, 66, 205, 0.15);
  }
`;

const ArticleCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 25px 16px;
  height: 100%;
`;

const Title = styled.h3`
  margin: 0 0 15px;
  font-weight: 500;
  font-size: 21px;
  color: #212121;

  @media screen and (max-width: 1180px) {
    font-size: 19px;
  }

  @media screen and (max-width: 576px) {
    font-size: 17px;
    margin-bottom: 11px;
  }
`;

const ArticleCardDescr = styled.p`
  margin: 0 0 25px;
  padding: 0;
  color: #424242;
  font-size: 15px;
  line-height: 1.55;

  @media screen and (max-width: 1180px) {
    font-size: 14px;
  }
`;

const ArticleCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Calendar = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;

  svg {
    margin-right: 7px;
  }

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`;

export default ArticleCard;
