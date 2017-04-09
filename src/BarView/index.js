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

    if (initial || !this.state.data.images.length) {
      url = `https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barSlug}`;
    } else {
      const lastID = this.state.data.images[this.state.data.images.length - 1].id;
      url = `https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/counters/${this.props.match.params.barSlug}?last_id=${lastID}`;
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
    console.log('this.props.location', this.props.location)
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
            <HashtagFeed feedItems={images.reverse()} />
          </div>
        </div>
      </div>
    );
  }
}

export default BarView;
