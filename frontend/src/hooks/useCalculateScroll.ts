import { useEffect, useState } from "react";
const useCalculateScroll = () => {
  const [scrollYNumber, setScrollYNumber] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYNumber(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { scrollYNumber };
};

export default useCalculateScroll;
