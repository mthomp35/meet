FEATURE 1: FILTER EVENTS BY CITY
USER STORY: As a user, I should be able to “filter events by city”, so that I can see the list of events that take place in that city.

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

Given: the user has not searched for any city
When: the user opens the app
Then: show all upcoming events sorted by date (earliest first)
Scenario 2: User should see a list of suggestions when they search for a city.

Given: the user is on the main page listing upcoming events
When: the user begins entering a city name into the filter
Then: show a list of city options/suggestions that are the closest match to the user's entry
Scenario 3: User can select a city from the suggested list.

Given: the user begins entering a city into the filter (e.g. "Berlin") AND the list of suggested cities is showing
When: the user selects a city (e.g. “Berlin, Germany”) from the list
Then: the city should be changed to the selection AND the list of suggestions should disappear AND the user should receive a list of all upcoming events in the selected city sorted by date (earliest first)
