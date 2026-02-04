import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp';
import DoctorList from '../pages/Doctors/DoctorList';
import DoctorDetail from '../pages/Doctors/DoctorDetail';
import NotFound from '../pages/NotFound';
import Booking from '../pages/Bookings/Booking';
import UserProfile from '../pages/UserInfo/UserProfile';
import VerifyEmail from '../pages/VerifyEmail/VerifyEmail';
import CheckYourEmail from '../pages/CheckYourEmail/CheckYourEmail';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/me" element={<UserProfile/>}/>
      <Route path="/login" element={<Login />} />
      <Route path='/sign-up' element={<SignUp />}></Route>
      <Route path='/verify-email' element={<VerifyEmail />}></Route>
      <Route path='/check-email' element={<CheckYourEmail />}></Route>
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
      <Route path="/booking/:id" element={<Booking />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
