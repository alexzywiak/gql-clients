import { useState } from "react";
import "./App.css";
import Authors from "./Authors";
import Posts from "./Posts";

function App() {
  const [view, setView] = useState(true);
  return (
    <div className="container">
      <header>
        <h1>GQL Partay</h1>
      </header>
      <button onClick={() => setView((s) => !s)}>Set View</button>
      {view ? <Authors /> : <Posts />}
    </div>
  );
}

export default App;
