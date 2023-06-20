import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { AiOutlineLike, AiOutlineDislike, AiFillLike } from "react-icons/ai";
import { TfiDownload } from "react-icons/tfi";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [singleVedio, setSingleVedio] = useState({});
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
    getSingleVedio();
  }, []);

  const getSingleVedio = async () => {
    const data = await fetch(`
        https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=${searchParam.get(
          "v"
        )}&maxHeight=1200&maxWidth=800&key=AIzaSyDmNrF2I3ngoecT2AVIgXbLpWnmPdRuU3Y`);
    const res = await data.json();
    setSingleVedio(res?.items[0]);
  };

  const { player, statistics, snippet } = singleVedio;
  console.log(player?.embedHtml);

  return (
    <div className="m-10">
      <div className="flex">
        <div
          dangerouslySetInnerHTML={{ __html: player?.embedHtml }}
          className="w-[820px] "
        />
          <div>
            <LiveChat />
          </div>
        </div>
        <div>
        <p className="text-md font-semibold mt-2">{snippet?.title}</p>
        <div className="flex items-center mt-2 justify-between w-[800px]">
          <p className="font-semibold">{snippet?.channelTitle}</p>
          <div className="flex">
            <div className="flex items-center mr-10">
              <p
                className="flex items-center text-xl font-semibold"
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <AiFillLike className="text-3xl cursor-pointer" />
                ) : (
                  <AiOutlineLike className="text-3xl cursor-pointer" />
                )}
                1.1
              </p>
              <AiOutlineDislike className="text-3xl cursor-pointer ml-2" />
            </div>
            <div className="flex items-center p-2 bg-gray-200 rounded-2xl hover:bg-gray-100 hover:cursor-pointer">
              <TfiDownload />
              <p className="ml-2 font-semibold">Download</p>
            </div>
          </div>
        </div>
        <div className="w-[800px]  bg-gray-200 h-20 rounded-md mt-2"></div>
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
