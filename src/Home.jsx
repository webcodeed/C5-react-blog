import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("John Wick");
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>His name is {name}</p>
      <button
        onClick={() => {
          setName("Ronaldo de lima");
        }}
      >
        Change name
      </button>
    </div>
  );
};

export default Home;
