import Header from "./Header"
import List from "./List"
import "./FeaturedSection.scss"
const FeaturedSection = ({data,nameOfSection,learnMoreLink})=>{

    
    return(
        <div className="featured-container">
            <Header nameOfSection={nameOfSection} learnMoreLink={learnMoreLink}></Header>
            <List list={data}></List>
        </div>
    )
}

export default FeaturedSection