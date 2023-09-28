import React from "react";

const SingleExperience=function(props){
  let singleExperience;
  if(props.singleExp.jobTitle==''){
    singleExperience = <div id='singleExp'></div>
  }
  else{
    singleExperience = 
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
  }
    return(
      <>{singleExperience}</>
    )
  }
  

export default SingleExperience