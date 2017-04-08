import React, { PropTypes } from "react";
import FeedItem from "../FeedItem";
import "./index.css";

class HashtagFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentWillReceiveProps(props) {
    this.state.images.push(props.newImages);
  }

  render() {
    return (
      <div className="hashtag-feed">
        {this.state.images.map((image, i) => (
          <FeedItem key={i} imageUrl={image.url} />
        ))}
      </div>
    );
  }
}
HashtagFeed.propTypes = {
  newImages: PropTypes.array.isRequired
};

export default HashtagFeed;
