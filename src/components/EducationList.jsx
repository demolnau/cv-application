import React from "react";
import SingleEducationEvent from './SingleEducationEvent'
import uniqid from 'uniqid'

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

export default EducationList;