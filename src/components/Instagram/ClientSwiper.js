"use client"; // Required for Next.js to use client-side rendering

import React from "react";
import SliderImage1 from "/public/images/instagram/dummylogo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import Image from "next/image";

const ClientSwiper = () => {
  const ImageUrls = [
    "/images/instagram/ClientImages/Client1.png",

    "/images/instagram/ClientImages/Client4.png",
    "/images/instagram/ClientImages/Client5.png",
    "/images/instagram/ClientImages/Client6.webp",
    "/images/instagram/ClientImages/Client7.png",
    "/images/instagram/ClientImages/Client8.png",
    "/images/instagram/ClientImages/Client9.png",
    "/images/instagram/ClientImages/Client2.png",
    "/images/instagram/ClientImages/Client10.jpg",
    "/images/instagram/ClientImages/Client11.jpeg",
    "/images/instagram/ClientImages/Client12.png",
    "/images/instagram/ClientImages/Client13.png",
    "/images/instagram/ClientImages/Client14.webp",
    "/images/instagram/ClientImages/Client15.jpg",
    "/images/instagram/ClientImages/Client3.png",
    "/images/instagram/ClientImages/Client16.png",
    "/images/instagram/ClientImages/Client17.jpg",
    "/images/instagram/ClientImages/Client18.png",
    "/images/instagram/ClientImages/Client19.png",
    "/images/instagram/ClientImages/Client20.jpeg",
    "/images/instagram/ClientImages/Client21.png",
    "/images/instagram/ClientImages/Client22.png",
    "/images/instagram/ClientImages/Client23.png",
    "/images/instagram/ClientImages/Client24.png",
    "/images/instagram/ClientImages/Client25.png",
    "/images/instagram/ClientImages/Client26.webp",
    "/images/instagram/ClientImages/Client27.jpg",
    "/images/instagram/ClientImages/Client28.png",
    "/images/instagram/ClientImages/Client29.png",
    "/images/instagram/ClientImages/Client30.png",
    "/images/instagram/ClientImages/Client31.png",
    "/images/instagram/ClientImages/Client32.png",
    "/images/instagram/ClientImages/Client33.jpg",
  ];

  return (
    <div className="team-area text-center ptb-100 bg-f9f6f6">
      <h1 className="radio-client-title">
        <b>
          <span style={{ color: "#041d33" }}>OUR</span>{" "}
          <span style={{ color: "#973d5d" }}>CLIENT</span>
        </b>
      </h1>

      <div className="swiper-container">
        <Swiper
          modules={[Pagination, Autoplay, FreeMode]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            // When the window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          className="team-slider"
        >
          {ImageUrls.map((logo, idx) => (
            <SwiperSlide key={idx} className="custom-slide">
              <div className="image-container">
                <Image
                  src={logo}
                  alt={`Slide:${idx + 1}`}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-container {
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
        }

        .custom-slide {
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          width: 200px; /* Ensure the width of the container matches the Image width */
          height: 200px; /* Match the height specified for the Image */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          object-fit: contain; /* Ensure the image scales properly within the container */
          width: 100%; /* Allow the image to scale within the container width */
          height: 50%; /* Allow the image to scale within the container height */
        }
        @media (max-width: 600px) {
          .custom-slide {
            height: 300px; /* Specific height for screen widths below 600px */
          }
        }
      `}</style>
    </div>
  );
};

export default ClientSwiper;
