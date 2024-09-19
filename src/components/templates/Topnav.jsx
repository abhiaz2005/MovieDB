import React, { useEffect, useState } from "react";
import axios from "../../utils/axios"; // Import your axios instance
import { Link } from "react-router-dom";


const Topnav = () => {
  const [query, setquery] = useState([]);
  const [searches, setsearches] = useState([]);
  const getSearches = async () => {
    if (query.length === 0) return;
    try {
      const res = await axios.get("/", {
        params: {
          s: query,
        },
      });
      query.length>0 ? setsearches(res.data.Search || []) : setsearches([])
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="h-[10vh] w-[80%] flex justify-start ml-14 xl:mx-auto items-center text-zinc-200 sticky top-0 ">
      <i className="text-2xl text-zinc-400 ri-search-2-line cursor-pointer"></i>
      <input
        onChange={(e) => {
          setquery(e.target.value);
        }}
        value={query}
        className="w-[50%] ml-2 p-5 text-xs md:text-lg rounded outline-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => {
            setquery([]);
            setsearches([]);
          }}
          className="text-2xl text-zinc-400 ri-close-large-line mr-10 cursor-pointer"
        ></i>
      )}
     {searches.length > 0 && (
        <div style={{
          background: "rgba(31, 30, 46, 0.7)", 
            backdropFilter: "blur(4px)", 
        }} className="absolute top-[100%] left-[5%]  w-[100%] md:w-[50%] max-h-[30vh]  rounded-md overflow-auto">
          {searches.map((s, i) => (
            <Link
              key={i}
              className="text-zinc-200 hover:text-black hover:bg-zinc-400 duration-300 font-semibold p-5 rounded flex gap-3 text-sm md:text-xl border-b-2 border-zinc-400 mx-3"
            >
              <img
                className="md:w-[4vw] h-[9vh] object-cover rounded-md mr-10"
                src={s.Poster !== 'N/A' ?  s.Poster: `/noimage.png`}
                alt={s.Title}
              />
              <span className="pt-3">
                {s.Title} ({s.Year})
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;