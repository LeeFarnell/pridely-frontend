import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import Avatar from "../avatar";
import Button from "../button";
import { truncateString } from "../../utils/utilities";

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
      <SwiperSlide key={follower.id}>
        {follower && (
          <div className="slide-containter" key={follower.id}>
            <div className="avatar-carousel">
              <Avatar
                URL={follower.profilePicture}
                alt={`avatar image of ${follower.username}`}
              />
            </div>
            <div className="user-card-info">{follower.name}</div>
            {follower.businessType ? (
              <div className="user-card-info">
                Category: {follower.businessType}
              </div>
            ) : (
              <div>No category available</div>
            )}
            {follower.businessDescription ? (
              <div className="user-card-info">
                {truncateString(follower.businessDescription, 100)}
              </div>
            ) : (
              <div>No business description available</div>
            )}
            {follower.ratings ? (
              <div className="user-card-bottom">
                Rating: {follower.averageRating}
              </div>
            ) : (
              <div>No rating to display</div>
            )}
            <div className="carousel-btn">
              <Link to={`/user-profile/${follower.id}`}>
                <Button name="View Profile" class="carousel-btn" />
              </Link>
            </div>
          </div>
        )}
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
