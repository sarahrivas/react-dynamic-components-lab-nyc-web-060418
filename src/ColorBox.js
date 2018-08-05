import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const opacityVal= this.props.opacity;

    if (opacityVal >= 0.2) {
      return (
        <div className="color-box" style= {{ opacity: this.props.opacity }}>
          <ColorBox opacity={opacityVal - 0.1} />
        </div>
      )
    } else {
      return null;
    }
  }
}
