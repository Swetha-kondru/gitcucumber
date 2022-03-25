
describe("drag and drop scenario",function(){
    it("drag and drop testcase",function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
        browser.sleep(2000);
        var start=element(by.model("list1"));
        var end = element(by.model("list2"));
        browser.sleep(5000);
        browser.actions().draganddrop(start,end);
        browser.sleep(5000);

    })
})