import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <section className="bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="https://www.mercedes-benz.com/en/"
            target="_blank"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span className="text-xl bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              97years
            </span>{" "}
            <span className="text-xl  font-medium">long history</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            History about marcedes
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Mercedes-Benz commonly referred to as Mercedes and sometimes as
            Benz, is a German luxury and commercial vehicle automotive brand
            established in 1926.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to={"/about-marcedes"}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
            <a
              href="https://www.youtube.com/watch?v=rag4v449WJM"
              target="_blank"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
        </div>
        {/* text */}
        <div className="m-10 text-xl">
          <p className="pt-3 leading-10">
            Mercedes-Benz traces its origins to Karl Benz's first internal
            combustion engine in a car, seen in the Benz Patent Motorwagen –
            financed by Bertha Benz's dowry[10] and patented in January 1886[11]
            – and Gottlieb Daimler and their engineer Wilhelm Maybach's
            conversion of a stagecoach, with the addition of a petrol engine,
            introduced later that year. The Mercedes automobile was first
            marketed in 1901 by Daimler Motoren Gesellschaft (DMG). Emil
            Jellinek-Mercedes, a Jewish-Austrian automobile entrepreneur who
            worked with DMG, registered the trademark in 1902, naming the 1901
            Mercedes 35 hp after his daughter Mercedes Jellinek. Jellinek was a
            businessman and marketing strategist who promoted "horseless"
            Daimler automobiles among the highest circles of society. At the
            time, it was a meeting place for the haute volée of France and
            Europe, especially in winter. His customers included the Rothschild
            family and other wealthy clients, but as early as 1901, he was
            selling Mercedes cars in the "New World" as well, including to
            billionaires Rockefeller, Astor, Morgan, and Taylor. At the Nice
            race he attended in 1899, Jellinek drove under the pseudonym
            "Monsieur Mercédès". Many consider that race the birth of
            Mercedes-Benz as a brand. In 1901, the name "Mercedes" was
            re-registered by DMG worldwide as a protected trademark. The first
            Mercedes-Benz branded vehicles were produced in 1926, following the
            merger of Karl Benz and Gottlieb Daimler's companies into the
            Daimler-Benz company on 28 June of the same year.[11][12] Gottlieb
            Daimler (1834–1900) – founder of Daimler-Motoren-Gesellschaft
            Gottlieb Daimler was born on 17 March 1834 in Schorndorf. After
            training as a gunsmith and working in France, he attended the
            Polytechnic School in Stuttgart from 1857 to 1859. After completing
            various technical activities in France and England, he started
            working as a draftsman in Geislingen in 1862. At the end of 1863, he
            was appointed workshop inspector at a machine-tool factory in
            Reutlingen, where he met Wilhelm Maybach in 1865.[13] Throughout the
            1930s, Mercedes-Benz produced the 770 model, a car that was notably
            popular throughout Germany's Nazi period. Adolf Hitler was known to
            have driven in a model of this car during his time in power, with
            modified custom bulletproof windshields.[14] Most of the currently
            surviving 770 models were sold at auctions to private buyers. One of
            the cars is currently on display at the War Museum in Ottawa,
            Ontario.[15] From 1937 onward, Daimler Benz focused increasingly on
            military products such as the LG3000 lorry and the DB600 and the
            DB601 aero engines. To build the latter, in 1936, it built a factory
            hidden in the forest at Genshagen around 10 km south of Berlin. By
            1942, the company had mostly stopped producing cars, and was now
            devoted to war production. According to its statement, in 1944,
            almost half of its 63,610 employees were forced labourers, prisoners
            of war, or concentration-camp detainees.[16] Another source quotes
            this figure at 46,000. The company later paid $12 million in
            reparations to the labourers' families.[17] In 1958, the two
            companies began a partnership to sell their cars in the United
            States with Studebaker. A few American-based Daimler Benz
            dealerships were converted into Mercedes-Benz dealerships when
            Daimler's non-Mercedes-partnered company closed in 1966. Over the
            decades, Mercedes-Benz has introduced many electronic and mechanical
            innovations and safety features that later became common.[18]
            Currently, Mercedes-Benz is one of the best-known and
            longest-standing automotive brands in the world. The pontiff's
            Popemobile has often been sourced from Mercedes-Benz.[19] In
            November 2019, Daimler AG announced that Mercedes-Benz, until that
            point a company marque, would be spun off into a separate, wholly
            owned subsidiary called Mercedes-Benz AG. The new subsidiary would
            manage the Mercedes-Benz car and van business. Mercedes-Benz-badged
            trucks and buses would be part of the Daimler Truck AG
            subsidiary.[1] For information relating to the three-pointed star
            symbol of the brand, see under the title
            Daimler-Motoren-Gesellschaft, including the merger into
            Daimler-Benz. In May 2022, Mercedes-Benz announced that it has
            recently sold the most expensive car at the price of $142 million
            (€135 million).[20] The car is a very rare 1955 Mercedes-Benz SLR
            that has been kept in the German automaker's collection and bought
            by a private owner. Mercedes in an announcement said that the sale
            will be used to establish the Mercedes-Benz Fund.[21] In June 2022,
            Mercedes-Benz recalled almost one million vehicles built between
            2004 and 2015, due to potential problems with their braking system,
            caused by possible "advanced corrosion".[22]
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
