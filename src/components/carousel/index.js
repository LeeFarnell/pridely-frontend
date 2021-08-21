import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "../avatar";
import Button from "../button";
import { Link } from "react-router-dom";

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
        <div className="slide-containter" key={follower.id}>
          <div className="avatar-carousel">
            <Avatar URL="https://filmschoolrejects.com/wp-content/uploads/2018/10/avatar-last-airbender-episodes-ranked.jpg" />
          </div>
          <div className="user-card-info">{follower.name}</div>
          <div className="user-card-info">
            Category: {follower.businessType}
          </div>
          <div className="user-card-info">{follower.businessDescription}</div>
          <div className="user-card-bottom">Rating: {follower.ratings}</div>
          <div className="carousel-btn">
            <Link to={`/user-profile/${follower.id}`}>
              <Button name="View Profile" class="carousel-btn" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <React.Fragment>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {followMap}
      </Swiper>
    </React.Fragment>
  );
};

export default Carousel;
