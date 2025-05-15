import React from "react";
import "../styles/ResumePreview.css";

export default function ResumePreview({ general, education, experience }) {
  return (
    <div className="resume-preview">
      <header className="preview-header">
        <h1>{general.name || "Your Name"}</h1>
        <p>{general.email || "you@example.com"}</p>
        <p>{general.phone || "123-456-7890"}</p>
      </header>

      <section className="preview-section">
        <h2>Education</h2>
        <p><strong>School:</strong> {education.schoolName || "Your school name"}</p>
        <p><strong>Title:</strong> {education.titleOfStudy || "Degree or study title"}</p>
        <p><strong>Dates:</strong> {education.dateOfStudy || "e.g. 2015 - 2019"}</p>
      </section>

      <section className="preview-section">
        <h2>Practical Experience</h2>
        <p><strong>Company:</strong> {experience.companyName || "Company name"}</p>
        <p><strong>Position:</strong> {experience.positionTitle || "Your position"}</p>
        <p><strong>Responsibilities:</strong></p>
        <p className="responsibilities">
          {experience.mainResponsibilities || "Describe your responsibilities here."}
        </p>
        <p>
          <strong>Duration:</strong> {experience.dateFrom || "Start date"} - {experience.dateUntil || "End date"}
        </p>
      </section>
    </div>
  );
}
