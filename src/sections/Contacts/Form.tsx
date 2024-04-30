"use client";

import { FormEvent, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("Form Data:", data);
  }

  return (
    <form
      onSubmit={onSubmit}
      className=" flex flex-col justify-between gap-[24px] lg:w-[607px] items-center md:flex-row md:items-start lg:flex-col"
    >
      <div className="flex flex-col gap-[16px] lg:gap-[24px] w-[100%] md:w-[222px] lg:w-full  lg:flex-row">
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc lg:w-[293px]">
          Full name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc lg:w-[293px]">
          E-mail
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
      </div>
      <div className="flex flex-col gap-[16px] lg:gap-[24px] w-[100%] md:w-[463px] items-end lg:w-full">
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc w-full lg:w-[607px]">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="md:w-100%"
          ></textarea>
        </label>
        <button
          type="submit"
          className="text-btn-mob md:text-btn-tab lg:text-btn-desc"
        >
          Send
        </button>
      </div>
    </form>
  );
}
