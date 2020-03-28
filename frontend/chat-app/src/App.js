import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <button onClick={this.request}>Click To make Http Request</button>
      </div>
    );
  }

  request = (event) => {
    axios.get('http://127.0.0.1:8080/api/test')
      .then(resp => {
        console.log(resp);
      })
  }
}

export default App;
