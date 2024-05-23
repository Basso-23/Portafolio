import React from "react";
import AuroraBackground from "../../ui/aurora-background";
import Hero from "./Hero";

export function HeroBackground() {
  return (
    <>
      {/*//*________________________________________________________________________________*/}
      <section className="sm:block hidden">
        <AuroraBackground>
          <div className="z-30 pt-[15px]">
            <Hero />
          </div>
        </AuroraBackground>
      </section>

      {/*//*________________________________________________________________________________*/}
      <section className="sm:hidden block pt-[0px]">
        <Hero />
      </section>
    </>
  );
}