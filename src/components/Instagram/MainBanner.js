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
// import { motion } from "framer-motion";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
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
    <>
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
                <div className="homepage-image-container">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    className="homepage-slider-image"
                    /*  style={{ backgroundColor: `${slide.backgroundcolor}` }} */
                  />
                </div>
                {/* <p className="homepage-slider-description">
                    {slide.description}
                  </p> */}
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

        {/* {currentIndex === 0 && showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "80%" }}
          animate={{ opacity: 1, scale: 1.75, x: "-50%", y: "80%" }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 20,
            delay: 1,
          }}
          style={{
            position: "absolute",
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Garamond, serif",
            textAlign: "center",
            maxWidth: "40%",
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
            padding: "15px 20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          className="responsive-text"
        >
          Bharat Darshan at Global Level with Unwind Communications.
        </motion.div>
      )} */}
      </div>
    </>
  );
};

export default MainBanner;
