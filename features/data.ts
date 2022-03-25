var reader=require("../features/read.json");
describe("read data from json",function(){
    it("json testcase",function(){
        browser.waitForAngularEnabled(false);
        browser.sleep(2000);
        browser.get(reader.url);
        element(by.name("username")).sendKeys(reader.username);
        element(by.name("password")).sendKeys(reader.password);
        element(by.xpath("//*[@id='loginPanel']/form/div[3]/input")).click();


    })
})