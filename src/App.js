import React, { Component } from 'react';
import { getEvents, extractLocations, getAccessToken, checkToken } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    currentLocation: 'All Cities',
    warningText: '',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
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
  }

  componentWillUnmount() {
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
    if (this.state.showWelcomeScreen === undefined) return <div className='App' />
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
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}


export default App;
