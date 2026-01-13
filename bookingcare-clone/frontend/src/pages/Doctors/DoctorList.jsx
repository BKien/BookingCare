import React, { useEffect,useState } from "react";
import {Link} from 'react-router-dom'
import {getDoctorList} from '../../services/doctorService'
const DoctorList = () => {
    const [doctors, setDoctors] = useState([])
    const [error, setError] = useState(true)
    const [loading, setLoading] = useState(null)

    useEffect(()=>{
        const fetchDoctors = async()=>{
            try {
                const doctorList = await getDoctorList()
                setDoctors(doctorList.listOfDoctors)
            } catch (error) {
                setError("Can not load the list of doctors")
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchDoctors()
    },[])

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
            {doctors.map((doctor) => (
            <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.description}</td>
                <td>${doctor.price}</td>
                <td>{doctor.user_id}</td>
                <td><a href={`/doctors/${doctor.id}`}>Detail</a></td>
            </tr>
            ))}
        </tbody>
        </table>
    );

}

export default DoctorList