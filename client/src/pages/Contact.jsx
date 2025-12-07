import React from 'react'
import { useState } from 'react'
import { useAuth } from '../store/auth';
const defaultcontactFormData={
  username:"",
    email:"",
    message:"",
}
const Contact = () => {
  const[contact,setContact]=useState(defaultcontactFormData);
  const [userData, setUserData] = useState(true)
  const {user}=useAuth()

  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })

    setUserData(false)
  }

  const handleInput=(e)=>{
    // console.log(e)
    const name=e.target.name;
    const value=e.target.value;
    setContact({
      ...contact,
      [name]:value,
    })
    // 2nd method
    // setContact((prev)=>({
    //   ...prev,
    //   [name]:value,
    // }));
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      
        const response=await fetch("http://localhost:3000/api/form/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })
      if(response.ok){
        setContact(defaultcontactFormData)
        const data=await response.json()
        console.log(data)
        alert("Message send successfully")
      }
    }catch(error){
      alert("Message not send")
      console.log("contact connection error with backend",error)
    }
  }
  return (
    <>
      <section className='section-contact'>
        <div className="contact-content container">
          <h1 className='main-heading'>contact us</h1>
        </div>
        {/* contact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>
          {/* contact form content actual */}
          <div className="section-form">
            <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">
                    username
                  </label>
                  <input type="text" name="username" id="username" autoComplete='off' required value={contact.username} onChange={handleInput}/>
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" id="email" autoComplete='off' required value={contact.email} onChange={handleInput}/>
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" cols="30" rows="10" autoComplete='off' required value={contact.message} onChange={handleInput}></textarea>
              </div>
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </div>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  )
}

export default Contact