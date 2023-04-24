import { useParams } from "react-router-dom";
import Player from "../components/VideoSection/VideoDescription/Player";
import VideoDescription from "../components/VideoSection/VideoDescription/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideo/RelatedVideoList";
import { useGetSingleVideoQuery } from "../features/API/apiSlice";

const VideoPage = () => {
  const {videoId} = useParams()
  const {data: video} = useGetSingleVideoQuery(videoId || "")
  console.log("video", video)
  console.log("videoId", videoId)
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {video?.id && <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <Player videoLink={video.link} title={video.title} />
            <VideoDescription video={video} />
          </div>

          <RelatedVideoList />
        </div>}
      </div>
    </section>
  );
};

export default VideoPage;
