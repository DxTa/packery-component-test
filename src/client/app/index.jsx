import React from 'react';
import {render} from 'react-dom';
import Boxes from './containers/Boxes.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>;
        <Boxes />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
