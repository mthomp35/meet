Feature: Show/hide an event's details

Scenario: An event element is collapsed by default.
Given the event list has loaded AND the user has not selected to view details of an event
When user opens the app OR searches for a city
Then show a list of event names without the details

Scenario: User can expand an event to see its details.
Given the list of events has been loaded
When user clicks on the “Show details” button for an event
Then the event element will be expanded to show the event details

Scenario: User can collapse an event to hide its details
Given the event details are expanded
When user clicks on the “Hide details” button for an event
Then the event element will be collapsed to hide the event details