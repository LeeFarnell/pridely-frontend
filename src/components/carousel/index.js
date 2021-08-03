import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper";

import "swiper/swiper-bundle.css";

import "./index.css";

SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

const Carousel = (props) => {
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        id="main"
        spaceBetween={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
};

export default Carousel;
