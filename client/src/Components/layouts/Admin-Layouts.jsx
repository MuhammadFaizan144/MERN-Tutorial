
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";
import {FaMessage} from "react-icons/fa6"
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from "../../store/auth";
const AdminLayouts = () => {
  const {user,isloading}=useAuth()
  console.log(user)
  if(isloading){
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  return (<>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/users"><FaUser/> users</NavLink></li>
                    <li><NavLink to="/admin/contacts"><FaMessage/> contacts</NavLink></li>
                    <li><NavLink to="/service"><FaRegListAlt/> services</NavLink></li>
                    <li><NavLink to="/"><FaHome/> Home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
  )
}

export default AdminLayouts