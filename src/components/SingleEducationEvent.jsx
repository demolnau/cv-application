import React from 'react';
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

  export default SingleEducationEvent;