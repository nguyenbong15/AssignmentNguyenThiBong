Feature: Playwright Home Page

    Scenario: Verify that checkbox can be checked 
        Given User opens page
        When User navigates to "Checkboxes"
        And User "checks" to checkbox "1"
        Then User should see checkbox "1" is "checked"
    
    Scenario: Verify that checkbox can be unchecked
        Given User opens page
        When User navigates to "Checkboxes"
        And User "unchecks" to checkbox "2"
        Then User should see checkbox "2" is "unchecked"
