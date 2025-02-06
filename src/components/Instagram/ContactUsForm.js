"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert(result.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending the message, please try again.");
    }
  };

  return (
    <>
      <div className="section_4">
        <div className="container max1500">
          <div className="contact_alpha">
            <div className="contact_in">
              <div className="contact_left">
                <div className="left_in">
                  <div
                    className="m-0 p-0 text-6xl text-white font-light pb-3.5 mb-8"
                    style={{
                      fontWeight: "800",
                      fontSize: "3rem",
                      paddingBottom: "40px !important",
                    }}
                  >
                    Get in Touch
                  </div>
                  <p className="font-normal">
                    If you’ve got questions or ideas you would like to share,
                    send a message.
                  </p>
                </div>
              </div>
              <div className="contact_right">
                <form
                  className="contact_form"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <div
                    className="success"
                    data-success="Your message has been received, we will contact you soon."
                  ></div>

                  <div className="items">
                    <div className="item">
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="item">
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="item">
                      <textarea
                        id="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="item">
                      <button
                        type="submit"
                        class="inline-block h-12 leading-[50px] px-5 bg-black text-white rounded-sm no-underline hover:bg-theme-cyan"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
