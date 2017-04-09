import React, { PropTypes } from "react";
import FeedItem from "../FeedItem";
import "./index.css";

const HashtagFeed = ({ feedItems }) =>
  <div className="hashtag-feed">
    {feedItems.map((feedItem, i) =>
      <FeedItem
        key={feedItem.id}
        text={feedItem.text}
        imageUrl={feedItem.image_url}
        nick={feedItem.nick}
        time={feedItem.created_at}
        avatarUrl={feedItem.profile_picture}
        typeInteraction={feedItem.type_interaction}
        typeContent={feedItem.type_content}
        socialNetwork={feedItem.social_network}
      />
    )}
  </div>;

HashtagFeed.propTypes = {
  feedItems: PropTypes.array.isRequired
};

export default HashtagFeed;
