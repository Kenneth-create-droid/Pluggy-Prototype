// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Passport from "./Passport";
import AuthPage from "./AuthPage";
import profilePic from "./Images/profilepic.png";

function App() {
  return (
    <Router>
      <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#4CAF50", color: "white" }}>
        <h1>Pluggy</h1>
        {/* Navigation */}
        <nav style={{ marginTop: "10px" }}>
          <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/auth" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Login / Sign Up</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Pluggy Passport</h2>
                <Passport 
                  name="Kenneth Nnah"
                  bio="Software Engineering Student | Pluggy Creator 🚀"
                  imgUrl={profilePic}
                />
              </>
            }
          />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>

      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f1f1f1" }}>
        <p>© 2025 Pluggy Prototype</p>
      </footer>
    </Router>
  );
}

export default App;
