import React, { PropTypes } from "react";
import FeedItem from "../FeedItem";
import "./index.css";

class HashtagFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.newImages
    };
  }

  componentWillReceiveProps(props) {
    let maxSize = 20;
    let len = props.newImages.length
    if (len >= maxSize) {
      this.setState({ images: props.newImages });
    } else {
      this.setState({ images: this.state.images.slice(len).concat(props.newImages)})
    }
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
