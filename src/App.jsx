import "./App.css";
import Navbar from "./components/Navbar";

import Burger from "./assets/hero-burger-1.png";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-[#F5DEB3] h-screen font-[Bangers]">
          <Navbar />
          <div className="w-full p-5 flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Experience flavor explosions!
            </h1>
            <img src={Burger} className="md:w-6/12" alt="" />
            <p className="text-center text-3xl text-[#8B4513] mt-5">
              Treat yourself to the juiciest, most mouth-watering burgers
              around, made with only the freshest, highest quality ingredients.
            </p>
            <button className="bg-[#8B4513] text-3xl mt-5 p-3 rounded-md shadow-lg text-white">
              Order Now!
            </button>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
