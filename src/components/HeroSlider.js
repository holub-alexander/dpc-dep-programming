import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';
import './styles/hero-slider.css';

const HeroSlider = () => {
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
      <SwiperSlide style={{ display: 'flex' }}>
        <SlideImage>
          <StaticImage
            src='../assets/images/hero-slide-1.jpg'
            alt='Донецкий политехнический колледж (вид снаружи)'
            placeholder='dominantColor'
            formats={['avif', 'webp', 'jpg']}
            width={1180}
            height={650}
            layout={'constrained'}
          />
        </SlideImage>
      </SwiperSlide>
      <SwiperSlide style={{ display: 'flex' }}>
        <SlideImage>
          <StaticImage
            src='../assets/images/hero-slide-2.jpg'
            alt='Группа в аудитории слушает преподавателя'
            placeholder='dominantColor'
            formats={['avif', 'webp', 'jpg']}
            width={1180}
            height={650}
            layout={'constrained'}
          />
        </SlideImage>
      </SwiperSlide>
      <SwiperSlide style={{ display: 'flex' }}>
        <SlideImage>
          <StaticImage
            src='../assets/images/hero-slide-3.jpg'
            alt='Студентка выполняет работу за компьютером'
            placeholder='dominantColor'
            formats={['avif', 'webp', 'jpg']}
            width={1180}
            height={650}
            layout={'constrained'}
          />
        </SlideImage>
      </SwiperSlide>
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
