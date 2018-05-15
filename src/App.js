import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleOnClick = ()=>{
    this.props.store.dispatch({type: "INCREASE_COUNT"})
  }
  render() {
    return (
      <div className="App">
        App component
        <button onClick={this.handleOnClick}> CLICK </button>
        <p>
          {this.props.store.getState().items.length}
        </p>
      </div>
    );
  }
};

export default App;
