import React, { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {jwtDecode } from "jwt-decode";

const AdminAuth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

   useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp > now) {
          navigate("/upload",{ replace: true });
        } else {
          localStorage.removeItem("token");
        }
      } catch (err) {
        localStorage.removeItem("token");
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };
    const endpoint = isLogin
      ? "/api/auth/login"  
      : "/api/auth/signup";

    try {
      const res = await axios.post(endpoint, payload);
      const data = res.data;

      if (data.success) {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          navigate("/upload"); 
        } else {
          setMessage("Sign up successful. Please log in.");
          setIsLogin(true);
        }
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid credentials.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>{isLogin ? "Admin Login" : "Admin Sign Up"}</h2>

      {message && <p style={{ color: "red" }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />
        <button type="submit" style={{ width: "100%" }}>
          {isLogin ? "Login" : "Add LogIn"}
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}
          style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }}
        >
          {isLogin ? "Add LogIn" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AdminAuth;
