"use client"; // Required for Next.js to use client-side rendering

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const clients = [
  {
    image: "/images/instagram/ClientImages/Client1.png",
    name: "Ministry of Tourism & Culture",
  },
  {
    image: "/images/instagram/ClientImages/Client2.png",
    name: "Ministry of External Affairs (MEA)",
  },
  {
    image: "/images/instagram/ClientImages/Client3.png",
    name: "Ministry of Health & Family Welfare (MoHFW)",
  },
  {
    image: "/images/instagram/ClientImages/Client4.png",
    name: "ZEE Media",
  },
  {
    image: "/images/instagram/ClientImages/Client5.png",
    name: "Dish TV",
  },
  {
    image: "/images/instagram/ClientImages/Client6.jpg",
    name: "IFFIE, Goa",
  },
  {
    image: "/images/instagram/ClientImages/Client7.png",
    name: "FICCI",
  },
  {
    image: "/images/instagram/ClientImages/Client8.png",
    name: "IIFA",
  },
  {
    image: "/images/instagram/ClientImages/Client9.png",
    name: "Economic Times (TOI)",
  },
  {
    image: "/images/instagram/ClientImages/Client10.jpg",
    name: "International Buddhist Confederation (IBC)",
  },
  {
    image: "/images/instagram/ClientImages/Client11.jpeg",
    name: "Defense Services of India (DSOI)",
  },
  {
    image: "/images/instagram/ClientImages/Client12.png",
    name: "Bentley",
  },
  {
    image: "/images/instagram/ClientImages/Client13.png",
    name: "Sun Pharma",
  },
  {
    image: "/images/instagram/ClientImages/Client14.webp",
    name: "Motherson Group",
  },
  {
    image: "/images/instagram/ClientImages/Client15.jpg",
    name: "Panasonic",
  },
  {
    image: "/images/instagram/ClientImages/Client16.png",
    name: "Coromandel Group",
  },
  {
    image: "/images/instagram/ClientImages/Client17.jpg",
    name: "Zydus Cadilla",
  },
  {
    image: "/images/instagram/ClientImages/Client18.png",
    name: "Abott Pharmaceuticals",
  },
  {
    image: "/images/instagram/ClientImages/Client19.png",
    name: "Zuventus",
  },
  {
    image: "/images/instagram/ClientImages/Client20.jpeg",
    name: "MacLeods",
  },
  {
    image: "/images/instagram/ClientImages/Client21.png",
    name: "Glenmark",
  },
  {
    image: "/images/instagram/ClientImages/Client22.png",
    name: "Alkem Pharmaceuticals",
  },
  {
    image: "/images/instagram/ClientImages/Client23.png",
    name: "Alembic Laboratories",
  },
  {
    image: "/images/instagram/ClientImages/Client24.png",
    name: "Herkey",
  },
  {
    image: "/images/instagram/ClientImages/Client25.png",
    name: "Nuvoco",
  },
  {
    image: "/images/instagram/ClientImages/Client26.webp",
    name: "G.D.Goenka",
  },
  {
    image: "/images/instagram/ClientImages/Client27.jpg",
    name: "IAA (International Adverising Association)",
  },
  {
    image: "/images/instagram/ClientImages/Client28.png",
    name: "MIDDAY",
  },
  {
    image: "/images/instagram/ClientImages/Client29.png",
    name: "The Hindustan Times",
  },
  {
    image: "/images/instagram/ClientImages/Client30.png",
    name: "Business World",
  },
  {
    image: "/images/instagram/ClientImages/Client32.jpg",
    name: "APICON",
  },
  {
    image: "/images/instagram/ClientImages/Client34.png",
    name: "ASICON",
  },
  {
    image: "/images/instagram/ClientImages/Client31.png",
    name: "ICPB",
  },
  {
    image: "/images/instagram/ClientImages/Client33.jpg",
    name: "NEUROCON",
  },
];

const ClientSwiper = () => {
  return (
    <div className="team-area text-center ptb-100">
      <h1 className="radio-client-title">
        <b>
          <span style={{ color: "#041d33" }}>OUR</span>{" "}
          <span style={{ color: "#973d5d" }}>CLIENTS</span>
        </b>
      </h1>

      <div className="swiper-container" style={{ marginTop: "50px" }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "100px" }}
        >
          {clients.map((client, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={client.image}
                alt={client.name}
                style={{
                  width: "80%",
                  height: "200px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "24px",
                  color: "#333",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {client.name}
              </p>
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
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          object-fit: contain;
          width: 200px;
          height: 100%;
        }
        @media (max-width: 600px) {
          .custom-slide {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientSwiper;
