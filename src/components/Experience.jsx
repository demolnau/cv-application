import React, {useState} from 'react';

function Experience({handleExp}) {
  const [exp, setExperience] = useState({
    jobTitle:'',
    company:'',
    workLocation:'',
    tasks:'',
    startWorkDate:'',
    endWorkDate:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...exp, [name]: value });
  };

  const handleSubmit= function(e){
    e.preventDefault();
    handleExp(exp);
}

  return (
    //<form onSubmit={handleSubmit}>
    <>
    <div id="ExperienceForm" className='form-section'>
      <h2 id='experienceFormHeader'>Experience</h2>
        <label for='jobTitle'><b>Job Title</b></label>
        <input
            type='text'
            name='jobTitle'
            value={exp.jobTitle}
            onChange={handleChange}
            placeholder='Job Title'
            id='job-title'
        />
        <label for='Company'><b>Company</b></label>
        <input 
            type = "text"
            name = "company"
            value = {exp.company}
            onChange={handleChange}
            placeholder='Company'
            id="company"
        />
        <label for='workLocation'><b>Location</b></label>
        <input
            type='text'
            name='workLocation'
            value={exp.workLocation}
            onChange={handleChange}
            placeholder='Location'
            id='work-location'
        />
        <label for='tasks'><b>Description</b></label>
        <input
            type = "text"
            name = "tasks"
            value = {exp.tasks}
            onChange={handleChange}
            placeholder='tasks'
            id="tasks"
        />
        <label for='startDate'><b>Start Date</b></label>
                <input
            type = "date"
            name = "startDate"
            value = {exp.startWorkDate}
            onChange={handleChange}
            placeholder='Start date'
            id = "startDate"
        />
        <label for='endDate'><b>End Date</b></label>
        <input
            type = "date"
            name="endDate"
            value = {exp.endWorkDate}
            onChange={handleChange}
            placeholder='End date'
            id="endDate"
        />
        <button onClick={handleSubmit}>Submit</button>
        </div>

        
    </>
    

    //</form>
  )
}
export default Experience