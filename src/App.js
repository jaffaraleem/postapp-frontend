// src/App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./HomePage/Home";

function App() {
  const [user, setUser] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
