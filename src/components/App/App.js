import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

//Routes 
import List from '../Routes/List/List';
import Details from '../Routes/Details/Details';
import Edit from '../Routes/Edit/Edit';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Router>
          <Route path="/" exact component={List} />
          <Route path="/Details" component={Details} />
          <Route path="/Edit" component={Edit} />
        </Router>
      </div>
    );
  }
}

export default App;
