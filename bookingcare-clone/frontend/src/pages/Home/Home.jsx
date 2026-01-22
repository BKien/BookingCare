import React from "react";
import { useState ,useEffect} from "react";
import DoctorSection from "./components/DoctorSection";
import MedicalFacility from "./components/MedicalFacility";
import ServiceSection from "./components/ServiceSection";
import SpecialistSection from "./components/SpecialistSection";
import SearchSection from "./components/SearchSection";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import homePageSevice from "../../services/homePageSevice";
const Home = () => {
    const [dataForSpecialistSection,setDataForSpecialistSection] = useState([])
    const [dataForMedicalFacilitySection,setDataForMedicalFacilitySection] = useState([])

    useEffect(()=>{
        const getHomePageData = async()=>{
            try {
                //trong homePageData có data cho cả phần specialist và medical facility
                const homePageData = await homePageSevice.getHomePageData()
                setDataForSpecialistSection(homePageData.specialties)
                setDataForMedicalFacilitySection(homePageData.clinics)
            } catch (error) {
                console.log(error)
            }
        }
        
        getHomePageData()
    },[])

    return (
        <>
            <Header></Header>
            <SearchSection></SearchSection>
            <ServiceSection></ServiceSection>
            <SpecialistSection data={dataForSpecialistSection}></SpecialistSection>
            <MedicalFacility data={dataForMedicalFacilitySection}></MedicalFacility>
            <DoctorSection list={dataForMedicalFacilitySection}></DoctorSection>
            <Footer></Footer>
        </>
    )
}

export default Home