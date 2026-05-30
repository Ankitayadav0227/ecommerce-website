import React, { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    alert("Login Successful");
  };

  return (
    <div className="form-container">

      <h2>Login</h2>

      <form onSubmit={loginUser}>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;