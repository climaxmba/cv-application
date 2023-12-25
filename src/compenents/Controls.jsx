import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { v1 as uuid } from "uuid";

// import sampleData from "../assets/sampleData.json";

import Icon from "@mdi/react";
import {
  mdiPlusThick,
  mdiCog,
  mdiDragVertical,
  mdiEye,
  mdiEyeOff,
  mdiPencil,
  mdiTrashCanOutline,
} from "@mdi/js";

function GeneralForm({ general, setGeneral, Form, isInActiveTab = true }) {
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
      <Form onSubmit={handleSubmit} formType={isInActiveTab ? "general" : null}>
        <div>
          <label htmlFor="person-name">Name:</label>
          <input
            type="text"
            name="personName"
            id="person-name"
            placeholder="Ex: Anrew Stone"
            defaultValue={general.name}
            required
          />
        </div>

        <div>
          <label htmlFor="person-email">Email:</label>
          <input
            type="email"
            name="personEmail"
            id="person-email"
            placeholder="Ex: username@example.com"
            defaultValue={general.mail}
            required
          />
        </div>

        <div>
          <label htmlFor="person-phone">Phone Number:</label>
          <input
            type="number"
            name="personPhone"
            id="person-phone"
            defaultValue={general.phone}
          />
        </div>
      </Form>
    </section>
  );
}

function EducationForm({
  education,
  setEducation,
  Form,
  isInActiveTab = true,
}) {
  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target));
    const educationCopy = { ...education };

    educationCopy.schools.push({
      schoolName: data.eduName,
      course: data.eduPrgm,
      startDate: new Date(data.eduStartDate).toDateString(),
      endDate: new Date(data.eduEndDate).toDateString(),
      url: data.eduUrl,
      id: uuid(),
    });
    setEducation(educationCopy);
  }
  return (
    <section id="edu-sectn">
      <h2>Education</h2>
      <Form
        onSubmit={handleSubmit}
        formType={isInActiveTab ? "education" : null}
      >
        <div>
          <label htmlFor="edu-name">School Name:</label>
          <input
            type="text"
            name="eduName"
            id="edu-name"
            placeholder="Ex: University of Cityname"
            required
          />
        </div>

        <div>
          <label htmlFor="edu-prgm">Educational Program:</label>
          <input
            type="text"
            name="eduPrgm"
            id="edu-prgm"
            placeholder="Ex: BSc. Economics"
          />
        </div>

        <div>
          <label htmlFor="edu-url">Include URL</label>
          <input
            type="url"
            name="eduUrl"
            id="edu-url"
            placeholder="Ex: https://examplesite.com"
          />
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

function SummaryForm({ summary, setSummary, Form, isInActiveTab = true }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setSummary({ ...summary, text: data.summary });
  }
  return (
    <section id="summary-sectn">
      <h2>Summary</h2>
      <Form onSubmit={handleSubmit} formType={isInActiveTab ? "summary" : null}>
        <div>
          <textarea
            name="summary"
            id="summary"
            cols="30"
            rows="10"
            placeholder="Ex: Project Manager with over 5 years of experience..."
            defaultValue={summary.text}
          ></textarea>
        </div>
      </Form>
    </section>
  );
}

function SkillForm({ skill, setSkill, Form, isInActiveTab = true }) {
  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target));
    setSkill({ ...skill, skills: data.skills.split(", ") });
  }
  return (
    <section id="skill-sectn">
      <h2>Skills</h2>
      <Form onSubmit={handleSubmit} formType={isInActiveTab ? "skill" : null}>
        <div>
          <label htmlFor="skills">
            Enter your skills seperated by comma and space, &ldquo;, &rdquo;
          </label>
          <input
            type="text"
            name="skills"
            id="skills"
            placeholder="Ex: Algorithms, Collaboration"
            defaultValue={skill.skills.join(", ")}
          />
        </div>
      </Form>
    </section>
  );
}

