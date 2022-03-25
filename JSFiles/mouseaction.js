"use strict";
// import {browser} from 'protractor'
const { protractor } = require('protractor');
describe("mouseactions scenario", function () {
    it("mouseactions testcase", function () {
        browser.get("http://demo.automationtesting.in/Register.html");
        browser.waitForAngularEnabled(false);
        var first = element(by.model("FirstName"));
        first.sendKeys("swetha", protractor.Key.ENTER);
        browser.sleep(2000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2VhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9tb3VzZWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQXFDO0FBQ3JDLE1BQU0sRUFBQyxVQUFVLEVBQUMsR0FBRSxPQUFPLENBQUUsWUFBWSxDQUFDLENBQUM7QUFDM0MsUUFBUSxDQUFDLHVCQUF1QixFQUFDO0lBQzdCLEVBQUUsQ0FBQyx1QkFBdUIsRUFBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR3hCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==