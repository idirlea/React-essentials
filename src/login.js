import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = () => {
    alert(`${email}, ${password}`);
  };

  return (
    <div className="form form__login">
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={onLoginPressed} className="button">
        Login
      </button>
    </div>
  );
}

export default Login;
