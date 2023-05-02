import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiTwotoneMail,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      {/* Footer container */}
      <footer className="bg-[#D16315] text-white text-center  lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-[#8B4513] p-6 lg:justify-between">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center text-center gap-10">
            <a href="#!" className="md:mr-6">
              <AiFillInstagram></AiFillInstagram>
            </a>
            <a href="#!" className="md:mr-6">
              <AiFillFacebook></AiFillFacebook>
            </a>
            <a href="#!" className="md:mr-6">
              <FaTiktok></FaTiktok>
            </a>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid gap-10 md:flex justify-around">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <img src={Logo} className="h-12 mr-5" alt="Logo" />
                The Burger Lab
              </h6>
              <p className="w-80">
                Discover a world of flavor with our delicious burgers and sides
                at Burger House. Come dine with us today!
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Overview
              </h6>
              <p className="mb-4">
                <a href="#!">Home</a>
              </p>
              <p className="mb-4">
                <a href="#!">Menu</a>
              </p>
              <p className="mb-4">
                <a href="#!">Locations</a>
              </p>
            </div>
            {/* Contact section */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <ImLocation></ImLocation>
                123 Main St Anytown, USA 12345
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <AiTwotoneMail></AiTwotoneMail>
                info@theburgerlab.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <AiFillPhone></AiFillPhone>+ 01 234 567 88
              </p>
            </div>
          </div>
        </div>

        {/*Copyright section*/}
        <div className="bg-[#9f4505] p-6 text-center ">
          <span>© 2023 Copyright:&nbsp;</span>
          <a className="font-semibold" href="#">
            The Burger Lab
          </a>
        </div>
      </footer>
    </>
  );
}
