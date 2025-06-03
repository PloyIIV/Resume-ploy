import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import burgerMenu from "../assets/image/menu-icon.png";

const burger = (
  <svg
    className="feather feather-menu"
    fill="none"
    height="30"
    stroke="currentColor"
    strokeLinecap="round"
    strokewnejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);
const dashboard = (
  <svg
    className="feather feather-grid"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect height="7" width="7" x="3" y="3" />
    <rect height="7" width="7" x="14" y="3" />
    <rect height="7" width="7" x="14" y="14" />
    <rect height="7" width="7" x="3" y="14" />
  </svg>
);
const user = (
  <svg
    className="feather feather-user"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const phone = (
  <svg
    className="feather feather-phone"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const port = (
  <svg
    className="feather feather-folder"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);
const certificate = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    data-name="Layer 1"
    fill="white"
  >
    <path d="m11 12a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm6-3a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zm-9-3h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2zm12 13.444v3.833a.721.721 0 0 1 -1.231.51l-.769-.768-.769.768a.721.721 0 0 1 -1.231-.51v-3.833a3.987 3.987 0 0 1 2-7.444 3.939 3.939 0 0 1 1 .142v-7.142a3 3 0 0 0 -3-3h-8a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h5a1 1 0 0 1 0 2h-5a5.006 5.006 0 0 1 -5-5v-12a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v8.382a3.95 3.95 0 0 1 -1 6.062zm0-3.444a2 2 0 1 0 -2 2 2 2 0 0 0 2-2z" />
  </svg>
);

function Navbar() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex">
      {/* Hamburger menu */}
      <button
        className="flex items-center lg:hidden absolute right-10"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <img src={burgerMenu} className={`${toggleMenu ? "hidden" : ""}`} />
      </button>
      {toggleMenu && (
        <div
          onMouseLeave={() => setToggleMenu(!toggleMenu)}
          className="w-[300px] h-screen absolute flex flex-col right-3.5 top-0 py-2 px-6 bg-[#222835] rounded-b-2xl shadow-2xl shadow-black text-base text-gray-200"
        >
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-gray-500 absolute right-1.5"
          >
            {burger}
          </button>
          <div className="flex md:flex-col items-center my-10 md:my-5">
            <img
              className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full ring-2 md:ring-4 ring-orange-500"
              src="https://kytmoipjixhtewqymzuy.supabase.co/storage/v1/object/public/avatarImg//photo.jpg"
              alt="my picture"
            />
            <div className="ml-5 md:ml-0 md:mt-5 md:text-center text-white">
              <p className="text-base font-semibold">Ploy Chadapan</p>
              <p className="text-xs font-extralight">Fullstack Developer</p>
            </div>
          </div>
          <hr className="border border-gray-700 mb-5" />
          <div>
            <div className="mb-1 mt-1 px-2 py-4 rounded-lg flex hover:bg-slate-600 hover:bg-opacity-30">
              <a href="/#about" className="flex items-center ml-2">
                {user}
                <p className="ml-5">About</p>
              </a>
            </div>
            <div className="mb-1 mt-1 px-2 py-4 rounded-lg flex hover:bg-slate-600 hover:bg-opacity-30">
              <a href="/#passions" className="flex items-center ml-2">
                {dashboard}
                <p className="ml-5">Passions</p>
              </a>
            </div>
            <div className="mb-1 mt-1 px-2 py-4 rounded-lg flex hover:bg-slate-600 hover:bg-opacity-30">
              <a href="/#portfolio" className="flex items-center ml-2">
                {port}
                <p className="ml-5">Portfolio</p>
              </a>
            </div>
            <div onClick={() => navigate('/certificate')} className="mb-1 mt-1 px-2 py-4 rounded-lg flex hover:bg-slate-600 hover:bg-opacity-30 cursor-pointer">
              <div className="flex items-center ml-2">
                {certificate}
                <p className="ml-5">Certificate</p>
              </div>
            </div>
            <div className="mb-1 mt-1 px-2 py-4 rounded-lg flex hover:bg-slate-600 hover:bg-opacity-30">
              <a href="/#contact" className="flex items-center ml-2">
                {phone}
                <p className="ml-5">Contact Me</p>
              </a>
            </div>
          </div>
          <div className="absolute bottom-16 w-10/12 text-center font-medium text-xs text-gray-500">
            <hr className="border border-gray-700 mb-10" />
            <p>chadapan.y58@gmail.com</p>
            <p>099-649-8952</p>
          </div>
        </div>
      )}
      {/* Menu */}
      <ul className="lg:flex flex-row items-center tracking-widest hidden lg:mr-16 ">
        <li className="mx-4 hover:text-blue-600">
          <a href="/#about">About</a>
        </li>
        {/* <li className="mx-4 hover:text-blue-600">
          <a href="/#passions">Passions</a>
        </li> */}
        <li className="mx-4 hover:text-blue-600">
          <a href="/certificate">Certificate</a>
        </li>
        <li className="mx-4">
          <button className="bg-blue-500 p-2 px-5 px text-white rounded-2xl font-semibold hover:bg-amber-500 hover:scale-105">
            <a href="/#contact">Contact Me</a>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
