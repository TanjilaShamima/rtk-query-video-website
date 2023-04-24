import React from "react";
import Video from "./Video";
import { useGetVideosQuery } from "../../features/API/apiSlice";

const Videos = () => {
  const { data, isError, isLoading, error } = useGetVideosQuery({});
  return (
    <>
      {data?.length > 0 &&
        data.map((d: any, i: number) => <Video key={i} video={d} />)}
    </>
  );
};

export default Videos;
