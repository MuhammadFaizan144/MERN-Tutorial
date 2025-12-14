import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
const Register = () => {

  const[user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })
  const navigate=useNavigate()
  const {storetokenInLS}=useAuth()
  //handling the input value
  const handleInput=(e)=>{
    // let name=e.
    console.log(e)
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(user)
    try {
      const response=await fetch('http://localhost:3000/api/auth/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    })
    const res_data=await response.json()
    console.log("res from server ",res_data.extraDetails)
    if (response.ok) {
      //receiving token
      //stored the token in localhost
      storetokenInLS(res_data.token)
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registeration Successful")
        navigate("/")
      } else {
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
      }
      console.log(response)
    } catch (error) {
      console.log("register: ",error)
    }
    
  }

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-cols-2">
              <div className="registeration-image">
                <img src="/images/login.png" alt="let fill the login" width="500" height="500" />
              </div>
              <div className="registration-form">
                <h1 className='main-heading mb-3'>registeration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name='username' placeholder='username' id='username' required autoComplete='off' value={user.username} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name='email' placeholder='email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input type="number" name='phone' placeholder='phone' id='phone' required autoComplete='off' value={user.phone} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name='password' placeholder='password' id='password' required autoComplete='off' value={user.password} onChange={handleInput}/>
                  </div>
                  <br />
                  <button type='submit' className='btn btn-submit'>Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
      
    </>
  );

}

export default Register