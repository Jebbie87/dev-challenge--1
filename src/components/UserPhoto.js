import React, { Component } from 'react'

export default class UserPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePreview: '',
    }
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  handleImageChange(e) {
    e.preventDefault()
    let reader = new FileReader()
    let file = document.getElementById("file-upload").files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreview: reader.result,
      })
    }
    reader.readAsDataURL(file)
  }

  render() {
    const { translate, rotate, opacity, scale } = this.props.styles
    const style = {
      "transform": (!translate.action && !rotate.action && !scale.action) ? 'none' : `${translate.action} ${rotate.action} ${scale.action}`,
      "opacity": `${opacity.action}`
    }
    return (
      <div className='user-photo'>
        {
          this.state.imagePreview ?
          <img src={this.state.imagePreview} style={style} alt='presentation'/> :
          <div><p className='upload-text'>Upload an image please</p></div>
        }
        <div className='file-uploader'>
          <label htmlFor="file-upload" className="custom-upload-button">
              <i className="fa fa-cloud-upload"></i> Choose Image
          </label>
          <input id="file-upload" type="file" onChange={(e) => this.handleImageChange(e)} />
        </div>
      </div>
    )
  }
}