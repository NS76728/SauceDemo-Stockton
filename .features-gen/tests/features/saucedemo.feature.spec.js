// Generated from: tests\features\saucedemo.feature
import { test } from "../../../fixtures.ts";

test.describe('SauceDemo Site', () => {

  test('Login', { tag: ['@debug'] }, async ({ Given, When, Then, And, InventoryPage, LoginPage }) => { 
    await Given('I am on login page', null, { LoginPage }); 
    await When('I enter in user credentials of "standard_user" and "secret_sauce"', null, { LoginPage }); 
    await And('I click the login button', null, { LoginPage }); 
    await Then('I should be successfully logged in', null, { InventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\saucedemo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@debug"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I enter in user credentials of \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":31,"value":"\"standard_user\"","children":[{"start":32,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be successfully logged in","stepMatchArguments":[]}]},
]; // bdd-data-end