import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Not used, just for UI
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return setError("Email required");
    // In-memory: just call onLogin
    onLogin({ name: email.split("@")[0], email });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: "10vh", background: "#fff", padding: 32, borderRadius: 8, boxShadow: "0 2px 8px #0001" }}>
      <h2 style={{ marginBottom: 24 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={{ width: "100%", marginBottom: 12, padding: 8, fontSize: 16 }}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{ width: "100%", marginBottom: 20, padding: 8, fontSize: 16 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10, background: "#0a66c2", color: "#fff", border: "none", borderRadius: 4, fontWeight: "bold" }}>
          Login
        </button>
        {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
      </form>
    </div>
  );
}