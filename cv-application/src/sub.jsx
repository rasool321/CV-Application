function SubmittedData({ general, education, experience }) {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h2>📋 Submitted Overview</h2>

      <div>
        <h3>👤 General Info</h3>
        {general ? (
          <>
            <p><strong>Name:</strong> {general.name}</p>
            <p><strong>Email:</strong> {general.email}</p>
            <p><strong>Phone:</strong> {general.phone}</p>
          </>
        ) : <p>No general info submitted.</p>}
      </div>

      <hr />

      <div>
        <h3>🎓 Education</h3>
        {education ? (
          <>
            <p><strong>Degree:</strong> {education.degree}</p>
            <p><strong>College:</strong> {education.cname}</p>
            <p><strong>City:</strong> {education.city}</p>
            <p><strong>Country:</strong> {education.country}</p>
            <p><strong>Start Date:</strong> {education.startDate}</p>
            <p><strong>End Date:</strong> {education.endDate}</p>
          </>
        ) : <p>No education info submitted.</p>}
      </div>

      <hr />

      <div>
        <h3>💼 Experience</h3>
        {experience ? (
          <>
            <p><strong>Title:</strong> {experience.jobTitle}</p>
            <p><strong>Company:</strong> {experience.company}</p>
            <p><strong>Start Date:</strong> {experience.startDate}</p>
            <p><strong>End Date:</strong> {experience.endDate}</p>
            <p><strong>Description:</strong> {experience.description}</p>
          </>
        ) : <p>No experience info submitted.</p>}
      </div>
    </div>
  );
}

export default SubmittedData;
