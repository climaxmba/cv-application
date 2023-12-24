import { useState } from "react";
// import sampleData from "./assets/sampleData.json";
import "./styles/App.css";
import { v1 as uuid } from 'uuid';
import Controls from "./compenents/Controls";
import Display from "./compenents/Display";
import { PanneledDiv } from "./compenents/utils";

const generalData = {
  id: uuid(),
  name: "Andrew Stone",
  mail: "andrewstone@not-real-people.com",
  phone: "555-555-555",
  socials: [
    {
      platform: "LinkedIn",
      url: "",
    },
    {
      platform: "GitHub",
      url: "",
    },
    {
      platform: "Facebook",
      url: "",
    },
  ],
};

const summaryData = {
  id: uuid(),
  text: "",
};

const educationData = {
  id: uuid(),
  schools: [
    {
      id: uuid(),
      schoolName: "Harvard",
      course: "BSc. Computer Engineering",
      startDate: "Feb 2005",
      endDate: "Sept 2012",
      url: "",
    },
    {
      id: uuid(),
      schoolName: "Cousera",
      course: "Cloud Computing",
      startDate: "May 2019",
      endDate: "Sept 2019",
      url: "",
    },
  ],
};

const experienceData = {
  id: uuid(),
  experiences: [
    {
      id: uuid(),
      title: "Software Engineer",
      startDate: "Jan 2020",
      endDate: "Present",
      company: "Meta",
      jobDescription: "Job decsciption",
      url: "",
    },
    {
      id: uuid(),
      title: "App Developer",
      startDate: "Jan 2018",
      endDate: "Dec 2019",
      company: "Netflix",
      jobDescription: "Job decsciption",
      url: "",
    },
  ],
};

const skillData = {
  id: uuid(),
  skills: ["HTML", "CSS", "JavaScript"],
};

const sectionsInfoData = [
  {
    isVisible: true,
    section: "general"
  },
  {
    isVisible: true,
    section: "summary"
  },
  {
    isVisible: true,
    section: "experience"
  },
  {
    isVisible: true,
    section: "education"
  },
  {
    isVisible: true,
    section: "skills"
  },
];

function App() {
  const [general, setGeneral] = useState(generalData);
  const [summary, setSummary] = useState(summaryData);
  const [education, setEducation] = useState(educationData);
  const [experience, setExperience] = useState(experienceData);
  const [skill, setSkill] = useState(skillData);
  const [sectionsInfo, setSectionsInfo] = useState(sectionsInfoData);

  return (
    <>
      <PanneledDiv>
        <Controls
          general={general}
          setGeneral={setGeneral}
          summary={summary}
          setSummary={setSummary}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
          skill={skill}
          setSkill={setSkill}
          sectionsInfo={sectionsInfo}
          setSectionsInfo={setSectionsInfo}
        />
        <Display
          general={general}
          summary={summary}
          education={education}
          experience={experience}
          skill={skill}
          sectionsInfo={sectionsInfo}
        />
      </PanneledDiv>
    </>
  );
}

export default App;
