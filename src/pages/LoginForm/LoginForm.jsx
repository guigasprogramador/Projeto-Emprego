import React, { useState } from "react";
import "./Login.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="rememberMe">Remember me</label>
      <input
        type="checkbox"
        id="rememberMe"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}
