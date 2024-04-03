import {test,expect} from '@playwright/test'

test(" Single and multiple file uploads", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(500)
}
)