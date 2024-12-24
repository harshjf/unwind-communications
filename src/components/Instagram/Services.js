"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesData } from "../../../lib/data.js";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="services-container">
      <div className="services-inner">
        <div className="services-title">
          <div className="title-section">
            <h2
              className="title"
              style={{
                fontSize: "36px",
                fontWeight: "700",
                textAlign: "center",
                // color: "#973d5d",
              }}
            >
              Services we offer
            </h2>
          </div>
        </div>

        <div className="services-grid">
          <section className="services-one">
            <div className="row justify">
              {servicesData.map((service, index) => {
                const rowIndex = Math.floor(index / 2);
                const delay = rowIndex * 1000;

                // Conditionally apply the 'special' class to the 1st, 4th, and 5th items
                const isSpecial = [1, 2, 5].includes(index); // 0th, 3rd, 4th (1st, 4th, 5th items)
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
                      >
                        {service.title}
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
