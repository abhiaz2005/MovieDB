import React, { useEffect, useState } from "react";
import Topnav from "./templates/Topnav";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./templates/Loader";

const Movies = () => {
  document.title = "MovieDB | Movies";
  const navigate = useNavigate();
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get("/", {
        params: {
          s: `Movie`,
          page: page,
        },
      });
      if (data.Response === "True") {
        setmovie((prev) => [...prev, ...data.Search]);
        setpage((prev) => prev + 1);
        if (movie.length + data.Search.length >= parseInt(data.totalResults)) {
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
    if (!movie.length) {
      getMovie();
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
        <h1 className="text-2xl font-semibold text-zinc-500">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-2 cursor-pointer hover:text-[#6556CD]"
          ></i>
          <span className="hidden md:inline-block">Movies</span>
        </h1>
        <Topnav />
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<Loader/>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Cards data={movie} />
      </InfiniteScroll>
    </div>
  );
};

export default Movies;
