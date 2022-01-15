import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }

  // UGLY - can this be simplified?
  handleShowDetails = (details) => {
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
          
          {!showDetails && (
						<div
							className={`show-details ${
								this.state.showDetails ? 'hide' : 'show'
							}`}
						>
							<br />
							<h6 className='about'>About Event</h6>
							<a href={event.htmlLink} target="_blank" rel="noreferrer">
								See details on Google calendar
							</a>
							<p className="event-description">{event.description}</p>
						</div>
					)}
					<Button
						variant="light"
						size="md"
						id="eventButton"
						className={`${showDetails ? 'show' : 'hide'}-details-btn`}
						onClick={this.handleShowDetails}
					>
						{showDetails ? 'Show Details' : 'Hide Details'}
					</Button>
          
          
          <button 
            className='show-details'
            onClick={this.handleShowDetails}
          >See Details</button>
        </div>
        <div>
          <button 
            className='hide-details'
            onClick={this.handleShowDetails}
          >Hide Details</button>
        </div>
      </div>
    );
  }
}
export default Event;