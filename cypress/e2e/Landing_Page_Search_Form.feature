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
        And Click 'done' button
        Then I should be presented with selected cabin class '<cabinClass>'

        Examples:
            | cabinClass      |
            | Economy         |
            | Premium Economy |
            | Business        |
            | First Class     |
