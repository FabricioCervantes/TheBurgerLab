import Burger from "../assets/hero-burger-1.jpg";
import Burger1 from "../assets/burger.jpg";
import Drink from "../assets/drink-1.jpg";
import Side from "../assets/side.jpg";

import Promo from "../assets/promo.jpg";
import Promo2 from "../assets/promo2.jpg";
import Profile1 from "../assets/profile1.jpg";
import Profile2 from "../assets/profile2.jpg";
import Profile3 from "../assets/profile3.jpg";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";

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
        <h1 className="text-5xl mb-2 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Experience flavor explosions!
        </h1>
        <img src={Burger} className="w-full rounded-lg" alt="Burger" />
        <p className="text-center text-2xl text-[#8B4513] mt-5">
          Treat yourself to the juiciest, most mouth-watering burgers around,
          made with only the highest quality ingredients.
        </p>
        <button className="bg-[#8B4513] text-3xl mt-5 p-3 rounded-md shadow-lg text-white">
          Order Now!
        </button>
      </div>

      <div className="h-[580px] w-full m-auto pb-16 relative group hidden md:block">
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
      <div className="py-5 md:py-52 flex flex-col gap-5">
        <div className="flex flex-wrap gap-5 lg:flex-nowrap justify-around">
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-72"
              src={Burger1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Burgers
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg">
            <img
              className=" h-72 w-72"
              src={Side}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Sides
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg">
            <img
              className=" h-72 w-72"
              src={Drink}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Drinks
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center gap-5">
          <div
            style={{ backgroundImage: `url(${Promo}` }}
            className="w-full h-80  bg-center bg-cover duration-500"
          ></div>
          <div
            style={{ backgroundImage: `url(${Promo2}` }}
            className="w-full h-80  bg-center bg-cover duration-500"
          ></div>
        </div>
        <div className="flex flex-col gap-32">
          <h1 className="text-5xl text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Testimonials
          </h1>
          <div className="flex flex-wrap gap-5 lg:flex-nowrap justify-around">
            <div className="max-w-sm h-fit bg-[#FFDB58] rounded overflow-hidden shadow-lg">
              <div className="flex p-5 flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                  <img
                    src={Profile1}
                    className="shadow rounded-full max-w-full h-auto align-middle border-none"
                  />
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-4xl text-[#8B4513] text-center mb-2">
                  Best burgers in town! Juicy patties, fresh toppings, and
                  crispy fries
                </div>
                <div className="flex justify-center text-3xl text-[#8B4513]">
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                </div>
              </div>
            </div>
            <div className="max-w-sm h-fit bg-[#FFDB58] rounded overflow-hidden shadow-lg">
              <div className="flex p-5 flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                  <img
                    src={Profile2}
                    className="shadow rounded-full max-w-full h-auto align-middle border-none"
                  />
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-4xl text-[#8B4513] text-center mb-2">
                  Best burgers in town! Juicy patties, fresh toppings, and
                  crispy fries
                </div>
                <div className="flex justify-center text-3xl text-[#8B4513]">
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                </div>
              </div>
            </div>

            <div className="max-w-sm h-fit bg-[#FFDB58] rounded overflow-hidden shadow-lg">
              <div className="flex p-5 flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                  <img
                    src={Profile3}
                    className="shadow rounded-full max-w-full h-auto align-middle border-none"
                  />
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-4xl text-[#8B4513] text-center mb-2">
                  Best burgers in town! Juicy patties, fresh toppings, and
                  crispy fries
                </div>
                <div className="flex justify-center text-3xl text-[#8B4513]">
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
