import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BarView from "../BarView";
import BarSelectionView from "../BarSelectionView";

class App extends Component {


 render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={BarSelectionView}
          />
          <Route
            path="/:barSlug"
              component={BarView}
          />
        </div>
      </Router>
    );
  }
}

export default App;
