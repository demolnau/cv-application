import React, {useState} from 'react';
//import uniqid from 'uniqid'
function Experience({handleExp}) {
  const initialState = {
    jobTitle:'',
    company:'',
    workLocation:'',
    tasks:'',
    startWorkDate:'',
    endWorkDate:'',
    id:''
  }

  const [exp, setExperience] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...exp, [name]: value });
  };

  const handleSubmit= function(e){
    e.preventDefault();
    handleExp(exp);
}

  const clearInput = function(e){
    e.preventDefault();
    setExperience(initialState)
  }


  return (
    //<form onSubmit={handleSubmit}>
    <>
    <div id="ExperienceForm" className='form-section'>
      <h2 id='experienceFormHeader'>Experience</h2>
        <label htmlFor='jobTitle'><b>Job Title</b></label>
        <input
            type='text'
            name='jobTitle'
            value={exp.jobTitle}
            onChange={handleChange}
            placeholder='Job Title'
            id='jobTitle'
        />
        <label htmlFor='company'><b>Company</b></label>
        <input 
            type = "text"
            name = "company"
            value = {exp.company}
            onChange={handleChange}
            placeholder='Company'
            id="company"
        />
        <label htmlFor='workLocation'><b>Location</b></label>
        <input
            type='text'
            name='workLocation'
            value={exp.workLocation}
            onChange={handleChange}
            placeholder='Location'
            id='workLocation'
        />
        <label htmlFor='tasks'><b>Description</b></label>
        <input
            type = "text"
            name = "tasks"
            value = {exp.tasks}
            onChange={handleChange}
            placeholder='tasks'
            id="tasks"
        />
        <label htmlFor='startDate'><b>Start Date</b></label>
            <input
            type = "number"
            name = "startDate"
            value = {exp.startWorkDate}
            onChange={handleChange}
            placeholder='Start year'
            id = "startDate"
        />
        <label htmlFor='endDate'><b>End Date</b></label>
        <input
            type = "number"
            name="endDate"
            value = {exp.endWorkDate}
            onChange={handleChange}
            placeholder='End year'
            id="endDate"
        />

        </div>

        <button onClick={clearInput}>Clear Input</button>
        <button onClick={handleSubmit}>Add Experience</button>
    </>
    

    //</form>
  )
}
export default Experience