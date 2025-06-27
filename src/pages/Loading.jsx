import { useGSAP } from "@gsap/react";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = ({ timeline }) => {
  // Function StartLoader

  const counterRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const updateCounter = () => {
      if (!isMounted || currentValue === 100) return;

      let nextValue = currentValue + Math.floor(Math.random() * 10) + 1;
      if (nextValue > 100) nextValue = 100;

      setCurrentValue(nextValue);

      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    };

    const delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);

    // Cleanup to avoid memory leaks
    return () => {
      isMounted = false;
    };
  }, [currentValue]);

  // Gsap Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 2.5,
      onComplete: () => {
        const container = document.querySelector(".bar-container");
        if (container) container.style.display = "none";

        if (counterRef.current) counterRef.current.style.display = "none";
      },
    });
    tl.to(counterRef.current, {
      duration: 0.5,
      overflow: "hidden",
    });
    tl.to(".bar", {
      duration: 1.5,
      y: "100vh",
    });

    // Add masterTl
    timeline.add(tl);
  });

  return (
    <div>
      <h1
        ref={counterRef}
        className="md:text-8xl md:py-8 md:px-12 py-12 px-12 text-6xl fixed w-full h-full flex justify-end items-end font-extrabold z-50 text-[var(--primary-color)] text-right"
      >
        {currentValue}
      </h1>

      <div className="flex h-screen w-full fixed z-40 bar-container">
        <div className="h-screen w-[100vw] bg-[var(--text-color-primary)] bar"></div>
      </div>
    </div>
  );
};

export default Loading;

// Luckiest Guy
