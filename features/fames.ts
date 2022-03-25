const{ by, element }= require ("protractor");

const { browser } =require("protractor");


describe("frames scenario", function(){

    it("frames testcases",async function(){
        await browser.waitForAngularEnabled(false);
         await browser.get('https://www.selenium.dev/selenium/docs/api/java/index.html?overview-summary.html');
       await browser.manage().window().maximize();
    await browser.sleep(3000);
    await browser.switchTo().frame("packageListFrame");
    await element(by.xpath('//a[text()="org.openqa.selenium.chrome"]')).click();
    await browser.sleep(3000);
   await browser.switchTo().defaultContent();
   await browser.switchTo().frame("packageFrame");
   await console.log("move to 2frame")
   await browser.sleep(3000);
   await element(by.xpath('//a[text()="ChromeDriver"]')).click();
   await browser.sleep(3000);


    })
})