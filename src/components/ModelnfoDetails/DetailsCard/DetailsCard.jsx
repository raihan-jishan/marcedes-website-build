import React from "react";

const DetailsCard = ({ data }) => {
  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={data.InteriorImage1}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={data.InteriorImage2}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={data.InteriorImage3}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={data.InteriorImage4}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={data.InteriorImage5}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={data.InteriorImage6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
