import React from "react";
import "../styles/SectionForm.css";

const Experience = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-form">
      <h2>Practical Experience</h2>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={data.companyName}
          onChange={handleChange}
          placeholder="Your company name"
        />
      </label>

      <label>
        Position Title:
        <input
          type="text"
          name="positionTitle"
          value={data.positionTitle}
          onChange={handleChange}
          placeholder="Your job title"
        />
      </label>

      <label>
        Main Responsibilities:
        <textarea
          name="mainResponsibilities"
          value={data.mainResponsibilities}
          onChange={handleChange}
          placeholder="Describe your responsibilities"
          rows="4"
        />
      </label>

      <label>
        Date From:
        <input
          type="text"
          name="dateFrom"
          value={data.dateFrom}
          onChange={handleChange}
          placeholder="Start date"
        />
      </label>

      <label>
        Date Until:
        <input
          type="text"
          name="dateUntil"
          value={data.dateUntil}
          onChange={handleChange}
          placeholder="End date or Present"
        />
      </label>
    </section>
  );
};

export default Experience;
