Feature: Playwright Home Page

    Scenario: Verify that a file can be successfully uploaded
        Given User opens page
        When User navigates to "File upload"
        And User uploads "image.jpg" file
        And User clicks to upload button
        Then User should see "File uploaded" text
        And User should see "image.jpg" text
       