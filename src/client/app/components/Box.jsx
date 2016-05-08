import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {

  render() {

    const {
      id
    } = this.props

    return (
      <div className="box">
        {id}
      </div>
    )
  }

}

export default Box;
