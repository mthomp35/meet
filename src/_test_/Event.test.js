import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  test('renders event element', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('check for event overview', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.overview')).toHaveLength(1);
  });

  test('check for event overview children: name, time, location, show-details button', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.overview').children()).toHaveLength(4);
  });

  test('check for details button', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  test('when event component is rendered, details should be hidden', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.state('showDetails')).toBe(false);
  });
  
});