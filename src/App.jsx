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

function App() {
  const info_initialState ={
    userName:  '',
      address: '',
      phone: '',
      email: '',
  }
  const education_initialState=[
        { schoolName: '',
          schoolLocation: '' ,
          degree: '',
          fieldOfStudy:'',
          studyStartDate: '',
          studyEndDate: '',
          id:''
        }
      ]

  const exp_initialState=
      [
        {
          jobTitle:'',
          company:'',
          workLocation:'',
          tasks:'',
          startWorkDate:'',
          endWorkDate:'',
          id:''
        }
      ]


  const [info, setInfo] = useState(sampleData.contactInformation)
  const [ed,setEd] = useState(sampleData.sections.educations)
  const [exp, setExp]=useState(sampleData.sections.experiences)
  
  const clearForm=function(){
    setInfo(info_initialState)
    setEd(education_initialState)
    setExp(exp_initialState)
}

  const getInfo = function(info) {
    //console.log(`name: ${info.userName} \n address: ${info.address} \n phone: ${info.phone} \n email: ${info.email}`);
    setInfo(info);
  }

  const getEd = function(ed){
    // console.log("Education added!")
    // console.log(`school: ${ed.schoolName} \n 
    //               degree: ${ed.degree} \n
    //               field of study: ${ed.fieldOfStudy} \n 
    //               startDate: ${ed.startDate} \n 
    //               endDate: ${ed.endDate}`
    // )

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
    //console.log("Work Experience Added");
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

  const resetInfoSection= function(){
    setInfo(info_initialState)
  }
  const resetEdSection = function(){
    setEd(education_initialState)
  }
  const resetExpSection = function(){
    setExp(exp_initialState)
  }

  return (
    <>
    <div id='cv_generator'>
      <div id='col-1'>
      <h1>CV Generator</h1>
      <button onClick={clearForm}>Reset</button>
        <ContactInformation
            handleInformation={getInfo}
        />
        <button onClick={resetInfoSection}>Reset Information Section</button>
        <Education
          handleEducation={getEd}
          />
        <button onClick={resetEdSection}>Reset Education Section</button>
        <Experience
          handleExp={getExp}
        />
        <button onClick={resetExpSection}>Reset Experience Section</button>
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
