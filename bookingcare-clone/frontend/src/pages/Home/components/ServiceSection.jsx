import "./ServiceSection.scss"
const ServiceSection = ({listOfServices})=>{
    const API_URL = import.meta.env.VITE_API_URL
    return(
        
        <div className="services-section-container">
            <div className="name-of-section">Dịch Vụ Toàn Diện</div>
            <div className="services-container">
                {listOfServices.map((service)=>{
                return(
                    <a className="service" href={service.link}>
                        <img src={`${API_URL}${service.img}`} className="img"></img>
                        <div className="name">{service.name}</div>
                    </a>
                )
                })}
            </div>
        </div>
    )
}

export default ServiceSection