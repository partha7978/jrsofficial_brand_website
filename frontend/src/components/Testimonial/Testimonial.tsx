import "./Testimonial.scss";
import { TestimonialSchema } from "../../interfaces/interface";
import { urlFor } from "../../../client/client";

const Testimonial = ({ testimonial }: { testimonial: TestimonialSchema }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-img">
        <img
          src={urlFor(testimonial.image).url()}
          alt="Profile Image"
          height={400}
          width={200}
        />
      </div>
      <div className="testimonial-card-content">
        <h3 className="testimonial-card-content-title">{testimonial.title}</h3>
        <p className="testimonial-card-content-description">
        “{testimonial.description}”
        </p>
        <div className="testimonial-card-content-info">
          <p>{testimonial.name}</p>
          <span>{testimonial.occupation}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
