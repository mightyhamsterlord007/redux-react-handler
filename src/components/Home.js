import React, { Component } from 'react'
import HomeView from './HomeView';


class Home extends Component {


  handleClick = () => {
    this.props.clicked();
  }


  render() {
    return (
      <div style={{marginTop: 50}}>
        <button onClick={this.handleClick}>Clicked</button> 
        {this.props.clickedState}
        <HomeView 
            homeViewClicked={this.props.clickedState}
           />
      </div>
    )
  }
}

export default Home;