import React, { Component } from 'react'

export default class ActionBox extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(e.target.className)
    e.target.className = `${e.target.className} hidden`
  }

  render() {
    let hidden;
    this.props.clickType === 'applied' ? hidden = 'hidden' : hidden = null
    return (
      <div className='action-box'>
        <h3 className='action-title'>{this.props.title}</h3>

        <div className={`rotate-box ${hidden}`} onClick={(e) => this.handleClick(e)}>
          Rotate
        </div>

        <div className={`translate-box ${hidden}`} onClick={(e) => this.handleClick(e)}>
          Translate
        </div>

        <div className={`opacity-box ${hidden}`} onClick={(e) => this.handleClick(e)}>
          Opacity
        </div>

        <div className={`scale-box ${hidden}`} onClick={(e) => this.handleClick(e)}>
          Scale
        </div>

      </div>
    )
  }
}

        // <div className='rotate-box' onClick={() => this.handleClick(`${this.props.clickType}-rotate`)} >
        //   <p>Rotate</p>
        // </div>

        // <div className='translate-box' onClick={() => this.handleClick(`${this.props.clickType}-translate`)} >
        //   <p>Translate</p>
        // </div>

        // <div className='opacity-box' onClick={() => this.handleClick(`${this.props.clickType}-opacity`)} >
        //   <p>Opacity</p>
        // </div>

        // <div className='scale-box' onClick={() => this.handleClick(`${this.props.clickType}-scale`)} >
        //   <p>Scale</p>
        // </div>