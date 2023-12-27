import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiLinkVariant } from "@mdi/js";

function GeneralSectn({ general }) {
  return (
    general.name && (
      <section id="general-sectn">
        <h2 id="candidatename">{general.name}</h2>
        <div id="contact-contr">
          <a href={`mailto:${general.mail}`} className="icons-and-elem">
            <Icon path={mdiEmail} className="icons" />
            <span className="linktxt">{general.mail}</span>
          </a>
          {general.phone !== "" && (
            <a className="icons-and-elem">
              <Icon path={mdiPhone} className="icons" />
              <span className="linktxt">{general.phone}</span>
            </a>
          )}
        </div>
        <div id="social-conrtr">LinkedIn, Facebook, GitHub</div>
      </section>
    )
  );
}

function SummarySectn({ summary }) {
  return (
    summary.text && (
      <section id="summary-sectn">
        <h2>Summary</h2>
        <p>{summary.text}</p>
      </section>
    )
  );
}

function ExperienceSectn({ experience }) {
  return (
    <section id="experience-sectn">
      <h2>Experience</h2>

      {experience.experiences.map((exp) => (
        <div key={exp.id} className="exp-contrs">
          <h3 className="jobtitle">{exp.title}</h3>
          <a
            href={exp.url}
            className={`companyname text-with-icons clickable ${
              exp.url ? "url" : "no-url"
            }`}
          >
            {exp.url && <Icon path={mdiLinkVariant} className="icons" />}
            {exp.company}
          </a>
          <div className="date">{`${exp.startDate} - ${exp.endDate}`}</div>
          <p className="jobdetails">{exp.jobDescription}</p>
        </div>
      ))}
    </section>
  );
}

function EducationSectn({ education }) {
  return (
    <section id="education-sectn">
      <h2>Education</h2>
      <div id="educations">
        {education.schools.map((school) => {
          return (
            <div key={school.schoolName} className="edu-contrs">
              <a href={school.url}
                className={`schoolname text-with-icons clickable ${
                  school.url ? "url" : "no-url"
                }`}
              >
                {school.url && <Icon path={mdiLinkVariant} className="icons" />}
                {school.schoolName}
              </a>
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
    <section id="skills-sectn">
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