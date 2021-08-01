import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }

  render() {
    return (
      <div className='event'>
        <div className='overview'>
          <h3>Event Name</h3>
          <p>Location</p>
          <p>Date and time</p>
          <button className='details'>See Details</button>
        </div>
      </div>
    );
  }
}
export default Event;