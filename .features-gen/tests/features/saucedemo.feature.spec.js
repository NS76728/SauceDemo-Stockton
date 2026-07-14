// Generated from: tests\features\saucedemo.feature
import { test } from "playwright-bdd";

test.describe('SauceDemo Site', () => {

  test('Login', async ({ Given, When, Then, page }) => { 
    await Given('I am on login page', null, { page }); 
    await When('I enter in user credentials', null, { page }); 
    await Then('I click the login button', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\saucedemo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter in user credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I click the login button","stepMatchArguments":[]}]},
]; // bdd-data-end