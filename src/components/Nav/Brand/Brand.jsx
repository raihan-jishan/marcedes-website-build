import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      <Link
        to={"/"}
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-mercedes-8-202855.png?f=webp&w=256"
          className="h-10"
          alt="mercedes benz logo "
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          MRCD
        </span>
      </Link>
    </div>
  );
};

export default Brand;
