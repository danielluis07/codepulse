import Image, { StaticImageData } from "next/image";

type SitesProps = {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
};
export const SiteImages = ({ images }: SitesProps) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <Image src={image.src} alt={image.alt} width={400} height={400} />
        </div>
      ))}
    </div>
  );
};
