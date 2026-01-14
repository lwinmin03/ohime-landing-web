import { galleryItems } from "@/constants";
import GalleryCard from "./GalleryCard";

const GalleryGrid = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 md:flex-row nd:justify-between antialiased">
      {galleryItems.map((card) => (
        <GalleryCard img={card.logo} key={card.id} title={card.title} />
      ))}
    </div>
  );
};

export default GalleryGrid;
