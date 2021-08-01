import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventCount: 32
  }

  handleCountChange = (count) => {
    const value = count.target.value;
    this.setState({ 
      eventCount: value
    });
  }

  render() {
    return (
      <div className='NumberOfEvents'>
        <input
            type='text'
            className='event-count'
            value={this.state.eventCount}
            onChange={this.handleCountChange}
          />
      </div>
    )
  }
}

export default NumberOfEvents;