import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactInformation from './components/ContactInformation.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import sampleData from './components/sample_data.js'
import uniqid from "uniqid";
import RenderInfo from './components/RenderInfo.jsx'
import RenderEd from './RenderEd.jsx'
import RenderExp from './components/RenderExp.jsx'



// const clearInput = function(){
//   var allInputs = document.querySelectorAll('input')
//   allInputs.forEach(singleInput => singleInput.value = '')
// }


function App() {
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
      </div>
      <div id='col-2'>
        <div id="generatedCV">
          <RenderInfo info={info}/>
          <RenderEd ed = {ed}/>
          <RenderExp exp={exp}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
