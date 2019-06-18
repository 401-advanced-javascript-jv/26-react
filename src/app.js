import React from 'react';

import './app.scss';

import Header from './header.js';
import Footer from './footer.js';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = (event) => {
    event.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = (event) => {
    event.preventDefault();
    this.setState({counter: this.state.counter - 1 });
  };

  render() {
    let counterClass = this.state.counter < 0 ? 'negative' : 'positive';
    return (
      <div>
        <h4 className={counterClass}>{this.state.counter}</h4>
        <a href='#' onClick={this.handleIncrement}>Increment</a>
        <a href='#' onClick={this.handleDecrement}>Decrement</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
