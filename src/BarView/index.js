import React from "react";
import CounterInfo from "../CounterInfo";
import HashtagFeed from "../HashtagFeed";
import "./index.css";

const BarView = ({ match, images, total }) => (
  <div className="bar-view">
    <div className="row">
      <div className="counter-info-container col-xs-9">
        <CounterInfo total={total} />
      </div>
      <div className="hashtag-feed-container col-xs-3">
        <HashtagFeed images={images} />
      </div>
    </div>
  </div>
);

export default BarView;
