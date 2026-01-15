import React from "react";
import DoctorSection from "./components/DoctorSection";
import MedicalFacility from "./components/MedicalFacility";
import ServiceSection from "./components/ServiceSection";
import SpecialistSection from "./components/SpecialistSection";
import SearchSection from "./components/SearchSection";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
// import Footer from "../../components/Footer"
const Home = () => {
    return (
        <>
            <Header></Header>
            <SearchSection></SearchSection>
            <ServiceSection></ServiceSection>
            <SpecialistSection></SpecialistSection>
            <MedicalFacility></MedicalFacility>
            <DoctorSection></DoctorSection>
            <Footer></Footer>
        </>
    )
}

export default Home