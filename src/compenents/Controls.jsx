function Form({ children, submitTxt = "Save", onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit">{submitTxt}</button>
    </form>
  );
}

function GeneralForm() {
  return (
    <section id="general-sectn">
      <h2>General Information</h2>
      <Form>
        <div>
          <label htmlFor="person-name">Name:</label>
          <input type="text" name="person-name" id="person-name" />
        </div>

        <div>
          <label htmlFor="person-email">Email:</label>
          <input type="text" name="person-name" id="person-email" />
        </div>

        <div>
          <label htmlFor="person-phone">Phone Number:</label>
          <input type="text" name="person-name" id="person-phone" />
        </div>
      </Form>
    </section>
  );
}

function EducationForm() {
  return (
    <section id="edu-sectn">
      <h2>Education</h2>
      <Form>
        <div>
          <label htmlFor="edu-name">School Name:</label>
          <input type="text" name="edu-name" id="edu-name" />
        </div>

        <div>
          <label htmlFor="edu-prgm">Educational Program:</label>
          <input type="text" name="edu-prgm" id="edu-prgm" />
        </div>

        <div>
          <label htmlFor="edu-sdate">Start Date:</label>
          <input type="date" name="edu-sdate" id="edu-sdate" />
        </div>

        <div>
          <label htmlFor="edu-edate">End Date:</label>
          <input type="date" name="edu-edate" id="edu-edate" />
        </div>
      </Form>
    </section>
  );
}

function SummaryForm() {
  return (
    <section id="summary-sectn">
      <h2>Summary</h2>
      <Form>
        <div>
          <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
        </div>
      </Form>
    </section>
  );
}

function WorkExpForm() {
  return (
    <section id="job-sectn">
      <h2>Work Experience</h2>
      <Form>
        <div>
          <label htmlFor="job-comp">Company Name:</label>
          <input type="text" name="comp-name" id="job-comp" />
        </div>

        <div>
          <label htmlFor="job-title">Job Title:</label>
          <input type="text" name="job-title" id="job-title" />
        </div>

        <div>
          <label htmlFor="job-sdate">Start Date:</label>
          <input type="date" name="job-sdate" id="job-sdate" />
        </div>

        <div>
          <label htmlFor="job-edate">End Date:</label>
          <input type="date" name="job-edate" id="job-edate" />
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

export default function Controls() {
  return (
    <div id="ctrls-contr">
      <ActiveForms>
        <GeneralForm />
        <EducationForm />
      </ActiveForms>
      <AddBtnsContr />
    </div>
  );
}
