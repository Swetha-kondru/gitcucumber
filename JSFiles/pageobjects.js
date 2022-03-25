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
exports.LogIn = void 0;
const protractor_1 = require("protractor");
var EC = (protractor_1.browser.ExpectedConditions).visibilityOf;
var ExpectedConditions = 60000;
class LogIn {
    constructor() {
        this.textUrl = protractor_1.browser.get("https://parabank.parasoft.com/parabank/index.htm");
        this.txtUserName = (0, protractor_1.element)(protractor_1.by.name("username"));
        this.textPassword = (0, protractor_1.element)(protractor_1.by.name("password"));
        this.buttonLogin = (0, protractor_1.element)(protractor_1.by.xpath("//*[@id='loginPanel']/form/div[3]/input"));
        this.buttonNewAccount = (0, protractor_1.element)(protractor_1.by.xpath("//a[text()='Open New Account']"));
        this.buttonaccounttype = (0, protractor_1.element)(protractor_1.by.xpath("//*[text()='SAVINGS']"));
        this.buttonLogout = (0, protractor_1.element)(protractor_1.by.xpath("//a[text()='Log Out']"));
    }
    Url() {
        return __awaiter(this, void 0, void 0, function* () {
            this.textUrl;
        });
    }
    enterUserName(Username) {
        return __awaiter(this, void 0, void 0, function* () {
            this.txtUserName.sendKeys(Username);
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            this.textPassword.sendKeys(password);
        });
    }
    Login() {
        return __awaiter(this, void 0, void 0, function* () {
            this.buttonLogin.click();
            // LogIn.validation = element(by.xpath("//h2[text()='Account Services']"));
        });
    }
    Newaccount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.buttonNewAccount.click();
        });
    }
    accounttype() {
        return __awaiter(this, void 0, void 0, function* () {
            this.buttonaccounttype.click();
        });
    }
    Logout() {
        return __awaiter(this, void 0, void 0, function* () {
            this.buttonLogout.click();
        });
    }
}
exports.LogIn = LogIn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZW9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9wYWdlb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDL0MsSUFBSSxFQUFFLEdBQUUsQ0FBQyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsWUFBWSxDQUFBO0FBQ2xELElBQUksa0JBQWtCLEdBQUMsS0FBSyxDQUFDO0FBQzVCLE1BQWEsS0FBSztJQUFsQjtRQUVFLFlBQU8sR0FBRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBSXhFLGdCQUFXLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQU0zQyxpQkFBWSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFJNUMsZ0JBQVcsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFNM0UscUJBQWdCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBSXZFLHNCQUFpQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUkvRCxpQkFBWSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUs5RCxDQUFDO0lBaENhLEdBQUc7O1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFHTSxhQUFhLENBQUMsUUFBUTs7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFFBQVE7O1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUVLLEtBQUs7O1lBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4QiwyRUFBMkU7UUFFL0UsQ0FBQztLQUFBO0lBRUssVUFBVTs7WUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssV0FBVzs7WUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBRUssTUFBTTs7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLENBQUM7S0FBQTtDQUVKO0FBbkNBLHNCQW1DQSJ9