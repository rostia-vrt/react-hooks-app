import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert alert={{ text: "test alert" }} />
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile:name" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
