import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import BarView from '../BarView';

class App extends Component {
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
