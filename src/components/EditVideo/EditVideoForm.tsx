import React from "react";
import TextInput from "../ui/TextInput/TextInput";
import TextArea from "../ui/TextArea/TextArea";
import { videoType } from "../utils/videoWebsiteType";
import { useEditVideoMutation } from "../../features/API/apiSlice";
import Success from "../ui/Success";
import Error from "../ui/Error";

interface Props {
  video: videoType;
}

const EditVideoForm: React.FC<Props> = ({ video }) => {
  const [editVideo, { isLoading, isError, isSuccess }] = useEditVideoMutation();
  const [newVideo, setNewVideo] = React.useState<videoType>(video);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewVideo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    editVideo({ id: video.id, data: newVideo });
    setNewVideo({} as videoType);
  };

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                name="title"
                onChange={handleChange}
                value={newVideo.title}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                name="author"
                value={newVideo.author}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                name="description"
                value={newVideo.description}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                name="link"
                value={newVideo.link}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                name="thumbnail"
                value={newVideo.thumbnail}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                name="date"
                value={newVideo.date}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                name="duration"
                value={newVideo.duration}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                name="views"
                value={newVideo.views}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        {/* <Success message="Video was added successfully" /> */}
        {isSuccess && <Success message="Video was edited successfully" />}
        {isError && <Error message="There was an error editing video!" />}
      </div>
    </form>
  );
};

export default EditVideoForm;
