import couplePhoto1 from "@/assets/couple-photo-1.jpg";
import couplePhoto2 from "@/assets/couple-photo-2.jpg";
import couplePhoto3 from "@/assets/couple-photo-3.jpg";

const photos = [
  { src: couplePhoto1, alt: "Couple walking in the hills", rotation: "-3deg" },
  { src: couplePhoto2, alt: "Couple silhouette at sunset", rotation: "1deg" },
  { src: couplePhoto3, alt: "Wedding rings", rotation: "2.5deg" },
];

const PhotoStrip = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-white p-2 pb-10 shadow-lg hover:shadow-xl transition-shadow"
              style={{ transform: `rotate(${photo.rotation})` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-40 h-40 md:w-52 md:h-52 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground italic mt-8 font-serif text-lg">
          "Every love story is beautiful, but ours is my favorite"
        </p>
      </div>
    </section>
  );
};

export default PhotoStrip;
