Feature: Playwright Home Page

    Scenario Outline: Check login successfully
        Given User opens page
        When User navigates to "Form Authentication"
        And User enters "<Username>" text into "Username" field
        And User enters "<Password>" text into "Password" field
        And User clicks login button
        Then User should see "Welcome to the Secure Area. When you are done click logout below" text
        Examples:
            | Username | Password             |
            | tomsmith | SuperSecretPassword! |

    Scenario Outline: Check Validation input
        Given User opens page
        When User navigates to "Form Authentication"
        And User enters "<Username>" text into "Username" field
        And User enters "<Password>" text into "Password" field
        And User clicks login button
        Then User should see "<Error Message>" text
        Examples:
            | Username | Password             | Error Message             |
            |          |                      | Your username is invalid! | 
            | Bong     | 1234                 | Your username is invalid! |
            | tomsmith | 1234                 | Your password is invalid! |
            | Bong     | SuperSecretPassword! | Your username is invalid! |