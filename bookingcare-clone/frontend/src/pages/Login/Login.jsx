import React, { useContext, useState } from "react";
import axios from "axios";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    const API_URL = import.meta.env.VITE_API_URL
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            
            const res = await axios.post(`${API_URL}/api/user/auth/login`,{
                email,
                password
            })
            
            // lấy token
            // nếu thành công thì chuyển sang trang chủ
            
            const {accessToken,user} = res.data
            localStorage.setItem("accessToken",accessToken)
            login(user)
            navigate('/')

        } catch (error) {
            setError(error)
        }
    }
   return (
    <div className="login-page">
      <div className="login-card">
        {/* LEFT */}
        <div className="login-left">
          <div className="logo">
            Filuick<span>Pay</span>
          </div>

          <h2>Sign In</h2>
          <p className="subtitle">
            Welcome back! Please enter your details
          </p>

          {error && <p className="error">{error?.message}</p>}

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            <div className="options">
              <label className="remember">
                <input type="checkbox" />
                Remember for 30 days
              </label>
              <a href="#">Forgot password</a>
            </div>

            <button
              type="submit"
              className="btn-primary"
            >
              Sign In
            </button>
          </form>

          <p className="signup">
            Don’t have an account? <a href="/sign-up">Sign up</a>
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <h1>Welcome back!</h1>
          <h2>
            Please sign in to your <span>Filuick pay</span> account
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Facilisi neque lectus turpis
            id tincidunt eget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;