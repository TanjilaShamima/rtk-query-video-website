import React from "react";
import Video from "./Video";
import { useGetVideosQuery } from "../../features/API/apiSlice";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";

const Videos = () => {
  const { data: videos, isError, isLoading, error } = useGetVideosQuery({});

  let content = null;

  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No videos found!" />;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video: any) => (
      <Video key={video.id} video={video} />
    ));
  }

  return <>{content}</>;
};

export default Videos;
