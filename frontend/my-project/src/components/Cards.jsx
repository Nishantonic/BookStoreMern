import React from "react";

const Cards = ({ item, key }) => {
  return (
    <>
      <div className=" my-3 mt-5  z-0 mx-auto bg-base-100 card p-3 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
        <div
          className="card bg-base-100 w-92 shadow-xl
        dark:shadow-sm dark:shadow-white dark:bg-slate-900 dark:text-white dark:border-white"
        >
          <figure>
            <img
              src={item.image}
              alt="Shoes"
              className="dark:rounded-3xl pt-2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex  justify-between">
              <div className="badge  badge-outline">${item.price}</div>

              <div className="cursor-pointer px-2 py-1 rounded-full  border-[1px] badge badge-outline hover:bg-pink-500 hover:text-white  duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Cards;
