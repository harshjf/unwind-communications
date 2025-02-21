"use client";
import React, { useMemo } from "react";
import Image from "next/image";

const Blog = ({blog}) => {
   
  return (
    <section id="blog" className="blog-details-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div>
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
                  <span style={{ color: "#973d5d" }}>{blog.title}</span>
                </b>
              </h1>
            </div>

            <div className="blog-details-desc mt-5">
              <div className="article-content">
                {blog.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <ul className="wp-block-gallery columns-3">
                  {blog.images.map((img, idx) => (
                    <li key={idx} className="blocks-gallery-item">
                        <Image src={img} alt="image" width={500} height={830} className="blocks-gallery-item-image" />
                    </li>
                  ))}
                </ul>

                {blog.quote && (
                  <blockquote>
                    <p>{blog.quote.text}</p>
                    <cite>{blog.quote.author}</cite>
                  </blockquote>
                )}

                {blog.additionalContent.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}

                {blog.subSections.map((section, idx) => (
                  <div key={idx}>
                    <h3>{section.heading}</h3>
                    {section.features ? (
                      <ul className="features-list">
                        {section.features.map((feature, fIdx) => (
                          <li key={fIdx}>
                            <strong>{feature}</strong>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      section.content.map((text, cIdx) => <p key={cIdx}>{text}</p>)
                    )}
                  </div>
                ))}
              </div>

              {/* Uncomment and update the navigation links if needed
              <div className="kreton-post-navigation">
                {blog.prevPost && (
                  <div className="prev-link-wrapper">
                    <div className="info-prev-link-wrapper">
                      <Link href={blog.prevPost.link}>
                        <span className="image-prev">
                          <Image src={blog.prevPost.image} alt="prev-image" width={700} height={830} />
                          <span className="post-nav-title">Prev</span>
                        </span>
                        <span className="prev-link-info-wrapper">
                          <span className="prev-title">{blog.prevPost.title}</span>
                          <span className="meta-wrapper">
                            <span className="date-post">{blog.prevPost.date}</span>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                )}

                {blog.nextPost && (
                  <div className="next-link-wrapper">
                    <div className="info-next-link-wrapper">
                      <Link href={blog.nextPost.link}>
                        <span className="next-link-info-wrapper">
                          <span className="next-title">{blog.nextPost.title}</span>
                          <span className="meta-wrapper">
                            <span className="date-post">{blog.nextPost.date}</span>
                          </span>
                        </span>
                        <span className="image-next">
                          <Image src={blog.nextPost.image} alt="next-image" width={700} height={830} />
                          <span className="post-nav-title">Next</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Blog;
