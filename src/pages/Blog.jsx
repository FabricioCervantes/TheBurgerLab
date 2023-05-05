import Profile1 from "../assets/blog/profile-1.jpg";
import Profile2 from "../assets/blog/profile-2.jpg";
import Profile3 from "../assets/blog/profile-3.jpg";
import Profile4 from "../assets/blog/profile-4.jpg";
import Profile5 from "../assets/blog/profile-5.jpg";

import Blog1 from "../assets/blog/blog-1.jpg";
import Blog2 from "../assets/blog/blog-2.jpg";
import Blog3 from "../assets/blog/blog-3.jpg";
import Blog4 from "../assets/blog/blog-4.jpg";
import Blog5 from "../assets/blog/blog-5.jpg";

export default function Blog() {
  return (
    <div>
      <div className="flex flex-col p-5 gap-2 text-white items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <h1 className="text-5xl">Our Blog</h1>
        <p className="text-md text-center md:text-2xl">
          Discover the latest trends, stories, and tips on burgers. Our blog is
          your go-to source for everything burger-related.
        </p>
      </div>
      <div className="grid md:flex justify-center gap-10 pb-5">
        <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
          <img
            className="w-full h-42 md:h-auto object-cover"
            src={Blog1}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <p className="text-white">8 min to read</p>
            <div className="font-bold text-4xl text-white text-center">
              The 10 best hamburgers in the world
            </div>
          </div>
          <div className="flex items-center px-5 pb-5 text-white">
            <div className="">
              <div className="w-4/12 px-4">
                <img
                  src={Profile1}
                  className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Jane Smith</p>
              <p> 09/15/2021</p>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 items-center">
          <div className="max-w-sm flex md:h-full bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <div className="w-1/3">
              <img
                className="w-full h-full object-cover"
                src={Blog2}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="w-2/3 md:flex flex-col justify-between">
              <div className="p-4 md:p-5">
                <p className="text-white">5 min to read</p>
                <div className="font-bold text-lg md:text-3xl text-white">
                  How to make the perfect burger at home
                </div>
              </div>
              <div className="flex px-4 pb-3 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2/12">
                    <img
                      src={Profile2}
                      className="shadow rounded-full max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <p className="font-bold text-sm">Sarah Lee</p>
                </div>
                <p>12/01/2021</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm flex md:h-full bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <div className="w-1/3">
              <img
                className="w-full h-full object-cover"
                src={Blog3}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="w-2/3 md:flex flex-col justify-between">
              <div className="p-4 md:p-5">
                <p className="text-white">10 min to read</p>
                <div className="font-bold text-lg md:text-3xl text-white">
                  From Farm to Burger: Fresh Ingredients Only
                </div>
              </div>
              <div className="flex px-4 pb-3 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2/12">
                    <img
                      src={Profile3}
                      className="shadow rounded-full max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <p className="font-bold text-sm">John Doe</p>
                </div>
                <p>08/09/2022</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm flex md:h-full bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <div className="w-1/3">
              <img
                className="w-full h-full object-cover"
                src={Blog4}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="w-2/3 md:flex flex-col justify-between">
              <div className="p-4 md:p-5">
                <p className="text-white">7 min to read</p>
                <div className="font-bold text-lg md:text-3xl text-white">
                  Beyond the Bun: Creative Toppings Ideas
                </div>
              </div>
              <div className="flex px-4 pb-3 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2/12">
                    <img
                      src={Profile4}
                      className="shadow rounded-full max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <p className="font-bold text-sm">Emily Jones</p>
                </div>
                <p>02/07/2022</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm flex md:h-full bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <div className="w-1/3">
              <img
                className="w-full h-full object-cover"
                src={Blog5}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="w-2/3 md:flex flex-col justify-between">
              <div className="p-4 md:p-5">
                <p className="text-white">4 min to read</p>
                <div className="font-bold text-lg md:text-3xl text-white">
                  The Ultimate Burger Battle: Taste Test
                </div>
              </div>
              <div className="flex px-4 pb-3 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2/12">
                    <img
                      src={Profile5}
                      className="shadow rounded-full max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <p className="font-bold text-sm">Michael Brown</p>
                </div>
                <p> 04/22/2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pb-5">
        <button className="bg-[#8B4513] text-3xl mt-5 p-3 rounded-md shadow-lg text-white transform transition duration-500 hover:scale-105">
          All blog posts
        </button>
      </div>
    </div>
  );
}
