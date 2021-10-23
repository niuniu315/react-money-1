import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import styled from 'styled-components';
import Nav from './components/Nav';
import Layout from './components/Layout';


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
        <Nav/>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>路径不存在</div>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  );
}

export default App;