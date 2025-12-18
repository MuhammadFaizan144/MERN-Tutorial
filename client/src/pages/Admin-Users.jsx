import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from '../store/auth'
const AdminUsers = () => {
    const [users, setUsers] = useState([])
    const { authorizationToken } = useAuth()
    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });

            const data = await response.json()
            console.log(`user ${data}`)
            setUsers(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllUsersData()
    }, [])
    return (
        <>{users.map((curUser, index) => {
            return <h2 key={index}>{curUser.email}</h2>
        })}</>
    )
}

export default AdminUsers