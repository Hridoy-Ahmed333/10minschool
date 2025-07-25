import React, { useState } from "react";
import Thumb from "./Thumb";
import Iframe from "./Iframe";

function VideoPlayer() {
  const [flag, setFlag] = useState(true);
  return (
  
    <div className="relative overflow-hidden bg-white w-full aspect-video">

      {flag === true ? (
        <Thumb setFlag = {setFlag}/>
      ) : (
      <Iframe/>
      )}
      
    </div>
  );
}

export default VideoPlayer;
