import React, { Component } from 'react'

export default class ActionBox extends Component {
  render() {
    const { rotate, translate, opacity, scale } = this.props.styles
    return (
      <div className='action-box'>
        <div className='title'>
          <h3 className='available-title'>Available Actions</h3>
          <h3 className='applied-title'>Applied Actions</h3>
        </div>

        <div
          className={`rotate ${rotate.css}`} onClick={() => this.props.handleActionClick('rotate')}>
          Rotate
        </div>

        <div className={`translate ${translate.css}`} onClick={() => this.props.handleActionClick('translate')}>
          Translate
        </div>

        <div className={`opacity ${opacity.css}`} onClick={() => this.props.handleActionClick('opacity')}>
          Opacity
        </div>

        <div className={`scale ${scale.css}`} onClick={() => this.props.handleActionClick('scale')}>
          Scale
        </div>

      </div>
    )
  }
}
