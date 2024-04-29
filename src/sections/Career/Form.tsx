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
    <form onSubmit={onSubmit}>
      <label>
        Full name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        E-mail
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      <label>
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
      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </label>
      <label>
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
          />
          Confirmation
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
