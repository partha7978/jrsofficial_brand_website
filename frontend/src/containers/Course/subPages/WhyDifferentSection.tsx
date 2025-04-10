import React, { forwardRef } from "react";

const WhyDifferentSection = forwardRef<HTMLElement, { index: number }>(
  ({ index }, ref) => {
    return (
      <section
        className="course-why-different-section"
        data-index={index}
        ref={ref}
      >
        <div className="course-why-different-section-title">
          <h2>Why Parivartan is different</h2>
        </div>
        <div className="course-why-different-section-desc">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            necessitatibus aut quae consequatur eligendi eius nam repellendus
            nihil fugit quisquam modi est facilis non in alias. Ut odit,
            expedita ipsam doloribus esse incidunt cupiditate aliquid ipsum
            commodi, illum est, sed voluptas voluptatem officiis! Ipsa, eius
            asperiores. Beatae facere distinctio asperiores aspernatur ullam
            optio sapiente veniam? Adipisci voluptates officiis ex illum impedit
            fugit unde iure dolores ducimus facere quasi, temporibus optio.
          </span>
        </div>
      </section>
    );
  }
);

export default WhyDifferentSection;
