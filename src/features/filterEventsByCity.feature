Feature: Filter Events by City

Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
Given the user has not searched for any city
When the user opens the app
Then show all upcoming events sorted by date (earliest first)

Scenario: User should see a list of suggestions when they search for a city.
Given the user is on the main page listing upcoming events
When the user begins entering a city name into the filter
Then show a list of city options/suggestions that are the closest match to the user's entry

Scenario: User can select a city from the suggested list.
Given the user begins entering a city into the filter (e.g. "Berlin")
And the list of suggested cities is showing
When the user selects a city (e.g. “Berlin, Germany”) from the list
Then the city should be changed to the selection
And the list of suggestions should disappear
And the user should receive a list of all upcoming events in the selected city sorted by date (earliest first)
