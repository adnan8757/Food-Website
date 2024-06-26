/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Hero() {
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [slider, setslider] = useState(0);

  const handlePlus = () => {
    setslider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  const handleMinus = () => {
    setslider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const slideclear = setInterval(() => {
      handlePlus();
    }, 2000);

    return () => clearInterval(slideclear);
  }, [slider]);

  return (
    <>
      <div className=" mt-[100px]">
        <div className=" w-[90%] mx-auto h-[80vh] my-5 relative">
          {imgData.map((item, i) => (
            <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
              <img
                src={item.url}
                alt=""
                className=" w-full h-[80vh] rounded-2xl object-cover"
              />
            </div>
          ))}
          <div className=" w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl"></div>
          <div className=" absolute w-full text-[20px] md:text-[30px] top-[50%] text-center font-semibold text-white flex justify-center">
            <p>Welcome to the world of Food</p>
          </div>

          <div className=" flex justify-between w-full px-5 absolute top-[50%] text-white">
            <FaAngleLeft
              size={35}
              className=" cursor-pointer"
              onClick={handleMinus}
            />
            <FaAngleRight
              size={35}
              className=" cursor-pointer"
              onClick={handlePlus}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
