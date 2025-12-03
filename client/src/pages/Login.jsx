import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const URL='http://localhost:3000/api/auth/login'
const Login = () => {
    const[user,setUser]=useState({
      email:"",
      password:""
    })
    const navigate=useNavigate()
    const handleInput=(e)=>{
      console.log(e)
      let name=e.target.name
      let value=e.target.value
      setUser({
        ...user,
        [name]:value
      })
    }
    const handleSubmit=async (e)=>{
      e.preventDefault()
      console.log(user)
      try{
        const response=await fetch(URL,{
        
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
        
      })
      console.log("login form", response)
      if (response.ok) {
        
        //receiving token
        const res_data=await response.json()

        //stored the token in localhost
        storetokenInLS(res_data.token)
      
        alert("Login successful")
          setUser({email:"",password:""})
          navigate("/")
        }else{
          console.log("Error in response")
        }
      }catch(error){
        console.log("Login connection error with backend",error)
      }
    }
    return (
      <>
        <section>
          <main>
            <div className="section-registration">
              <div className="container grid grid-cols-2">
                <div className="registeration-image">
                  <img src="/images/register.png" alt="" width="500" height="500" />
                </div>
                <div className="registration-form">
                  <h1 className='main-heading mb-3'>login form</h1>
                  <br />
                  <form onSubmit={handleSubmit}>
                    
                    <div>
                      <label htmlFor="email">email</label>
                      <input type="email" name='email' placeholder='email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}/>
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

export default Login