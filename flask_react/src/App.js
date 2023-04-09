import React, { Component } from 'react';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
render() {
    return (
      <p>Hello world!</p>
    );
  }
}
export default App;