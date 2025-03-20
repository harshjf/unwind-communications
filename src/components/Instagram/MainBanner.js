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

const MainBanner = ({ setBannerLoaded }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalSlides = sliderData.length;

  // Preload images manually before displaying the slider
  useEffect(() => {
    if (typeof window !== "undefined") {
      let loadedImages = 0;

      sliderData.forEach((slide) => {
        const img = new window.Image();
        img.src = slide.image;
        img.onload = () => {
          loadedImages += 1;
          setImagesLoaded((prev) => prev + 1);
        };
        img.onerror = () => {
          console.error(`Error loading image: ${slide.image}`);
          loadedImages += 1;
          setImagesLoaded((prev) => prev + 1);
        };
      });
    }
  }, []);

  // Mark the banner as loaded when all images are ready
  useEffect(() => {
    if (imagesLoaded === totalSlides) {
      setBannerLoaded(true);
    }
  }, [imagesLoaded, totalSlides, setBannerLoaded]);

  // Force slide transition after the delay (so GIF doesn't loop forever)
  useEffect(() => {
    if (swiperRef.current) {
      let delay = currentIndex === 0 ? 8500 : 4500; // First slide: 8.5s, Others: 4.5s

      const timer = setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.slideNext(); // Force move to next slide
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div
      className="homepage-slider-container"
      style={{ display: imagesLoaded === totalSlides ? "block" : "none" }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 8500, // Keep default delay, but we manually trigger changes
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
        }}
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
        }}
      >
        <Image src={sliderArrow} alt="Next" className="homepage-slider-arrow" />
      </button>
    </div>
  );
};

export default MainBanner;
