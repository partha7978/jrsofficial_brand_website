import { Button, Input } from "../../../components";

const CourseMiniFormSection = () => {
  return (
    <section className="mini-form">
      <div className="mini-form-section">
        <div className="mini-form-section-image">
          <img
            src={
              "https://images.unsplash.com/photo-1742077414023-45a81fd63736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            }
            alt="featured podcast banner"
            loading="lazy"
            height={200}
            width={200}
          />
        </div>
        <div className="mini-form-section-content">
          <h2>Learn How to Get Anything You Want</h2>
          <span className="mini-form-section-content-subtext">
            Signup to get 50+ AI tools for free instantly on your email.
          </span>
          <span className="mini-form-section-content-additionalText">
            No credit card required
          </span>
          <form action="" className="mini-form-section-content-form">
            <div className="input-box">
              <Input
                name="name"
                type="text"
                placeholder="Name"
                className="input"
                background="#e4e4e4"
                color="#000000"
                required={true}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="input"
                background="#e4e4e4"
                color="#000000"
                required={true}
              />
            </div>
            <Button
              name="Get Started"
              backgroundColor="#141414"
              color="#ffffff"
              hoverBackgroundColor="#FFCA85"
              hoverColor="#141414"
              width="100%"
            />
          </form>
          <div className="mini-form-section-content-terms">
            <span>
              By entering your info, you’ll become a member with FREE access to
              exclusive insights, and inspiring episodes of The JRS Show,
              delivered with 💜 to your inbox. (Unsubscribe anytime in a click.)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseMiniFormSection;
