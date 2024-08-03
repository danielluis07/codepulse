"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

export const Encryption = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="text-gray-200 text-xl text-justify w-full">
          <h1 className="text-[40px] font-medium text-center lg:text-start text-gray-200 pb-5">
            Segurança e
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              LGPD
            </span>
          </h1>
          <p className="text-[16px]">
            Para empresas que atuam no desenvolvimento web, a conformidade com a
            LGPD é essencial. Isso envolve a revisão e adequação de políticas de
            privacidade, a implementação de práticas seguras de desenvolvimento
            e a garantia de que todas as atividades de tratamento de dados
            estejam em conformidade com a legislação. A observância dessas
            diretrizes não só protege a empresa de possíveis sanções, mas também
            fortalece a confiança dos clientes e usuários nos serviços
            prestados.
          </p>
        </div>
        <div className="w-full flex items-start justify-center relative order-first lg:order-last">
          <div className="flex flex-col items-center justify-center z-[20] absolute inset-0">
            <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
              <Image
                src="/LockTop.png"
                alt="Lock top"
                width={50}
                height={50}
                className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
              />
              <Image
                src="/LockMain.png"
                alt="Lock Main"
                width={70}
                height={70}
                className=" z-10"
              />
            </div>
          </div>
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full"
            src="/encryption.webm/"
          />
        </div>
      </div>
    </div>
  );
};
