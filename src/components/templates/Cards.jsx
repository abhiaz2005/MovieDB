import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap w-full gap-x-10 gap-3 bg-[#1F1E24]  px-[3%]">
      {data.map((c, i) => {
        return (
          <Link
            className="text-zinc-400 font-semibold w-[25vh] mx-auto  mb-[1%]"
            key={i}
          >
            <img
              className="h-[40vh] object-cover rounded-t-md"
              src={c.Poster !== "N/A" ? c.Poster : `/Noimage.jpg`}
              alt=""
            />
            <h1 className="text-xl">{c.Title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
