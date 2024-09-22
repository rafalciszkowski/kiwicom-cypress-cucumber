Feature: Validate Landing Page Search Form

    Background: Pre-conditions
        Given I navigate to the kiwi.com homepage

    Scenario Outline: Test type of trip selection
        When I click on selected 'typeOfTrip'
        And I select trip type '<typeOfTrip>'
        Then I should be presented with selected trip type '<typeOfTrip>'

        Examples:
            | typeOfTrip |
            | Nomad      |
            | Multi-city |
            | One-way    |
            | Return     |

    Scenario Outline: Test cabin class selection
        When I click on selected 'cabinClass'
        And I select cabin class '<cabinClass>'
        # And I click 'done' button in 'cabin' popup
        And I click outer element
        Then I should be presented with selected cabin class '<cabinClass>'

        Examples:
            | cabinClass      |
            | Economy         |
            | Premium Economy |
            | Business        |
            | First Class     |


    Scenario: Test default passengers and bags number
        When I click on selected 'passengersField'
        Then 'adults' 'passengers' value should be '1'
        And 'children' 'passengers' value should be '0'
        And 'infants' 'passengers' value should be '0'
        And 'cabin' 'bags' value should be '0'
        And 'checked' 'bags' value should be '0'

    Scenario: Test selection of passengers number
        When I click on selected 'passengersField'
        And I click in 'adults' 'passengers' row 'increment' button
        And I click in 'children' 'passengers' row 'increment' button
        And I click in 'infants' 'passengers' row 'increment' button
        # And I click 'done' button in 'passengers' popup
        And I click outer element
        Then I should be presented with the number of '4' 'passengers'

    Scenario: Test selection of bags number
        When I click on selected 'passengersField'
        And I click in 'cabin' 'bags' row 'increment' button
        And I click in 'checked' 'bags' row 'increment' button
        # And I click 'done' button in 'passengers' popup
        And I click outer element
        Then I should be presented with the number of '2' 'bags'