import "./DoctorSection.scss"
import { useRef } from "react"

import FeaturedSection from "../../../../components/FeaturedSection/FeaturedSection"
import DoctorList from "./DoctorList"
const DoctorSection = ({list})=>{
    

    return(
        <FeaturedSection nameOfSection={"Bác Sĩ Nổi Bật"} learnMoreLink={"/"}>
            <DoctorList list={list}></DoctorList>
        </FeaturedSection>
    )
}

export default DoctorSection