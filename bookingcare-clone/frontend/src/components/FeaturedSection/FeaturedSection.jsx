import Header from "./Header"
import List from "./List"
import "./FeaturedSection.scss"
const FeaturedSection = ({data})=>{

    return(
        <div className="featured-container">
            <Header nameOfSection={"Noi Bat"} learnMoreLink={"/"}></Header>
            <List list={[]}></List>
        </div>
    )
}

export default FeaturedSection