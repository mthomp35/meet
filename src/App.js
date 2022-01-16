import React, { Component } from 'react';
import { getEvents, extractLocations } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    currentLocation: 'all'
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
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
      const locationEvents = (location === 'all') ?
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
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
        <NumberOfEvents 
          eventCount={this.state.eventCount} 
          updateEvents={this.updateEvents}
        />
      </div>
    );
  }
}


export default App;
