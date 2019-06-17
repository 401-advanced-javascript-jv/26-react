import React from 'react';

import Header from './header.js';
import Footer from './footer.js';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = (event) => {
    event.preventDefault();
    this.setState({ counter: ++this.state.counter });
  };

  decrementCounter = (event) => {
    event.preventDefault();
    this.setState({counter: --this.state.counter });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
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
