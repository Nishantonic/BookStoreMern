import React from "react";
import Home from "../src/home/Home.jsx";
import Course from "./components/Course";
import { Routes, Route } from "react-router-dom";
import Courses from "./routers/Courses.jsx";
import SignUp from "./components/SignUp.jsx";

const darkColor = "dark:bg-slate-900 dark:text-white";
const App = () => {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
