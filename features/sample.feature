Feature: Login to the parabank application
    Background: navigating
        Given User should navigate to the valid url
        When User should validate the application


    Scenario Outline: Scenario Outline name: Login to the application with valid credentials

        Then Enter username as "<Username>"
        Then Enter password as "<password>"
        Then Click on Login button
        Then user "<status>" able to login
        Then user click on the open new account
        Then user should logged out

        Examples:
            | Username  | password      | status |
            | kk1 | kk1 | is     |