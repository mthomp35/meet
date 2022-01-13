import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }

  // UGLY - can this be simplified?
  handleToggleDetails = (details) => {
    if(this.state.showDetails === false) {
      this.setState({
        showDetails: true
      });
    } else {
      this.setState({ 
        showDetails: false 
      });
    }
  }

  render() {
    const showDetails = this.state.showDetails;
    const { event } = this.props;

    return (
      <div className='event'>
        <div className='overview'>
          <h3>{event.summary}</h3>
          <p className='location'>{event.location}</p>
          <p className='start-date'>{event.start.dateTime} ({event.start.timeZone})</p>
          <button 
            className='show-details'
            onClick={this.handleToggleDetails}
          >See Details</button>
        </div>
        <div>
          <button 
            className='hide-details'
            onClick={this.handleToggleDetails}
          >Hide Details</button>
        </div>
      </div>
    );
  }
}
export default Event;