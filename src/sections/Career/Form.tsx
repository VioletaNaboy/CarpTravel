"use client";

import { FormEvent, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    phone: "",
    message: "",
    confirmation: false,
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      position: formData.get("position"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      confirmation: formData.get("confirmation"),
    };

    console.log("Form Data:", data);
  }

  return (
    <form
      onSubmit={onSubmit}
      className=" md:flex justify-between gap-[20px] lg:min-w-[620px]"
    >
      <div className="flex flex-col gap-[16px] lg:gap-[24px] md:w-[222px] lg:w-[290px]">
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc">
          Full name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc">
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
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc">
          Position
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc">
          Phone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc md:hidden">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </label>
        <div>
          <label htmlFor="confirmation">
            <input
              type="checkbox"
              name="confirmation"
              id="confirmation"
              checked={formData.confirmation}
              onChange={(e) =>
                setFormData({ ...formData, confirmation: e.target.checked })
              }
            />{" "}
            I confirm my consent to the processing of personal data.
          </label>
        </div>
        <button
          type="submit"
          className="text-btn-mob md:text-btn-tab lg:text-btn-desc ml-[auto] md:hidden"
        >
          Send
        </button>
      </div>
      <div className="sm:hidden md:flex flex-col gap-[16px] lg:gap-[24px] md:w-[222px] items-end lg:w-[290px]">
        <label className="flex flex-col text-xs-mob md:text-xs-tab lg:text-xs-desc">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
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
