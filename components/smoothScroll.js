import { useState, useEffect, useRef } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    function handleResize() {
      setWindowSize(getSize());
      console.log(getSize());
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function useSmoothScroll(app, scrollContainer) {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  // const app = useRef();
  // const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.11,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    //Scrolling
    const skewScrolling = () => {
      //Set Current to the scroll position amount
      data.current = window.scrollY;
      // Set Previous to the scroll previous position
      data.previous += (data.current - data.previous) * data.ease;
      // Set rounded to
      data.rounded = Math.round(data.previous * 100) / 100;

      // Difference between
      const difference = data.current - data.rounded;
      const acceleration = size && difference / size.width;
      const velocity = +acceleration;
      const skew = velocity * 2;

      //Assign skew and smooth scrolling to the scroll container
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

      //loop vai raf
      requestAnimationFrame(() => skewScrolling());
    };
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    if (typeof window !== "undefined" || "null") {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  };
}

export default useSmoothScroll;
