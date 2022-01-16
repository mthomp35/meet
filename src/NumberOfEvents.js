import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventCount: 32,
    errorText: ''
  }

  handleCountChange = (event) => {
    const value = event.target.value;
    if (value < 0 || value > 50) {
      this.setState({
        errorText: 'Select a number between 1 and 50'
    });
  } else {
    this.setState({ 
      eventCount: value,
      errorText: ''
    });
  }
    this.props.updateEvents(null, value);
  };

  render() {
    return (
      <div className='NumberOfEvents'>
        <label className='event-count-label'>Number of Events in View:</label>
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