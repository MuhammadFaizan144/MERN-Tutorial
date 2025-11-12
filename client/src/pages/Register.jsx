import React from 'react'
import { useState } from 'react';
const Register = () => {

  const[user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

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
                <form>
                  <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name='username' placeholder='username' id='username' required autoComplete='off' value={user.username}/>
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name='email' placeholder='email' id='email' required autoComplete='off' value={user.email}/>
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input type="number" name='phone' placeholder='phone' id='phone' required autoComplete='off' value={user.phone}/>
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name='password' placeholder='password' id='password' required autoComplete='off' value={user.password}/>
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