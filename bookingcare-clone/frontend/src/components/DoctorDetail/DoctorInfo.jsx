
import { useEffect, useState } from "react"
const DoctorInfo = ({doctorInfo})=>{
    
    return(<>
        Description: {doctorInfo.description} <br></br>
        Price: {doctorInfo.price}
    </>)
}

export default DoctorInfo