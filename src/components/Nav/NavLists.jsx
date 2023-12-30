import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
const NavLists = ({ data , CloseNavbar}) => {
  return (
    <div>
      <li className="py-2 px-3 text-gray-200 text-xl  rounded   md:p-0 dark:text-white flex hover:text-gray-300 transition-all ">
        <NavLink
          className={(navInfo) =>
            navInfo.isActive
              ? "font-bold border-2 border-gray-700 shadow-2xl text-2xl text-gray-100 p-1 px-2 rounded-2xl max-lg:px-16"
              : "p-1"
          }
          to={`/${data.path}`}
          // eslint-disable-next-line react/no-children-prop
          children={(navInfo) =>
            navInfo.isActive ? (
              <span className="">
                {data.name} {data.icon}
              </span>
            ) : (
              <span>{data.name}</span>
            )
          }
          onClick={CloseNavbar}
        />
      </li>
    </div>
  );
};

export default NavLists;
