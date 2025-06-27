import Loading from "./pages/Loading";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const masterTl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    masterTl.current.play();
  }, []);

  return (
    <>
      <Loading timeline={masterTl.current} />
      <Navbar timeline={masterTl.current} />
      <Hero timeline={masterTl.current} />
    </>
  );
}

export default App;
