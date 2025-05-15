import React from "react";
import "../styles/SectionForm.css";

const Education = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-form">
      <h2>Education</h2>
      <label>
        School Name:
        <input
          type="text"
          name="schoolName"
          value={data.schoolName}
          onChange={handleChange}
          placeholder="Your school name"
        />
      </label>

      <label>
        Title of Study:
        <input
          type="text"
          name="titleOfStudy"
          value={data.titleOfStudy}
          onChange={handleChange}
          placeholder="Your degree or study title"
        />
      </label>

      <label>
        Date of Study:
        <input
          type="text"
          name="dateOfStudy"
          value={data.dateOfStudy}
          onChange={handleChange}
          placeholder="e.g. 2015 - 2019"
        />
      </label>
    </section>
  );
};

export default Education;
