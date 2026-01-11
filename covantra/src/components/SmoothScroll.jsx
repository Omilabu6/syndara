import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      smoothMobile: true
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
