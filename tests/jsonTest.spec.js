import {test,expect} from '@playwright/test'
const testData=JSON.parse(JSON.stringify(require ("../testData.json")))
 // import the json path and add stringify method from JSON module which will convert Javasript value to JSON string
 // JSON.parse -- this will convert JSON string to json object
 // put them into const variable testData

 test ("input hidden dropdown", async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    await page.getByPlaceholder('Name').fill(testData.address.pincode)
    await page.getByPlaceholder('Email').fill(testData.email)
    await page.getByPlaceholder('Password').fill(testData.password)
    /*const interestOpt=await page.$$('.form-check-input')
    console.log(interestOpt.length)
     for(const intlink of interestOpt){
        const linkclick=intlink.allTextContents()
        console.log("outside final loop"+ linkclick)
        if(linkclick==(testData.Interests[1])){
            console.log("inside final loop"+ linkclick)
            await page.locator(interestOpt).click()
        }
     }*/
    await page.waitForTimeout(2700)
 }
 )
