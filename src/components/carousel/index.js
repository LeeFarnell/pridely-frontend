import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "../avatar";
import Button from "../button";

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
  const followMap = followers.map((follower) => {
    return (
      <SwiperSlide>
        <div className="user-card-container" key={follower.id}>
          <div>
            <Avatar URL="https://filmschoolrejects.com/wp-content/uploads/2018/10/avatar-last-airbender-episodes-ranked.jpg" />
          </div>
          <div className="user-card-info">{follower.name}</div>
          <div className="user-card-info">{follower.username}</div>
          <div className="user-card-info">{follower.email}</div>
          <div className="user-card-bottom">Rating: {follower.email}</div>
          <Button name="View Profile" />
        </div>
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
