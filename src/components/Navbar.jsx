import { RiDownloadLine } from "react-icons/ri";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = ({ timeline }) => {
  const navbarRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
    });

    timeline.add(tl, "-=1.1");
  }, []);

  return (
    <nav ref={navbarRef} className=" bg-[var(--primary-color)] z-30 relative">
      <div className="lg:max-w-[1200px] md:max-w-[600px] mx-auto flex justify-between md:py-4 p-4">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-semibold text-[var(--text-color-primary)]">
            AZEDDINE BEDAR
          </h1>
        </div>
        {/* Download CV Button */}
        <div className="flex items-start space-x-2">
          <a
            href="#"
            className="flex items-center text-sm text-[var(--text-color-primary)]"
          >
            Download CV
            <RiDownloadLine className="ml-1" />
          </a>
        </div>
        {/* Navigation Links */}
        <ul>
          <li>
            <a
              href="#home"
              className="cursor-pointer text-sm text-[var(--text-color-primary)]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="cursor-pointer text-sm text-[var(--text-color-primary)]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer text-sm text-[var(--text-color-primary)]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
