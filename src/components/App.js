import React, { Component } from 'react';
import UserPhoto from './UserPhoto'
import ActionBox from './ActionBox'
import FontAwesome from 'react-fontawesome'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotate: null,
      translate: null,
      opacity: null,
      scale: null,
      reset: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      rotate: null,
      translate: null,
      opacity: null,
      scale: null,
      reset: true,
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>App</h1>
          <UserPhoto styles={this.state} />
          <ActionBox title='Available Actions' clickType='available' handleTypeClick={this.handleTypeClick} />
          <ActionBox title='Applied Actions' clickType='applied' handleTypeClick={this.handleTypeClick} />
          <div>
            <FontAwesome
              className='reset-bomb'
              name='bomb'
              size='5x'
              onClick={this.handleClick}
            />
            <p>Click the bomb to reset everything!</p>
          </div>
      </div>
    );
  }
}

export default App;
