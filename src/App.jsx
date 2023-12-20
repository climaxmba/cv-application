import { useState } from "react";
// import sampleData from "./assets/sampleData.json";
import "./styles/App.css";
import Controls from "./compenents/Controls";
import Display from "./compenents/Display";
import { PanneledDiv } from "./compenents/utils";

const generalData = {
  id: 0,
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
  id: 1,
  text: "",
};

const educationData = {
  id: 2,
  schools: [
    {
      schoolName: "Harvard",
      course: "BSc. Computer Engineering",
      startDate: "Feb 2005",
      endDate: "Sept 2012",
    },
    {
      schoolName: "Cousera",
      course: "Cloud Computing",
      startDate: "May 2019",
      endDate: "Sept 2019",
    },
  ],
};

const experienceData = {
  id: 3,
  experiences: [
    {
      title: "Software Engineer",
      startDate: "Jan 2020",
      endDate: "Present",
      company: "Meta",
      jobDescription: "Job decsciption",
    },
    {
      title: "App Developer",
      startDate: "Jan 2018",
      endDate: "Dec 2019",
      company: "Netflix",
      jobDescription: "Job decsciption",
    },
  ],
};

const skillData = {
  id: 4,
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
