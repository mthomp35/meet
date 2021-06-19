# About
This "meet" app allows users to find and view events and meet-ups based on their chosen city.

It's a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

# User Stories and Gerkhin Scenarios

### FEATURE 1: FILTER EVENTS BY CITY
**USER STORY:** As a user, I should be able to “filter events by city”, so that I can see the list of events that take place in that city.

*Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.*
```
Given: the user has not searched for any city
When: the user opens the app
Then: show all upcoming events sorted by date (earliest first)
```

*Scenario 2: User should see a list of suggestions when they search for a city.*
```
Given: the user is on the main page listing upcoming events
When: the user begins entering a city name into the filter
Then: show a list of city options/suggestions that are the closest match to the user's entry
```

*Scenario 3: User can select a city from the suggested list.*
```
Given: the user begins entering a city into the filter (e.g. "Berlin") AND the list of suggested cities is showing
When: the user selects a city (e.g. “Berlin, Germany”) from the list
Then: the city should be changed to the selection AND the user should receive a list of all upcoming events in the selected city sorted by date (earliest first)
```

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
**USER STORY:** As a user, I should be able to "show/hide an event's details", so that I can view more information about an event as desired.

*Scenario 1: An event element is collapsed by default.*
```
Given: the event list has loaded AND the user has not selected to view details of an event
When: user opens the app OR searches for a city
Then: show a list of event names without the details
```

*Scenario 2: User can expand an event to see its details.*
```
Given: the list of events has been loaded
When: user clicks on the “Show details” button for an event
Then: the event element will be expanded to show the event details
```

*Scenario 3: User can collapse an event to hide its details*
```
Given: the event details are expanded
When: user clicks on the “Hide details” button for an event
Then: the event element will be collapsed to hide the event details
```

### FEATURE 3: SPECIFY NUMBER OF EVENTS
**USER STORY:** As a user I should be able to “automatically see a reasonable amount of events which I can choose to adjust”, so that I see the optimum number of events that leads to a satisfying user experience.

*Scenario 1: When the user hasn’t specified a number, 32 is the default number.*
```
Given: the user has not specified a number of events to view
When: the list of events has been loaded
Then: a maximum of 32 events will automatically be shown in the list
```

*Scenario 2: User can change the number of events they want to see.*
```
Given: the list of events has been loaded
When: the user enters a specified a number of events to view
Then: the list of events will adjust to show the number specified by the user
```

### FEATURE 4: USE THE APP WHEN OFFLINE
**USER STORY:** As a user, I should be able to "view events I have recently viewed when the app is offline", so I can reference event details at any time.

*Scenario 1: Show cached data when there’s no internet connection.*
```
Given: the user has previously accessed the app to view a list of events
When: the app has no internet connection / is offline
Then: show the list of recently accessed events based on cached data
```

*Scenario 2: Show error when user changes the settings (city, time range).*
```
Given: the app has no internet connection
When: the user changes the filter settings (city, time range) to ones that do not match the cached data
Then: show an error, notifying the user the app is offline and can only show recently access events (include the cities available to view in the cached data)
```

### FEATURE 5: DATA VISUALIZATION
**USER STORY:** As a user I should be able to “have visual representations of data (i.e. charts)”, so that I can get see how many events are upcoming.

*Scenario 1: Show a chart with the number of upcoming events in each city.*
```
Given: the user has selected a city AND has not chosen a specific event
When: the user is on the events page for a particular city
Then: the user will see a chart with the upcoming events in that city
```
