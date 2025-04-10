import { HiOutlineArrowRight } from "react-icons/hi2";
import { Button } from "../../../components";
import { forwardRef } from "react";

const CourseMembershipSection = forwardRef<HTMLElement, { index: number }>(
  ({ index }, ref) => {
    return (
      <section className="course-membership" data-index={index} ref={ref}>
        <div className="course-membership-title">
          <h2>Our Membership</h2>
          <span>
            Join the community Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum error porro accusamus ipsam earum optio esse
            exercitationem placeat minima aliquam.
          </span>
        </div>
        <div className="course-membership-cards">
          <div className="card">
            <div className="card-title">
              <h3>Basic</h3>
            </div>
            <div className="card-price">
              <h3>
                <span>₹</span>19.99
              </h3>
            </div>
            <div className="card-chip">
              <span>Great to start</span>
            </div>
            <div className="card-description">
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <p key={index + 1}>
                    <HiOutlineArrowRight />
                    Unlimited recordings
                  </p>
                ))}
            </div>
            <div className="card-action">
              <Button
                name="Get Started"
                backgroundColor="rgb(255, 255, 255, 0.1)"
                color="#ffffff"
                hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
                hoverColor="#ffffff"
                backgroundBlur={42}
                width="100%"
              />
            </div>
          </div>
          <div className="card bestSeller">
            <div className="card-title">
              <h3>Pro</h3>
            </div>
            <div className="card-price">
              <h3>
                <span>₹</span>19.99
              </h3>
            </div>
            <div className="card-chip">
              <span>Best Seller</span>
            </div>
            <div className="card-description">
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <p key={index + 1}>
                    <HiOutlineArrowRight />
                    Unlimited recordings
                  </p>
                ))}
            </div>
            <div className="card-action">
              <Button
                name="Get Started"
                backgroundColor="rgb(255, 255, 255, 0.1)"
                color="#ffffff"
                hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
                hoverColor="#ffffff"
                backgroundBlur={42}
                width="100%"
              />
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h3>Pro Plus</h3>
            </div>
            <div className="card-price">
              <h3>
                <span>₹</span>19.99
              </h3>
            </div>
            <div className="card-chip">
              <span>Ultimate value</span>
            </div>
            <div className="card-description">
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <p key={index + 1}>
                    <HiOutlineArrowRight />
                    Unlimited recordings
                  </p>
                ))}
            </div>
            <div className="card-action">
              <Button
                name="Get Started"
                backgroundColor="rgb(255, 255, 255, 0.1)"
                color="#ffffff"
                hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
                hoverColor="#ffffff"
                backgroundBlur={42}
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default CourseMembershipSection;
