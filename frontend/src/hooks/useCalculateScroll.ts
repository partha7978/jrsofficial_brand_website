import { useEffect, useState } from "react";

const useCalculateScrollAndWidth = () => {
  const [scrollYNumber, setScrollYNumber] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollYNumber(window.scrollY));
    };

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { scrollYNumber, innerWidth };
};

export default useCalculateScrollAndWidth;
