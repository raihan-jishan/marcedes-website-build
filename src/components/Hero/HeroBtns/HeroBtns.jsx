import { Link } from "react-router-dom";

const HeroBtns = ({data}) => {
  return (
    <div>
         <div className="max-lg:flex items-center justify-center flex-col ">
                  <Link
                    to={"/"}
                    className="text-xl inline-flex items-center justify-center px-5 py-3 mr-3   font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 gap-2 hover:bg-gray-900 transition-all max-lg:w-full"
                  >
                    {data.FirstnavigateBtnTitle} {data.FirstnavigateBtnIcon}
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-2 max-lg:mt-4 max-lg:w-full"
                  >
                    {data.SecondnavigateBtnTitle} {data.SecondnavigateBtnIcon}
                  </Link>
                </div>
    </div>
  )
}

export default HeroBtns;