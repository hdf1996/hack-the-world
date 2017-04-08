import React from 'react';
import Counter from '../Counter';
import HashtagFeed from '../HashtagFeed';
import './index.css';

const BarView = ({ match }) =>
  <div className="bar-view">
    {/*<h3>Bar ID: {match.params.barId}</h3>*/}
    <Counter />
    <HashtagFeed />
  </div>;

export default BarView;