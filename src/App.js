import Profile from "./Profile";
import profilepic from "./Images/profilepic.png"; // <-- import the local image


function App() {
  return (
    <div>
      <header>
         <h1>Pluggy</h1>
      </header>
     
      <main>
        <h2>Welcome to Pluggy 🎉</h2>
        <p>Your social adventure starts here.</p>
        <button>Get Started</button>

        {/* Single editable Profile */}
        <Profile 
          name="Kenneth Nnah"
          bio="Software Engineering Student | Pluggy Creator 🚀"
          imgUrl={profilepic}
        />
      </main>

      <footer>
        <p>© 2025 Pluggy Prototype</p>
      </footer>
    </div>
  );
}

export default App;
