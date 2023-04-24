import React from "react";
import { Link } from "react-router-dom";
interface Props {
  video: any;
}

const Video = ({ video }: Props) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to="/videos/1">
            <img
              src={video.thumbnail}
              className="w-full h-auto"
              alt={video.title}
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            12:10
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <img
            src={video.avatar}
            className="rounded-full h-6 w-6 shrink-0"
            alt={video.title}
          />

          <div className="flex flex-col">
            <Link to="/videos/1">
              <p className="text-slate-900 text-sm font-semibold">
                {video.title}
              </p>
            </Link>
            <span className="text-gray-400 text-xs hover:text-gray-600">
              {video.description}
            </span>
            <p className="text-gray-400 text-xs">{video.views} views . {new Date(video.date).toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
