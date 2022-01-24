import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Event from '../Event';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When the user hasn\’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has not specified a number of events to view', () => {
      AppWrapper = mount(<App />);
      
    });
    
    when('the list of events has been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('a maximum of 32 events will automatically be shown in the list', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.find('.event-count').prop('value')).toEqual(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of events has been loaded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
    
    when('the user enters a specified a number of events to view', () => {
      AppWrapper.find('.event-count').simulate('change', { target: { value: '1' } });
    });

    then('the list of events will adjust to show the number specified by the user', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });

});