import { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import axios from "axios"
const VerifyEmail = ()=>{
    const [searchParams] = useSearchParams()
    const verifyToken = searchParams.get('verifyToken')
    
    useEffect(()=>{
        const VerifyEmail = async()=>{
            const data = await axios.post('http://localhost:8080/api/user/auth/verify-email',{verifyToken})

            if(data) window.location.href = "/login"
        }

        VerifyEmail()
    },[])
    return(
        <>
            Please wait...
        </>
    )
}

export default VerifyEmail