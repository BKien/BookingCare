import { useState } from "react";
import axios from "axios";
import "./SignUp.scss";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const API_URL = import.meta.env.VITE_API_URL

    const handleSubmit = async(e) => {
        e.preventDefault(); // ❗ rất quan trọng
        const res = await axios.post(`${API_URL}/api/user/auth/sign-up`,{
            fullName,
            email,
            password
        })
        console.log(res)
        // TODO: validation
        // TODO: call API register
        console.log({
            fullName,
            email,
            password,
            confirmPassword,
        });
    };

    return (
        <div className="signup-page">
        <div className="signup-card">
            {/* LEFT */}
            <div className="signup-left">
            <div className="logo">
                Filuick<span>Pay</span>
            </div>

            <h2>Create account</h2>
            <p className="subtitle">
                Please fill in the information below
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Full name</label>
                <input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) =>
                    setConfirmPassword(e.target.value)
                }
                />

                <button type="submit" className="btn-primary">
                Sign up
                </button>
            </form>

            <p className="signin">
                Already have an account? <a href="#">Sign in</a>
            </p>
            </div>

            {/* RIGHT */}
            <div className="signup-right">
            <h1>Welcome!</h1>
            <h2>
                Join <span>Filuick pay</span> today
            </h2>
            <p>
                Manage your payments, track expenses, and grow your business
                with ease.
            </p>
            </div>
        </div>
        </div>
    );
};

export default SignUp;
