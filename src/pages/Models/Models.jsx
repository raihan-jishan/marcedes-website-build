import React, { useEffect, useState } from "react";
import ModelCard from "../../components/ModelCard/ModelCard.jsx";
import { ModelData } from "../../utils/constant.jsx";
import LoadingImages from "../../components/Skeleton/LoadingImages.jsx";
const Models = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <section>
      <div className="m-2 p-2">
        <h1 className="text-3xl   font-semibold tracking-wider font-Comfortaa Scribble">
          Models
        </h1>
      </div>

      {loading ? (
        <LoadingImages />
      ) : (
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-1">
          {ModelData.map((data) => {
            return <ModelCard data={data} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Models;
