import Link from "next/link";

import Title from "./Title";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero bg-cover bg-center bg-no-repeat h-lvh w-full wrapper"
    >
      <div className="container flex flex-col  md:flex-row sm:h-[416px] md:h-[345px] lg:h-[577px] justify-between ">
        <div className="flex flex-col sm:gap-[24px] justify-between">
          <h2 className="text-l-mob md:text-l-tab lg:text-l-des font-thin">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h2>
          <p className="text-[10px] md:text-[14px] lg:text-[16px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="flex flex-col sm:gap-[24px] justify-between md:w-[230px] lg:w-[294px]">
          <Title />
          <div>
            <p className="text-s-mob md:text-s-tab lg:text-s-desc mb-[24px] md:mb=[28px]">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <Link href="#contacts" className="btn">
              JOIN NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
