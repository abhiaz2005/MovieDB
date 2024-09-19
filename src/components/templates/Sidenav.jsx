import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [show, setshow] = useState(true);

  const setShow = () => {
    setshow(!show);
  };

  return (
    <>
      <i  onClick={setShow} className="ri-menu-line xl:hidden z-30 text-white text-2xl font-semibold px-2 py-5 absolute -mt-1"></i>
      <div className={`h-full w-screen absolute bg-[#1F1E2E] xl:block xl:w-[25vw] border-r-2 border-zinc-300 p-8 overflow-auto z-20 ${show ? `hidden`:`block`}`}>
        
        <div className="mt-10 mx-10">
        <h1 className="font-bold text-2xl text-white sticky top-0 ">
          <i className="text-[#6556CD] text-2xl mr-2 ri-tv-fill"></i>
          <span className="text-2xl">MovieDB</span>
        </h1>
          <nav className="flex flex-col text-xl text-zinc-300  ">
            <h1 className="text-xl font-semibold text-white mt-8 mb-3">
              Feeds
            </h1>
            <Link
              to="/trending"
              className="hover:bg-[#6556CD] hover:text-white p-4 rounded-md duration-300 mb-2"
            >
              <i className="ri-fire-fill mr-2"></i>Trending
            </Link>
            <Link
              to="/popular"
              className="hover:bg-[#6556CD] hover:text-white p-4 rounded-md duration-300 mb-2"
            >
              <i className="ri-bard-fill mr-2"></i>Popular
            </Link>
            <Link
              to="/movies"
              className="hover:bg-[#6556CD] hover:text-white p-4 rounded-md duration-300 mb-2"
            >
              <i className="ri-film-fill mr-2"></i>Movies
            </Link>
            <Link
              to="/sports"
              className="hover:bg-[#6556CD] hover:text-white p-4 rounded-md duration-300 mb-2"
            >
              <i className="ri-tv-2-fill mr-2"></i>Sports
            </Link>
            <Link
              to="/people"
              className="hover:bg-[#6556CD] hover:text-white p-4 rounded-md duration-300 mb-2"
            >
              <i className="ri-team-fill mr-2"></i>People
            </Link>
          </nav>
          <hr className="border-none h-[1px] bg-zinc-400" />
          <nav className="flex flex-col text-xl text-zinc-300">
            <h1 className="text-xl font-semibold text-white mt-8 mb-3">
              Website Information
            </h1>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-md duration-300 mb-2">
              <i className="ri-creative-commons-by-line mr-2"></i>About us
            </Link>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-md duration-300 mb-2">
              <i className="ri-phone-fill mr-2"></i>Contact us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
