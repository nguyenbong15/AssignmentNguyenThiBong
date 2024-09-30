Feature: Playwright Home Page

    Scenario: Verify that each option in a dropdown can be selected
        Given User opens page
        When User navigates to "Dropdown"
        And User selects "Option 1" option in dropdown
        Then User should see "Option 1" option is selected
        When User selects "Option 2" option in dropdown
        Then User should see "Option 2" option is selected
    