import React from "react";
import SingleExperience from "./SingleExperience";
import uniqid from 'uniqid'

const ExperienceList=function(props){
    return(
      <div id="expDetails">
        {props.exp.map((singleExp) => 
        {return <SingleExperience key={uniqid()} singleExp={singleExp}/>
        })}
        </div>
    )
  }
export default ExperienceList