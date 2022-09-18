import axios from "axios";
import React, { useEffect, useState } from "react";
import ScrollItem from "./components/ScrollItem";
import "./InfiniteQuery.scss";
import { useInfiniteQuery } from "react-query";
import Spinner from "../common/Spinner";
import { config } from "../../config";

const InfiniteQuery = () => {
  console.log("InfiniteQueryss");
  const [moviesData, setMoviesData] = useState([]);
  const API_KEY = config.tmdb_api_key;
  const BASE_URL = config.tmdb_base_url;
  const fetchData = async (page) => {
    const result = await axios({
      method: "GET",
      baseURL: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    });
    return result;
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery("movies", ({ pageParam = 1 }) => fetchData(pageParam), {
      getNextPageParam: (_, pages) => {
        const pagerSize = pages?.[0]?.data?.total_pages;
        if (pages.length < pagerSize) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  let temparray = [];
  data?.pages?.forEach((page) => {
    page?.data?.results.forEach((res) => {
      if (res && Object.keys(res).length > 0) {
        temparray.push(res);
      }
    });
  });

  const onScroll = async (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight * 1.5;
    if (bottom && hasNextPage) {
      await fetchNextPage();
    }
  };

  useEffect(() => {
    setMoviesData([...temparray]);
  }, [data]);

  return (
    <div className="infinite_scroll_container">
      <h3>Infinite Query</h3>
      <div className="infinite_scroll_wrapper" onScroll={onScroll}>
        {moviesData && moviesData?.length > 0 ? (
          moviesData?.map((data, idx) => <ScrollItem key={idx} data={data} />)
        ) : (
          <h4>No Record Found</h4>
        )}
        {isFetchingNextPage && (
          <div className="spinner_container">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfiniteQuery;
