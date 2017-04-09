import React from "react";
import CounterInfo from "../CounterInfo";
import CounterProgress from "../CounterProgress";
import HashtagFeed from "../HashtagFeed";
import axios from "axios";
import "./index.css";

class BarView extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {
        total: 0,
        images: []
      }
    };
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  componentDidMount() {
    this.startPolling();
  }

  startPolling() {
    this.poll(true);

    let timeout = setInterval(
      this.poll,
      10000
    );
    this.setState({ timeout: timeout });
  };

  poll = (initial = false) => {
    let url;
    let time = Date.now();
    const lastID = this.state.data.images[this.state.data.images - 1].id;
    if (initial) {
      url = `https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barId}`;
    } else {
      url = `https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barId}?last_id=${lastID}&id=1`;
    }

    axios
      .get(url)
      .then(response => {
        console.log(response.data);

        this.setState(prevState => ({
          data: {
            total: response.data.total,
            images: prevState.data.images 
              .concat(response.data.images)
              .slice(-10)
          },
          time: response.data.images.length ? response.data.images[response.data.images.length - 1].created_at : prevState.time
        }), () => {
          console.log('La lista de imagenes es: ', this.state.data.images);
        });
      })
      .catch(err => console.error(err));
  };
  render() {
    let { images, total } = this.state.data;

    return (
      <div className="bar-view">
        <div className="row">
          <div className="counter-info-container col-xs-9">
            <CounterProgress progress={total} />
            <CounterInfo barId={this.props.match.params.barId} progress={total} />
          </div>
          <div className="hashtag-feed-container col-xs-3">
            <HashtagFeed feedItems={images} />
          </div>
        </div>
      </div>
    );
  }
}

export default BarView;
