import React from 'react'
import { useState } from 'react'
const Login = () => {
    const[user,setuser]=useState({
      email:"h",
      password:""
    })
    const handleInput=(e)=>{
      console.log(e)
      let name=e.target.name
      let value=e.target.value
      setuser({
        ...user,
        [name]:value
      })
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(e)
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
                  <h1 className='main-heading mb-3'>registeration form</h1>
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