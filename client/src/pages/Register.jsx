import React from 'react'
import { useState } from 'react';
const Register = () => {
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
                    <input type="text" name='username' value={} placeholder='username' id='username' required autoComplete='off'/>
                  </div>
                  <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name='username' value={} placeholder='username' id='username' required autoComplete='off'/>
                  </div>
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