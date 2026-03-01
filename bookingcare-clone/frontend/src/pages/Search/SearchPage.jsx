import "./SearchPage.scss"
import searchButton from "../../assets/images/search_button.png"
import { useLoaderData, useNavigate } from "react-router-dom"
import { useRef } from "react"
const SearchPage = ()=>{
    const navigate = useNavigate()
    const loaderData = useLoaderData()// lấy dữ liệu trước khi vào trang
    const inputRef = useRef()
    const sendKeyWordToSever = async()=>{
        const keyWord = inputRef.current.value;
    }
    return(
       <div className="search-section-in-search-page">
            <div className="search-container-in-search-page">
                <input className="search-input" id="username" placeholder="Tìm tên bác sĩ" ref={inputRef}>
                </input>
                <img className="search-icon" src={searchButton} onClick={sendKeyWordToSever}></img>
            </div>

            <div className="list-of-results">
                {["map","map"].map(()=>(
                    <div>Sample</div>
                ))}
                <div className="item">
                    <img src={searchButton}></img>
                    <div className="title">Bác Sĩ Nguyễn Văn A</div>
                </div>
            </div>
       </div>
        
    )
}

export default SearchPage