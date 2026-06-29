import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = React.useState("Home");


  return (
    <>
      <div className="flex justify-around items-center h-14 bg-gray-500 text-white">
        <div>
          <h1 className="text-2xl font-bold">My Store</h1>
        </div>
        <ul className="flex justify-between items-center gap-4">
          <li className="items-center flex flex-col cursor-pointer" onClick={() => setMenuOpen("Home")}>
            <Link to="/">Home</Link>
            {menuOpen === "Home" && (
            <hr className="bg-red-500 border-none h-1 w-[80%]" />)}
          </li>
          <li className="items-center flex flex-col cursor-pointer" onClick={() => setMenuOpen("Mens")}>
            <Link to="/mens">Mens</Link>
            {menuOpen === "Mens" && (
            <hr className="bg-red-500 border-none h-1 w-[80%]" />)}
          </li>
          <li className="items-center flex flex-col cursor-pointer " onClick={() => setMenuOpen("Womens")}>
            <Link to="/womens">Womens</Link>
            {menuOpen === "Womens" && (
            <hr className="bg-red-500 border-none h-1 w-[80%]" />)}
          </li>
          <li className="items-center flex flex-col cursor-pointer" onClick={() => setMenuOpen("Kids")}>
            <Link to="/kids">Kids</Link>
            {menuOpen === "Kids" && (
            <hr className="bg-red-500 border-none h-1 w-[80%]" />)}
          </li>
        </ul>

        <div className="flex justify-between items-center">
          <Link to="/login">
            <button className=" text-white font-bold py-2 px-4 rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300 ease-in-out w-24 outline-none cursor-pointer">
              Login
            </button>
          </Link>
          <Link to="/cart">
            <img className="w-8 h-8 ml-4 cursor-pointer"
              src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-shopping-cart-convenient-icon-png-image_4637407.jpg"
              alt="cart"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
