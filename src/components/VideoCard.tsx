import { useEffect, useState } from "react";
import { YT_VIDEO_API } from "../utils/constants";

const VideoCard = () => {
  const [videos, setVideos] = useState([]);

  console.log(videos[0]);

  const { snippet } = videos[0]
  console.log(snippet);
  

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEO_API);
    const json = await data?.json();

    setVideos(json.items);
  };

  return (
    <div className="p-7">
      <div className=" w-80  rounded-2xl overflow-clip">
        <div>
          <img src="" alt="" className="h-44 bg-green-400 p-3 rounded-2xl" />
        </div>
        <div className="flex items-start gap-2 py-4">
          <img src="" alt="" className="h-8 w-8 rounded-full bg-slate-300" />
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">
              This is a video title this is too long to be title name but i did
              it anyway
            </h3>
            <p>account name</p>
            <p>{`34k views 2 • days Ago`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
