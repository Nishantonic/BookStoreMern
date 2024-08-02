import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course.jsx";
import list from "../../public/List.json";

const Courses = () => {
  console.log(list);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <div className="dark:bg-slate-900 dark:text-white">
          <Course />
        </div>
        <Footer />
        <></>
      </div>
    </>
  );
};

export default Courses;
