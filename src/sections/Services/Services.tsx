"use client";

import { useState } from "react";
import clsx from "clsx";

import Image from "next/image";

const services: Record<
  string,
  { date: string; img: string; info: string; desc: string }
> = {
  "ATVs Traveling": {
    date: "01",
    img: "atvs-desc",
    info: "Feel the adrenaline rush",
    desc: "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  },
  "Rock climbing": {
    date: "02",
    img: "rockClimb-desc",
    info: "Destroy your limitations",
    desc: "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
  },
  "Hot air ballooning": {
    date: "03",
    img: "airBall-desc",
    info: "Get Inspired",
    desc: "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
  },
  Skydiving: {
    date: "04",
    img: "skyding-desc",
    info: "Overcome your fears",
    desc: "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  },
  Rafting: {
    date: "05",
    img: "rafting-desc",
    info: "Trust the flow",
    desc: "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(
    Object.values(services)[0]
  );
  const handleServiceClick = (serviceName: string) => {
    if (services.hasOwnProperty(serviceName)) {
      setSelectedService(services[serviceName]);
    }
  };
  return (
    <section
      id="services"
      className={clsx(
        `bg-${selectedService.img}`,
        "bg-atvs-desc bg-cover bg-center bg-no-repeat md:h-lvh w-full wrapper"
      )}
    >
      <div className="container relative">
        <h2 className="text-l-mob md:text-l-tab lg:text-l-des font-thin mb-[24px]">
          We <span className="font-medium">offer</span>
        </h2>
        <h2 className="text-l-mob md:text-l-tab lg:text-l-des font-thin text-right md:absolute top-0 right-[56px] lg:right-[30%]">
          {selectedService.date}/05
        </h2>
        <div className="md:flex gap-[20px]">
          <Image
            src={`/img/services/${selectedService.img}.jpg`}
            width={607}
            height={429}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw"
            alt="Picture of the service"
            className="my-[12px]"
          />
          <div className="flex flex-col gap-[34px] md:min-w-[224px] md:w-[224px] md:min-w-[420px] lg:min-width-[500px] lg:w-[500px] lg:gap-[72px] lg:items-start relative">
            <div className="flex flex-col md:flex-col-reverse gap-[24px] lg:flex-row-reverse items-center">
              <p className="text-xs-mob md:text-xs-tab ml-[auto] md:ml-0 lg:hidden">
                {selectedService.info}
              </p>
              <ul className="flex flex-col gap-[16px] lg:gap-[24px]  lg:ml-[36px]">
                {Object.entries(services).map(([serviceName, service]) => (
                  <li
                    key={serviceName}
                    className="lg:flex lg:w-[486px] justify-between items-center"
                  >
                    <h3
                      className={clsx(
                        "text-m-mob md:text-m-tab lg:text-m-desc cursor-pointer",
                        {
                          "font-medium active": service === selectedService,
                        }
                      )}
                      onClick={() => handleServiceClick(serviceName)}
                    >
                      {serviceName}
                    </h3>
                    {service === selectedService && (
                      <p className=":text-xs-desc hidden lg:flex">
                        {selectedService.info}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-s-mob md:text-[13px] lg:text-s-desc lg:w-[293px] lg:ml-[auto]">
              {selectedService.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
