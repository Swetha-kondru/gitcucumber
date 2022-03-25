"use strict";
describe("drag and drop scenario", function () {
    it("drag and drop testcase", function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
        browser.sleep(2000);
        var start = element(by.model("list1"));
        var end = element(by.model("list2"));
        browser.sleep(5000);
        browser.actions().draganddrop(start, end);
        browser.sleep(5000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2FuZGRyb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9kcmFnYW5kZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsUUFBUSxDQUFDLHdCQUF3QixFQUFDO0lBQzlCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQztRQUN4QixPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLEdBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=