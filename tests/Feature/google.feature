Feature: Demopage account creation
  As a user
  I want to open the Demopage homepage and start the registration flow
  So that I can verify the website and account creation page load correctly

@homepage
Scenario: Opening the Demopage homepage
    Given the user navigates to the Demopage homepage
    Then the page title should contain "Demopage"
    And I pause for manual inspection

  @demologin
  Scenario: Opening the Demo login page
    Given the user opens the Amazon login page
    Then the Amazon login page should load

@registration
Scenario: Opening the Amazon registration page
  Given the user opens the Amazon registration page
  Then the Amazon registration page should load

  Scenario: Filling the Amazon registration form with sample data
    Given the user opens the Amazon registration page
    When the user enters sample registration data
    Then the form fields should accept the typed values
