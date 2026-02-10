import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import AuthLayout from "../Layouts/AuthLayout";
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
import BookingSucess from '../pages/Bookings/BookingSucess';
//tạo router và gắn layout cho các trang 
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    handle: { breadcrumb: "Trang Chủ" },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "doctors",
        handle: { breadcrumb: "Khoa Xương Khớp" },
        children: [
          {
            index: true,
            element: <DoctorList />,
          },
          {
            path: ":id",
            element: <DoctorDetail />,
            handle: { breadcrumb: "Tên Bác Sĩ" },
          },
        ],
      },
      {
        path: "verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "booking/:id",
        element: <Booking />,
      },
      {
        path: "booking-sucess",
        element: <BookingSucess />,
      },
      {
        path: "check-email",
        element: <CheckYourEmail />,
      },
      {
        path: "user/me",
        element: <UserProfile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
])
