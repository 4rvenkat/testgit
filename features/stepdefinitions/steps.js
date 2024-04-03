//import{test,expect,chromium} from '@playwright/test';
const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { playwright } = require('@playwright/test');
const {LoginPage} =require('../../pages/LoginPage') 

When('user launches home page', async function () {
    const browser=await chromium.launch({
        headless:false
    });
    const context= await browser.newContext();
    const page=await context.newPage()
    this.login=new LoginPage(page)  //while creating object we need to include page fixture
    await this.login.gotoLoginPage()
    //await this.page.goto('https://demoblaze.com/index.html')
  });

When('user click on Login link', async function () {
   // this.login=new LoginPage(page)  

   // await this.login.login()
   // await this.page.locator(this.loginLink).click()
  });

Then('user enter {string} and {string}', async function (userName, password) {
        await this.login.login(userName,password)
        //await this.page.locator(this.userNameInput).fill(userName)
        //await this.page.locator(this.passwordInput).fill(password)
  });

When('user clicks login button', async function () {
    //await this.page.locator(this.loginButton).click()
  });

 Then('login should be Successfull', async function () {
    //await expect(this.page.getByAltText('Log out')).toBeVisible()
  })//;
