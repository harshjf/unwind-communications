"use client";

import React from "react";
import ModalForm from "../Common/Modal/ModalForm";

const ContactArea = () => {
  return (
    <>
      <section id="contact" className="subscribe-area pt-100 jarallax">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="subscribe-content">
                <h2>Let Us Collaborate</h2>
                {/*  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p> */}

                <div className="btn-box">
                  {/* ModalForm */}
                  <ModalForm />

                  <a
                    href="mailto:info@unwindcommunications.com"
                    className="email"
                  >
                    info@unwindcommunications.com
                  </a>
                </div>

                <div className="col-lg-6 col-md-6">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/shefalisaxenaofficial/#"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/shefalisaxena"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/shefalisaxenaofficial/"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/shefalisaxenaofficial"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="subscribe-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>

                  <button type="submit">Collaborate Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
