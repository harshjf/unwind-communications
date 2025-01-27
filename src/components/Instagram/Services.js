"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesData } from "../../../lib/data.js";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      style={{ paddingBottom: "80px", paddingTop: "150px" }}
      className="services-container"
    >
      <div className="services-inner">
        <div className="services-title">
          <div className="title-section">
            <h1
              className="title"
              style={{
                fontSize: "36px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              <b>
                <span style={{ color: "#973d5d" }}>SERVICES</span> OFFERED
              </b>
            </h1>
          </div>
        </div>

        <div className="services-grid">
          <section className="services-one">
            <div className="row justify">
              {servicesData.map((service, index) => {
                const rowIndex = Math.floor(index / 2);
                const delay = rowIndex * 1000;
                const isSpecial = [1, 2, 5].includes(index);

                // Apply different colors for odd and even services in mobile view
                const serviceColor =
                  isMobile && index % 2 === 0 ? "#041d33" : "#973d5d"; // Odd services in mobile view get #973d5d

                return (
                  <div
                    key={service.id}
                    className={`col-xl-6 col-lg-6 col-md-6 col-sm-12 fade-in`}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={delay}
                  >
                    <div className="service-single">
                      <div className="service-count">{service.id}</div>
                      <h3
                        className={`service-title custom-border ${
                          isSpecial ? "special" : ""
                        }`}
                        style={{
                          backgroundColor: isMobile
                            ? index % 2 === 0
                              ? "#041d33"
                              : "#973d5d"
                            : "",
                          borderColor: isMobile
                            ? index % 2 === 0
                              ? "#041d33"
                              : "#973d5d"
                            : "",
                        }}
                      >
                        <b>{service.title}</b>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Services;
