import {test,expect} from '@playwright/test'

test("page screenshot", async({page})=>{

     await page.goto('https://demo.opencart.com/')
     await page.waitForTimeout(500)
     await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
}
)

test("Full page scroll screenshot", async({page})=>{

     await page.goto('https://demo.opencart.com/')
     await page.waitForTimeout(500)
     await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png',fullPage:true})
}
)

test.only("element or Object screenshot", async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.waitForTimeout(500)
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({path:'tests/screenshots/'+Date.now()+'MacBook.png'})
}
)