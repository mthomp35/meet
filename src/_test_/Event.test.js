import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('renders event element', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('check for event overview', () => {
    expect(EventWrapper.find('.overview')).toHaveLength(1);
  });

  test('check for event overview children: name, time, location, show-details button', () => {
    expect(EventWrapper.find('.overview').children()).toHaveLength(4);
  });

  test('check for show-details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('when event component is rendered, details should be hidden', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('when details are hidden and show-details button is clicked, state should change to true and details should be expanded', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('check for hide-details button', () => {
    expect(EventWrapper.find('.hide-details')).toHaveLength(1);
  });

  test('when details are visible and hide-details button is clicked, state should change to false and details should be hidden', () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });
  
});