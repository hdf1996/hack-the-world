import React from 'react';
import CounterInfo from '../CounterInfo';
import HashtagFeed from '../HashtagFeed';
import './index.css';

const BarView = ({ match, images, total }) =>
  <div className="bar-view">
    <div className="row">
      <div className="col-xs-10">
        <CounterInfo />
      </div>
      <div className="col-xs-2">
        Hashtag feed
      </div>
    </div>
  </div>;

export default BarView;
