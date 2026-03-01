import "./SearchSection.scss"
import searchButton from "../../../assets/images/search_button.png"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
const SearchSection = ()=>{
    const navigate = useNavigate()
    const inputRef = useRef()
    const sendKeyWordToSever = async()=>{
        const keyWord = inputRef.current.value;
        navigate(`/search?keyWord=${keyWord}`)
    }
    return(
        <div className="search-section">
            <div className="lable">Nền tảng đặt lịch khám bệnh, chăm sóc răng miệng và làm đẹp</div>
            <div className="search-container">
                <input className="search-input" id="username" placeholder="Tìm tên bác sĩ" ref={inputRef}>
                </input>
                <img className="search-icon" src={searchButton} onClick={sendKeyWordToSever}></img>
            </div>
        </div>

    )
}

export default SearchSection