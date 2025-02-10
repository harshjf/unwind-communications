"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import sliderArrow from "/public/images/sliderArrow.svg";
import { useRef, useEffect, useState } from "react";
import { sliderData } from "@/utils/Home/DataOfMainBannerSlider/SliderDataMainBanner";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1200,
};

const MainBanner = () => {
  const swiperRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0) {
      const showTimer = setTimeout(() => setShowPopup(true), 1000);

      return () => {
        clearTimeout(showTimer);
      };
    } else {
      setShowPopup(false);
    }
  }, [currentIndex]);

  return (
    <div className="homepage-slider-container">
      <Swiper
        {...swiperOptions}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
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

      <button
        className="homepage-slider-button homepage-slider-button--left"
        onClick={() => {
          swiperRef.current?.slidePrev();
          setShowPopup(false);
        }}
      >
        <Image
          src={sliderArrow}
          alt="Previous"
          className="homepage-slider-arrow"
        />
      </button>

      <button
        className="homepage-slider-button homepage-slider-button--right"
        onClick={() => {
          swiperRef.current?.slideNext();
          setShowPopup(false);
        }}
      >
        <Image src={sliderArrow} alt="Next" className="homepage-slider-arrow" />
      </button>

      {currentIndex === 0 && showPopup && (
        <div className="homepage-slider-popup">
          Bharat Darshan at Global Level with Unwind Communications.
        </div>
      )}

      <style jsx>{`
        .homepage-slider-popup {
          position: absolute;
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          color: black;
          padding: 10px 25px;
          font-size: 40px;
          font-weight: 600;
          font-family: Garamond, serif;
          text-align: center;
          border-radius: 8px;
          max-width: 500px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          opacity: ${showPopup ? "1" : "0"};
          transition: opacity 0.5s ease-in-out;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default MainBanner;
