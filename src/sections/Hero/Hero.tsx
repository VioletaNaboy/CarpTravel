export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero bg-cover bg-center bg-no-repeat h-lvh w-full wrapper"
    >
      <div className="container flex flex-col  md:flex-row md:mt-[30px] sm:h-[416px] md:h-[345px] lg:h-[577px] justify-between ">
        <div className="flex flex-col sm:gap-[24px] justify-between">
          <h2 className="text-l-mob md:text-l-tab lg:text-l-des font-thin">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h2>
          <p className="text-[10px] md:text-[14px] lg:text-[16px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="flex flex-col sm:gap-[24px] justify-between md:w-[230px] lg:w-[294px]">
          <h1 className=" flex flex-col gap-0 text-l-mob md:text-l-tab lg:text-l-des font-thin sm:absolute top-[105px] right-[20px] ">
            <span>
              <span className="font-medium">7</span> days
            </span>
            <span className="subtitle">journey</span>
          </h1>
          <div>
            <p className="text-s-mob md:text-s-tab lg:text-s-desc mb-[24px] md:mb=[28px]">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <button type="button" className="btn">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
