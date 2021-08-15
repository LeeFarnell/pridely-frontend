import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../slide";

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
  // destructuring followers array from props
  const { followers } = props;

  // map through followers array and render a component
  const followMap = followers.map((i) => {
    return (
      <SwiperSlide>
        <Slide key={i} myFollowers={i.businessId} />
      </SwiperSlide>
    );
  });

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
        {followMap}
      </Swiper>
    </React.Fragment>
  );
};

export default Carousel;
