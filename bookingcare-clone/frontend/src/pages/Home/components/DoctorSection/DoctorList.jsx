import { useEffect ,useRef} from "react"
import leftArrow from "../../../../assets/images/left-arrow.svg"
import "./DoctorList.scss"
import { useNavigate } from "react-router-dom"
const DoctorList = ({list}) =>{
    const API_URL = import.meta.env.VITE_API_URL
    const scrollClassName = useRef(null)
    const navigate = useNavigate()
    const handleRightButton = ()=>{
        scrollClassName.current.scrollBy({
            left: 360* 3 + 25 * 2,
            behavior: "smooth"
        })
        
    }

    const handleLeftButton = ()=>{
        console.log("oke")
        scrollClassName.current.scrollBy({
            left: -(360 * 3 + 25 * 2),
            behavior: "smooth"
        })
    }

    const navigateToDetail = (doctorId)=>{
        navigate(`/medical-services/speacialty-examination/orthopedics/${doctorId}`)
    }
    if(!list) return "loading..."
    return(
        <div className="doctor-scroll-container">
            <div className="doctor-list-container" ref={scrollClassName}>
                {list.map((item) => (
                    <div className="item-container" key={item.id} onClick={()=>{navigateToDetail(item.id)}}>
                        <img src={`${API_URL}${item.img}`} className="img" />
                        <div className="name">{item.user?.fullName}</div>
                        <div className="detail">{item.description}</div>
                    </div>
                ))}
            </div>
            <img className="left-button" onClick={handleLeftButton} src={leftArrow} ></img>
            <img className="right-button" onClick={handleRightButton} src={leftArrow}></img>
        </div>
    )
}

export default DoctorList