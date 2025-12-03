import { createContext, useContext } from "react";
export const AuthContext=createContext()
export const AuthProvider=({children})=>{
    const storetokenInLS=(serverToken)=>{
        return localStorage.setItem('token',serverToken)
    }

    return (<AuthContext.Provider value={storetokenInLS}>
        {children}
    </AuthContext.Provider>)
}

<<<<<<< HEAD
export const useAuth=()=>{
    const AuthContextValue=useContext(AuthContext)
    if (!AuthContextValue){
        throw new Error("useAuth used outside of the Provider")
    }
    return AuthContextValue;
}
=======
>>>>>>> 986ab2f878725de3068bb6ef98820810e27b8c64
