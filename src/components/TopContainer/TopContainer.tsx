import TopLeftContainer from "./TopLeftContainer";
import TopRightContainer from "./TopRightContainer";

function TopContainer() {
  return (
    <div className="container relative flex flex-col gap-4 max-w-[1200px] md:flex-row md:order-2 md:gap-12 pb-6 md:py-10 min-h-[300px]">
      <TopLeftContainer />
      <TopRightContainer />
    </div>
  );
}

export default TopContainer;
