import React, { Component } from 'react';
import UserPhoto from './UserPhoto'
import ActionBox from './ActionBox'
import FontAwesome from 'react-fontawesome'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotate: { action: '', css: 'available' },
      translate: { action: '', css: 'available' },
      opacity: { action: '', css: 'available' },
      scale: { action: '', css: 'available' },
    }
    this.handleResetClick = this.handleResetClick.bind(this)
    this.handleActionClick = this.handleActionClick.bind(this)
  }

  handleResetClick() {
    this.setState({
      rotate: { action: '', css: 'available' },
      translate: { action: '', css: 'available' },
      opacity: { action: '', css: 'available' },
      scale: { action: '', css: 'available' },
    })
  }

  handleActionClick(type) {
    switch(type) {
      case 'rotate':
        if (this.state.rotate.css === 'applied') {
          this.setState({ rotate: { action: '', css: 'available' } })
        } else {
          this.setState({ rotate: { action: 'rotate(45deg)', css: 'applied' } })
        }
        break
      case 'translate':
        if (this.state.translate.css === 'applied') {
          this.setState({ translate: { action: '', css: 'available' } })
        } else {
          this.setState({ translate: { action: 'translateX(-40px)', css: 'applied' } })
        }
        break
      case 'opacity':
        if (this.state.opacity.css === 'applied') {
          this.setState({ opacity: { action: '', css: 'available' } })
        } else {
          this.setState({ opacity: { action: 0.5, css: 'applied' } })
        }
        break
      case 'scale':
        if (this.state.scale.css === 'applied') {
          this.setState({ scale: { action: '', css: 'available' } })
        } else {
          this.setState({ scale: { action: 'scale(0.5)', css: 'applied' } })
        }
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className='app'>
        <h1>Dev Challenge #1</h1>
          <UserPhoto styles={this.state} />
          <ActionBox handleActionClick={this.handleActionClick} styles={this.state} />
          <div>
            <FontAwesome
              className='reset-bomb'
              name='bomb'
              size='5x'
              onClick={this.handleResetClick}
            />
            <p>Click the bomb to reset all your actions!</p>
          </div>
      </div>
    );
  }
}

export default App;
