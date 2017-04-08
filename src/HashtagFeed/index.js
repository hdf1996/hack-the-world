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
    let maxSize = 10;
    let len = props.newImages.length
    if (len >= maxSize) {
      this.setState({ images: props.newImages });
    } else {
      this.setState({ images: this.state.images.slice(maxSize-len).concat(props.newImages)})
    }
  }

  render() {
    return (
      <div className="hashtag-feed">
        {this.state.images.map((feedItem, i) => (
          <FeedItem
            key={feedItem.uid}
            imageUrl={feedItem.image_url}
            nick={feedItem.nick}
            time={feedItem.created_at}
            avatarUrl={feedItem.profile_picture}
          />
        ))}
      </div>
    );
  }
}
HashtagFeed.propTypes = {
  newImages: PropTypes.array.isRequired
};

export default HashtagFeed;
