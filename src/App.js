import React, { Component } from 'react';
import { getEvents, extractLocations } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    currentLocation: 'All Cities',
    warningText: ''
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.eventCount), 
          locations: extractLocations(events) 
        });
      }
      if (!navigator.onLine) {
        this.setState({
          warningText: 'You are currently offline. Events shown may not be up to date.'
        });
        
      } else {
        this.setState({
          warningText: ''
        });
      }   
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, number) => {
    /* Default values */
    location = location || this.state.currentLocation;
    number = number || this.state.eventCount;

    getEvents().then((events) => {
      const locationEvents = (location === 'All Cities') ?
      events : 
      events.filter((event) => event.location === location);
      const filteredEvents = locationEvents.slice(0, number);
      this.setState({
        events: filteredEvents,
        currentLocation: location,
        eventCount: number
      });
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='offline-alert'>
          <WarningAlert text={this.state.warningText} />
        </div>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents 
          eventCount={this.state.eventCount} 
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}


export default App;
