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
const { by, element } = require("protractor");
const { browser } = require("protractor");
describe("frames scenario", function () {
    it("frames testcases", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.waitForAngularEnabled(false);
            yield browser.get('https://www.selenium.dev/selenium/docs/api/java/index.html?overview-summary.html');
            yield browser.manage().window().maximize();
            yield browser.sleep(3000);
            yield browser.switchTo().frame("packageListFrame");
            yield element(by.xpath('//a[text()="org.openqa.selenium.chrome"]')).click();
            yield browser.sleep(3000);
            yield browser.switchTo().defaultContent();
            yield browser.switchTo().frame("packageFrame");
            yield console.log("move to 2frame");
            yield browser.sleep(3000);
            yield element(by.xpath('//a[text()="ChromeDriver"]')).click();
            yield browser.sleep(3000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9mYW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRSxPQUFPLENBQUUsWUFBWSxDQUFDLENBQUM7QUFFN0MsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUd6QyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFFeEIsRUFBRSxDQUFDLGtCQUFrQixFQUFDOztZQUNsQixNQUFNLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztZQUN4RyxNQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5QyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbkQsTUFBTSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUUsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLE1BQU0sT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFDLE1BQU0sT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUNuQyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUQsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3pCLENBQUM7S0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9