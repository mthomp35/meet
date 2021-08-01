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
    return (
      <div className='event'>
        <div className='overview'>
          <h3>Event Name</h3>
          <p>Location</p>
          <p>Date and time</p>
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