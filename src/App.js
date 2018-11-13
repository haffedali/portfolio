import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGit } from '@fortawesome/free-solid-svg-icons'
import Home from "./components/Home";
import './App.css';

library.add(faWallet)
library.add(faGlobe)

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
