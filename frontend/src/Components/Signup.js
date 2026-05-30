import React, { useState } from "react";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();

    alert("Signup Successful");
  };

  return (
    <div className="form-container">

      <h2>Signup</h2>

      <form onSubmit={registerUser}>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button type="submit">Signup</button>

      </form>
    </div>
  );
}

export default Signup;