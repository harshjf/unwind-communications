"use client";

import React from "react";
import { servicesData } from "../../../lib/data.js";

const Services = () => {
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
              }}
            >
              Services we offer
            </h2>
          </div>
        </div>

        <div className="services-grid">
          <section className="services-one">
            <div className="row justify">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className={`col-xl-6 col-lg-6 col-md-6 col-sm-12 fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="service-single">
                    <div className="service-count">{service.id}</div>
                    <h3 className="service-title" style={{ color: "#973d5d" }}>
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Services;
