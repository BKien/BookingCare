import "./Header.scss"
const Header = ({nameOfSection,learnMoreLink}) =>{
    return(
        <div className="container">
            <div className="name-of-section">{nameOfSection}</div>
            <a href={learnMoreLink} className="learn-more">Learn More</a>
        </div>
    )
}

export default Header