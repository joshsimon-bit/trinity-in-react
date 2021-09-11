import React, { useState } from "react";
import NavBar from "../navbar";
import SideBar from "../sidebar";
import Hero from "../HeroSection/index";
import InfoSection from "../infoSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <InfoSection />
    </>
  );
};

export default Home;
