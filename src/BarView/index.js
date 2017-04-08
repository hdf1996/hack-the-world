import React from "react";
import Counter from "../Counter";
import HashtagFeed from "../HashtagFeed";
import "./index.css";

const BarView = ({ match, images, total }) => (
  <div className="bar-view">
    {/*<h3>Bar ID: {match.params.barId}</h3>*/}
    {/*{images.map((v, i) => <p key={i}>{v.url}</p>)}*/}
    {/*<h3>total: {total}</h3>*/}
    <Counter total={total} />
    <HashtagFeed images={images} />
  </div>
);

export default BarView;
