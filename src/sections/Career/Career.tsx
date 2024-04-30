import Form from "./Form";
export default function Career() {
  return (
    <section
      id="career"
      className="bg-career bg-cover bg-center md:bg-no-repeat md:h-lvh w-full wrapper"
    >
      <div className="container">
        <div className="md:flex justify-between">
          <h2 className="text-l-mob md:text-l-tab lg:text-l-des font-thin mb-[24px]">
            Choose
            <span className="font-medium">Us</span>
          </h2>
          <p className="text-s-mob md:text-[13px] lg:text-s-desc ml-[auto] w-[179px] md:w-[221px] lg:md:w-[293px] ">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.{" "}
          </p>
        </div>
        <div className="md:flex justify-between items-top">
          <div className="mb-[112px]">
            <h3 className="text-btn-mob md:text-btn-tab lg:text-btn-des font-thin mb-[24px]">
              Why us ?
            </h3>
            <ul className="w-[181px] md:w-[221px] lg:md:w-[529px] flex flex-col gap-[16px] md:gap-[24px]">
              <li>
                <span className="text-s-mob md:text-s-tab lg:text-s-desc font-medium">
                  Professional development
                </span>
                <p className="text-xs-mob md:text-xs-tab lg:text-xs-desc mb-[8px]">
                  We offer growth opportunities and a creative environment to
                  nurture your talents.
                </p>
              </li>
              <li>
                <span className="text-s-mob md:text-s-tab lg:text-s-desc font-medium mb-[8px]">
                  Teamwork
                </span>
                <p className="text-xs-mob md:text-xs-tab lg:text-xs-desc">
                  Join our close-knit family, where support and inspiration
                  abound.
                </p>
              </li>
              <li>
                <span className="text-s-mob md:text-s-tab lg:text-s-desc font-medium mb-[8px]">
                  Stimulating work environment
                </span>
                <p className="text-xs-mob md:text-xs-tab lg:text-xs-desc">
                  Flexibility and remote options for a comfortable experience.
                </p>
              </li>
              <li>
                <span className="text-s-mob md:text-s-tab lg:text-s-desc font-medium mb-[8px]">
                  Exciting challenges
                </span>
                <p className="text-xs-mob md:text-xs-tab lg:text-xs-desc">
                  Unleash your potential through unforgettable projects
                  showcasing Carpathian beauty.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-s-mob md:text-[13px] lg:text-s-desc ml-[auto] md:ml-0 w-[179px] md:w-[221px] lg:md:w-[293px] mb-[24px]">
              Unleash your potential through unforgettable projects showcasing
              Carpathian beauty.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
