import React from "react";
import { Router, Route, Switch } from "react-router-dom"
import Header from './Head'
import About from './About'
import Products from './Product'
import Productitem from './Productitem'
import Home from './Home'
import Footer from './Footer'
import Contact from './contactus'
// import Footer from './shared/footer'
import P404 from './Page404'
import history from './history'

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/Product" component={Products} />
          <Route exact path="/Product/:id" component={Productitem} />
          <Route exact path="/" component={Home} />
          <Route exact path="/contactus" component={Contact} />
          <Route path='**'><P404 /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}