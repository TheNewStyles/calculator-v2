import React, { Component } from 'react'

import '../Styles/Display.css'

export class Display extends Component {
  render() {
    return (
      <div className="display">
        {this.props.text}
      </div>
    )
  }
}

export default Display
