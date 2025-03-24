"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const navLinks = [
    { label: "Home", path: "/", active_link_path: "/" },
    { label: "About", path: "/about", active_link_path: "/about/" },
    {
      label: "Recognition",
      path: "/recognition",
      active_link_path: "/recognition/",
    },
    { label: "Offerings", path: "/offerings", active_link_path: "/offerings/" },
    { label: "Partners", path: "/partner", active_link_path: "/partner/" },
    { label: "Blogs", path: "/blogs", active_link_path: "/blogs/" },
    {
      label: "Contact Us",
      path: "/contact-us",
      active_link_path: "/contact-us/",
    },
  ];

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div>
            <Link
              href="/"
              className="navbar-brand"
              style={{ display: "flex", gap: "10px" }}
            >
              <Image
                src="/images/logounwind.png"
                alt="logo"
                width={100}
                height={25}
                style={{ objectFit: "contain", height: "80px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: "1.2",
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Garamond",
                }}
              >
                <span
                  className="brand-text shimmer"
                  style={{ color: "#973d5d", fontWeight: "900" }}
                >
                  UNWIND
                </span>
                <span
                  className="brand-text shimmer"
                  style={{ color: "#041D33", fontWeight: "900" }}
                >
                  COMMUNICATIONS
                </span>
                <div style={{ marginTop: "8px", fontSize: "20px" }}>
                  <span style={{ color: "#973d5d" }}>You Build</span>
                  <span style={{ color: "#041D33" }}> We Showcase</span>
                </div>
              </div>
            </Link>
          </div>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link
                    href={link.path}
                    onClick={toggleNavbar}
                    className={`nav-link ${
                      currentRoute === link.active_link_path ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
