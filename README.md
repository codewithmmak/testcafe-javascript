---
# TestCafe and JavaScript Setup Guide
---

## Features of this framework
* [Design Pattern: Page Object Model](https://testcafe.io/documentation/402826/guides/concepts/page-model)
* [Reporting: Allure](https://npm.io/package/testcafe-reporter-allure)
* [Cloud Integration: SauceLab](https://saucelabs.com/)
* [Code Formatter: Prettier](https://prettier.io/)

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code
* Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens`
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: ```npm install```
* All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Add new spec under `test` folder
* Name the file as <testname>.js (e.g. home.js)
* Create folder under /page as <page-name> (e.g. homePage)

### How to Run Test
* Go to Project root directory and run command: ```npm test```
* If you want to run tests on Safari browser then run command: ```npm run test-safari```

### How to Update local npm packages
* Go to Project root directory and run command: ```npm update```

### How to view HTML report
* Go to Project root directory: `./allure/allure-report/index.html`

### How to view failed test screenshot
* Go to Project root directory: `./test-results/`

### Sample Allure Test Report
![TestCafe and JavaScript Test Report](./assets/Allure-Report.png?raw=true "TestCafe and JavaScript Test Report")

![TestCafe and JavaScript Test Report Expanded View](./assets/Allure-Report-Expanded-View.png?raw=true "TestCafe and JavaScript Test Report Expanded View")


### How to run Test on SauceLabs
* [SauceLabs Quickstart](https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/)
    * Set Environment Variables:
        * Open Terminal
        * Run ```touch ~/.bash_profile; open ~/.bash_profile```
        * In TextEdit, add
        * ```export SAUCE_USERNAME=“YOUR USERNAME”```
        * ```export SAUCE_ACCESS_KEY="YOUR ACCESS KEY"```
        * Save the .bash_profile file and Quit (Command + Q) Text Edit.
        * In Terminal echo $SAUCE_USERNAME
        * In Terminal echo $SAUCE_ACCESS_KEY
    * Configure:
    ```saucectl config```
    * Run tests: ```npm saucectl run```

## Supported Browsers
* https://testcafe.io/documentation/402828/guides/concepts/browsers