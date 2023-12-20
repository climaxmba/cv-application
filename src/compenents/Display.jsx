function GeneralSectn({ general }) {
  return (
    general.name && (
      <section>
        <h2 id="candidatename">{general.name}</h2>
        <div id="contact-contr">
          <a href={`mailto:${general.mail}`}>
            <span className="icon"></span>
            <span className="linktxt">{general.mail}</span>
          </a>
          <a>
            <span className="icon"></span>
            <span className="linktxt">{general.phone}</span>
          </a>
        </div>
        <div id="social-conrtr">LinkedIn, Facebook, GitHub</div>
      </section>
    )
  );
}

function SummarySectn({ summary }) {
  return (
    summary.text && (
      <section>
        <h2>Summary</h2>
        <p>{summary.text}</p>
      </section>
    )
  );
}

function ExperienceSectn({ experience }) {
  return (
    <section>
      <h2>Experience</h2>

      {experience.experiences.map((exp, i) => (
        <div key={i} className="exp-contrs">
          <h3 className="jobtitle">{exp.title}</h3>
          <div className="companyname">{exp.company}</div>
          <div className="date">{`${exp.startDate} - ${exp.endDate}`}</div>
          <p className="jobdetails">{exp.jobDescription}</p>
        </div>
      ))}
    </section>
  );
}

function EducationSectn({ education }) {
  return (
    <section>
      <h2>Education</h2>
      <div id="educations">
        {education.schools.map((school) => {
          return (
            <div key={school.schoolName} className="edu-contrs">
              <h3 className="schoolname">{school.schoolName}</h3>
              {school.course && (
                <div className="coursename">{school.course}</div>
              )}
              <div className="date">{`${school.startDate} - ${school.endDate}`}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SkillsSectn({ skill }) {
  return (
    <section>
      <h2>Skills</h2>
      <ul id="skill-list">
        {skill.skills.map((skillElem) => (
          <li key={skillElem}>{skillElem}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Display({
  general,
  summary,
  education,
  experience,
  skill,
  sectionsInfo,
}) {
  return (
    <div id="cv-disp">
      {sectionsInfo.map((sectionInfo) => {
        if (sectionInfo.isVisible) {
          switch (sectionInfo.section) {
            case "general":
              return <GeneralSectn key={general.id} general={general} />;
            case "summary":
              return <SummarySectn key={summary.id} summary={summary} />;
            case "education":
              return (
                <EducationSectn key={education.id} education={education} />
              );
            case "experience":
              return (
                <ExperienceSectn key={experience.id} experience={experience} />
              );
            case "skills":
              return <SkillsSectn key={skill.id} skill={skill} />;
          }
        } else return null;
      })}
    </div>
  );
}
