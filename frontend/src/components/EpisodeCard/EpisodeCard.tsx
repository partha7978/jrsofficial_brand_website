import { urlFor } from "../../../client/client";
import "./EpisodeCard.scss";

interface Props {
  title: string;
  speakerName: string;
  episodeImage: string;
  episodeAudio?: string;
  episodeDate: string;
  category: string;
  cardSize: "small" | "medium" | "large";
}

const EpisodeCard = ({
  title,
  speakerName,
  episodeImage,
  episodeAudio,
  cardSize,
  category,
  episodeDate,
}: Props) => {
  return (
    <div className={`episode-card ${cardSize}`}>
      {episodeImage ? (
        <img
          className="episode-card-image"
          src={urlFor(episodeImage).url()}
          alt={title}
          loading="lazy"
          height={cardSize === "small" ? 100 : cardSize === "medium" ? 200 : 300}
        />
      ) : (
        <div className="episode-card-image placeholder-card-image">NULL</div>
      )}
      <div className="episode-card-chip">
        <div>{category}</div>
      </div>
      <div className="episode-card-info">
        <h3>{title}</h3>
        <p>{speakerName}</p>
        <p>{episodeDate}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
