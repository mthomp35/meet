import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.event-count')).toHaveLength(1);
  });

  test('Event count is labeled', () => {
    expect(NumberOfEventsWrapper.find('.event-count-label')).toHaveLength(1);
  });

  test('default number of events is 32', () => {
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(32);
  });

  test('renders text input correctly', () => {
    const eventCount = NumberOfEventsWrapper.state('eventCount');
    expect(NumberOfEventsWrapper.find('.event-count').prop('value')).toBe(eventCount);
  });

  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({ eventCount: 32 });
    const eventObject = { target: { value: 20 }};
    NumberOfEventsWrapper.find('.event-count').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(20);
  });

});