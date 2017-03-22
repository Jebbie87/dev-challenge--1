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
    this.handleResetClick = this.handleResetClick.bind(this)
  }

  handleResetClick() {
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
          <ActionBox title='Available Actions' clickType='available' styles={this.state} />
          <ActionBox title='Applied Actions' clickType='applied' styles={this.state} />
          <div>
            <FontAwesome
              className='reset-bomb'
              name='bomb'
              size='5x'
              onClick={this.handleResetClick}
            />
            <p>Click the bomb to reset everything!</p>
          </div>
      </div>
    );
  }
}

export default App;
