"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect CSS
import Image from "next/image";
import sliderArrow from "/public/images/sliderArrow.svg";
import { useRef } from "react";
import { sliderData } from "@/utils/Home/DataOfMainBannerSlider/SliderDataMainBanner";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true, // Smooth looping enabled
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1200, // Smoother transitions
};

const MainBanner = () => {
  const swiperRef = useRef(null);

  return (
    <div className="homepage-slider-container">
      <Swiper
        {...swiperOptions}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="homepage-slider">
              <div className="homepage-slider-overlay"></div>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                className="homepage-slider-image"
              />
              <div className="homepage-slider-content">
                <p className="homepage-slider-description">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Button */}
      <button
        className="homepage-slider-button homepage-slider-button--left"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Image
          src={sliderArrow}
          alt="Previous"
          className="homepage-slider-arrow"
        />
      </button>

      {/* Right Button */}
      <button
        className="homepage-slider-button homepage-slider-button--right"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Image src={sliderArrow} alt="Next" className="homepage-slider-arrow" />
      </button>
    </div>
  );
};

export default MainBanner;
