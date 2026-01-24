import Header from "./Header"
import List from "./List"
import "./FeaturedSection.scss"
import { Children } from "react"
const FeaturedSection = ({data,nameOfSection,learnMoreLink,children})=>{

    
    return(
        <div className="featured-container">
            <Header nameOfSection={nameOfSection} learnMoreLink={learnMoreLink}></Header>
            {children}
        </div>
    )
}

export default FeaturedSection