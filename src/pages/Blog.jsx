import Profile1 from "../assets/profile1.jpg";

import Blog1 from "../assets/blog/blog-1.jpg";
import Blog2 from "../assets/blog/blog-2.jpg";
import Blog3 from "../assets/blog/blog-3.jpg";
import Blog4 from "../assets/blog/blog-4.jpg";
import Blog5 from "../assets/blog/blog-5.jpg";

export default function Blog() {
  return (
    <div>
      <h1 className="text-5xl text-white text-center">Our Blog</h1>
      <div className="grid md:flex justify-center gap-10 pb-5">
        <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
          <img
            className="w-full h-42 md:h-80"
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
        <div className="grid">
          <div className="max-w-sm bg-[#8B4513] rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-32 object-cover md:h-80"
              src={Blog2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2">
              <p className="text-white">5 min to read</p>
              <div className="font-bold text-lg md:text-4xl text-white">
                How to make the perfect burger at home
              </div>
            </div>
            <div className="flex items-center px-5 pb-5 text-white">
              <div className="">
                <div className="w-3/12 px-4">
                  <img
                    src={Profile1}
                    className="shadow rounded-full max-w-full h-auto align-middle border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-sm">Jane Smith</p>
                <p className="text-sm"> 09/15/2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
