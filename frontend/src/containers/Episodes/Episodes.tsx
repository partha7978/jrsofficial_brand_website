import { useEffect, useState } from "react";
import { EpisodeCard } from "../../components";
import "./Episodes.scss";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";

interface EpisodesArraySchema {
  title: string;
  speakerName: string;
  episodeImage: any;
  episodeDate: string;
  category: string;
}

const Episodes = () => {
  // const query = `*[_type == "episodes"]{title,speakerName, episodedImage}`;
  const { data, loading } : { data: EpisodesArraySchema[] | null; loading: boolean } = useFetchData(
    "episodes",
    "title, speakerName, episodeImage, episodeDate, category"
  );
  const [showLatestResult, setShowLatestResult] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setShowLatestResult(
        data.length > 3
          ? data
              .sort((a, b) => new Date(b.episodeDate) - new Date(a.episodeDate))
              .slice(0, 3)
          : data
      );
    }
    console.log(showLatestResult);
  }, [data]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="episodes">
          <div className="episodes-title-section">
            <h2>
              Our Most Recent <br /> Episodes
            </h2>
            <div className="episodes-title-section-action-btn">
              <button>View All</button>
            </div>
          </div>
          <div className="episodes-main__container">
            {showLatestResult &&
              showLatestResult.map(
                (episode: EpisodesArraySchema, index: number) => (
                  <EpisodeCard
                    key={episode.title + index}
                    title={episode.title}
                    speakerName={episode.speakerName}
                    episodeImage={episode.episodeImage}
                    episodeDate={episode.episodeDate}
                    category={episode.category}
                    cardSize="small"
                  />
                )
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default Episodes;
