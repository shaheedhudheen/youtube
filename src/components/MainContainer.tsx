import Topics from "./Topics";
import VideoCard from "./VideoCard";

const MainContainer = () => {
  return (
    <div className="overflow-x-auto overscroll-contain ">
      <Topics />
      <VideoCard/>
    </div>
  );
};

export default MainContainer;
