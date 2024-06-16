import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [iconName, setIconName] = useState("menu");

  function toToggle() {
    setIconName((prevName) => (prevName === "menu" ? "close" : "menu"));
  }

  return (
    <>
      <header className="bg-white flex items-center min-h-20">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Link to={"/"}>
              <h1 className="text-red-600 text-3xl font-bold">Shopping Cart</h1>
            </Link>
          </div>
          <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <Link to="/" className="hover:text-grey-500 text-lg font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="hover:text-grey-500 text-lg font-bold"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign In
            </button>
            {/* <ion-icon
              name={iconName}
              className="text-5xl cursor-pointer md:hidden"
              onClick={toToggle}
            ></ion-icon> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
