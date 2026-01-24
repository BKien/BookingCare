import List from "../../../components/FeaturedSection/List"
import FeaturedSection from "../../../components/FeaturedSection/FeaturedSection"
const SpecialistSection = ({data})=>{
    return(
        <FeaturedSection data={data} nameOfSection={"Chuyên Khoa"} learnMoreLink={"/"}>
            <List list={data}></List>
        </FeaturedSection>
    )
}

export default SpecialistSection
