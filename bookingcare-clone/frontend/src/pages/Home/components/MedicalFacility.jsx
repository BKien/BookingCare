import FeaturedSection from "../../../components/FeaturedSection/FeaturedSection"
const MedicalFacility = ({data})=>{
    return(
        <FeaturedSection data={data} nameOfSection={"Cơ Sở Y Tế"} learnMoreLink={"/"}></FeaturedSection>
    )
}

export default MedicalFacility