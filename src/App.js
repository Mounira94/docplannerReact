import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Healthcare from './Components/Healthcare/Healthcare'
import Acheivement from './Components/Acheivement/Acheivement'
import Destination from './Components/Destination/Destination'
import Footer from './Components/Footer'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
<div className="App">
<Header/>
<main className="main">
<Healthcare/>
<Acheivement/>
<Destination/>
</main>
<Footer/>
</div>
    );
  }
}

export default App;
