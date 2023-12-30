import React from "react";

const VedioDetails = ({ data }) => {
  return (
    <>
      <h1 className="text-4xl p-4 font-semibold">
        Vedio details <i className="fa-regular fa-play"></i>
      </h1>
      <div className="flex items-center justify-center">
        <iframe width="1000" height="315" src={data.vedioLink}></iframe>
      </div>
    </>
  );
};

export default VedioDetails;
