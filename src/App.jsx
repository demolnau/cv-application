import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactInformation from './components/ContactInformation.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
//import CVform from './components/CVform.jsx'
import sampleData from './components/sample_data.js'

const RenderInfo = function({info}){
  return(
    <div>
      <h1>{info.userName}</h1>
      <div id="info_details">
        <div>{info.phone}</div>
        <div>{info.email}</div>
        <div>{info.address}</div>
      </div>
    </div>
  )
}

const RenderEd = function({ed}){
  
  return(
    <div id="educationDetails">
      <div id="left">
        <div id="range_of_ed">{ed.studyStartDate}-{ed.studyEndDate}</div>
        <div id="location">{ed.schoolLocation}</div>
      </div>
      <div id='right'>
        <div id="school"><b>{ed.schoolName}</b></div>
        <div id="degree">{ed.degree} in {ed.fieldOfStudy}</div>
        
      </div>
    </div>
  )
}

const RenderExp=function({exp}){
  return(
    <div id="expDetails">
      <div id="left">
        <div>{exp.startWorkDate}-{exp.endWorkDate}</div>
        <div>{exp.workLocation}</div>
      </div>
      <div id='right'>
        <div><b>{exp.company}</b></div>
        <div>{exp.jobTitle}</div>
        <div>{exp.tasks}</div>
      </div>
    </div>
  )
}

// const clearInput = function(){
//   var allInputs = document.querySelectorAll('input')
//   allInputs.forEach(singleInput => singleInput.value = '')
// }


function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState(sampleData.contactInformation)
  const [ed,setEd] = useState(sampleData.education)
  const [exp, setExp]=useState(sampleData.experience)
  


  const getInfo = function(info) {
    console.log(`name: ${info.userName} \n address: ${info.address} \n phone: ${info.phone} \n email: ${info.email}`);
    setInfo(info);
  }

  const getEd = function(ed){
    console.log("Education added!")
    console.log(`school: ${ed.schoolName} \n 
                  degree: ${ed.degree} \n
                  field of study: ${ed.fieldOfStudy} \n 
                  startDate: ${ed.startDate} \n 
                  endDate: ${ed.endDate}`
    )
    setEd(ed);
  }

  const getExp = function(exp){
    console.log("Work Experience Added");
    setExp(exp);
   
  }

  return (
    <>
    <div id='cv_generator'>
      <div id='col-1'>
      <h1>CV Generator</h1>
        <ContactInformation
            handleInformation={getInfo}
        />
        <Education
          handleEducation={getEd}
          />
        <Experience
          handleExp={getExp}
        />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
      <div id='col-2'>
        <div id="generatedCV">
          <div id="ContactSection">
            <RenderInfo info={info}
            />
          </div>
          <div id="EducationSection" className="section">
            <h2>Education</h2>
            <RenderEd ed = {ed}/>
          </div>
          <div id="ExperienceSection" className="section">
            <h2>Work Experience</h2>
            <RenderExp exp={exp}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
