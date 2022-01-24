import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When the user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    
    given('the user has not specified a number of events to view', () => {
      
    });
    
    when('the list of events has been loaded', () => {
      
    });

    then('a maximum of 32 events will automatically be shown in the list', () => {
      
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    
    given('the list of events has been loaded', () => {
      
    });
    
    when('the user enters a specified a number of events to view', () => {
      
    });

    then('the list of events will adjust to show the number specified by the user', () => {
      
    });
  });

});