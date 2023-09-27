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

    // const handleClear = function(e){
    //     addEducation(initialState)
    // }
    // <button onClick={handleClear}>Clear</button>
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
        type = "text"
        name = "studyStartDate"
        value = {ed.studyStartDate}
        onChange={handleChange}
        placeholder='Start date year'
        id = "studyStartDate"
      />
      <label htmlFor='studyEndDate'><b>End Date</b></label>
      <input
        type = "text"
        name="studyEndDate"
        value = {ed.studyEndDate}
        onChange={handleChange}
        placeholder='End date year'
        id="studyEndDate"
      />
      <button onClick={handleSubmit}>Add Education</button>
    </div>
    
    
    </>
   
  )
}

export default Education