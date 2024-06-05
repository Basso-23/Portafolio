import React, { useState, useEffect } from "react";
import Projects from "@/components/sections/Projects";
import Hero from "@/components/sections/Hero";

const Home = () => {
  return (
    <main className="tracking-[-0.01rem]">
      <Hero />
      <Projects />
    </main>
  );
};

export default Home;
