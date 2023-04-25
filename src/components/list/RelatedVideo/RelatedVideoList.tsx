import { useGetRelatedVideosQuery } from "../../../features/API/apiSlice";
import Error from "../../ui/Error";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideoListItem from "./RelatedVideoListItem";

interface Props {
  id: string;
  title: string;
}

const RelatedVideoList = ({ id, title }: Props) => {
  const { data, isLoading, isError, error } = useGetRelatedVideosQuery({
    id,
    title,
  });
  let content = null;

  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader></RelatedVideoLoader>
        <RelatedVideoLoader></RelatedVideoLoader>
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <Error message="No related video found" />;
  }

  if (!isLoading && !isError && data?.length > 0) {
    content = data.map((d: any) => (
      <RelatedVideoListItem key={d.id} video={d} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
};

export default RelatedVideoList;
