import React from "react";

const SocialLinks = () => {
  return (
    <div>
      <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span className="font-semibold text-gray-400 uppercase">
          Connect Us
        </span>
        <div className="flex flex-wrap justify-evenly items-center mt-8 text-gray-500 ">
          <a
            href="https://www.youtube.com/@MercedesBenz"
            target="_blank"
            className="mr-5 mb-5 lg:mb-0 text-red-500 text-4xl font-bold hover:bg-gray-900 rounded-full"
          >
            <i className="fa-brands fa-youtube"></i> Youtube
          </a>
          <a
            href="https://www.facebook.com/MercedesBenz"
            target="_blank"
            className="mr-5 mb-5 lg:mb-0 text-blue-500 text-4xl font-bold hover:bg-gray-900 rounded-full"
          >
            <i className="fa-brands fa-facebook"></i> facebook
          </a>
          <a
            href="https://twitter.com/mercedesbenz?lang=bn"
            target="_blank"
            className="mr-5 mb-5 lg:mb-0 text-gray-300 text-4xl font-bold hover:bg-gray-900 rounded-full"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a
            href="https://www.reddit.com/r/mercedes_benz/?rdt=50193"
            target="_blank"
            className="mr-5 mb-5 lg:mb-0 text-red-300 text-4xl font-bold hover:bg-gray-900 rounded-full"
          >
            <i class="fa-brands fa-reddit"></i> reddit
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
