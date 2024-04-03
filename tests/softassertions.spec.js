import {test,expect} from '@playwright/test'

test ("soft assertion", async({page})=> {
await page.goto('https://demoblaze.com/index.html')
await expect(page).toHaveURL('https://demoblaze.com/index.html')
await expect.soft(page).toHaveTitle('STORE12')
await page.locator('#login2').click()
await page.locator('#loginusername').fill('vinothfl')
await expect(page.locator('#loginpassword')).toBeVisible()
await page.locator('#loginpassword').fill('Test1234!')


})