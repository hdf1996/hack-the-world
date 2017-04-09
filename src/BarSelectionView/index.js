import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from 'react-router-dom'

class BarSelectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refugios: []
    };
    this.fetchRefugios();
  }

  fetchRefugios = () => {
    let url = "https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/pubs";
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setState({ refugios: this.response.data });
      })
  };

  render() {
    return (
      <div className="bar-selection">
        Bar selection view
        <Link to="/fede">Fede</Link>
        <Link to="/ariel">Ariel</Link>
      </div>
    );
  }
}
export default BarSelectionView;
