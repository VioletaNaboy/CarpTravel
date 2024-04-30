"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <div className="flex flex-col gap-[20px] items-center md:hidden">
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
        <div className="hidden md:block mx-[auto]">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            freeMode={true}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="w-[454px]">
              <Image
                src="/img/services/slide-1.jpg"
                width={458}
                height={306}
                alt="Slide"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[454px]">
              <Image
                src="/img/services/slide-2.jpg"
                width={458}
                height={306}
                alt="Slide"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[454px]">
              <Image
                src="/img/services/slide-3.jpg"
                width={458}
                height={306}
                alt="Slide"
              />
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-between">
            <button type="button" className="custom-prev text-[33px] font-thin">
              Back
            </button>
            <button type="button" className="custom-next text-[33px] font-thin">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
