import React from "react";
import CounterInfo from "../CounterInfo";
import CounterProgress from "../CounterProgress";
import HashtagFeed from "../HashtagFeed";
import axios from "axios";
import "./index.css";

class BarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testProgress: 0,
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

    this.addTestProgress = this.addTestProgress.bind(this);
    setInterval(this.addTestProgress, 1000);
  }

  addTestProgress() {
    this.setState(prevState => ({
      testProgress: prevState.testProgress + 0.1
    }));
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  componentWillMount() {
    this.startPolling();
  }

  startPolling = () => {
    this.poll(true);
    let timeout = setInterval(
      () => {
        this.poll();
      },
      60000
    );
    this.setState({ timeout: timeout });
  };

  poll = (initial = false) => {
    let url;
    let time = Date.now();
    if (initial) {
      url = `https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barId}`;
    } else {
      url = `https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barId}?lastpoll=${time}&id=1`;
    }
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        if (response.data.images.length !== 0) {
          this.setState({ data: response.data, time: time });
        }
      })
      .catch(err => console.error(err));
  };
  render() {
    let { images, total } = this.state.data;

    return (
      <div className="bar-view">
        <div className="row">
          <div className="counter-info-container col-xs-9">
            <CounterProgress progress={this.state.testProgress} />
            <CounterInfo barId={this.props.match.params.barId} />
          </div>
          <div className="hashtag-feed-container col-xs-3">
            <HashtagFeed newImages={images} />
          </div>
        </div>
      </div>
    );
  }
}

export default BarView;
