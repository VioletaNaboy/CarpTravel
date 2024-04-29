import Image from "next/image";
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-gallery bg-cover bg-center bg-no-repeat h-lvh w-full wrapper"
    >
      <div className="container">
        <h2>
          Our
          <span>Gallery</span>
        </h2>
        <div>
          <Image
            src="/img/services/slide-1.jpg"
            width={280}
            height={187}
            alt="Slide"
          />
          <Image
            src="/img/services/slide-2.jpg"
            width={280}
            height={187}
            alt="Slide"
          />
          <Image
            src="/img/services/slide-3.jpg"
            width={280}
            height={187}
            alt="Slide"
          />
        </div>
      </div>
    </section>
  );
}
