import FeaturedSection from "../../../components/FeaturedSection/FeaturedSection"
import List from "../../../components/FeaturedSection/List"
const MedicalFacility = ({data})=>{
    return(
        <FeaturedSection data={data} nameOfSection={"Cơ Sở Y Tế"} learnMoreLink={"/"}>
            <List list={data}></List>
        </FeaturedSection>
    )
}

export default MedicalFacility