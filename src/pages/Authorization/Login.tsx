import React from "react";
import axios from "axios";

function Login() {
  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
      return res.data.user;
    } catch (err) {
      console.error(err);
    }
  };
  return <div>Login</div>;
}

export default Login;
