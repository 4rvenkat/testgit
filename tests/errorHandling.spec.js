import {test,expect} from '@playwright/test'

test ("Error handling", async({page})=> {
await page.goto('https://demoblaze.com/index.html')
await expect(page).toHaveURL('https://demoblaze.com/index.html')
  try {
    // If the element is not present, Playwright will throw an error
      await page.locator('#login2').click()
     await page.locator('#loginusername').fill('vinothfl')
     await expect(page.locator('#loginpassword')).toBeDisabled()
    
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  } finally {
    console.log("finally block")
    
  }
})