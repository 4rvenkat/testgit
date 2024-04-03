import {test,expect} from '@playwright/test'

test("Mouse Over", async({page})=>{

     await page.goto('https://demo.opencart.com/')
    const desktop= await page.locator('//a[text()="Desktops"]')
     const PC= await page.locator('//a[text()="PC (0)"]')
     //Mouse over
     await desktop.hover()
     await PC.hover()

     await page.waitForTimeout(1000)

}
)