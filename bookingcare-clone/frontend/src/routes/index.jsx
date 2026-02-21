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
import BookingError from "../pages/Status/BookingError";
import Specialty from "../pages/medical-services/Specialty";
import Status from "../Layouts/StatusLayout";
import loader from "./loader";
//tạo router và gắn layout cho các trang 
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    handle: {breadcrumb: (data)=> {
                  if(data)
                  return data.data[0].name
                }},
    children: [
      {
        index: true,
        element: <Home />,
      },
      /// MEDICAL SEVICES 
      {
        path: 'medical-services',
        handle: {breadcrumb: (data)=> {
                  if(data)
                  return data.data[0].name
                }},
        children:[
          {
            path: 'speacialty-examination',
            handle: {breadcrumb: (data)=> {
                 if(data)
                  return "Khám Chuyên Khoa"
                }},
            children:[
              {
                index: true,
                element: <Specialty></Specialty>,
                loader: loader.SpecialtyLoader,
              },
              {
                path:':specialty_id',
                handle: {breadcrumb: (data)=> {
                  if(data)
                  return data.data[0].name
                }},
                
                children:[
                  {
                    path: '',
                    index: true,
                    element: <DoctorList></DoctorList>,
                    loader: loader.SpecialtyDetailLoader
                  },
                  {
                    path:':id',
                    handle: {breadcrumb: (data)=> {
                      if(data)
                      return data.data[0].name
                    }},
                    element: <DoctorDetail></DoctorDetail>
                  }
                ]
              },
            ]
          },
          
        ]
       
      },

      {
        path: "verify-email",
        element: <VerifyEmail />,
      },
      
      {
        path: "booking-error",
        element: <BookingError></BookingError>
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
  {
    element: <Status></Status>,
    children: [
      {
        path: "booking/:id",
        element: <Booking />,
      },
      {
        path: "booking-sucess",
        element: <BookingSucess />,
      },
    ]
  }
])
