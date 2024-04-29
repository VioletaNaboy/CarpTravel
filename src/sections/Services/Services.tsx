"use client";

import { useState } from "react";

import Image from "next/image";

const services = {
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
    setSelectedService(services[serviceName]);
  };
  return (
    <section
      id="services"
      className="bg-services bg-cover bg-center bg-no-repeat h-lvh w-full wrapper"
    >
      <div className="container">
        <h2>
          {" "}
          We
          <span>offer</span>
        </h2>
        <h2>{selectedService.date}/05</h2>
        <Image
          src={`/img/services/${selectedService.img}.jpg`}
          width={607}
          height={429}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Picture of the service"
        />
        <p>{selectedService.info}</p>
        <ul>
          {Object.entries(services).map(([serviceName, service]) => (
            <li key={serviceName}>
              <h3 onClick={() => handleServiceClick(serviceName)}>
                {serviceName}
              </h3>
            </li>
          ))}
        </ul>
        <p>{selectedService.desc}</p>
      </div>
    </section>
  );
}
