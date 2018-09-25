import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import stores from './stores';

class App extends Component {

  state = {
    clicked: 0
  }

  handleClicked = () => {
     this.setState({
        clicked: this.state.clicked + 1
     })
  }

  render() {
    return (
     <Provider store={stores}>
      <div className='App'>
        <Nav clickedState={this.state.clicked} />
        <Home clickedState={this.state.clicked} 
              clicked={this.handleClicked}
              />
      </div>
     </Provider>
    );
  }
}

export default App;
