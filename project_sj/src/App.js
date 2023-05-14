import "./App.css";
import React, { useEffect } from "react";
import Home from "./Home";
import Menu from "./Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;
