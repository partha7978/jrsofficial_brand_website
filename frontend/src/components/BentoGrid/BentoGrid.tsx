import { urlFor } from "../../../client/client";
import "./BentoGrid.scss";

const BentoGrid = ({ highlights }: any) => {
  return (
    <div className="bento-grid">
      {!highlights && <h1>We cant load this right now. Try again later</h1>}
      {highlights && highlights.length > 0 && (
        <>
          {/* First Row */}
          <div className="grid-item small">
            <img
              loading="lazy"
              src={urlFor(highlights[0]?.image).url()}
              alt="JRS Old Image"
            />
          </div>
          <div className="grid-item large">
            <h2>{highlights[0]?.title}</h2>
            <span>{highlights[0]?.text}</span>
          </div>

          {/* Second Row */}
          <div className="grid-item large">
            <h2>{highlights[1]?.title}</h2>
            <span>{highlights[1]?.text}</span>
          </div>
          <div className="grid-item small">
            <img
              loading="lazy"
              src={urlFor(highlights[1]?.image).url()}
              alt="JRS New Image"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BentoGrid;
