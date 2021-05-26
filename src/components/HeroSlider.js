import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';
import './styles/hero-slider.css';

const HeroSlider = ({ sliderImg }) => {
  const data = sliderImg.markdownRemark.frontmatter;

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ borderRadius: '7px' }}
      loop
      autoplay={{ delay: 3000 }}
    >
      {data.sliderImages.map((item, index) => {
        const img = getImage(item);

        return (
          <SwiperSlide style={{ display: 'flex' }} key={index}>
            <SlideImage>
              <GatsbyImage image={img} alt={data.sliderImagesAlt[index]} />
            </SlideImage>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const SlideImage = styled.div`
  display: flex;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    z-index: 5;
  }
`;

export default HeroSlider;
