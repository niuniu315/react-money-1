import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';


function App() {
  return (
    <Router>
          <Switch>
            <Route path="/label">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            {/*  默认路由地址（初始地址）*/}
            <Redirect exact from="/" to="/money"/>
            {/* 404路由 */}
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;