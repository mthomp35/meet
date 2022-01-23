import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    given('the user has not searched for any city', () => {

    });
    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('show all upcoming events sorted by date (earliest first)', () => {

    });
  });

  test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
    given('the user is on the main page listing upcoming events', () => {

    });

    when('the user begins entering a city name into the filter', () => {

    });

    then('show a list of city options/suggestions that are the closest match to the user\'s entry', () => {

    });
  });


  test('User can select a city from the suggested list.', ({ given, and, when, then }) => {
    given('the user begins entering a city into the filter (e.g. "Berlin")', () => {

    });

    and('the list of suggested cities is showing', () => {

    });

    when('the user selects a city (e.g. “Berlin, Germany”) from the list', () => {

    });

    then('the city should be changed to the selection', () => {

    });

    and('the list of suggestions should disappear', () => {

    });

    and('the user should receive a list of all upcoming events in the selected city sorted by date (earliest first)', () => {

    });

  });
});