import {test,expect} from '@playwright/test'
//const {test, expect}= require ('@playwright/test')

test('homepage', async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    console.log("title"+await page.title());
  
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
})