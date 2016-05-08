import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Box from '../components/Box.jsx'
import PackeryComponent from 'react-packery-component'
const Packery = PackeryComponent(React)
const packeryOptions = {
    transitionDuration: 0,
    gutter: 10
};

class Boxes extends Component {

  render() {
    const {
    } = this.props;

    const boxes = Array.from(Array(100).keys()).map((i) => {
      return <Box key={i} id={i} />
    })

    return (
      <Packery className={"grid"}
        options={packeryOptions}
        disableImagesLoaded={false}
        disableDraggable={false}>
        {
          boxes
        }
      </Packery>
    )
  }
}


export default Boxes
