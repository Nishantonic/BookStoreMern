import React from "react";
import list from "../../public/List.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container  md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!!!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            aperiam, non perferendis delectus dolore dolorum assumenda? Ipsa et
            culpa facere perspiciatis reprehenderit at consequatur, officia
            dolorem, odio rem accusantium! Et?
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white mt-6 px-4 py-4 rounded-md hover:bg-pink-700 duration-300">
              back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
