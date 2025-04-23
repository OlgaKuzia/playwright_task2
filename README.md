# https://www.redmine.org/ - Project Setup

## Configuration Files

All the important configuration settings such as:

- **Main links**
- **Passwords**
- **Logins**

are stored in the `/helpers/helper.json`. Make sure to update this file with the necessary credentials and other configurations before running the tests


1. Clone the repository:
   git clone https://

2. Navigate to the project folder:
   cd playwright_task2

3. Install dependencies:
   npm install

4. Running Tests:
   npm run test

5. Deletes old Allure results and reports
   npm run allure:clean

6. Generates an HTML report from the allure-results  
   npm run allure:generate

7. Opens the generated Allure report in the browser
   npm run allure:open

8. Full cycle: clean ➜ run tests ➜ generate report ➜ open the report
   npm run test:allure   

6. To run tests for a specific browser (e.g., Chromium):
   npm run test --project=chromium
   npm run test --project=firefox
   npm run test --project=webkit

7. To run test with UI:
   npm run test --headed

8. To run test with UI for a specific browser:
   npm run test --project=chromium --headed
   npm run test --project=firefox --headed

9. To run a spesific test for a specific browser:
   npm run test tests/ValidRegistration.spec.js --project=chromium
   
10. To run test in debug mode:
    npm run test --debug
