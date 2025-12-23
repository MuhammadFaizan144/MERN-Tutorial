import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const AdminContacts = () => {
  const[contactData,setContactData]=useState([])
  const{authorizationToken}=useAuth()
  const getContactsData=async()=>{
    try {
      const response=await fetch(`http://localhost:3000/api/admin/contacts`,{
        method:"GET",
        header:{
          Authorization:authorizationToken,
        },
      })
      const data=await response.json();
      console.log("all contacts data:",data)
      if(response.ok){
        setContactData(data)
      }
    } catch (error) {
      console.log(error)
    }
  };
  // defining the funciton deleteContactById
  
  useEffect(()=>{
    getContactsData()
  },[])
  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contact Data </h1>

        <div className="container  admin-users">

              <div >
                <p>username</p>
                <p>email</p>
                <p>message</p>
                <button className="btn" >
                  delete
                </button>
              </div>
            
        </div>
      </section>
    </>

  )
}

export default AdminContacts