import React from 'react'
import { useState } from 'react'
const Contact = () => {
  const[contact,setContact]=useState({
    username:"",
    email:"",
    message:"",
  });
  const handleInput=(e)=>{
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
  return (
    <>
      <section className='section-contect'>
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
            <form >
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
      </section>
    </>
  )
}

export default Contact