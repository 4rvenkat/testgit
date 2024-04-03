const assert = require('assert')
const { Before,After,BeforeStep,AfterStep,Status } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { playwright } = require('@playwright/test');
const {LoginPage} =require('../../pages/LoginPage') 

Before(async function(){
    const browser=await chromium.launch({
        headless:false
    });
    const context= await browser.newContext();
    const page=await context.newPage()
    this.login=new LoginPage(page)
})

BeforeStep(async function () {
 
  });

AfterStep(async function ({result}) {
    if (result.status === Status.FAILED){
    await this.page.screenshot({path:'tests/screenshots/'+Date.now()+'screenshot1.png'})
   }
  });

After(async function(){
    console.log("i am the last to execute")
})