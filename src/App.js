import Profile from "./Profile";

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

        {/* Render the Profile component here */}
        <Profile />
      </main>

      <footer>
        <p>© 2025 Pluggy Prototype</p>
      </footer>
    </div>
  );
}

export default App;
