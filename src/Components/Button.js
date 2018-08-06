import React, { Component } from 'react'

import '../Styles/Button.css'

export class Button extends Component {
  render() {
    return (
      <div className={this.props.buttonStyles}>
        <button>
          {this.props.content}
        </button>
      </div>
    )
  }
}

export default Button
