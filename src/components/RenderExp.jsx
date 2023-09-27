import React from "react";
import ExperienceList from "./ExperienceList";

const RenderExp=function({exp}){
    // exp.map((singleExp)=>{
    //   console.log(singleExp)
    // })
    return(
      <div id="ExperienceSection" className="section">
        <h2>Work Experience</h2>
        <ExperienceList exp={exp}/>
      </div>
    )
  }

  
export default RenderExp