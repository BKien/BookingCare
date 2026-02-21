import React, { useEffect,useState } from "react";
import {Link, useLoaderData, useParams} from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL
const DoctorList = () => {
    const doctors = useLoaderData()
    const [error, setError] = useState(true)
    const [loading, setLoading] = useState(null)
    const {orthopedics_id} = useParams()
    

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

export default DoctorList