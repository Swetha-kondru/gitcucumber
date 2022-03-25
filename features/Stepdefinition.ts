import { Given, Then, When } from '@cucumber/cucumber';
import { browser } from 'protractor';
import { LogIn }  from './pageobjects';
 import { expectType } from "ts-expect";
 import{expect} from 'chai';

var logIn = new LogIn();

Given('User should navigate to the valid url', async function () {

  try {
    await browser.waitForAngularEnabled(false);
    await browser.sleep(100000);
    await logIn.Url();
    await browser.sleep(60000);
    await console.log("user is sucessfully navigate to url");
  } catch (error) {
    
    console.log("user not able to login");
  }
    
});
When('User should validate the application', async function () {
    await browser.sleep(10000);
    await expectType<string>("test");
    await expect(browser.getTitle()).to.equal("ParaBank|Welcome|Online Banking");
    await browser.sleep(30000);
    await console.log("title of the application iss matched");
});
Then('Enter username as {string}',async function (Username) {
    // element(by.name("username")).sendKeys("swetha.kondru");
    await logIn.enterUserName(Username);
    await console.log("sucessfully entered user name");
});
Then('Enter password as {string}',async function (password) {
    await logIn.enterPassword(password);
    await console.log("Sucessfully entered password");
});
Then('Click on Login button',async function () {
    await logIn.Login();
    await browser.sleep(40000);
    await console.log("sucessfully logged into the application");
});
Then('user {string} able to login',async function (status) {
  await browser.sleep(1000);
  await console.log("user"+status+"logged");
  await browser.sleep(2000);

});
Then('user click on the open new account',async function () {
  await logIn.Newaccount();
  await console.log ("new account page is opened");
});
Then('user should logged out',async function () {
  await logIn.Logout();
  await console.log("user is logged out");
  await browser.sleep(10000);
});