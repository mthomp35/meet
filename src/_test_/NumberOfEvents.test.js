import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  test('render text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    expect(NumberOfEventsWrapper.find('.event-count')).toHaveLength(1);
  });

  test('Event count is labeled', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    expect(NumberOfEventsWrapper.find('.event-count-label')).toHaveLength(1);
  });

  test('default number of events is 32', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(32);
  });

  test('renders text input correctly', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    const eventCount = NumberOfEventsWrapper.state('eventCount');
    expect(NumberOfEventsWrapper.find('.event-count').prop('value')).toBe(eventCount);
  });

  test('change state when text input changes', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    NumberOfEventsWrapper.setState({ eventCount: 32 });
    const eventObject = { target: { value: 20 }};
    NumberOfEventsWrapper.find('.event-count').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(20);
  });

});