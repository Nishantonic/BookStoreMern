import React from "react";
import { useState, useEffect } from "react";
import List from "../../public/List.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";
import axios from "axios";

const FreeBook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book");
        console.log(res.data);
        const filter = res.data.filter((data) => data.category === "Free");
        console.log(filter);
        setBook(filter);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  // const filterData = book.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2">Free Offere Course</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab
          voluptatum, iste ipsam vero deleniti similique dolor
        </p>
      </div>
      <div>
        {/* {console.log(filterData)} */}
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
        {/* <Cards /> */}
      </div>
    </>
  );
};

export default FreeBook;
