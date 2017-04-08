import React from "react";
import ImageCard from "../ImageCard";
import "./index.css";

const HashtagFeed = ({ images }) => {
  return (
    <div className="hashtag-feed">
      {images.map((image, i) => <ImageCard key={i} url={image.url} />)}
    </div>
  );
};
export default HashtagFeed;
