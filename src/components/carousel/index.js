import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@apollo/client";
import { DASHBOARD_FOLLOWERS_PROFILE } from "../../queries";
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
  const { followers } = props;

  console.log(followers);

  const followMap = followers.map(() => {
    return (
      <SwiperSlide>
        <Slide myFollowers={followers} />
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
