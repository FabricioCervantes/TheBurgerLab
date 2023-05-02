import Burger from "../assets/hero-burger-1.png";
// import Burger2 from "../assets/hero-burger-2.png";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1668243074547-28f9d7d30b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="w-full p-5 flex flex-col justify-center items-center md:hidden">
        <h1 className="text-5xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Experience flavor explosions!
        </h1>
        <img src={Burger} className="md:w-6/12" alt="Burger" />
        <p className="text-center text-3xl text-[#8B4513] mt-5">
          Treat yourself to the juiciest, most mouth-watering burgers around,
          made with only the freshest, highest quality ingredients.
        </p>
        <button className="bg-[#8B4513] text-3xl mt-5 p-3 rounded-md shadow-lg text-white">
          Order Now!
        </button>
      </div>

      <div className=" h-[580px] w-full m-auto pb-16 relative group hidden md:block">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full  bg-center bg-cover duration-500"
        >
          <h1 className="text-5xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></h1>
        </div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-3xl text-[#8B4513] mt-5">
            Treat yourself to the juiciest, most mouth-watering burgers around,
            made with only the freshest, highest quality ingredients.
          </p>
          <button className="bg-[#8B4513] text-3xl mt-5 p-3 rounded-md shadow-lg text-white">
            Order Now!
          </button>
        </div>
      </div>
    </>
  );
}
