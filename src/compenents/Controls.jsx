import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

import sampleData from "../assets/sampleData.json";

import Icon from "@mdi/react";
import {
  mdiPlusThick,
  mdiCog,
  mdiCursorMove,
  mdiPencil,
  mdiTrashCanOutline,
} from "@mdi/js";

function Form({ children, submitTxt = "Save", onSubmit }) {
  function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit(e);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      {children}
      <button type="submit">{submitTxt}</button>
    </form>
  );
}

function GeneralForm({ general, setGeneral }) {
  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target));
    setGeneral({
      ...general,
      name: data.personName,
      mail: data.personEmail,
      phone: data.personPhone,
    });
  }
  return (
    <section id="general-sectn">
      <h2>General Information</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="person-name">Name:</label>
          <input type="text" name="personName" id="person-name" required />
        </div>

        <div>
          <label htmlFor="person-email">Email:</label>
          <input type="email" name="personEmail" id="person-email" required />
        </div>

        <div>
          <label htmlFor="person-phone">Phone Number:</label>
          <input type="number" name="personPhone" id="person-phone" />
        </div>
      </Form>
    </section>
  );
}

function EducationForm({ education, setEducation }) {
  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target));
    const educationCopy = { ...education };

    educationCopy.schools.push({
      schoolName: data.eduName,
      course: data.eduPrgm,
      startDate: new Date(data.eduStartDate).toDateString(),
      endDate: new Date(data.eduEndDate).toDateString(),
    });
    setEducation(educationCopy);
  }
  return (
    <section id="edu-sectn">
      <h2>Education</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="edu-name">School Name:</label>
          <input type="text" name="eduName" id="edu-name" required />
        </div>

        <div>
          <label htmlFor="edu-prgm">Educational Program:</label>
          <input type="text" name="eduPrgm" id="edu-prgm" />
        </div>

        <div>
          <label htmlFor="edu-sdate">Start Date:</label>
          <input type="date" name="eduStartDate" id="edu-sdate" />
        </div>

        <div>
          <label htmlFor="edu-edate">End Date:</label>
          <input type="date" name="eduEndDate" id="edu-edate" />
        </div>
      </Form>
    </section>
  );
}

function SummaryForm({ summary, setSummary }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setSummary({ ...summary, text: data.summary });
  }
  return (
    <section id="summary-sectn">
      <h2>Summary</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
        </div>
      </Form>
    </section>
  );
}

function SkillForm({ skill, setSkill }) {
  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target));
    setSkill(data.skills.split(", "));
  }
  return (
    <section id="skill-sectn">
      <h2>Skills</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="skills">Enter your skills seperated by comma, &ldquo;,&rdquo;</label>
          <input type="text" name="skills" id="skills" value={skill.skills.join(", ")} />
        </div>
      </Form>
    </section>
  );
}

function WorkExpForm({ experience, setExperience }) {
  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target));
    const experienceCopy = { ...experience };

    experienceCopy.experiences.push({
      title: data.compName,
      startDate: new Date(data.jobStartDate).toDateString(),
      endDate: new Date(data.jobEndDate).toDateString(),
      company: data.compName,
      jobDescription: data.jobDescription,
    });
    setExperience(experienceCopy);
  }
  return (
    <section id="job-sectn">
      <h2>Work Experience</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="job-comp">Company Name:</label>
          <input type="text" name="compName" id="job-comp" required />
        </div>

        <div>
          <label htmlFor="job-title">Job Title:</label>
          <input type="text" name="job-title" id="job-title" required />
        </div>

        <div>
          <label htmlFor="job-sdate">Start Date:</label>
          <input type="date" name="jobStartDate" id="job-sdate" />
        </div>

        <div>
          <label htmlFor="job-edate">End Date:</label>
          <input type="date" name="jobEndDate" id="job-edate" />
        </div>

        <div>
          <label htmlFor="job-sum">Job Summary</label>
          <textarea type="date" name="jobDescription" id="job-sum"></textarea>
        </div>
      </Form>
    </section>
  );
}

function ActiveForms({ children }) {
  return <div id="active-form-contr">{children}</div>;
}

function AddBtns({ text }) {
  return <button type="button">{text}</button>;
}

function AddBtnsContr() {
  return (
    <div id="addbtns-contr">
      <AddBtns text="Add Experience" />
      <AddBtns text="Add Education" />
      <AddBtns text="Add Socials" />
    </div>
  );
}

export default function Controls({
  general,
  setGeneral,
  summary,
  setSummary,
  education,
  setEducation,
  experience,
  setExperience,
  skill,
  setSkill,
  sectionsInfo,
  setSectionsInfo,
}) {
  const [activeTab, setActiveTab] = useState("frms-tab");

  function handleTabChange(e) {
    setActiveTab(e.target.getAttribute("for"));
  }
  return (
    <div id="ctrls-contr">
      <div id="tabs">
        {activeTab === "frms-tab" ? (
          <>
            <input type="radio" id="frms-tab" name="active-tab" checked />
            <input type="radio" id="disp-tab" name="active-tab" />
          </>
        ) : (
          <>
            <input type="radio" id="frms-tab" name="active-tab" />
            <input type="radio" id="disp-tab" name="active-tab" checked />
          </>
        )}

        <div className="tabs-contr">
          <label
            htmlFor="frms-tab"
            className="clickable text-with-icons"
            onClick={handleTabChange}
          >
            <Icon path={mdiPlusThick} className="icons" />
            Add Section
          </label>
          <label
            htmlFor="disp-tab"
            className="clickable text-with-icons"
            onClick={handleTabChange}
          >
            <Icon path={mdiCog} className="icons" />
            Sections
          </label>
        </div>

        <div id="frms">
          <ActiveForms>
            <GeneralForm general={general} setGeneral={setGeneral} />
            <EducationForm education={education} setEducation={setEducation} />
            <SkillForm skill={skill} setSkill={setSkill} />
          </ActiveForms>
          <AddBtnsContr />
        </div>
        <div id="disp">
          <ReactSortable
            tag={"ul"}
            id="sectn-order-contr"
            list={sectionsInfo}
            setList={setSectionsInfo}
          >
            {sectionsInfo.map((sectn) => (
              <li className="movable" key={sectn.section}>
                <Icon
                  title="Move Section"
                  path={mdiCursorMove}
                  className="icons"
                />
                <div className="section-names">{sectn.section}</div>
                <Icon
                  title="Edit Section"
                  path={mdiPencil}
                  className="icons clickable"
                />
                <Icon
                  title="Delete Section"
                  path={mdiTrashCanOutline}
                  className="icons clickable"
                />
              </li>
            ))}
          </ReactSortable>
        </div>
      </div>
    </div>
  );
}
