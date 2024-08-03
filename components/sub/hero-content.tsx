"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-10 text-5xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Websites
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              incríveis{" "}
            </span>
            para negócios de sucesso
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]">
          Na Assunção Web, nossa missão é transformar a visão digital dos nossos
          clientes em realidade. Com anos de experiência em design e
          desenvolvimento web, oferecemos soluções personalizadas para empresas
          de todos os tamanhos.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Entre em Contato
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-end items-center hidden md:flex">
        <video
          className="w-[500px] h-[500px]"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="shoes.mp4"
        />
        {/* <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        /> */}
      </motion.div>
    </motion.div>
  );
};
