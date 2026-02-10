import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb.jsx'
import './MainLayout.scss'
import { Outlet } from 'react-router-dom'
const MainLayout = ()=>{
    return(
        <div className='layout'>
            <Header></Header>
            
            <div className='main'>
                <BreadCrumb BreadCrumbLink={">"}></BreadCrumb>
                <Outlet>
                </Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout

