import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import DoctorList from '../pages/Doctors/DoctorList';
import DoctorDetail from '../pages/Doctors/DoctorDetail';
import NotFound from '../pages/NotFound';
import Booking from '../pages/Bookings/Booking';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
      <Route path="/booking/:id" element={<Booking />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
