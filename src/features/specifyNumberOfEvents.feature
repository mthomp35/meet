Feature: Specify Number of Events

Scenario: When the user hasn’t specified a number, 32 is the default number.
Given the user has not specified a number of events to view
When the list of events has been loaded
Then a maximum of 32 events will automatically be shown in the list

Scenario: User can change the number of events they want to see.
Given the list of events has been loaded
When the user enters a specified a number of events to view
Then the list of events will adjust to show the number specified by the user