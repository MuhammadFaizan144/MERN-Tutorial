import { createContext, useContext, useState ,useEffect} from "react";
export const AuthContext=createContext()
export const AuthProvider=({children})=>{

    const [token,settoken]=useState(localStorage.getItem("token"))
    const [user,setUser]=useState("")
    const[isloading,setIsloading]=useState(true)
    const [services, setServices] = useState([])
    const authorizationToken=`Bearer ${token}`
    const storetokenInLS=(serverToken)=>{
        settoken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

    let isLoggedIn=!!token
    console.log('Is logged In ',isLoggedIn)

    //logout functionality
    const LogoutUser=()=>{
        settoken("")
        return localStorage.removeItem("token")
    }

    //    JWT AUTHENTICATION
    const userAuthentication=async()=>{
        try {
            setIsloading(true)
            const response=await fetch("http://localhost:3000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            if (response.ok){
                const data=await response.json()
                console.log("user data", data.userData)
                setUser(data.userData)
                setIsloading(false)
            }else{
                console.log("Error fetching user data")
                setIsloading(false);
            }
        } catch (error) {
            console.error("Error fetching user data")
        }
    }
    //to fetch the services data from the database
    const getServices=async()=>{
        try {
            const response=await fetch("http://localhost:3000/api/data/service",{
                method:"GET",
            })
            if(response.ok){
                const data=await response.json()
                console.log(data.msg)
                setServices(data.msg)
            }
        } catch (error) {
            console.log(`services frontend error ${error}`)
        }
    }

    useEffect(() => {
        getServices()
      userAuthentication()
    }, [])
    

    return (
    <AuthContext.Provider value={{isLoggedIn,storetokenInLS,LogoutUser,user,services,authorizationToken,isloading}}>
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