import { HeroData } from "../../utils/constant";
import HeroBtns from "./HeroBtns/HeroBtns"; 
const Hero = () => {
  return (
    <div>
      <section className="bg-black ">
        {HeroData.map((data) => {
          return (
            <div
              className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
              key={data.id}
            >
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray-300">
                  {data.HeroTitle}
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  {data.description}
                </p>
                <HeroBtns data={data} />
              </div>
              <div className=" lg:mt-0 lg:col-span-5 lg:flex w-full h-full ">
                <img src={data.HeroImage} alt="mockup" />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Hero;
