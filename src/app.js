import React from 'react';

import './app.scss';

import Header from './header';
import Footer from './footer';

/**
 * Counter class - displays a number that increments and decrements based on
 * clicks
 */
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
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const counterClass = this.state.counter < 0 ? 'negative' : 'positive';
    return (
      <div>
        <h4 className={counterClass}>{this.state.counter}</h4>
        <a href='/' onClick={this.handleIncrement}>Increment</a>
        <a href='/' onClick={this.handleDecrement}>Decrement</a>
      </div>
    );
  }
}

/**
 * App component to build the app
 */
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
