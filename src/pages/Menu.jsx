import Burger1 from "../assets/menu/menu-burger-1.jpg";
import Burger2 from "../assets/menu/menu-burger-2.jpg";
import Burger3 from "../assets/menu/menu-burger-3.jpg";
import Burger4 from "../assets/menu/menu-burger-4.jpg";
import Burger5 from "../assets/menu/menu-burger-5.jpg";
import Burger6 from "../assets/menu/menu-burger-6.jpg";

import Drink1 from "../assets/menu/menu-drink-1.jpg";
import Drink2 from "../assets/menu/menu-drink-2.jpg";
import Drink3 from "../assets/menu/menu-drink-3.jpg";
import Drink4 from "../assets/menu/menu-drink-4.jpg";

import Comp1 from "../assets/menu/menu-com-1.jpg";
import Comp2 from "../assets/menu/menu-com-2.jpg";
import Comp3 from "../assets/menu/menu-com-3.jpg";
import Comp4 from "../assets/menu/menu-com-4.jpg";

export default function menu() {
  return (
    <div className="p-1 lg:p-20">
      <div>
        <h1 className="text-5xl text-[#8B4513] mb-5">Burgers</h1>
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-42 md:h-72"
              src={Burger1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl md:text-4xl text-white text-center mb-2">
                Classic American Burger
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-42 md:h-72"
              src={Burger2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl md:text-4xl text-white text-center mb-2">
                Mushroom Swiss Burger
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-42 md:h-72"
              src={Burger3}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl md:text-4xl text-white text-center mb-2">
                BBQ Bacon Burger
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-42 md:h-72"
              src={Burger4}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl md:text-4xl text-white text-center mb-2">
                California Burger
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-42 md:h-72"
              src={Burger5}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl md:text-4xl text-white text-center mb-2">
                Spicy Jalapeño Burger
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-42 md:h-72"
              src={Burger6}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl md:text-4xl text-white text-center mb-2">
                Veggie Burger
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-5xl text-[#8B4513] mb-5">Drinks</h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-72"
              src={Drink1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Coffee
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-72"
              src={Drink2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Orance juice
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-72"
              src={Drink3}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Soda
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-72"
              src={Drink4}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Water
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-5xl text-[#8B4513] mb-5">Complements</h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-72"
              src={Comp1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                French Fries
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-72"
              src={Comp2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Onion Rings
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-72"
              src={Comp3}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Nuggets
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-72"
              src={Comp4}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-4xl text-white text-center mb-2">
                Chicken Wings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
