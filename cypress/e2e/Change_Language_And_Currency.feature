Feature: Change Language and Currency on kiwi.com

    Background: Pre-conditions
        Given I navigate to the kiwi.com homepage
        When I click flag button on topbar

    Scenario Outline: Test the website language and currency change
        And I select language '<languageCode>'
        And I select currency '<currency>'
        And I click Save button
        Then I should be presented with '<language>' flag on topbar
        And Default '<cityFrom>' should be translated to selected language
        And I should be presented with '<currencyCode>'

        Examples:
            | language                | languageCode | cityFrom | currency                   | currencyCode |
            | Deutsch (Switzerland)   | ch           | Warschau | Swiss franc - CHF          | CHF          |
            | Français                | fr           | Varsovie | Euro - EUR                 | EUR          |
            | Dansk                   | da           | Warszawa | Danish krone - DKK         | DKK          |
            | English (United States) | us           | Warsaw   | United States dollar - USD | USD          |
            | Magyar                  | hu           | Varsó    | Hungarian forint - HUF     | HUF          |

