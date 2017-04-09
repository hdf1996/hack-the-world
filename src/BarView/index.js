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
      data: {
        total: 0,
        interactions: []
      }
    };
  }

  componentDidMount() {
    this.startPolling();
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  startPolling() {
    this.poll(true);

    let timeout = setInterval(
      this.poll,
      8000
    );
    this.setState({ timeout: timeout });
  };

  poll = (initial = false) => {
    let url;

    if (initial || !this.state.data.interactions.length) {
      url = `https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barSlug}`;
    } else {
      const lastID = this.state.data.interactions[this.state.data.interactions.length - 1].id;
      url = `https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barSlug}?last_id=${lastID}`;
    }

    axios
      .get(url)
      .then(response => {
        this.setState(prevState => ({
          data: {
            total: response.data.total,
            interactions: prevState.data.interactions 
              .concat(response.data.interactions)
              .slice(-10)
          },
          time: response.data.interactions.length ?
            response.data.interactions[response.data.interactions.length - 1].created_at : prevState.time
        }));
      })
  };
  render() {
    let { interactions, total } = this.state.data;

    return (
      <div className="bar-view">
        <div className="row">
          <div className="counter-info-container col-xs-9">
            <CounterProgress progress={total} />
            <CounterInfo
              hashtag={this.props.location.state.refugio.hashtag}
              barId={this.props.match.params.barId}
              progress={total}
            />
          </div>
          <div className="hashtag-feed-container col-xs-3">
            <HashtagFeed feedItems={[...interactions].reverse()} />
          </div>
        </div>
      </div>
    );
  }
}

export default BarView;
