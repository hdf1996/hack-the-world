import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
import axios from "axios";

class BarSelectionView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refugios: []
    };

    this.fetchRefugios = this.fetchRefugios.bind(this);
  }

  componentDidMount (){
    this.fetchRefugios()
  }

  fetchRefugios = () => {
    let url = "https://hacktheworldapi.herokuapp.com/api/v1/pubs";
    axios
      .get(url)
      .then(response => {
        this.setState({ refugios: response.data });
      })
  };

  render() {
    return (
      <div className="bar-selection">
        <div className="container">
          <img src="http://www.cervezapatagonia.com.ar/img/patagonia-logo.png" className="bar-selection-logo" alt="Patagonia logo" />
          <ul className="bar-list row">
            { this.state.refugios.map(refugio =>
              <li className="bar-item-container col-xs" key={refugio.id}>
                <Link key={refugio.id} to={{pathname: refugio.slug, state: {refugio: refugio} }}>
                  <div className="bar-item animated fadeIn">
                    <img className="bar-item-image" src={ refugio.picture } alt={refugio.name}/> 
                    <div className="bar-item-content">
                      <h2 className="bar-item-title">{ refugio.name }</h2>
                    </div>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default BarSelectionView;
