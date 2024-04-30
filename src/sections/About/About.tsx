export default function About() {
  return (
    <section
      id="about"
      className="bg-about bg-cover bg-center bg-no-repeat md:h-lvh w-full wrapper"
    >
      <div className="container flex flex-col justify-between">
        <div className="md:flex justify-between ">
          <h2 className="text-l-mob md:text-l-tab lg:text-l-des font-thin">
            WHO
            <span className="font-medium">WE ARE</span>
          </h2>
          <div className="w-[180px] md:w-[220px] lg:w-[291px]">
            <p className="text-s-mob md:text-s-tab lg:text-s-desc mb-[20px] md:mb-[16px] la:mb-[24px]">
              <span className="font-medium">a team of enthusiasts</span> who are
              fully committed to the mission of creating unforgettable and
              extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="text-s-mob md:text-s-tab lg:text-s-desc mb-[24px] md:mb=[28px]">
              <span className="font-medium">We believe</span> that nature has
              the power to inspire, strengthen character and provide new
              perspectives. Therefore, each of our tours is aimed at unlocking
              your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
        </div>
        <div className="md:flex justify-between lg:flex-row-reverse">
          <div className="text-s-mob md:text-s-tab lg:text-s-desc ml-[auto] mb-[40px] md:mb-[16px] la:mb-[24px] w-[186px] md:w-[232px] lg:w-[291px] md:relative bottom-[124px] lg:static">
            <h4 className="font-medium">From vacationers</h4>
            <h4 className="font-medium text-right">to active travelers</h4>
            we have a tour for everyone.
          </div>
          <p className="text-s-mob md:text-s-tab lg:text-s-desc w-full md:w-[463px] lg:w-[605px]">
            <span className="font-medium">We use methods</span> that are
            time-tested and proven. Our expert guides with in-depth knowledge of
            the Carpathian landscapes lead you safely through the mysteries of
            these mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
