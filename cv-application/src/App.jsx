import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/PracticalExperience";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

export default function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
  });

  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const [showPreview, setShowPreview] = useState(true);

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="nav-title">CV Application</div>
        <button
          className="toggle-btn"
          onClick={() => setShowPreview((prev) => !prev)}
          aria-label="Toggle Preview"
        >
          {showPreview ? "Hide Preview" : "Show Preview"}
        </button>
      </nav>

      <div className="app-container">
        <div className="form-container">
          <GeneralInfo data={general} setData={setGeneral} />
          <Education data={education} setData={setEducation} />
          <Experience data={experience} setData={setExperience} />
        </div>

        {showPreview && (
          <div className="preview-container">
            <ResumePreview
              general={general}
              education={education}
              experience={experience}
            />
          </div>
        )}
      </div>
    </div>
  );
}
