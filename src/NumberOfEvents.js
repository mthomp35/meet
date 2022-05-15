import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventCount: 32,
    errorText: ''
  }

  handleCountChange = (event) => {
    const value = event.target.value;
    if (value < 0 || value > 32) {
      this.setState({
        errorText: 'Select a number between 1 and 32'
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
        <ErrorAlert text={this.state.errorText} />
        <b className='event-count-label'>
          Number of Events in View:
        </b>
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