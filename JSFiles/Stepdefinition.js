"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const pageobjects_1 = require("./pageobjects");
const ts_expect_1 = require("ts-expect");
const chai_1 = require("chai");
var logIn = new pageobjects_1.LogIn();
(0, cucumber_1.Given)('User should navigate to the valid url', function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield protractor_1.browser.sleep(100000);
            yield logIn.Url();
            yield protractor_1.browser.sleep(60000);
            yield console.log("user is sucessfully navigate to url");
        }
        catch (error) {
            console.log("user not able to login");
        }
    });
});
(0, cucumber_1.When)('User should validate the application', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(10000);
        yield (0, ts_expect_1.expectType)("test");
        yield (0, chai_1.expect)(protractor_1.browser.getTitle()).to.equal("ParaBank|Welcome|Online Banking");
        yield protractor_1.browser.sleep(30000);
        yield console.log("title of the application iss matched");
    });
});
(0, cucumber_1.Then)('Enter username as {string}', function (Username) {
    return __awaiter(this, void 0, void 0, function* () {
        // element(by.name("username")).sendKeys("swetha.kondru");
        yield logIn.enterUserName(Username);
        yield console.log("sucessfully entered user name");
    });
});
(0, cucumber_1.Then)('Enter password as {string}', function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield logIn.enterPassword(password);
        yield console.log("Sucessfully entered password");
    });
});
(0, cucumber_1.Then)('Click on Login button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield logIn.Login();
        yield protractor_1.browser.sleep(40000);
        yield console.log("sucessfully logged into the application");
    });
});
(0, cucumber_1.Then)('user {string} able to login', function (status) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(1000);
        yield console.log("user" + status + "logged");
        yield protractor_1.browser.sleep(2000);
    });
});
(0, cucumber_1.Then)('user click on the open new account', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield logIn.Newaccount();
        yield console.log("new account page is opened");
    });
});
(0, cucumber_1.Then)('user should logged out', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield logIn.Logout();
        yield console.log("user is logged out");
        yield protractor_1.browser.sleep(10000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcGRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9TdGVwZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUM7QUFDckMsK0NBQXVDO0FBQ3RDLHlDQUF1QztBQUN2QywrQkFBMkI7QUFFNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxtQkFBSyxFQUFFLENBQUM7QUFFeEIsSUFBQSxnQkFBSyxFQUFDLHVDQUF1QyxFQUFFOztRQUU3QyxJQUFJO1lBQ0YsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUMxRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBRWQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQ3ZDO0lBRUgsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILElBQUEsZUFBSSxFQUFDLHNDQUFzQyxFQUFFOztRQUN6QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE1BQU0sSUFBQSxzQkFBVSxFQUFTLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sSUFBQSxhQUFNLEVBQUMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM3RSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGVBQUksRUFBQyw0QkFBNEIsRUFBQyxVQUFnQixRQUFROztRQUN0RCwwREFBMEQ7UUFDMUQsTUFBTSxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGVBQUksRUFBQyw0QkFBNEIsRUFBQyxVQUFnQixRQUFROztRQUN0RCxNQUFNLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILElBQUEsZUFBSSxFQUFDLHVCQUF1QixFQUFDOztRQUN6QixNQUFNLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGVBQUksRUFBQyw2QkFBNkIsRUFBQyxVQUFnQixNQUFNOztRQUN2RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFNUIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILElBQUEsZUFBSSxFQUFDLG9DQUFvQyxFQUFDOztRQUN4QyxNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxlQUFJLEVBQUMsd0JBQXdCLEVBQUM7O1FBQzVCLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9