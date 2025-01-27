"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect CSS
import Image from "next/image";
import sliderArrow from "/public/images/sliderArrow.svg";
import { act, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { sliderData } from "@/utils/Home/DataOfMainBannerSlider/SliderDataMainBanner";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};

const MainBanner = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [textAnimating, setTextAnimating] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="homepage-slider-container">
      <Swiper
        {...swiperOptions}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setTextAnimating(false);
          setTimeout(() => {
            setActiveIndex(swiper.activeIndex);
            setTextAnimating(true);
          }, 300);
        }}
        onReachEnd={() => {
          if (swiperRef.current?.realIndex === sliderData.length - 1) {
            setTextAnimating(false);
            setTimeout(() => {
              setActiveIndex(0);
              swiperRef.current?.slideTo(0);
              setTextAnimating(true);
            }, 300);
          }
        }}
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
                <p
                  className={`homepage-slider-description ${
                    textAnimating && activeIndex === index ? "fade-in-left" : ""
                  }`}
                >
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
