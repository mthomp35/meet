import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

//test to check for one event list
describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});

//test integrated components
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('Get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations }); //set to include all available cities
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length)); //holds index of the selected city from the suggestions array beginning with integer 0
    const selectedCity = suggestions[selectedIndex]; //return city name based on index
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents(); //getEvents = async function used to get all the events from the API asynchronously (and from the mock data when it’s used in tests)
    const eventsToShow = allEvents.filter(event => event.location === selectedCity); //stores events associated with the selected city
    expect(AppWrapper.state('events')).toEqual(eventsToShow); //compares whether the state of events actually takes the same array as the events that resulted from the filtering process in the previous step
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('App passes "event count" state as prop to NumberOfEvents', () => {
    const AppWrapper = mount(<App />);
    const AppNumberOfEventsState = AppWrapper.state('eventCount');
    expect(AppNumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).props().eventCount).toEqual(AppNumberOfEventsState);
    AppWrapper.unmount();
  });

  test('changing NumberOfEvents input value changes state of NumberOfEvents & App', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 12 } };
    await NumberOfEventsWrapper.find('.event-count').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(12);
    expect(AppWrapper.state('eventCount')).toBe(12);
    AppWrapper.unmount();
  });

  test('get list of events matching the number specified by the user', async () => {
    const AppWrapper = mount( <App /> );
    AppWrapper.setState({ eventCount: 10 });
    const AppCountState = AppWrapper.state('eventCount');
    await AppWrapper.instance().updateEvents('all', AppCountState);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.slice(0, AppCountState);
    expect(AppCountState).toBe(10);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  /*test('changing NumberOfEvents input value yields that number of events in EventList', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const EventListWrapper = AppWrapper.find(EventList);
    const eventObject = { target: { value: 2 } };
    await NumberOfEventsWrapper.find('.event-count').simulate('change', eventObject);
    expect(EventListWrapper.find('li')).toHaveLength(2);
    expect(AppWrapper.find(EventList)).toHaveLength(2);
    expect(EventListWrapper.find('.event').length).toBe(2);
    AppWrapper.unmount();
  });*/

});