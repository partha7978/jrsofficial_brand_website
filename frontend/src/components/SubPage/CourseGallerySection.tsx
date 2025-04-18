import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";
import { motion } from "framer-motion";

const CourseGallerySection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "imageGallery");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.imageGallery);
    }
  }, [data]);

  return (
    <div className="photos">
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          {mainData?.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className={`photo-item ${index % 2 === 0 ? "big" : "small"}`}
              key={item}
            >
              <img
                src={urlFor(item.imageGalleryImage).url()}
                alt="Gallery Image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
};

export default CourseGallerySection;
