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

const MainBanner = () => {
  const swiperRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      let newDelay = currentIndex === 0 ? 8500 : 4500;
      swiperRef.current.params.autoplay.delay = newDelay;
      swiperRef.current.autoplay.start();
    }
  }, [currentIndex]);

  return (
    <>
      <div className="homepage-slider-container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          autoplay={{
            delay: 8500,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="homepage-slider">
                <div className="homepage-slider-overlay"></div>
                <div className="homepage-image-container">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    className="homepage-slider-image"
                  />
                </div>
                <div className="homepage-slider-content shimmer1">
                  <p
                    className="homepage-slider-description"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  ></p>
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
          <Image
            src={sliderArrow}
            alt="Next"
            className="homepage-slider-arrow"
          />
        </button>
      </div>
    </>
  );
};

export default MainBanner;
