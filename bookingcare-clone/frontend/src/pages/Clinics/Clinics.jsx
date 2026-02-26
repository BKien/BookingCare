import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";
const Clinics = ()=>{
    const doctors = useLoaderData()
    console.log(doctors);
    
    return (
        <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
            <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Price</th>
            <th>User ID</th>
            <th>View</th>
            </tr>
        </thead>

        <tbody>
            {doctors?.listOfDoctors?.map((doctor) => (
            <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.description}</td>
                <td>${doctor.price}</td>
                <td>{doctor.user_id}</td>
                <td><Link to={`${doctor.id}`}>Detail</Link></td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}

export default Clinics