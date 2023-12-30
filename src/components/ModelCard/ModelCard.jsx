import { Link } from "react-router-dom";
const ModelCard = ({ data }) => {
  return (
    <div>
      <div class="max-w-sm rounded-lg shadow-xl  ">
        <Link to={"/"}>
          <img
            class="rounded-t-lg"
            src={data.modelImage}
            alt="picture not found!"
          />
        </Link>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-300">
              {data.title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.spacifications}
          </p>
          <Link
            to={data.path}
            class="inline-flex items-center px-3 py-2 font-medium text-center  rounded-2xl bg-gray-900 text-xl w-full hover:scale-95 transition-all hover:bg-gray-700 gap-2 shadow-2xl"
          >
            More details
            <i className="fa-regular fa-right text-2xl"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
