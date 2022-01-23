import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the event list has loaded AND the user has not selected to view details of an event', () => {

    });
    
    when('user opens the app OR searches for a city', () => {
      
    });

    then('show a list of event names without the details', () => {
      
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {

    });
    
    when('user clicks on the “Show details” button for an event', () => {
      
    });

    then('the event element will be expanded to show the event details', () => {
      
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('the event details are expanded', () => {

    });
    
    when('user clicks on the “Hide details” button for an event', () => {
      
    });

    then('the event element will be collapsed to hide the event details', () => {
      
    });
  });

});