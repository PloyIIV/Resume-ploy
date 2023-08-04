import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import burgerMenu from "../assets/image/menu-icon.png"

function Navbar() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }
  const handleToggleOff = () => {
    setToggleMenu(false)
  }

  return (
    <div className="flex" >
      {/* Hamburger menu */}
      <div className="flex items-center mr-20 lg:hidden relative">
        <button onClick={handleToggle}><img src={burgerMenu} className="active:scale-150" /></button>
      </div>
      {toggleMenu && (
          <div className="absolute flex flex-col right-3 top-2 w-[250px] bg-blue-50 p-1 rounded-2xl shadow-2xl shadow-blue-400" >
            <button className="text-right mr-5 text-3xl" onClick={handleToggleOff}>✕</button>
            <div className="p-5 bg-white text-blue-500 rounded-xl h-10 flex justify-center items-center mt-1 hover:scale-110 hover:shadow-lg hover:shadow-blue-400"><a href="#about">About</a></div>
            <div className="p-5 bg-white text-blue-500 rounded-xl h-10 flex justify-center items-center mt-1 hover:scale-110 hover:shadow-lg hover:shadow-blue-400"><a href="#passions">Passions</a></div>
            <div className="p-5 bg-white text-blue-500 rounded-xl h-10 flex justify-center items-center mt-1 hover:scale-110 hover:shadow-lg hover:shadow-blue-400"><a href="#portfolio">Portfolio</a></div>
            <div className="p-5 bg-white text-blue-500 rounded-xl h-10 flex justify-center items-center mt-1 hover:scale-110 hover:shadow-lg hover:shadow-blue-400"><a href="#contact">Contact Me</a></div>
          </div>
        )}
      {/* Menu */}
      <ul className="lg:flex flex-row items-center tracking-widest hidden lg:mr-16 ">
        <li className="mx-4 hover:scale-110">
          <a href="#about">About</a>
        </li>
        <li className="mx-4 hover:scale-110">
          <a href="#passions">Passions</a>
        </li>
        <li className="mx-4 hover:scale-110">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="mx-4">
          <button
            className="bg-blue-500 p-2 px-5 px text-white rounded-2xl font-semibold hover:bg-amber-500 hover:scale-105"
          ><a href="#contact">
            Contact Me
            </a></button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