function WorkExpForm({
  experience,
  setExperience,
  Form,
  isInActiveTab = true,
}) {
  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target));
    const experienceCopy = { ...experience };

    experienceCopy.experiences.push({
      title: data.compName,
      startDate: new Date(data.jobStartDate).toDateString(),
      endDate: new Date(data.jobEndDate).toDateString(),
      company: data.compName,
      jobDescription: data.jobDescription,
      url: data.compUrl,
      id: uuid(),
    });
    setExperience(experienceCopy);
  }
  return (
    <section id="job-sectn">
      <h2>Work Experience</h2>
      <Form
        onSubmit={handleSubmit}
        formType={isInActiveTab ? "experience" : null}
      >
        <div>
          <label htmlFor="job-comp">Company Name:</label>
          <input
            type="text"
            name="compName"
            id="job-comp"
            placeholder="Ex: Google LLC"
            required
          />
        </div>

        <div>
          <label htmlFor="comp-url">Include URL</label>
          <input
            type="url"
            name="compUrl"
            id="comp-url"
            placeholder="Ex: https://google.com"
          />
        </div>

        <div>
          <label htmlFor="job-title">Job Title:</label>
          <input
            type="text"
            name="job-title"
            id="job-title"
            placeholder="Ex: Project Manager"
            required
          />
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
          <textarea
            type="date"
            name="jobDescription"
            id="job-sum"
            placeholder="A brief summary about your time here"
          ></textarea>
        </div>
      </Form>
    </section>
  );
}

function ActiveForms({ children }) {
  return <div id="active-form-contr">{children}</div>;
}

function AddBtns({ text, clickHandler }) {
  return (
    <button type="button" onClick={clickHandler}>
      {text}
    </button>
  );
}

