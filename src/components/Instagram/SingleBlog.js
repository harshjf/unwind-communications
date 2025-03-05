"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog }) => {
  return (
    <>
      {/*  <div className="page-banner-area bg-one">
        <div className="back-home"></div>
      </div> */}

      <section id="blog" className="ptb-100" style={{ paddingTop: "180px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="blog-details-header">
                <h3>{blog.subtitle}</h3>

                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="bx bx-folder"></i>
                      <span>Category:</span>
                      <Link href={blog.meta.category.link}>
                        {blog.meta.category.name}
                      </Link>
                    </li>
                    <li>
                      <i className="bx bxs-user-detail"></i>
                      <span>Posted By:</span>
                      <Link href={blog.meta.author.link}>
                        {blog.meta.author.name}
                      </Link>
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Posted On:</span>
                      <Link href={blog.meta.date.link}>
                        {blog.meta.date.value}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="blog-details-desc">
                <div className="article-content">
                  {blog.content.map((section, index) => {
                    switch (section.type) {
                      case "paragraph":
                        return <p key={index}>{section.text}</p>;

                      /* case "gallery":
                        return (
                          <ul
                            key={index}
                            className="wp-block-gallery columns-3"
                          >
                            {section.images.map((image, i) => (
                              <li key={i} className="blocks-gallery-item">
                                <figure>
                                  <Image
                                    src={image}
                                    alt={`image-${i}`}
                                    width={700}
                                    height={830}
                                  />
                                </figure>
                              </li>
                            ))}
                          </ul>
                        ); */

                      case "quote":
                        return (
                          <blockquote key={index}>
                            <p>{section.text}</p>
                            <cite>{section.author}</cite>
                          </blockquote>
                        );

                      case "heading":
                        return <h3 key={index}>{section.text}</h3>;

                      case "list":
                        return (
                          <ul key={index} className="features-list">
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <strong>{item.strong}</strong> {item.text}
                              </li>
                            ))}
                          </ul>
                        );

                      default:
                        return null;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
