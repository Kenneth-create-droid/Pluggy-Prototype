// src/AuthPage.js
import React, { useState } from "react";

function AuthPage() {
  const [mode, setMode] = useState(null); // "login" | "signup" | null

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "#333" }}>Welcome to Pluggy</h1>

      {mode === "login" && (
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            width: "300px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Login</h2>
          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              width: "100%",
            }}
            onClick={() => alert("Logging in...")}
          >
            Login
          </button>
        </div>
      )}

      {mode === "signup" && (
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            width: "300px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#2196F3",
              color: "white",
              cursor: "pointer",
              width: "100%",
            }}
            onClick={() => alert("Signing up...")}
          >
            Sign Up
          </button>
        </div>
      )}

      {mode === null && (
        <>
          <button
            style={{
              padding: "12px 24px",
              margin: "10px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              width: "200px",
            }}
            onClick={() => setMode("login")}
          >
            Login
          </button>

          <button
            style={{
              padding: "12px 24px",
              margin: "10px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#2196F3",
              color: "white",
              cursor: "pointer",
              width: "200px",
            }}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}

export default AuthPage;
