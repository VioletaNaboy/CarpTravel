import Image from "next/image";
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-gallery bg-cover bg-center bg-no-repeat md:h-lvh w-full wrapper"
    >
      <div className="container">
        <h2 className="text-l-mob md:text-l-tab lg:text-l-des font-thin mb-[24px]">
          Our
          <span className="font-medium">Gallery</span>
        </h2>
        <div className="flex flex-col gap-[20px] items-center">
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
