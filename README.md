# BugBusters
Evaluation Workshop.
Our code tests if it can login to page url (https://lunch.devbstaging.com/login-password) and checks if login as administrator was successful, it automatically fills login and password details and presses login button. In the main page then it clicks on Lunch Editing button, chooses to add new provider, fills in provider name and color, add's new dish and saves. After save it checks if everything was successful by checking if the alert text is the same as in the code.
To setup the test, you need to make a pull request of the repository and type npm install in terminal (make sure you're in the right directory).
To run the tests, write npx playwright test in the terminal.
Code is writen in Javascript.
