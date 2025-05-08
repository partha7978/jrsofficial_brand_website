import { useEffect, useState } from "react";

const useCalculateScrollAndWidth = () => {
  const [scrollYNumber, setScrollYNumber] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const throttle = (func: any, delay: number = 350) => {
    let waitingArgs: any = null;
    let shouldWait = false;

    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        func(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };
    return (...args: any) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }
      func(...args);
      shouldWait = true;

      setTimeout(timeoutFunc, delay);
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollYNumber(window.scrollY));
    };

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("scroll", throttle(handleScroll), {
      passive: true,
    });
    window.addEventListener("resize", throttle(handleResize));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { scrollYNumber, innerWidth };
};

export default useCalculateScrollAndWidth;
