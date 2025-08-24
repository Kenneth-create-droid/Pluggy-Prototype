import Passport from "./Passport";           // Updated component name
import profilePic from "./Images/profilepic.png"; // Local image

function App() {
  return (
    <div>
      <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#4CAF50", color: "white" }}>
        <h1>Pluggy</h1>
      </header>
     
      <main style={{ padding: "20px" }}>
        <h2>Pluggy Passport</h2>
        

        {/* MyPlug Passport */}
        <Passport 
          name="Kenneth Nnah"
          bio="Software Engineering Student | Pluggy Creator 🚀"
          imgUrl={profilePic}
        />
      </main>

      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f1f1f1" }}>
        <p>© 2025 Pluggy Prototype</p>
      </footer>
    </div>
  );
}

export default App;
