import "./SearchSection.scss"
import searchButton from "../../../assets/images/search_button.png"
const SearchSection = ()=>{

    return(
        <div className="search-section">
            <div className="lable">Nền tảng đặt lịch khám bệnh, chăm sóc răng miệng và làm đẹp</div>
            <div className="search-container">
                <input className="search-input" placeholder="Tìm tên bác sĩ">
                </input>
                <img className="search-icon" src={searchButton}></img>
            </div>
        </div>

    )
}

export default SearchSection