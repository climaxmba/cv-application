import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { v1 as uuid } from "uuid";
import Icon from "@mdi/react";
import {
  mdiPlusThick,
  mdiCog,
  mdiPrinterEye,
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
          <span className="validation-msg">This field is required</span>
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
          <span className="validation-msg">Enter a valid email</span>
        </div>

        <div>
          <label htmlFor="person-phone">Phone Number:</label>
          <input
            type="tel"
            name="personPhone"
            id="person-phone"
            pattern="^(\+?)[\-0-9 ]{8,15}$"
            defaultValue={general.phone}
          />
          <span className="validation-msg">Enter a phone number</span>
        </div>
      </Form>
    </section>
  );
}

function SocialsForm({ socials, setSocials, Form, isInActiveTab = true }) {
  function handleSubmit(e) {
    const data = Object.fromEntries(new FormData(e.target));
    setSocials({
      ...socials,
      urls: data.socialUrls ? data.socialUrls.split("\n") : [],
    });
  }
  return (
    <section id="skill-sectn">
      <h2>Set Socials</h2>
      <Form onSubmit={handleSubmit} formType={isInActiveTab ? "socials" : null}>
        <div>
          <label htmlFor="social-urls">
            Enter your social links seperated by paragraphs
          </label>
          <textarea
            name="socialUrls"
            id="social-urls"
            cols="30"
            rows="8"
            placeholder={
              "Example:\nhttps://www.facebook.com/username\nhttps://www.linkedin.com/profile"
            }
            style={{ lineHeight: 1.6, marginTop: "1rem" }}
            defaultValue={socials && socials.urls.join("\n")}
          ></textarea>
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
  id = "",
}) {
  function handleSubmit(e) {
    const formData = Object.fromEntries(new FormData(e.target));
    const data = {
      schoolName: formData.eduName,
      course: formData.eduPrgm,
      startDate: formData.eduStartDate
        ? new Date(formData.eduStartDate).toDateString()
        : null,
      endDate: formData.eduEndDate
        ? new Date(formData.eduEndDate).toDateString()
        : null,
      url: formData.eduUrl,
      id: id || uuid(),
    };

    // If id exists, then edit the data, else, add new data to the list
    if (id) {
      setEducation({
        ...education,
        schools: education.schools.map((school) =>
          school.id === id ? data : school
        ),
      });
    } else {
      const educationCopy = { ...education };
      educationCopy.schools.push(data);
      setEducation(educationCopy);
    }
  }
  const currData = id
    ? education.schools.filter((exp) => exp.id === id)[0]
    : {};

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
            defaultValue={currData.schoolName}
            required
          />
          <span className="validation-msg">This field is required</span>
        </div>

        <div>
          <label htmlFor="edu-prgm">Educational Program:</label>
          <input
            type="text"
            name="eduPrgm"
            id="edu-prgm"
            placeholder="Ex: BSc. Economics"
            defaultValue={currData.course}
            required
          />
          <span className="validation-msg">This field is required</span>
        </div>

        <div>
          <label htmlFor="edu-url">Include URL</label>
          <input
            type="url"
            name="eduUrl"
            id="edu-url"
            placeholder="Ex: https://examplesite.com"
            defaultValue={currData.url}
          />
          <span className="validation-msg">
            A valid URL starts with https:// or http://
          </span>
        </div>

        <div>
          <label htmlFor="edu-sdate">Start Date:</label>
          <input
            type="date"
            name="eduStartDate"
            id="edu-sdate"
            defaultValue={currData.startDate}
          />
        </div>

        <div>
          <label htmlFor="edu-edate">End Date:</label>
          <input
            type="date"
            name="eduEndDate"
            id="edu-edate"
            defaultValue={currData.endDate}
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
  id = "",
}) {
  function handleSubmit(e) {
    const formData = Object.fromEntries(new FormData(e.target));
    const data = {
      title: formData.jobTitle,
      startDate: formData.eduStartDate
        ? new Date(formData.eduStartDate).toDateString()
        : null,
      endDate: formData.eduEndDate
        ? new Date(formData.eduEndDate).toDateString()
        : null,
      company: formData.compName,
      jobDescription: formData.jobDescription,
      url: formData.compUrl,
      id: id || uuid(),
    };

    // If id exists, then edit the data, else, add new data to the list
    if (id) {
      setExperience({
        ...experience,
        experiences: experience.experiences.map((exp) =>
          exp.id === id ? data : exp
        ),
      });
    } else {
      const experienceCopy = { ...experience };
      experienceCopy.experiences.push(data);
      setExperience(experienceCopy);
    }
  }
  const currData = id
    ? experience.experiences.filter((exp) => exp.id === id)[0]
    : {};

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
            defaultValue={currData.company}
            id="job-comp"
            placeholder="Ex: Google LLC"
            required
          />
          <span className="validation-msg">This field is required</span>
        </div>

        <div>
          <label htmlFor="comp-url">Include URL</label>
          <input
            type="url"
            name="compUrl"
            id="comp-url"
            placeholder="Ex: https://google.com"
            defaultValue={currData.url}
          />
          <span className="validation-msg">
            A valid URL starts with https:// or http://
          </span>
        </div>

        <div>
          <label htmlFor="job-title">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            id="job-title"
            placeholder="Ex: Project Manager"
            required
            defaultValue={currData.title}
          />
          <span className="validation-msg">This field is required</span>
        </div>

        <div>
          <label htmlFor="job-sdate">Start Date:</label>
          <input
            type="date"
            name="jobStartDate"
            id="job-sdate"
            defaultValue={currData.startDate}
          />
        </div>

        <div>
          <label htmlFor="job-edate">End Date:</label>
          <input
            type="date"
            name="jobEndDate"
            id="job-edate"
            defaultValue={currData.endDate}
          />
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
    setSkill({ ...skill, skills: data.skills ? data.skills.split(", ") : [] });
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
        <AddBtns text="Set Socials" clickHandler={addFormHandler("socials")} />
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

function SectionsListItem({
  sectn,
  toggleVisibility,
  handleEditClicked,
  states,
}) {
  function setExpList(expData) {
    states.setExperience({ ...sectn.experience, experiences: expData });
  }
  function setSchools(schoolsData) {
    states.setEducation({ ...states.education, schools: schoolsData });
  }
  function handleDelete(e) {
    const section = e.currentTarget.getAttribute("data-sectn");

    // Filter out the section to be deleted
    states.setSectionsInfo(
      states.sectionsInfo.filter((sectn) => sectn.section !== section)
    );

    // Reset all fields
    if (section === "general") {
      states.setGeneral({
        ...states.general,
        name: "",
        mail: "",
        phone: "",
        socials: [],
      });
    } else if (section === "summary") {
      states.setSummary({ ...states.summary, text: "" });
    } else if (section === "education") {
      states.setEducation({ ...states.education, schools: [] });
    } else if (section === "experience") {
      states.setExperience({ ...states.experience, experiences: [] });
    } else if (section === "skills") {
      states.setSkill({ ...states.skill, skills: [] });
    } else {
      // Nested lists
      if (section === "experiences") {
        const id = e.currentTarget.getAttribute("data-expid");
        const experiences = [
          ...states.experience.experiences.filter((exp) => exp.id !== id),
        ];
        states.setExperience({ ...states.experience, experiences });
      } else if (section === "schools") {
        const id = e.currentTarget.getAttribute("data-schoolid");
        const schools = [
          ...states.education.schools.filter((school) => school.id !== id),
        ];
        states.setEducation({ ...states.education, schools });
      }
    }
  }

  const hasNoContent =
    (sectn.section === "general" && !states.general.name) ||
    (sectn.section === "socials" && !states.socials.urls.length) ||
    (sectn.section === "summary" && !states.summary.text) ||
    (sectn.section === "education" && !states.education.schools.length) ||
    (sectn.section === "experience" && !states.experience.experiences.length) ||
    (sectn.section === "skills" && !states.skill.skills.length);

  return (
    <li
      className={`movable ${hasNoContent && "nocontent-item"}`}
      title={hasNoContent ? "This section has no content for preview" : ""}
    >
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
        {sectn.section !== "education" && sectn.section !== "experience" && (
          <Icon
            title="Edit Section"
            path={mdiPencil}
            data-sectn={sectn.section}
            className="icons clickable"
            onClick={handleEditClicked}
          />
        )}
        <Icon
          title="Delete Section"
          path={mdiTrashCanOutline}
          data-sectn={sectn.section}
          className="icons clickable"
          onClick={handleDelete}
        />
      </div>
      
      {/* Nested lists */}
      {sectn.section === "experience" && (
        <ReactSortable
          tag={"ul"}
          id="nested-list-contr"
          list={states.experience.experiences}
          setList={setExpList}
          animation={300}
          delay={0.001}
          swapThreshold={0.5}
          group="exp"
          ghostClass="drag-ghost"
        >
          {states.experience.experiences.map((exp) => (
            <li key={exp.id} className="nested-disp-list">
              <Icon title="Drag" path={mdiDragVertical} className="icons" />
              <div className="nested-sectn-names">
                {exp.title} - {exp.company}
              </div>
              <Icon
                title="Edit"
                path={mdiPencil}
                data-sectn={"experiences"}
                data-expid={exp.id}
                className="icons clickable"
                onClick={handleEditClicked}
              />
              <Icon
                title="Delete"
                path={mdiTrashCanOutline}
                data-sectn={"experiences"}
                data-expid={exp.id}
                className="icons clickable"
                onClick={handleDelete}
              />
            </li>
          ))}
        </ReactSortable>
      )}
      {sectn.section === "education" && (
        <ReactSortable
          tag={"ul"}
          id="nested-list-contr"
          list={states.education.schools}
          setList={setSchools}
          animation={300}
          delay={0.001}
          swapThreshold={0.5}
          group="edu"
          ghostClass="drag-ghost"
        >
          {states.education.schools.map((school) => (
            <li key={school.id} className="nested-disp-list">
              <Icon title="Drag" path={mdiDragVertical} className="icons" />
              <div className="nested-sectn-names">
                {school.course} - {school.schoolName}
              </div>
              <Icon
                title="Edit"
                path={mdiPencil}
                data-sectn={"schools"}
                data-schoolid={school.id}
                className="icons clickable"
                onClick={handleEditClicked}
              />
              <Icon
                title="Delete"
                path={mdiTrashCanOutline}
                data-sectn={"schools"}
                data-schoolid={school.id}
                className="icons clickable"
                onClick={handleDelete}
              />
            </li>
          ))}
        </ReactSortable>
      )}
    </li>
  );
}

export default function Controls({
  general,
  setGeneral,
  socials,
  setSocials,
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
  const [activeFormList, setActiveFormList] = useState(["general"]);
  const [dispFormEditing, setDispFormEditing] = useState({});

  function Form({ children, submitTxt = "Save", onSubmit, formType }) {
    function handleOnSubmit(e) {
      e.preventDefault();
      onSubmit(e);
      formType &&
        setActiveFormList(
          [...activeFormList].filter((elem) => elem !== formType)
        );

      dispFormEditing && setDispFormEditing({});
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
    const section = e.currentTarget.getAttribute("data-sectn");
    const data = {
      section,
      id: e.currentTarget.getAttribute(
        section === "experiences"
          ? "data-expid"
          : section === "schools"
          ? "data-schoolid"
          : null
      ),
    };
    setDispFormEditing(data);
  }
  function updateSectionsList(sectn) {
    // Push data if absent in sectionsInfo
    if (
      !sectionsInfo.filter((sectnData) => sectnData.section === sectn).length
    ) {
      const sectionsInfoCopy = [...sectionsInfo];
      sectionsInfoCopy.push({
        isVisible: true,
        section: sectn,
        id: uuid(),
      });
      setSectionsInfo(sectionsInfoCopy);
    }
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
            <input type="radio" id="null-tab" name="active-tab" />
          </>
        ) : activeTab === "disp-tab" ? (
          <>
            <input type="radio" id="frms-tab" name="active-tab" />
            <input
              type="radio"
              id="disp-tab"
              name="active-tab"
              defaultChecked
            />
            <input type="radio" id="null-tab" name="active-tab" />
          </>
        ) : (
          <>
            <input type="radio" id="frms-tab" name="active-tab" />
            <input type="radio" id="disp-tab" name="active-tab" />
            <input
              type="radio"
              id="null-tab"
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
          <label
            htmlFor="null-tab"
            className="clickable text-with-icons"
            onClick={handleTabChange}
          >
            <Icon path={mdiPrinterEye} className="icons" />
            Preview
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
                      setGeneral={(data) => {
                        updateSectionsList("general");
                        setGeneral(data);
                      }}
                      Form={Form}
                    />
                  );
                case "socials":
                  return (
                    <SocialsForm
                      key={form}
                      socials={socials}
                      setSocials={(data) => {
                        updateSectionsList("socials");
                        setSocials(data);
                      }}
                      Form={Form}
                    />
                  );
                case "summary":
                  return (
                    <SummaryForm
                      key={form}
                      summary={summary}
                      setSummary={(data) => {
                        updateSectionsList("summary");
                        setSummary(data);
                      }}
                      Form={Form}
                    />
                  );
                case "skill":
                  return (
                    <SkillForm
                      key={form}
                      skill={skill}
                      setSkill={(data) => {
                        updateSectionsList("skills");
                        setSkill(data);
                      }}
                      Form={Form}
                    />
                  );
                case "experience":
                  return (
                    <WorkExpForm
                      key={form}
                      experience={experience}
                      setExperience={(data) => {
                        updateSectionsList("experience");
                        setExperience(data);
                      }}
                      Form={Form}
                    />
                  );
                case "education":
                  return (
                    <EducationForm
                      key={form}
                      education={education}
                      setEducation={(data) => {
                        updateSectionsList("education");
                        setEducation(data);
                      }}
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
          {dispFormEditing.section === "general" ? (
            <GeneralForm
              general={general}
              setGeneral={setGeneral}
              Form={Form}
              isInActiveTab={false}
            />
          ) : dispFormEditing.section === "socials" ? (
            <SocialsForm
              socials={socials}
              setSocials={setSocials}
              Form={Form}
              isInActiveTab={false}
            />
          ) : dispFormEditing.section === "summary" ? (
            <SummaryForm
              summary={summary}
              setSummary={setSummary}
              Form={Form}
              isInActiveTab={false}
            />
          ) : dispFormEditing.section === "skills" ? (
            <SkillForm
              skill={skill}
              setSkill={setSkill}
              Form={Form}
              isInActiveTab={false}
            />
          ) : dispFormEditing.section === "experiences" ? (
            <WorkExpForm
              experience={experience}
              setExperience={setExperience}
              Form={Form}
              isInActiveTab={false}
              id={dispFormEditing.id}
            />
          ) : (
            dispFormEditing.section === "schools" && (
              <EducationForm
                education={education}
                setEducation={setEducation}
                Form={Form}
                isInActiveTab={false}
                id={dispFormEditing.id}
              />
            )
          )}
          <ReactSortable
            tag={"ul"}
            id="sectn-order-contr"
            list={sectionsInfo}
            setList={setSectionsInfo}
            animation={300}
            delay={0.001}
            swapThreshold={0.5}
            group="main"
            ghostClass="drag-ghost"
          >
            {sectionsInfo.map((sectn) => (
              <SectionsListItem
                key={sectn.id}
                sectn={sectn}
                toggleVisibility={toggleVisibility}
                handleEditClicked={handleEditClicked}
                states={{
                  general,
                  setGeneral,
                  socials,
                  setSocials,
                  summary,
                  setSummary,
                  experience,
                  setExperience,
                  education,
                  setEducation,
                  skill,
                  setSkill,
                  sectionsInfo,
                  setSectionsInfo,
                  setDispFormEditing,
                }}
              />
            ))}
          </ReactSortable>
        </div>
      </div>
    </div>
  );
}
