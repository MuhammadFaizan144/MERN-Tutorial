import React from 'react'
import { useEffect } from 'react'

const AdminUsers = () => {
    const getAllUsersData=async () => {
        try {
            const response=await fetch('http://localhost:3000/api/admin/users',{
                
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAllUsersData()
    },[])
  return (
    <div>AdminUsers</div>
  )
}

export default AdminUsers