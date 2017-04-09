import React, { PropTypes } from 'react';
import './index.css';

const CounterInfo = ({ barId, progress }) => {
  const happyHour = progress >=1;
  return (
    <div className={`counter-info ${happyHour && 'happy-hour'}`}>
      <div className="logo-container">
        <img className="logo-image" src="http://www.cervezapatagonia.com.ar/img/patagonia-logo.png" alt="Patagonia logo"/>
        <h1 className="logo-title">Happy Hour</h1>
      </div>
      <p className="description">
        Envia tu foto con el hashtag <span className="hashtag">#HappyHourPatagonia{barId.charAt(0).toUpperCase()+barId.slice(1)}</span> 
        para activar el Happy Hour Patagonia para este refugio por una hora.
      </p>
    </div>
  );
};

CounterInfo.propTypes = {
  barId: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired
};

export default CounterInfo;