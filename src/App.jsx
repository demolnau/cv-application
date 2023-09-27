import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactInformation from './components/ContactInformation.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
//import CVform from './components/CVform.jsx'
import sampleData from './components/sample_data.js'
import uniqid from "uniqid";

const RenderInfo = function({info}){
  console.log("Rendering Contact Information Now")
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

const SingleEducationEvent=function(props){
  return(
    <div id='singleEd'>
          <div id="left">
            <div id="range_of_ed">{props.education.studyStartDate}-{props.education.studyEndDate}</div>
            <div id="location">{props.education.schoolLocation}</div>
          </div>

          <div id='right'>
            <div id="school"><b>{props.education.schoolName}</b></div>
            <div id="degree">{props.education.degree} in {props.education.fieldOfStudy}</div>
          </div>
    </div>
  )
}
const EducationList=function(props){
  return(
    <div id="educationDetails">
      {
        props.ed.map((education) => {
          return <SingleEducationEvent key={uniqid()} education={education}/>
        }
        )
      }
    </div>
  )
}
const RenderEd = function({ed}){
  console.log("Rendering Education Section Now")
  //console.log(ed)
  return(
    <div id="EducationSection" className="section">
    <h2>Education</h2>
    <EducationList ed={ed}/>
  </div>
    
  )
}


const SingleExperience=function(props){
  return(
    <div id='singleExp'>
          <div id="left">
            <div>{props.singleExp.startWorkDate}-{props.singleExp.endWorkDate}</div>
            <div>{props.singleExp.workLocation}</div>
          </div>
          <div id='right'>
            <div><b>{props.singleExp.company}</b></div>
            <div>{props.singleExp.jobTitle}</div>
            <div>{props.singleExp.tasks}</div>
          </div>
    </div>
  )
}
const ExperienceList=function(props){
  return(
    <div id="expDetails">
      {props.exp.map((singleExp) => 
      {return <SingleExperience key={uniqid()} singleExp={singleExp}/>
      })}
      </div>
  )
}

const RenderExp=function({exp}){

  exp.map((singleExp)=>{
    console.log(singleExp)
  })
  return(
    <div id="ExperienceSection" className="section">
    <h2>Work Experience</h2>
    <ExperienceList exp={exp}/>
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
  const [ed,setEd] = useState(sampleData.sections.educations)
  const [exp, setExp]=useState(sampleData.sections.experiences)
  


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
    setEd((previousEducationList)=>{
      return([...previousEducationList,{
        schoolName: ed.schoolName,
        schoolLocation: ed.schoolLocation,
        degree: ed.degree,
        fieldOfStudy: ed.fieldOfStudy,
        studyStartDate: ed.studyStartDate,
        studyEndDate: ed.studyEndDate,
        id: uniqid()
      }
      ])
    });
  }

  const getExp = function(exp){
    console.log("Work Experience Added");
    console.log(exp)
    setExp((previousExperienceList)=>{
      return([...previousExperienceList,{
        jobTitle: exp.jobTitle,
        company: exp.company,
        workLocation: exp.workLocation,
        tasks: exp.tasks,
        startWorkDate: exp.startWorkDate,
        endWorkDate: exp.endWorkDate,
        id:uniqid(),
      }]
    )
  });
    
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
          <RenderEd ed = {ed}/>

          <RenderExp exp={exp}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
