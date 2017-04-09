import React, { PropTypes } from "react";
import "./index.css";

const sty = {
  logo: {
    width: '35px',
    fill: '#fff'
  }
}

class CounterInfo extends React.Component {

  constructor (props) {
    super(props)

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

  toMinutes = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds/60);
    let remainder = totalSeconds % 60;
    let seconds = remainder < 10 ? '0'+remainder : remainder;
    return minutes+':'+seconds;
  }

  render () {
    let { progress, hashtag} = this.props;
    const happyHour = progress >=1;

    return (
      <div className={`counter-info ${happyHour && 'happy-hour'}`}>
        <div className="logo-container">
          <img className="logo-image" src="http://www.cervezapatagonia.com.ar/img/patagonia-logo.png" alt="Patagonia logo"/>
          <h1 className="logo-title">Happy Hour</h1>
        </div>
        <p className="description">
          Usa el hashtag <span className="hashtag">#{hashtag}</span> 
          para activar el Happy Hour Patagonia en tu refugio
        </p>
        <div className={`social-logos ${happyHour && 'happy-hour'}`}>
        <svg style={{...sty.logo, marginRight: '40px'}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Twitter" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" xmlSpace="preserve">
          <path d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742  c-2.133,0-4.116-0.625-5.787-1.697c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615  c-1.651-0.031-3.046-1.121-3.526-2.621c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131  C2.84,11.183,1.539,9.658,1.539,7.828c0-0.016,0-0.031,0-0.047c0.509,0.283,1.092,0.453,1.71,0.473  c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898C3.942,5.498,6.725,7,9.862,7.158  C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773c1.086,0,2.067,0.457,2.756,1.191  c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088c0.764-0.092,1.49-0.293,2.168-0.594  C18.694,5.051,18.054,5.715,17.316,6.246z"/>
        </svg>
          <svg style={sty.logo} xmlns="http://www.w3.org/2000/svg" id="Instagram" viewBox="0 0 18 18"><title>instagram</title><path className="cls-1" d="M18.94586,6.28931a6.60561,6.60561,0,0,0-.41833-2.18463,4.41189,4.41189,0,0,0-1.03809-1.59412,4.41189,4.41189,0,0,0-1.59412-1.03809,6.60561,6.60561,0,0,0-2.18463-.41833C12.75073,1.01038,12.44427,1,10,1s-2.75073.01038-3.71069,0.05414a6.60561,6.60561,0,0,0-2.18463.41833A4.41189,4.41189,0,0,0,2.51056,2.51056,4.41189,4.41189,0,0,0,1.47247,4.10468a6.60561,6.60561,0,0,0-.41833,2.18463C1.01038,7.24927,1,7.55573,1,10s0.01038,2.75073.05414,3.71069a6.60561,6.60561,0,0,0,.41833,2.18463,4.41189,4.41189,0,0,0,1.03809,1.59412,4.41109,4.41109,0,0,0,1.59412,1.03809,6.60561,6.60561,0,0,0,2.18463.41833C7.24927,18.98969,7.55573,19,10,19s2.75073-.01031,3.71069-0.05414a6.60561,6.60561,0,0,0,2.18463-.41833,4.60208,4.60208,0,0,0,2.6322-2.6322,6.60561,6.60561,0,0,0,.41833-2.18463C18.98962,12.75073,19,12.44427,19,10S18.98962,7.24927,18.94586,6.28931Zm-1.61993,7.34747a4.97824,4.97824,0,0,1-.30994,1.67114A2.98017,2.98017,0,0,1,15.30792,17.016a4.9786,4.9786,0,0,1-1.67114.30994C12.68787,17.3692,12.40326,17.37836,10,17.37836s-2.68787-.00916-3.63678-0.05243A4.9786,4.9786,0,0,1,4.69208,17.016a2.78769,2.78769,0,0,1-1.03485-.67322A2.78769,2.78769,0,0,1,2.984,15.30792a4.97824,4.97824,0,0,1-.30994-1.67114C2.6308,12.68774,2.62164,12.40314,2.62164,10s0.00916-2.68774.05243-3.63678A4.9786,4.9786,0,0,1,2.984,4.69208a2.78769,2.78769,0,0,1,.67322-1.03485A2.78769,2.78769,0,0,1,4.69208,2.984a4.9786,4.9786,0,0,1,1.67114-.30994C7.31226,2.6308,7.59686,2.62164,10,2.62164s2.68774,0.00916,3.63678.05243a4.9786,4.9786,0,0,1,1.67114.30994,2.78769,2.78769,0,0,1,1.03485.67322A2.78769,2.78769,0,0,1,17.016,4.69208a4.9786,4.9786,0,0,1,.30994,1.67114c0.04327,0.949.05243,1.2337,0.05243,3.63678S17.3692,12.68774,17.32593,13.63678ZM10,5.37836A4.62164,4.62164,0,1,0,14.62164,10,4.62169,4.62169,0,0,0,10,5.37836ZM10,13a3,3,0,1,1,3-3A3,3,0,0,1,10,13Zm5.88422-7.8042a1.08,1.08,0,1,1-1.08-1.08A1.08,1.08,0,0,1,15.88422,5.1958Z" transform="translate(-1 -1)"/>
            <div xmlns="http://www.w3.org/1999/xhtml"></div>
          </svg>
        </div>
      {this.state.timeout ? <div className="countdown">{this.toMinutes(this.state.counter)}</div> : null}
    </div>
    )}
}

CounterInfo.propTypes = {
  progress: PropTypes.number.isRequired
};

export default CounterInfo;