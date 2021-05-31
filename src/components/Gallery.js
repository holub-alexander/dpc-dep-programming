import React from 'react';
import { Gallery as GalleryImages } from 'gatsby-theme-gallery';
import styled from 'styled-components';

const Gallery = () => {
  return (
    <div>
      <GalleryBox>
        <h1 className='hidden'>
          Донецкий политехнический колледж, отделение программирования: галерея
        </h1>
        <Container>
          <Title>Галерея</Title>
        </Container>
        <GalleryImages />
      </GalleryBox>
    </div>
  );
};

const GalleryBox = styled.div`
  padding: 60px 0 80px;
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
  color: var(--dark-xl);
  text-align: center;
`;

export default Gallery;
