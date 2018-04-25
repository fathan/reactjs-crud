import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Menu from '../../components/Menu/Menu';

import Dashboard from "../../views/Dashboard/Dashboard";
import BlogIndex from "../../views/Blog/BlogIndex";

export class Full extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Switch>
          <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
          <Route path="/blog" name="Blog Index" component={BlogIndex}/>
          <Redirect from="/" to="/dashboard"/>
        </Switch>
      </div>
    )
  }
}

export default Full
