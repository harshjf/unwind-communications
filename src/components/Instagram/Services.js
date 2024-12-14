"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { service } from "../../../lib/data.js";

const Services = () => {
  console.log("Services", service);
  return (
    <>
      <section id="services" className="social-statistics-area pt-100">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2 style={{ color: "#041d33" }}>Services We Offer</h2>
          </div>

          <div className="row justify-content-center">
            {service.map((item, index) => (
              <div
                className="col-lg-4 col-sm-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-once="true"
                key={index}
              >
                <div
                  className="single-social-statistics-box"
                  style={{
                    height: "600px",
                  }}
                >
                  <h4 style={{ color: "#973d5d" }}>{item.title}</h4>

                  <div className="line"></div>
                  <Image
                    src={item.image}
                    alt="image"
                    width={268}
                    height={200}
                    style={{ height: "220px", width: "320px" }}
                  />
                  <p style={{ marginTop: "16px" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shape1">
          <Image
            src="/images/instagram/insta-shape1.png"
            alt="image"
            width={397}
            height={397}
            style={{
              top: "-120px",
              position: "relative",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Services;
