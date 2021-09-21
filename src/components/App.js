import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import { image, username, city } from '../data/user'
function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city}/>
      <About image={image}/>
    </div>
  );
}

export default App;
