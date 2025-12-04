import { createContext, useContext, useState } from "react";
export const AuthContext=createContext()
export const AuthProvider=({children})=>{

    const [token,settoken]=useState(localStorage.getItem("token"))

    const storetokenInLS=(serverToken)=>{
        return localStorage.setItem('token',serverToken)
    }

    //logout functionality
    const LogoutUser=()=>{
        settoken("")
        return localStorage.removeItem("token")
    }


    return (<AuthContext.Provider value={storetokenInLS}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth=()=>{
    const AuthContextValue=useContext(AuthContext)
    if (!AuthContextValue){
        throw new Error("useAuth used outside of the Provider")
    }
    return AuthContextValue;
}