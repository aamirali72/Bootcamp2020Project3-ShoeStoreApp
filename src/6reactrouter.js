import React from "react";
import { Router, Route, Switch } from "react-router-dom"
import Header from './Head'
import About from './About'
import Users from './User'
import Home from './Home'
import Footer from './Footer'
import P404 from './Page404'
import history from './history'

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/" component={Home} />
          <Route path='**'><P404 /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
