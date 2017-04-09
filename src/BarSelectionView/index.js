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
  }

  componentDidMount (){
    this.fetchRefugios()
  }

  fetchRefugios = () => {
    let url = "https://crossorigin.me/https://hacktheworldapi.herokuapp.com/api/v1/pubs";
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setState({ refugios: response.data });
      })
  };

  render() {
    console.log('refugio', this.state.refugios)
    return (
      <div className="bar-selection">
        Bar selection view
        {this.state.refugios.map(refugio => (
        <Link key={refugio.id} to={{pathname: refugio.slug, state: {refugio: refugio} }}>{refugio.name}</Link>
        ))}
      </div>
    );
  }
}
export default BarSelectionView;
