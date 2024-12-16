"use client";
import React, { useState } from "react";
import Link from "next/link";
import { testimonials } from "../../lib/data.js";

const TestimonialList = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setFormData({
          name: "",
          email: "",
          mobile_no: "",
          subject: "",
          message: "",
        });
        setResponseMessage("Your message has been sent successfully!");
      } else {
        setResponseMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="testimonial-list">
      {/* Cards Section */}
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <Link href={`/testimonials/${testimonial.name}`} key={testimonial.id}>
            <div className="testimonial-card">
              <div className="testimonial-card-image">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="testimonial-image"
                />
              </div>

              <div className="testimonial-card-content">
                <h3 className="testimonial-title">{testimonial.title}</h3>
                <p className="testimonial-description">
                  {testimonial.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Contact Us Form Section */}
      <div className="contact-form-container">
        {/* Circular Decoration */}
        <div className="circle-decoration circle-top"></div>
        <div className="circle-decoration circle-bottom"></div>

        {/* Form Content */}
        <h2 className="contact-form-title">Get in touch with us</h2>

        <form
          id="contact_form"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          {/* Input Fields */}
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          <input
            name="mobile_no"
            type="text"
            placeholder="Enter your phone number"
            value={formData.mobile_no}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialList;
