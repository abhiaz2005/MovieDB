import React, { useEffect, useState } from "react";
import Topnav from "./templates/Topnav";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  document.title = "MovieDB | Popular";
  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await axios.get("/", {
        params: {
          s: "Popular",
          page: page,
        },
      });
      if (data.Response === "True") {
        setPopular((prev) => [...prev, ...data.Search]);
        setPage((prev) => prev + 1);

        if (popular.length + data.Search.length >= parseInt(data.totalResults)) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    if (!popular.length) {
      getPopular();
    }
  }, []);

  return (
    <div className="w-screen h-screen">
      <div
        className="flex items-center justify-center topnav w-full h-[15vh] sticky top-0 px-[3%]"
        style={{
          background: "rgba(31, 30, 46, 0.7)",
          backdropFilter: "blur(4px)",
        }}
      >
        <h1 className="text-2xl font-semibold text-zinc-500 ">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 cursor-pointer hover:text-[#6556CD]"
          ></i>
          <span className="hidden md:inline-block">Popular</span>
        </h1>
        <Topnav />
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Cards data={popular} />
      </InfiniteScroll>
    </div>
  );
};

export default Popular;
