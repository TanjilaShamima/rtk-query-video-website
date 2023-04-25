import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDeleteVideoMutation } from "../../../features/API/apiSlice";
import Error from "../../ui/Error";


interface Props {
  video: any;
}

const VideoDescription = ({ video }: Props) => {
  const navigate = useNavigate();
  const [deleteVideo, { isLoading, isSuccess, isError }] =
    useDeleteVideoMutation();

  const handleClick = () => {
    if (video.id) {
      deleteVideo(video.id);
    }
  };

  React.useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {video.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b gap-4">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {new Date(video.date).toDateString()}
        </h2>

        <div className="flex gap-6 w-full justify-end">
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src="/assets/edit.svg" alt="Edit" />
            </div>
            <Link to={`/videos/edit/${video.id}`}>
              <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                Edit
              </span>
            </Link>
          </div>
          <div className="flex gap-1" onClick={handleClick}>
            <div className="shrink-0">
              <img
                className="w-5 block"
                src="/assets/delete.svg"
                alt="Delete"
              />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {video.description}
      </div>

      {!isLoading && isError && (
        <Error message="There was an error deleting the video!" />
      )}
    </div>
  );
};

export default VideoDescription;
