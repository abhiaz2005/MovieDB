import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)), url(${data.Poster}) center/cover no-repeat`,
      }}
      className="w-full h-[50vh] p-10 flex flex-col justify-end items-start"
    >
      <h1 className="w-[60%] md:text-3xl font-black text-zinc-300">{data.Title}</h1>
      
      <p className=" mt-3 text-white">
      <i className="text-yellow-500 sm:text-lg ri-megaphone-fill"></i> <span className="mr-2">{data.Year}</span>
      <i className="text-yellow-500 text-lg ri-album-fill"></i> <span>{data.Type}</span>
      </p>
      <Link className="mt-5 bg-[#6556CD] rounded-lg font-semibold text-white px-3 py-2">
      <i className="mr-2 ri-play-large-fill"></i>Watch trailer
      </Link>
    </div>
  );
};

export default Header;
