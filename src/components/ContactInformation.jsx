import { useState } from "react";
import React from 'react';

// function clearAllInputs() {
//     var allInputs = document.querySelectorAll('input');
//     allInputs.forEach(singleInput => singleInput.value = '');
// }
   

function ContactInformation({handleInformation}) {
  const [info, setInfo]=useState({
    userName:  '',
    address: '',
    phone: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit= function(e){
    e.preventDefault();
    handleInformation(info);
    //clearAllInputs();
}



  

  return (
    <>
     <div className='form-section' id="ContactForm">
        <h2 id="contactFormHeader">Contact Information</h2>
        
        <label htmlFor='userName'><b>Name</b></label>
        <input
          type="text"
          name="userName"
          value= {info.userName}
          onChange = {handleChange}
          placeholder = "Enter Full Name"
          id = "userName"
        />
        <label htmlFor='address'><b>Location</b></label>
        <input 
          type="text"
          name = "address"
          value={info.address}
          onChange = {handleChange}
          placeholder="City, Country"
          id="address"
        />
        <label htmlFor='phone'><b>Phone number</b></label>
        <input 
          type = "text"
          name = "phone"
          value = {info.phone}
          onChange = {handleChange}
          placeholder="Phone number"
          id="phone"
        />
        <label htmlFor='email'><b>Email</b></label>
        <input 
          type= "email"
          name = "email"
          value={info.email}
          onChange={handleChange}
          placeholder="Email"
          id="email"
        /> 
    <button onClick={handleSubmit}>Submit</button>
    </div>
    
    </>
   
  ) 
  }
export default ContactInformation