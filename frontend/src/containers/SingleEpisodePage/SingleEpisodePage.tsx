import { useParams } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loader";
import { urlFor } from "../../../client/client";
import { PortableText } from "@portabletext/react";
import { GoDotFill } from "react-icons/go";
import "./SingleEpisodePage.scss";
import "./TextFormatting.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { MdOutlineAccessTime } from "react-icons/md";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { MusicPlayer } from "../../components";

const components = {
  block: {
    h1: ({ children }) => <h1 className="text-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="text-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-h4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-h5">{children}</h5>,
    h6: ({ children }) => <h6 className="text-h6">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="blockquote">{children}</blockquote>
    ),
    p: ({ children }) => <p className="p-text">{children}</p>,
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="li" style={{ listStyleType: "none" }}>
        <GoDotFill />
        {children}
      </li>
    ),
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },

  marks: {
    // ✅ Use `marks` for inline elements
    p: ({ children }) => <p className="p-text">{children}</p>,
    strong: ({ children }) => <strong className="strong">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => <code className="">{children}</code>,
    span: ({ children }) => <span className="span-text">{children}</span>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          className="link"
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

const SingleEpisodePage = () => {
  const { epId } = useParams();
  const { data, loading, error } = useFetchData(
    "episodes",
    undefined, // Explicitly skip `parameter`
    `title == "${epId?.split("_").join(" ")}"` // Use as `singleItemFetchQuery`
  );

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {loading && <Loader />}
      {data && (
        <>
          <div className="singleEpisode-background"></div>
          <section className="singleEpisode">
            <div className="singleEpisode-title">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                {data.title}
              </motion.h1>
            </div>
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="singleEpisode-author-section"
            >
              <div className="singleEpisode-author-section-name">
                <FaRegUserCircle />
                <span>{data?.speakerName}</span>
              </div>

              <div className="date-and-time-section">
                <div className="singleEpisode-author-section-date">
                  <MdOutlineDateRange />
                  <span>
                    {new Date(data?.episodeDate)
                      .toLocaleDateString("en-US", {
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace("/", "/")}
                  </span>
                </div>
                <div className="singleEpisode-author-section-time">
                  <MdOutlineAccessTime />
                  <span>09:23</span>
                </div>
              </div>
            </motion.section>
            {data.relatedTags && (
              <div className="singleEpisode-chip">
                {data.relatedTags.map((tag: Array<string>, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "backInOut",
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    key={tag}
                    className="singleEpisode-chip-item"
                  >
                    <ImPriceTags />
                    <span>{tag}</span>
                  </motion.div>
                ))}
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="singleEpisode-thumbnail-img"
            >
              {data?.episodeMainImage && (
                <img
                  src={urlFor(data?.episodeMainImage).url()}
                  alt={data?.speakerName}
                  loading="lazy"
                />
              )}
            </motion.div>
            <section className="singleEpisode-music-player">
              <MusicPlayer
                showRedirectBtn={true}
                backgroundColor="linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)"
                color="#ffffff"
                redirectionBgColor="#ffffff"
                redirectionColor="#000000"
                size="large"
                audioUrl={data?.title}
              />
            </section>
            <section className="singleEpisode-desc">
              <h2 className="singleEpisode-desc-title">Episode Overview</h2>
              <PortableText value={data?.content} components={components} />
            </section>
          </section>
        </>
      )}
    </>
  );
};
const SingleEpisodeWithFooter = Footer(SingleEpisodePage);

export default SingleEpisodeWithFooter;
