// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Notes from "./pages/Notes/Notes";
import Exercises from "./pages/Exercises/Exercise";
import Footer from "./components/Footer";
import Auth from "./components/auth";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Exercises" element={<Exercises />} />
      </Routes>
      <Footer />
      <Auth />
    </>
  );
};

export default App;
