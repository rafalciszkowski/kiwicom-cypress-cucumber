Feature: Change Language and Currency on kiwi.com

    Background: Pre-conditions
        Given I navigate to the kiwi.com homepage
        # When I click navbar button
        When I click flag button on topbar

    Scenario Outline: Test change site language
        And I select '<languageCode>'
        And I click Save button
        Then I should be presented with '<language>' flag on topbar

        Examples:
            | language | languageCode |
            | Deutsch  | de           |
            | Français | fr           |
            | Dansk    | da           |
            | Español  | es           |
            | Italiano | it           |