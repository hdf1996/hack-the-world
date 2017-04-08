import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BarView from "./BarView";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      2000
    );
    this.setState({ timeout: timeout });
  };

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
           <Route path="/:barId" component={BarView}/>
        </div>
      </Router>
    );
  }
}

export default App;
