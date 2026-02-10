import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,RouterProvider } from 'react-router-dom';
import { router } from "./routes"
import AuthProvider from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
);
