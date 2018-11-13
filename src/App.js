import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact";
import './App.css';


class App extends Component {
  render() {
    return (
      <Home />
      // <Router>
      //   <div>
      //     {/* <Nav /> */}
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route exact path="/projects" component={Projects} />
      //       <Route exact path="/contact" component={Contact} />
      //     </Switch>
      //   </div>
      // </Router>
    );
  }
}

export default App;
