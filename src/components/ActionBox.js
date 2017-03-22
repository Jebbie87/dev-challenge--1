import React, { Component } from 'react'

export default class ActionBox extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    // this.props.clickType === 'applied' ?
    console.log(this.refs.rotate)
  }

  handleClick(e) {
    e.target.className = `${e.target.className} hidden`
  }

  render() {
    const { rotate, translate, opacity, scale } = this.props.styles
    return (
      <div className='action-box'>
        <h3 className='action-title'>{this.props.title}</h3>

        <div
          className={`rotate-box ${rotate === null ? 'hidden' : 'show'}`} onClick={(e) => this.handleClick(e)}>
          Rotate
        </div>

        <div className={`translate-box`} onClick={(e) => this.handleClick(e)}>
          Translate
        </div>

        <div className={`opacity-box`} onClick={(e) => this.handleClick(e)}>
          Opacity
        </div>

        <div className={`scale-box`} onClick={(e) => this.handleClick(e)}>
          Scale
        </div>

      </div>
    )
  }
}
