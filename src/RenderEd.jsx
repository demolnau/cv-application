import React from "react"
import EducationList from "./components/EducationList"

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

export default RenderEd