import RelatedVideoListItem from "./RelatedVideoListItem";

interface Props {

}

const RelatedVideoList = () => {
  

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      <RelatedVideoListItem />
    </div>
  );
};

export default RelatedVideoList;