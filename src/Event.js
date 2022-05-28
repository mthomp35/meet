import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }

  // UGLY - can this be simplified?
  handleShowDetails = () => {
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
          <h3 className='event-title'>{event.summary}</h3>
          <p className='location'>{event.location}</p>
          <p className='start-date'>{event.start.dateTime} ({event.start.timeZone})</p>
          
          {!showDetails && (
            <button
              className="show-details"
              onClick={this.handleShowDetails}
            >Show Details</button>
          )}
        </div>

        {showDetails && (
          <div className="event_details">
            <h3>About this Event:</h3>
            <a
              href={event.htmlLink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="google-btn">See details on Google Calendar</button>
            </a>
            <p>{event.description}</p>
            <button
              className="hide-details"
              onClick={this.handleShowDetails}
            >Hide Details</button>
          </div>
        )}
          
      </div>
    );
  }
}
export default Event;