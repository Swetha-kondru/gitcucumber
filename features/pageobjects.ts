import { element,by,browser } from "protractor";
 var EC= (browser.ExpectedConditions).visibilityOf
var ExpectedConditions=60000;
 export class LogIn {
   
   textUrl =browser.get("https://parabank.parasoft.com/parabank/index.htm");
        async Url(){
       this.textUrl;
   }
    txtUserName = element(by.name("username"));

    async enterUserName(Username) {
        this.txtUserName.sendKeys(Username);
        
    }
    textPassword = element(by.name("password"));
    async enterPassword(password){
        this.textPassword.sendKeys(password);
    }
    buttonLogin = element(by.xpath("//*[@id='loginPanel']/form/div[3]/input"));
    async Login(){
       this.buttonLogin.click();
        // LogIn.validation = element(by.xpath("//h2[text()='Account Services']"));
      
    }
    buttonNewAccount = element(by.xpath("//a[text()='Open New Account']"));
    async Newaccount(){
        this.buttonNewAccount.click();
    }
    buttonaccounttype = element(by.xpath("//*[text()='SAVINGS']"));
    async accounttype(){
        this.buttonaccounttype.click();
    }
    buttonLogout = element(by.xpath("//a[text()='Log Out']"));
    async Logout(){
        this.buttonLogout.click();
    }

}