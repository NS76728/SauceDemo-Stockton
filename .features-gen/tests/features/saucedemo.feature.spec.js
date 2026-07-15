// Generated from: tests\features\saucedemo.feature
import { test } from "../../../fixtures.ts";

test.describe('SauceDemo Site', () => {

  test('LGN-01: Login with standard user', { tag: ['@debug'] }, async ({ Given, When, Then, And, InventoryPage, LoginPage }) => { 
    await Given('I am on login page', null, { LoginPage }); 
    await When('I enter in user credentials of "standard_user" and "secret_sauce"', null, { LoginPage }); 
    await And('I click the login button', null, { LoginPage }); 
    await Then('I should be successfully logged into "inventory" page', null, { InventoryPage }); 
  });

  test('Failing LGN-01 Login fail', { tag: ['@debug'] }, async ({ Given, When, Then, And, InventoryPage, LoginPage }) => { 
    await Given('I am on login page', null, { LoginPage }); 
    await When('I enter in user credentials of "locked_out_user" and "secret_sauce"', null, { LoginPage }); 
    await And('I click the login button', null, { LoginPage }); 
    await Then('I should be successfully logged into "inventory" page', null, { InventoryPage }); 
  });

  test('LGN-02: Login with locked out user', { tag: ['@debug'] }, async ({ Given, When, Then, And, LoginPage }) => { 
    await Given('I am on login page', null, { LoginPage }); 
    await When('I enter in user credentials of "locked_out_user" and "secret_sauce"', null, { LoginPage }); 
    await And('I click the login button', null, { LoginPage }); 
    await Then('I should see error containing "Epic sadface: Sorry, this user has been locked out."', null, { LoginPage }); 
  });

  test('CHK-01: Complete a checkout with valid information', { tag: ['@debug'] }, async ({ Given, When, Then, And, CartPage, CheckoutPage, InventoryPage, LoginPage }) => { 
    await Given('I am on login page', null, { LoginPage }); 
    await When('I enter in user credentials of "standard_user" and "secret_sauce"', null, { LoginPage }); 
    await And('I click the login button', null, { LoginPage }); 
    await And('I should be successfully logged into "inventory" page', null, { InventoryPage }); 
    await And('I click add to cart on inventory page for "Sauce Labs Backpack" item', null, { InventoryPage }); 
    await And('I click add to cart on inventory page for "Sauce Labs Fleece Jacket" item', null, { InventoryPage }); 
    await And('I verify cart count is "2"', null, { InventoryPage }); 
    await And('I click on cart link', null, { InventoryPage }); 
    await And('I click on checkout button', null, { CartPage }); 
    await And('I fill out check out information using; "John" "Doe" "43210"', null, { CheckoutPage }); 
    await And('I click the continue button', null, { CheckoutPage }); 
    await And('I click on the finish button', null, { CheckoutPage }); 
    await Then('I verify thank you meesage is present', null, { CheckoutPage }); 
    await And('I click the back home button', null, { CheckoutPage }); 
    await And('I should be successfully logged into "inventory" page', null, { InventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\saucedemo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@debug"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I enter in user credentials of \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":31,"value":"\"standard_user\"","children":[{"start":32,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be successfully logged into \"inventory\" page","stepMatchArguments":[{"group":{"start":37,"value":"\"inventory\"","children":[{"start":38,"value":"inventory","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":10,"tags":["@debug"],"steps":[{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am on login page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter in user credentials of \"locked_out_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":31,"value":"\"locked_out_user\"","children":[{"start":32,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"secret_sauce\"","children":[{"start":54,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should be successfully logged into \"inventory\" page","stepMatchArguments":[{"group":{"start":37,"value":"\"inventory\"","children":[{"start":38,"value":"inventory","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":["@debug"],"steps":[{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given I am on login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I enter in user credentials of \"locked_out_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":31,"value":"\"locked_out_user\"","children":[{"start":32,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"secret_sauce\"","children":[{"start":54,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see error containing \"Epic sadface: Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":31,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":24,"tags":["@debug"],"steps":[{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given I am on login page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When I enter in user credentials of \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":31,"value":"\"standard_user\"","children":[{"start":32,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And I should be successfully logged into \"inventory\" page","stepMatchArguments":[{"group":{"start":37,"value":"\"inventory\"","children":[{"start":38,"value":"inventory","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And I click add to cart on inventory page for \"Sauce Labs Backpack\" item","stepMatchArguments":[{"group":{"start":42,"value":"\"Sauce Labs Backpack\"","children":[{"start":43,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And I click add to cart on inventory page for \"Sauce Labs Fleece Jacket\" item","stepMatchArguments":[{"group":{"start":42,"value":"\"Sauce Labs Fleece Jacket\"","children":[{"start":43,"value":"Sauce Labs Fleece Jacket","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And I verify cart count is \"2\"","stepMatchArguments":[{"group":{"start":23,"value":"\"2\"","children":[{"start":24,"value":"2","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And I click on cart link","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"And I click on checkout button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And I fill out check out information using; \"John\" \"Doe\" \"43210\"","stepMatchArguments":[{"group":{"start":40,"value":"\"John\"","children":[{"start":41,"value":"John","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"Doe\"","children":[{"start":48,"value":"Doe","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"43210\"","children":[{"start":54,"value":"43210","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And I click the continue button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And I click on the finish button","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then I verify thank you meesage is present","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"And I click the back home button","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And I should be successfully logged into \"inventory\" page","stepMatchArguments":[{"group":{"start":37,"value":"\"inventory\"","children":[{"start":38,"value":"inventory","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end