import {test,expect} from '@playwright/test'

test("date picker", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="datepicker"]').fill('03/25/2024')
    await page.waitForTimeout(500)
    await page.keyboard.press('Tab')
    await page.frameLocator('#frame-one796456169').locator('//input[@id="RESULT_TextField-2"]').fill('03/25/2024')
    await page.waitForTimeout(500)
})