import React from "react";

function Iframe() {
  return (
    
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/zrlYnaZftEQ?rel=0&autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    
  );
}

export default Iframe;
