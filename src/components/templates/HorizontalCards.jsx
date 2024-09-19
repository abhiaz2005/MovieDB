import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full rounded-md  h-[40vh] flex overflow-x-auto overflow-y-hidden p-2">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="min-w-[35%] md:min-w-[20%] h-full bg-zinc-700 ml-5 mb-3 rounded-md"
          >
            <div className="overflow-hidden w-full h-[50%]">
              <img
                src={d.Poster !== "N/A" ? d.Poster : `/noimage.png`}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="w-[90%] text-md font-black text-zinc-300 ml-2 mt-1 leading-none mb-3">
              {d.Title.slice(0, 38)}
            </h1>
            <p className=" text-white text-xs font-semibold flex flex-col ml-2 h-[60%]">
              <span className="mr-2 ">{d.Year}</span>
              <span>{d.Type}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalCards;
