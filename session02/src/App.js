import logo from "./logo.svg";
import "./App.css";

function App() {
  const h1Style = {
    fontSize: "40px",
    backgroundColor: "Green",
  };

  return (
    <div className="App">
      <h1> My React Page</h1>
    
      <p>This is my first React Page </p>
        
      
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
