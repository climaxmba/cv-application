function GeneralSectn() {
  return (
    <section>
      <h2 id="candidatename">Andrew Stone</h2>
      <div id="contact-contr">
        <a href="mailto:andrewstone@not-real-people.com">
          <span className="icon"></span>
          <span className="linktxt">andrewstone@not-real-people.com</span>
        </a>
        <a href="tel:555-555-555">
          <span className="icon"></span>
          <span className="linktxt">555-555-555</span>
        </a>
      </div>
      <div id="social-conrtr">LinkedIn, Facebook, GitHub</div>
    </section>
  );
}

function SummarySectn() {
  return (
    <section>
      <h2>Summary</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui modi
        doloribus nobis veniam voluptas ex ipsa accusantium cum, magnam
        similique omnis, quis nam laboriosam nesciunt veritatis at dolor?
        Placeat, ex.
      </p>
    </section>
  );
}

function ExperienceSectn() {
  return (
    <section>
      <h2>Experience</h2>

      <div className="exp-contrs">
        <h3 className="jobtitle">Software Engineer</h3>
        <div className="companyname">Meta</div>
        <div className="date">Jan 2020 - Present</div>
        <p className="jobdetails">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ex
          possimus velit, asperiores doloribus provident.
        </p>
      </div>

      <div className="exp-contrs">
        <h3 className="jobtitle">Add developer</h3>
        <div className="companyname">Netflix</div>
        <div className="date">Jan 2018 - Dec 2019</div>
        <p className="jobdetails">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ex
          possimus velit, asperiores doloribus provident.
        </p>
      </div>
    </section>
  );
}

function EducationSectn() {
  return (
    <section>
      <h2>Education</h2>
      <div id="educations">
        <div className="edu-contrs">
          <h3 className="schoolname">Harvard</h3>
          <div className="coursename">BSc. Computer Engineering</div>
          <div className="date">Feb 2005 - 2012</div>
        </div>

        <div className="edu-contrs">
          <h3 className="schoolname">Cousera</h3>
          <div className="coursename">Cloud Computing</div>
          <div className="date">May 2019 - Sept 2019</div>
        </div>
      </div>
    </section>
  );
}

function CustomSectn() {
  return (
    <section>
      <h2>Custom Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        fugit!
      </p>
    </section>
  );
}

function SkillsSectn() {
  return (
    <section>
      <h2>Skills</h2>
      <ul id="skill-list">
        <li>HTML</li>
        <li>JavaScript</li>
        <li>CSS</li>
      </ul>
    </section>
  );
}

export default function Display() {
  // TODO
  return (
    <div id="cv-disp">
      <GeneralSectn />
      <SummarySectn />
      <CustomSectn />
      <ExperienceSectn />
      <EducationSectn />
      <SkillsSectn />
    </div>
  );
}
