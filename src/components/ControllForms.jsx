import { v1 as uuid } from "uuid";

function formatDate(dateStr) {
  if (!dateStr) return null;

  const dateArr = new Date(dateStr).toDateString().split(" ");
  return `${dateArr[1]} ${dateArr[3]}`;
}

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
      startDate: formatDate(formData.eduStartDate),
      endDate: formData.isPresent ? "Present" : formatDate(formData.eduEndDate),
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
          <input type="checkbox" name="isPresent" id="is-edu-present" className="ghost-checkbox" />
          <label htmlFor="is-edu-present" className="clickable">I&apos;m currently studying here</label>

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
      startDate: formatDate(formData.jobStartDate),
      endDate: formData.isPresent ? "Present" : formatDate(formData.jobEndDate),
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
          <input type="checkbox" name="isPresent" id="is-exp-present" className="ghost-checkbox" />
          <label htmlFor="is-exp-present" className="clickable">I&apos;m currently working here</label>

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
            rows={10}
            cols={30}
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

export { GeneralForm, SocialsForm, EducationForm, WorkExpForm, SummaryForm, SkillForm };