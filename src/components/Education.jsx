import React, {useState} from 'react';
function Education({handleEducation}) {
  
    const initialState = {
        schoolName: '',
        schoolLocation: '' ,
        degree: '',
        fieldOfStudy:'',
        studyStartDate: '',
        studyEndDate: '',
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
    <label for='schoolName'><b>School</b></label>
      <input 
        type="text"
        name = "schoolName"
        value = {ed.schoolName}
        onChange={handleChange}
        placeholder='School'
      />
      <label for='schoolLocation'><b>Location</b></label>
            <input 
        type="text"
        name = "schoolLocation"
        value = {ed.schoolLocation}
        onChange={handleChange}
        placeholder='Location'
      />
      <label for='degree'><b>Degree</b></label>
      <input 
        type = "text"
        name = "degree"
        value = {ed.degree}
        onChange={handleChange}
        placeholder='Degree'
        id="degree"
      />
      <label for='fieldOfStudy'><b>Area of Study</b></label>
      <input
        type="text"
        name = "fieldOfStudy"
        value={ed.fieldOfStudy}
        onChange={handleChange}
        placeholder='Area of Study'
        id="areaOfStudy"
        />
        <label for='studyStartDate'><b>Start Date</b></label>
      <input
        type = "date"
        name = "studyStartDate"
        value = {ed.studyStartDate}
        onChange={handleChange}
        placeholder='Start date'
        id = "startDate"
      />
      <label for='studyEndDate'><b>End Date</b></label>
      <input
        type = "date"
        name="studyEndDate"
        value = {ed.studyEndDate}
        onChange={handleChange}
        placeholder='End date'
        id="endDate"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    
    
    </>
   
  )
}

export default Education