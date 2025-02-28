import "./Episodes.scss";
import { CgProfile } from "react-icons/cg";
import { MdAccessTime } from "react-icons/md";
import useFetchData from "../../hooks/useFetchData";
import { useState, useEffect } from "react";
import { EpisodesArraySchemaForSlider } from "../../interfaces/interface";
import { urlFor } from "../../../client/client";
import Loader from "../../components/Loader/Loader";

const Episodes = () => {
  const {
    data,
    error,
    loading,
  }: { data: EpisodesArraySchemaForSlider[] | null; loading: boolean } =
    useFetchData(
      "episodes",
      "title, speakerName, episodeMainImage, episodeDate, category, shortDescription",
      undefined,
      "episodeDate desc"
    );
  const [episodeCards, setEpisodeCards] = useState<any[]>([]);
  const [topEpisodeCards, setTopEpisodeCards] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setTopEpisodeCards(data.slice(0, 2));
      setEpisodeCards(data);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {data && (
        <div className="episodesPage">
          <section className="episodesPage-top">
            <div className="episodesPage-top-title">
              <h1>Listen Featured Episodes</h1>
              <span>
                Explore vibrant soundscapes where stories of every kind come
                alive, taking you on an immersive journey and through
                captivating narratives.
              </span>
            </div>
            <div className="episodesPage-featureCards">
              {topEpisodeCards &&
                topEpisodeCards.map((card, index) => (
                  <div className="episodePage-card" key={card._id + card.title}>
                    <div className="episodePage-card-image">
                      {card.episodeMainImage && (
                        <img
                          loading="lazy"
                          src={urlFor(card.episodeMainImage).url()}
                          alt="Episode Image"
                        />
                      )}
                      <div className="episode-card-category">
                        {card.category}
                      </div>
                    </div>
                    <div className="episodePage-card-details">
                      <div>
                        <CgProfile />
                        <span>{card.speakerName}</span>
                      </div>
                      <div>
                        <MdAccessTime />
                        <span>
                          {new Date(card.episodeDate)
                            .toLocaleDateString("en-US", {
                              month: "2-digit",
                              year: "numeric",
                            })
                            .replace("/", "/")}
                        </span>
                      </div>
                    </div>
                    <div className="episodePage-card-title">
                      <h3>{card.title}</h3>
                    </div>
                    {/* <div className="episodePage-card-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  quidem, fugiat autem natus quod quia.
                </p>
              </div> */}
                  </div>
                ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Episodes;
