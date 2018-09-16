import React, { Component } from 'react';
import Header from './Header'

import '../assets/styles/main.css';
import Grid from '@material-ui/core/Grid'
import { Route } from 'react-router-dom'
import Home from './Home'
import PostsByCategory from './PostsByCategory'




class App extends Component {
  render() {
    return (
      <div className="App">
       
            
              <Header />
              <Route exact path='/' component={Home}/>
              <Route  path='/:category' component={PostsByCategory} />    
      </div>
    );
  }
}

export default App;
