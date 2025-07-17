import React from "react";

const FeatureCard = ({ feature }) => {
  const { image, title, description } = feature;
  return (
    <div className="w-[30%] border border-gray-400 rounded-2xl py-5 box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;">
      <div className="flex flex-col p-3 justify-center items-center gap-2.5 w-[80%] m-auto text-center bg-white">
        <div className="">
          <img src={image} alt="img" className="w-[60px]" />
        </div>
        <div className="">
          <p>{title}</p>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
