const Specifications = ({ data }) => {
  return (
    <>
      <div className="bg-gray-700 rounded-full hover:scale-95 transition-all cursor-pointer  p-4 shadow-xl text-center ">
        <h2 className="text-3xl max-lg:text-2xl">
          {data.torque}Torque <i className="fa-light fa-gauge-simple"></i>
        </h2>
      </div>
      <div className="bg-gray-700 rounded-full hover:scale-95 transition-all cursor-pointer  p-4 shadow-xl text-center max-lg:text-2xl">
        <h2 className="text-3xl max-lg:text-2xl">
          {data.speed} Speed <i className="fa-light fa-gauge-simple"></i>
        </h2>
      </div>
      <div className="bg-gray-700 rounded-full hover:scale-95 transition-all cursor-pointer  p-4 shadow-xl text-center max-lg:text-2xl">
        <h2 className="text-3xl max-lg:text-2xl">{data.ZeroTop}</h2>
      </div>
      <div className="bg-gray-700 rounded-full hover:scale-95 transition-all cursor-pointer  p-4 shadow-xl text-center max-lg:text-2xl">
        <h2 className="text-3xl max-lg:text-2xl">
          {data.fuelEconomy} <i className="fa-sharp fa-light fa-gas-pump"></i>
        </h2>
      </div>
    </>
  );
};

export default Specifications;
