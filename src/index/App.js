import React from 'react';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    axios('/test').then(v => {
      console.log(v)
    })
  }
  render() {
    return (
      <div>index</div>
    )
  }
}

export default App;
