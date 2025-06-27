import { FaCode } from "react-icons/fa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const Hero = ({ timeline }) => {
  const frontendRef = useRef(null);
  const devRef = useRef(null);
  const iconRef = useRef(null);
  const imgRef = useRef(null);
  const parRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const textOne = new SplitText(frontendRef.current, { type: "chars" });
    const textTwo = new SplitText(devRef.current, { type: "chars" });

    gsap.defaults({
      duration: 1,
      // opacity: 0,
      ease: "power1.inOut",
      stagger: { each: 0.2 },
    });

    tl.fromTo(
      textOne.chars,
      {
        y: -50,
        visibility: "hidden",
      },
      {
        y: 0,
        visibility: "visible",
      }
    );

    tl.fromTo(
      textTwo.chars,
      {
        y: 50,
        visibility: "hidden",
      },
      {
        y: 0,
        visibility: "visible",
      },
      "<"
    );

    tl.fromTo(
      iconRef.current,
      {
        x: 35,
        visibility: "hidden",
      },
      {
        x: 0,
        visibility: "visible",
      },
      "-=1.5"
    );

    tl.from(
      imgRef.current,
      {
        clipPath: "inset(0% 0% 100% 0%)",
        opacity: 0,
        duration: 1,
      },
      "-=2"
    );

    tl.from(
      parRef.current,
      {
        x: 50,
        opacity: 0,
      },
      "-=2"
    );

    // Add masterTl
    timeline.add(tl, "-=0.5");
  });

  return (
    <section className="lg:max-w-[1200px] md:max-w-[600px] mx-auto pt-8">
      {/* Text */}
      <div className="flex flex-col lg:leading-44 md:leading-20 leading-20 p-4 md:p-0">
        <div className="flex items-center justify-end gap-4">
          <FaCode
            ref={iconRef}
            className="md:text-8xl text-4xl text-[var(--text-color-primary)]"
          />
          <h1
            ref={frontendRef}
            className="text-right md:text-[10vw] text-[18vw] font-extrabold  md:gap-12 gap-4 text-[var(--text-color-primary)]"
          >
            Frontend
          </h1>
        </div>
        <h1
          ref={devRef}
          className="text-left text-[var(--text-color-primary)] md:text-[10vw] text-[18vw] font-extrabold gap-12"
        >
          Developer
        </h1>
      </div>
      {/* About */}
      <div className="flex items-center justify-center gap-8 mt-20 flex-col md:flex-row">
        <div>
          <img
            ref={imgRef}
            src="./assets/man.jpg"
            alt="About Me"
            className="min-w-[200px] max-w-[300px] h-[250px] md:h-[320px] object-cover"
          />
        </div>
        <p
          ref={parRef}
          className="min-w-[150px] max-w-[400px] md:text-xl font-semibold text-[var(--text-color-secondary)] px-4 md:px-0"
        >
          Hi, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          excepturi, iste fugit enim nisi officiis commodi officia sunt
          dignissimos.
        </p>
      </div>
    </section>
  );
};

export default Hero;
2;
