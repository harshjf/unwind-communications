"use client";

import React, { useState } from "react";
import ModalForm from "../Common/Modal/ModalForm";

const ContactArea = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on change
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstName.trim())
      tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.number.trim()) {
      tempErrors.number = "Phone number is required";
    } else if (!/^\d+$/.test(formData.number)) {
      tempErrors.number = "Phone number should contain only digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Email sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", number: "" });
      } else {
        setMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="subscribe-area pt-100 jarallax">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="subscribe-content">
                <h2>Let Us Collaborate</h2>

                <div className="btn-box">
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
                        href="http://www.instagram.com/shefalisaxenaofficial"
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
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="error-text">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p className="error-text">{errors.lastName}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="number"
                      placeholder="Phone Number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                    {errors.number && (
                      <p className="error-text">{errors.number}</p>
                    )}
                  </div>

                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Collaborate Now"}
                  </button>

                  {message && <p className="status-message">{message}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .error-text {
          color: red;
          font-size: 16px;
          margin-top: 5px;
        }
        .status-message {
          margin-top: 10px;
          font-size: 16px;
          color: ${message.includes("success") ? "green" : "red"};
        }
      `}</style>
    </>
  );
};

export default ContactArea;
