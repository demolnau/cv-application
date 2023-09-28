import React, {useState} from 'react';
//import uniqid from 'uniqid'

function Education({handleEducation}) {
    const initialState = {
        schoolName: '',
        schoolLocation: '' ,
        degree: '',
        fieldOfStudy:'',
        studyStartDate: '',
        studyEndDate: '',
        id:''
    }

  const [ed, addEducation] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    addEducation({ ...ed, [name]: value });
  };

  const handleSubmit= function(e){
    e.preventDefault();
    handleEducation(ed);
    }
    const clearInput = function(e){
      e.preventDefault();
      addEducation(initialState)
    }

  return(
    <>
 <div id="EducationForm" className='form-section'>
    <h2 id="educationFormHeader">Education</h2>
    <label htmlFor='schoolName'><b>School</b></label>
      <input 
        type="text"
        name = "schoolName"
        value = {ed.schoolName}
        onChange={handleChange}
        placeholder='School'
        id='schoolName'
      />
      <label htmlFor='schoolLocation'><b>Location</b></label>
            <input 
        type="text"
        name = "schoolLocation"
        value = {ed.schoolLocation}
        onChange={handleChange}
        placeholder='Location'
        id='schoolLocation'
      />
      <label htmlFor='degree'><b>Degree</b></label>
      <input 
        type = "text"
        name = "degree"
        value = {ed.degree}
        onChange={handleChange}
        placeholder='Degree'
        id="degree"
      />
      <label htmlFor='areaOfStudy'><b>Area of Study</b></label>
      <input
        type="text"
        name = "fieldOfStudy"
        value={ed.fieldOfStudy}
        onChange={handleChange}
        placeholder='Area of Study'
        id="areaOfStudy"
        />
        <label htmlFor='studyStartDate'><b>Start Date</b></label>
      <input
        type = "number"
        name = "studyStartDate"
        value = {ed.studyStartDate}
        onChange={handleChange}
        placeholder='Start year'
        id = "studyStartDate"
      />
      <label htmlFor='studyEndDate'><b>End Date</b></label>
      <input
        type = "number"
        name="studyEndDate"
        value = {ed.studyEndDate}
        onChange={handleChange}
        placeholder='End year'
        id="studyEndDate"
      />

    </div>
    
    <button onClick={clearInput}>Clear Input</button>
    <button onClick={handleSubmit}>Add Education</button>
    
    </>
   
  )
}

export default Education