function AddBtnsContr({ activeFormList, setActiveFormList }) {
  function addFormHandler(formType) {
    return () => setActiveFormList([...activeFormList, formType]);
  }
  return (
    <div id="addbtns-contr">
      {!activeFormList.includes("general") && (
        <AddBtns text="Set General" clickHandler={addFormHandler("general")} />
      )}
      {!activeFormList.includes("skill") && (
        <AddBtns text="Set Skills" clickHandler={addFormHandler("skill")} />
      )}
      {!activeFormList.includes("summary") && (
        <AddBtns text="Set Summary" clickHandler={addFormHandler("summary")} />
      )}
      {!activeFormList.includes("socials") && (
        <AddBtns text="Set Socials" clickHandler={addFormHandler("social")} />
      )}
      {!activeFormList.includes("experience") && (
        <AddBtns
          text="Add Experience"
          clickHandler={addFormHandler("experience")}
        />
      )}
      {!activeFormList.includes("education") && (
        <AddBtns
          text="Add Education"
          clickHandler={addFormHandler("education")}
        />
      )}
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
  const [activeFormList, setActiveFormList] = useState([
    "general",
    "skill",
    "summary",
  ]);
  const [dispFormsOpen, setDispFormsOpen] = useState([
    { section: "general", list: [] },
  ]);

  function Form({ children, submitTxt = "Save", onSubmit, formType }) {
    function handleOnSubmit(e) {
      e.preventDefault();
      onSubmit(e);
      formType &&
        setActiveFormList(
          [...activeFormList].filter((elem) => elem !== formType)
        );
    }

    return (
      <form onSubmit={handleOnSubmit}>
        {children}
        <button type="submit">{submitTxt}</button>
      </form>
    );
  }

  function handleTabChange(e) {
    setActiveTab(e.target.getAttribute("for"));
  }
  function toggleVisibility(e) {
    const section = e.currentTarget.getAttribute("data-sectn");
    setSectionsInfo(
      sectionsInfo.map((info) =>
        info.section === section
          ? { ...info, isVisible: !info.isVisible }
          : info
      )
    );
  }
  function handleEditClicked(e) {
    const section = e.currentTarget.getAttribute("data-sectn"),
      dispFormsOpenCopy = [...dispFormsOpen];
    dispFormsOpenCopy.push({ section, list: [] });
    setDispFormsOpen(dispFormsOpenCopy);
  }

  return (
    <div id="ctrls-contr">
      <div id="tabs">
        {activeTab === "frms-tab" ? (
          <>
            <input
              type="radio"
              id="frms-tab"
              name="active-tab"
              defaultChecked
            />
            <input type="radio" id="disp-tab" name="active-tab" />
          </>
        ) : (
          <>
            <input type="radio" id="frms-tab" name="active-tab" />
            <input
              type="radio"
              id="disp-tab"
              name="active-tab"
              defaultChecked
            />
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
            {activeFormList.map((form) => {
              switch (form) {
                case "general":
                  return (
                    <GeneralForm
                      key={form}
                      general={general}
                      setGeneral={setGeneral}
                      Form={Form}
                    />
                  );
                case "summary":
                  return (
                    <SummaryForm
                      key={form}
                      summary={summary}
                      setSummary={setSummary}
                      Form={Form}
                    />
                  );
                case "skill":
                  return (
                    <SkillForm
                      key={form}
                      skill={skill}
                      setSkill={setSkill}
                      Form={Form}
                    />
                  );
                case "experience":
                  return (
                    <WorkExpForm
                      key={form}
                      experience={experience}
                      setExperience={setExperience}
                      Form={Form}
                    />
                  );
                case "education":
                  return (
                    <EducationForm
                      key={form}
                      education={education}
                      setEducation={setEducation}
                      Form={Form}
                    />
                  );
              }
            })}
          </ActiveForms>
          <AddBtnsContr
            activeFormList={activeFormList}
            setActiveFormList={setActiveFormList}
          />
        </div>
        <div id="disp">
          <ReactSortable
            tag={"ul"}
            id="sectn-order-contr"
            list={sectionsInfo}
            setList={setSectionsInfo}
          >
            {sectionsInfo.map((sectn) => (
              <SectionsList
                key={sectn.id}
                sectn={sectn}
                Form={Form}
                toggleVisibility={toggleVisibility}
                handleEditClicked={handleEditClicked}
                states={{
                  general,
                  setGeneral,
                  summary,
                  setSummary,
                  experience,
                  setExperience,
                  education,
                  setEducation,
                  skill,
                  setSkill,
                  dispFormsOpen
                }}
              />
            ))}
          </ReactSortable>
        </div>
      </div>
    </div>
  );
}

function SectionsList({ sectn, Form, toggleVisibility, handleEditClicked, states }) {
  return (
    <li className="movable">
      <div className="disp-list-itms">
        <Icon title="Drag" path={mdiDragVertical} className="icons" />
        <Icon
          title="Toggle Visibility"
          path={sectn.isVisible ? mdiEye : mdiEyeOff}
          data-sectn={sectn.section}
          className="icons clickable"
          onClick={toggleVisibility}
        />
        <div className="section-names">{sectn.section}</div>
        <Icon
          title="Edit Section"
          path={mdiPencil}
          data-sectn={sectn.section}
          className="icons clickable"
          onClick={handleEditClicked}
        />
        <Icon
          title="Delete Section"
          path={mdiTrashCanOutline}
          data-sectn={sectn.section}
          className="icons clickable"
        />
      </div>

      {states.dispFormsOpen.map((item) => {
        console.log(item);
        item.section === sectn.section ? (
          <>
            {sectn.section === "general" && (
              <GeneralForm
                general={states.general}
                setGeneral={states.setGeneral}
                Form={Form}
                isInActiveTab={false}
              />
            )}
            {sectn.section === "summary" && (
              <SummaryForm
                summary={states.summary}
                setSummary={states.setSummary}
                Form={Form}
                isInActiveTab={false}
              />
            )}
          </>
        ) : null;
      })}
    </li>
  );
}
