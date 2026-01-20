import "./List.scss"
import img from "../../assets/images/bookingcarelogo.svg"
import leftArrow from"../../assets/images/left-arrow.svg"
import { useRef } from "react"
const List = ({list})=>{
    const scrollClassName = useRef(null)
    const handleRightButton = ()=>{
        scrollClassName.current.scrollBy({
            left: 300,
            behavior: "smooth"
        })
        
    }

    const handleLeftButton = ()=>{
        console.log("oke")
        scrollClassName.current.scrollBy({
            left: -300,
            behavior: "smooth"
        })
    }
    const rs = 
        <div className="scroll-container">
            
            <div className="list-container" ref={scrollClassName}>
        
        <div className="item-container">
            <img src={img} className="img"></img>
            <div className="name">name</div>
            <div className="detail">detail</div>
        </div>

        <div className="item-container">
            <img src={img} className="img"></img>
            <div className="name">name</div>
            <div className="detail">detail</div>
        </div>

        <div className="item-container">
            <img src={img} className="img"></img>
            <div className="name">name</div>
            <div className="detail">detail</div>
        </div>

        <div className="item-container">
            <img src={img} className="img"></img>
            <div className="name">name</div>
            <div className="detail">detail</div>
        </div>

        <div className="item-container">
            <img src={img} className="img"></img>
            <div className="name">name</div>
            <div className="detail">detail</div>
        </div>

        <div className="item-container">
            <img src={img} className="img"></img>
            <div className="name">name</div>
            <div className="detail">detail</div>
        </div>

        <div className="item-container">
            <img src={img} className="img"></img>
            <div className="name">name</div>
            <div className="detail">detail</div>
        </div>

    </div>
    <img className="left-button" onClick={handleLeftButton} src={leftArrow} ></img>
    <img className="right-button" onClick={handleRightButton} src={leftArrow}></img>
        </div>
    return(
        <>
            {rs}
        </>
    )
}

export default List