import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function about() {
  return (
    <div className="">
      <div className="bg-about gap-5 text-white flex flex-col justify-center items-center h-[70vh] object-cover">
        <h1 className="text-4xl text-center">
          Come for the burgers, stay for the experience.
        </h1>
        <p className="text-2xl">Find more</p>
        <MdKeyboardDoubleArrowDown />
      </div>
      <div className="py-5 text-[#8B4513] p-2 md:flex items-center gap-5">
        <div className="md:w-1/2">
          <h1 className="text-4xl text-center text-[#D16315] font-bold">
            Our Story
          </h1>
          <p className="text-justify">
            Our hamburger restaurant was founded with the idea of offering our
            customers the best burger possible. We use only fresh, local
            ingredients, and work hard to ensure that each burger is delicious.
            We are committed to providing a unique and exceptional culinary
            experience for our customers.
          </p>
        </div>
        <div className="mt-5 md:w-1/2">
          <h1 className="text-4xl text-center font-bold text-[#D16315]">
            Our Commitments
          </h1>
          <ul className="flex flex-col gap-2 mt-2 text-justify">
            <li>
              <strong>Quality Ingredients:</strong> We use fresh, high-quality
              ingredients in our burgers, including trusted meat suppliers and
              local vegetables.
            </li>
            <li>
              <strong>Friendly and Helpful Staff:</strong> Our staff is trained
              to provide welcoming service and help you choose the perfect
              burger.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to reducing our
              environmental impact by working with local suppliers and using
              recyclable and biodegradable packaging.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
