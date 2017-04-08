import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BarView from "../BarView";
import axios from "axios";

class App extends Component {
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

  // componentWillMount() {
  //   this.startPolling();
  // }

  // componentWillUnmount() {
  // clearTimeout(this.state.timeout);
  // }

  // startPolling = () => {
  // this.poll();
  // let timeout = setInterval(
  //   () => {
  //     this.poll();
  //   },
  //   5000
  // );
  // this.setState({ timeout: timeout });
  // };

  poll = () => {
    let url = "https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/counters/1";
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/:barId"
            render={props => (
              <BarView
                {...props}
                images={this.state.data.images}
                total={this.state.data.total}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
