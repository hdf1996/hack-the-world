import React, { PropTypes } from "react";
import "./index.css";

class CounterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 60 * 60
    };
  }

  componentWillReceiveProps(props) {
    if (props.progress >= 1) {
      this.startCounter();
    }
  }

  startCounter = () => {
    if (!this.state.timeout) {
      let timeout = setInterval(this.tick, 1000);
      this.setState({ timeout: timeout });
    }
  };

  tick = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  toMinutes = totalSeconds => {
    let minutes = Math.floor(totalSeconds / 60);
    let remainder = totalSeconds % 60;
    let seconds = remainder < 10 ? "0" + remainder : remainder;
    return minutes +seconds
  }

  render () {
  let { progress, hashtag} = this.props
  const happyHour = progress >=1;
  return (
    <div className={`counter-info ${happyHour && 'happy-hour'}`}>
      <div className="logo-container">
        <img className="logo-image" src="http://www.cervezapatagonia.com.ar/img/patagonia-logo.png" alt="Patagonia logo"/>
        <h1 className="logo-title">Happy Hour</h1>
      </div>
      <div className="social-logos">
        
  {/*<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Facebook" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xmlSpace="preserve">
  <path fill="#FFFFFF" d="M17,1H3C1.9,1,1,1.9,1,3v14c0,1.101,0.9,2,2,2h7v-7H8V9.525h2v-2.05c0-2.164,1.212-3.684,3.766-3.684  l1.803,0.002v2.605h-1.197C13.378,6.398,13,7.144,13,7.836v1.69h2.568L15,12h-2v7h4c1.1,0,2-0.899,2-2V3C19,1.9,18.1,1,17,1z"/>
  </svg>*/}
      </div>
      <p className="description">
        Envia tu foto con el hashtag <span className="hashtag">{hashtag}</span> 
        para activar el Happy Hour Patagonia para este refugio por una hora.
      </p>
      {this.state.timeout ? <div className="countdown">{this.toMinutes(this.state.counter)}</div> : null}
    </div>
  )}
}

CounterInfo.propTypes = {
  progress: PropTypes.number.isRequired
};

export default CounterInfo;