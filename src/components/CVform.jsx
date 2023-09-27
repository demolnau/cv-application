//  import ContactInformation from './ContactInformation.jsx'
// import Education from './Education.jsx'
// import Experience from './Experience.jsx'
//

function CVform({name, address, phone, email, school, degree, studyStartDate, studyEndDate, workTitle, company, responsibilities, startWorkDate, endWorkDate}){
    return(
      <div id="CVform">
        <h1> CV </h1>
        <div id="ContactSection" className="section">
          <h2>Contact Information</h2>
          <p>{name}</p>
          <p>{address}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div id="EducationSection" className="section">
          <h2>Education</h2>
          <p>{school}</p>
          <p>{degree}</p>
          <p>{studyStartDate}-{studyEndDate}</p>
        </div>
        <div id="ExperienceSection" className="section">
          <h2>Experience</h2>
          <p>{workTitle}</p>
          <p>{company}</p>
          <p>{responsibilities}</p>
          <p>{startWorkDate}-{endWorkDate}</p>
        </div>
      </div>
    )
}
export default CVform