"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
export const About = () => {
  return (
    <motion.div
      id="about-me"
      initial="hidden"
      animate="visible"
      className="w-full">
      <div className="flex flex-col lg:flex-row gap-x-5">
        <div className="w-full space-y-2 order-last mt-8 lg:mt-0">
          <div className="text-[40px] font-medium text-center lg:text-start text-gray-200 pb-5">
            Sobre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              nós
            </span>
          </div>
          <p className="text-gray-200 text-justify">
            Bem-vindo à CodePulse, onde transformamos ideias em realidade
            digital. Somos uma equipe apaixonada por tecnologia e inovação,
            dedicada a criar experiências online excepcionais para nossos
            clientes. Com especialização em desenvolvimento web, oferecemos uma
            ampla gama de serviços, desde a criação de sites personalizados até
            soluções completas de e-commerce. Nossa missão é ajudar empresas e
            profissionais a se destacarem no mundo digital, fornecendo
            ferramentas e plataformas que impulsionam o crescimento e a
            visibilidade online.
          </p>
        </div>
        <div className="w-full rounded-lg overflow-hidden">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full"
            src="/web-creation.mp4/"
          />
        </div>
      </div>
    </motion.div>
  );
};
