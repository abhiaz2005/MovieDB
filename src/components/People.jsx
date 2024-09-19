import React, { useEffect, useState } from "react";
import Topnav from "./templates/Topnav";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./templates/Loader";

const People = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPeople = async () => {
    try {
      const { data } = await axios.get("/", {
        params: {
          s: "people",
          page: page,
        },
      });
      if (data.Response === "True") {
        setPeople((prev) => [...prev, ...data.Search]);
        setPage((prev) => prev + 1);

        if (people.length + data.Search.length >= parseInt(data.totalResults)) {
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
    if (people.length > 0) {
      getPeople();
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
          <span className="hidden md:inline-block">People</span>
        </h1>
        <Topnav />
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Cards data={people} />
      </InfiniteScroll>
    </div>
  );
};

export default People;
