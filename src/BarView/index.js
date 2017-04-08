import React from "react";
import CounterInfo from "../CounterInfo";
import HashtagFeed from "../HashtagFeed";
import axios from "axios";
import "./index.css";

class BarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: 0.5,
        images: [
          {
            type: "share",
            social_network: "instagram",
            url: "https://robohash.org/perferendisdoloret.png?size=300x300&set=set1"
          },
          {
            type: "share",
            social_network: "instagram",
            url: "https://robohash.org/perferendisdoloret.png?size=300x300&set=set1"
          }
        ]
      }
    };
  }

  componentWillMount() {
    this.startPolling();
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  startPolling = () => {
    this.poll();
    let timeout = setInterval(
      () => {
        this.poll();
      },
      6000
    );
    this.setState({ timeout: timeout });
  };

  poll = () => {
    let url = `https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barId}`;
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(err => console.error(err));
  };
  render () {
    let { images, total } = this.state.data
    return (
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
  };
}

export default BarView;
