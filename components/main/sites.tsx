import { SiteImages } from "../sub/site-images";
import acampamento from "@/public/images/acampamento.png";
import ecommerce from "@/public/images/ecommerce.png";
import pele from "@/public/images/pele.png";
import restaurante from "@/public/images/restaurante.png";
import academia from "@/public/images/academia.png";
import carros from "@/public/images/carros.png";
import pet from "@/public/images/pet.png";
import comida from "@/public/images/comida.png";
import dentista from "@/public/images/dentista.png";
import imoveis from "@/public/images/imóveis.png";
import esporte from "@/public/images/esporte.png";
import barbearia from "@/public/images/barbearia.png";
import animais from "@/public/images/animais.png";
import tenis from "@/public/images/tenis.png";
import podcast from "@/public/images/podcast.png";
import cafe from "@/public/images/café.png";

const images = [
  { src: acampamento, alt: "site 1" },
  { src: ecommerce, alt: "site 2" },
  { src: pele, alt: "site 3" },
  { src: restaurante, alt: "site 4" },
  { src: academia, alt: "site 5" },
  { src: carros, alt: "site 6" },
  { src: pet, alt: "site 7" },
  { src: comida, alt: "site 8" },
  { src: dentista, alt: "site 9" },
  { src: imoveis, alt: "site 10" },
  { src: esporte, alt: "site 11" },
  { src: barbearia, alt: "site 12" },
  { src: animais, alt: "site 13" },
  { src: tenis, alt: "site 14" },
  { src: podcast, alt: "site 15" },
  { src: cafe, alt: "site 16" },
];
export const Sites = () => {
  return (
    <div id="projects" className="w-full">
      <div className="py-10 space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white w-full lg:w-1/2 mx-auto">
          Design sem limites para clientes com{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            diferentes necessidades
          </span>
        </h1>
        <p className="text-white text-center w-full lg:w-1/2 mx-auto">
          Cada site é um exemplo do nosso compromisso com a qualidade, inovação
          e atenção aos detalhes. Trabalhamos em estreita colaboração com nossos
          clientes para criar soluções personalizadas que atendam às suas
          necessidades específicas e superem suas expectativas.
        </p>
      </div>
      <SiteImages images={images} />
    </div>
  );
};
