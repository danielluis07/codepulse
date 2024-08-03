"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

export const Seo = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-x-5">
        <div className="w-full space-y-2 order-last mt-8 lg:mt-0">
          <motion.div
            variants={slideInFromTop}
            className="text-[40px] font-medium text-center lg:text-start text-gray-200 pb-5">
            Otimização
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              SEO
            </span>
          </motion.div>
          <motion.p
            variants={slideInFromTop}
            className="text-gray-200 text-justify">
            Em um mundo digital saturado, destacar-se é essencial. A otimização
            para mecanismos de busca (SEO) não é apenas uma ferramenta; é a
            chave para aumentar a visibilidade do seu site, atrair mais
            visitantes qualificados e, consequentemente, aumentar suas
            conversões. Com técnicas avançadas de SEO, seu site estará sempre à
            frente, garantindo que sua mensagem alcance o público certo.
            Deixe-me ajudá-lo a subir no ranking e conquistar o sucesso online.
          </motion.p>
        </div>
        <div className="w-full rounded-lg overflow-hidden">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="chart.mp4"
          />
        </div>
      </div>
    </div>
  );
};
