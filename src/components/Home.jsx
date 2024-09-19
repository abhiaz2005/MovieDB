import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";

const Home = () => {
  document.title = "MovieDB | Homepage";

  const [wallpaper, setwallpaper] = useState([]);
  const [trending, settrending] = useState([]);
  const [category, setcategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/", {
        params: {
          s: `popular`,
        },
      });
      let length = (Math.random() * data.Search.length).toFixed();
      length == 4 ? (length = 5) : length;
      const randomdata = data.Search[length];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get("/", {
        params: {
          s: `${category}`,
        },
      });
      settrending(data.Search);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper.length && getHeaderWallpaper();
  }, [category]);
  

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="h-full w-screen z-10  xl:w-[80vw] xl:ml-[25vw] overflow-x-hidden overflow-auto">
        <Topnav />
        <Header data={wallpaper} />
        <div className="flex justify-between p-5">
          <h1 className="text-xl xl:text-3xl text-zinc-400 font-semibold">Trending</h1>
          <Dropdown
            title="Filter"
            options={["series", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
      ;
    </>
  ) : (
    <Loader />
  );
};

export default Home;
