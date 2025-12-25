import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
// import { deleteContactById } from '../../../server/controllers/admin-controller'

const AdminContacts = () => {
  const[contactData,setContactData]=useState([])
  const{authorizationToken,API}=useAuth()
  const getContactsData=async()=>{
    try {
      const response=await fetch(`${API}/api/admin/contacts`,{
        method:"GET",
        headers:{
          Authorization:authorizationToken,
        },
      })
      const data=await response.json();
      console.log("all contacts data:",data)
      if(response.ok){
        console.log("contact",response)
        setContactData(data)
      }
    } catch (error) {
      console.log(error)
    }
  };


  // defining the funciton deleteContactById
  const deleteContactById=async(id)=>{
    try {
      const response=await fetch(`${API}/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:authorizationToken,
        },
      })
      if(response.ok){
        getContactsData()
        toast.success("Contact deleted successfully")
      }else{
        toast.error("Failed to delete contact")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getContactsData()
  },[])
  return (
    <><section className="admin-contacts-section">
        <h1>Admin Contact Data </h1>

        <div className="container  admin-users">
          {contactData.map((curContactData, index) => {
            const { username, email, message, _id } = curContactData;

            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={()=>deleteContactById(_id)}>
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </section>

    </>

  )
}

export default AdminContacts