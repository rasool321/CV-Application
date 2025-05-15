import React from "react";
import "../styles/SectionForm.css";

const GeneralInfo = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-form">
      <h2>General Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </label>

      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="123-456-7890"
        />
      </label>
    </section>
  );
};

export default GeneralInfo;
