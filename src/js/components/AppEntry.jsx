import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import classes from '../../css/style.scss'; // All classes

// Pages
import Home from './containers/Home';

// Class mapping
const { 'text-center': tc } = classes;

const notFoundComponent = () => {
  return (
    <div className={tc}>
      <p>
        .404 Nothing found
      </p>
    </div>
  );
};

const AppEntry = () => {
  return (
    <div className="AppEntry-scope">
      <Router>
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route component={notFoundComponent} />
            </Switch>
          )}
        />
      </Router>
    </div>
  );
};

export default AppEntry;
