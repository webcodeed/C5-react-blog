import Home from "./Home";
import Navbar from "./Navbar";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Todo />
      </div>
    </div>
  );
}

export default App;
