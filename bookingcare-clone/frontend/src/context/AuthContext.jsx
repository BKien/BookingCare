import { Children, createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext()
const AuthProvider = ({children})=>{
    const [user,setUser] = useState()
    // set user = user đã được store trước đó
    useEffect(()=>{
        const userStoraged = localStorage.getItem("user")
        setUser(JSON.parse(userStoraged))
    },[])
    const login = (userData)=>{
        setUser(userData)
        localStorage.setItem("user",JSON.stringify(userData))
    }

    const logout = ()=>{

    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider