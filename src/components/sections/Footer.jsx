import React, { useState, useEffect } from "react";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";
import Send from "@/icons/Send";
import Visit from "@/icons/Visit";
import Acernity from "@/icons/technology/Acernity";
import Astro from "@/icons/technology/Astro";
import Css from "@/icons/technology/Css";
import Firebase from "@/icons/technology/Firebase";
import Git from "@/icons/technology/Git";
import Html from "@/icons/technology/Html";
import JS from "@/icons/technology/JS";
import Linux from "@/icons/technology/Linux";
import Next from "@/icons/technology/Next";
import NodeJS from "@/icons/technology/NodeJS";
import React_logo from "@/icons/technology/React";
import Shadcn from "@/icons/technology/Shadcn";
import Tailwind from "@/icons/technology/Tailwind";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion as m, AnimatePresence } from "framer-motion";
import Cv from "@/icons/Cv";

const Links = ({ icon, url }) => {
  return (
    <a target="_blank" href={url} className="hover:text-white cursor-pointer">
      {icon}
    </a>
  );
};

const Tech = ({ name, icon }) => {
  return (
    <div className="tech-content">
      {icon}
      {name}
    </div>
  );
};

const Job = ({ name, url }) => {
  return (
    <a target="_blank" href={url} className="job-content hover:text-white">
      {name}
      <Visit />
    </a>
  );
};

const handleToast = () => {
  toast.success("Correo electrónico copiado exitosamente");
};

const Footer = () => {
  return (
    <section className="mt-32 footer 2xl:px-[85px] px-[16px]">
      <m.div
        initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1.3,
          ease: "easeOut",
          type: "spring",
          delay: 0.25,
        }}
        className="pageSize max-w-[1400px] "
      >
        <div className="banner-containe lg:grid-cols-2 grid-cols-1 lg:items-start items-center lg:py-14 py-10 lg:px-10 px-6 hidden">
          <div>
            <div className="banner-title lg:text-start text-center">
              Descubre más sobre mí
            </div>
            <div className="banner-subtitle lg:text-start text-center">
              Conoce mi trayectoria y mis diversas aptitudes.
            </div>
          </div>
          <div className="w-full flex lg:justify-end justify-center">
            <a
              target="_blank"
              href={
                "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=sharing"
              }
              className="transition-all gap-1 rounded-smm bg-[#F47420] hover:bg-[#ff9249] w-fit h-[40px] flex justify-center items-center text-[16px] font-semibold text-black px-6 cursor-pointer select-none lg:mt-[16px] mt-6"
            >
              <span className=" text-[13px] uppercase">Ver Currículum</span>
              <Visit />
            </a>
          </div>
        </div>

        {/*//*DESKTOP/////////////////////////////////////////////////////////////////////////////*/}
        <div className="text-sm mt-20 lg:flex hidden py-16">
          <div className="text-[#838586] w-[25%]">
            <div>©2024 CarlosBaso</div>
            <div className="pulse-container">
              <div className="invisible">.</div>
            </div>
            <div className="social-container">
              <CopyToClipboard
                text={"carlos.baso23@gmail.com"}
                onCopy={() => {
                  handleToast();
                }}
              >
                <div className="hover:text-white cursor-pointer select-none">
                  <Send />
                </div>
              </CopyToClipboard>
              <Links icon={<Github />} url={"https://github.com/Basso-23"} />
              <Links
                icon={<Cv />}
                url={
                  "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=sharing"
                }
              />
              <Links
                icon={<Linkedin />}
                url={"https://www.linkedin.com/in/carlosbaso/"}
              />
            </div>
          </div>

          <div className="tech-container">
            <div className="font-medium">Tecnologías</div>
            <Tech name={"Javascript"} icon={<JS />} />
            <Tech name={"React JS"} icon={<React_logo />} />
            <Tech name={"Next JS"} icon={<Next />} />
            <Tech name={"Tailwind CSS"} icon={<Tailwind />} />
            <Tech name={"Shadcn/ui"} icon={<Shadcn />} />
            <Tech name={"Framer Motion"} icon={<Acernity />} />
            <Tech name={"Astro"} icon={<Astro />} />
            <Tech name={"Firebase"} icon={<Firebase />} />
            <Tech name={"Git"} icon={<Git />} />
            <Tech name={"Node JS"} icon={<NodeJS />} />
            <Tech name={"React Native"} icon={<React_logo />} />
            <Tech name={"HTML 5"} icon={<Html />} />
            <Tech name={"CSS"} icon={<Css />} />
            <Tech name={"Linux"} icon={<Linux />} />
          </div>

          <div className="job-container">
            <div className="font-medium">Historial Laboral</div>
            <Job name={"Hong Kong Smart"} url={"https://hkspos.com"} />
            <Job name={"Realizando Metas"} url={"https://somosrmpa.com/"} />
            <Job name={"Partido Alianza"} url={"https://partidoalianza.com/"} />
            <Job name={"PAYÁ"} url={"https://pidepaya.com"} />
          </div>
        </div>

        {/*//*MOBILE/////////////////////////////////////////////////////////////////////////////*/}
        <div className="lg:hidden block">
          <div className="footer-mobile">
            <div>©2024 CarlosBaso</div>
            <div
              style={{ marginTop: 0, justifyContent: "end" }}
              className="social-container"
            >
              <CopyToClipboard
                text={"carlos.baso23@gmail.com"}
                onCopy={() => {
                  handleToast();
                }}
              >
                <div className="hover:text-white cursor-pointer select-none">
                  <Send />
                </div>
              </CopyToClipboard>
              <Links icon={<Github />} url={"https://github.com/Basso-23"} />

              <Links
                icon={<Cv />}
                url={
                  "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=sharing"
                }
              />
              <Links
                icon={<Linkedin />}
                url={"https://www.linkedin.com/in/carlosbaso/"}
              />
            </div>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Tecnologías</AccordionTrigger>
              <AccordionContent asChild>
                <div className="tech-mobile">
                  <Tech name={"Javascript"} icon={<JS />} />
                  <Tech name={"React JS"} icon={<React_logo />} />
                  <Tech name={"Next JS"} icon={<Next />} />
                  <Tech name={"Tailwind CSS"} icon={<Tailwind />} />
                  <Tech name={"Shadcn/ui"} icon={<Shadcn />} />
                  <Tech name={"Framer Motion"} icon={<Acernity />} />
                  <Tech name={"Astro"} icon={<Astro />} />
                  <Tech name={"Firebase"} icon={<Firebase />} />
                  <Tech name={"Git"} icon={<Git />} />
                  <Tech name={"Node JS"} icon={<NodeJS />} />
                  <Tech name={"React Native"} icon={<React_logo />} />
                  <Tech name={"HTML 5"} icon={<Html />} />
                  <Tech name={"CSS"} icon={<Css />} />
                  <Tech name={"Linux"} icon={<Linux />} />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Historial Laboral</AccordionTrigger>
              <AccordionContent asChild>
                <div className="job-mobile">
                  <Job name={"Hong Kong Smart"} url={"https://hkspos.com"} />
                  <Job
                    name={"Realizando Metas"}
                    url={"https://somosrmpa.com/"}
                  />
                  <Job
                    name={"Partido Alianza"}
                    url={"https://partidoalianza.com/"}
                  />
                  <Job name={"PAYÁ"} url={"https://pidepaya.com"} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </m.div>
    </section>
  );
};

export default Footer;
