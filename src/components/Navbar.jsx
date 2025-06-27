import { RiDownloadLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="lg:max-w-[1200px] md:max-w-[600px] mx-auto flex justify-between md:py-4 p-4">
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
    </nav>
  );
};

export default Navbar;
