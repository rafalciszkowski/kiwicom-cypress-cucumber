Feature: Validate Landing Page Search Form

    Background: Pre-conditions
        Given I navigate to the kiwi.com homepage
        When I click on default type of trip

    Scenario Outline: Test type of trip
        And I select trip type '<typeOfTrip>'
        Then I should be presented with selected trip type '<typeOfTrip>'

        Examples:
            | typeOfTrip |
            | Nomad      |
            | Multi-city |
            | One-way    |
            | Return     |