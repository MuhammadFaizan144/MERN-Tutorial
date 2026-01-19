import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {
  const {services}=useAuth()
  return (
    <section className='section-services'>
      <div className="container">
        <h1 className='main-heading'>Services</h1>
      </div>
      <div className="container flex flex-wrap gap-16 ">
        {
          services.map((curElem,index)=>{
            const {price,description,provider,service}=curElem;
            return(
        <div className="card w-[400px]" key={index}>
          <div className="card-img flex justify-center items-center">
            <img src="/images/design.png" alt="our services info" width="200"/>
          </div>
          <div className="card-details flex flex-col">
            <div className="flex flex-row">
              <p>{provider}</p>
              <p>{price}</p>
            </div>
            <h2>{service}</h2>
            <p>{description}</p>
          </div>
        </div>)
          })
        }
      </div>
    </section>
  )
}

export default Service