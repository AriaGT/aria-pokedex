import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokedexById from "./pages/PokedexById";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexById />} />
        </Route>
      </Routes>
      <div className="incompatible__screen"><p>Incompatible Screen</p></div>
    </div>
  );
}

export default App;
