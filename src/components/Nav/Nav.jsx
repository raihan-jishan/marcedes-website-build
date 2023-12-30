import { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { NavData } from "../../utils/constant.jsx";
import NavLists from "./NavLists.jsx";
import Brand from "./Brand/Brand.jsx";
const Nav = () => {
  const [click, setClick] = useState(false);
  const handleNavbar = () => {
    setClick(!click);
  };
  const CloseNavbar = () => {
    setClick(false);
  };
  return (
    <div className="sticky top-0">
      <nav className="bg-black ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Brand />
          {/* open nav in mobile  */}
          <button
            type="button"
            className="inline-flex items-center   w-10 h-10 justify-center text-3xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleNavbar}
          >
            {click ? (
              <IoCloseOutline size={45} />
            ) : (
              <HiBars3CenterLeft size={45} />
            )}
          </button>
          <div
            className={
              click
                ? " w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse  ">
              {NavData.map((data) => {
                return (
                  <NavLists
                    key={data.icon}
                    data={data}
                    CloseNavbar={CloseNavbar}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
