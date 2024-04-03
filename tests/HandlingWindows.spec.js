import {test,expect,chromium} from '@playwright/test'

test("Handle multiple pages", async()=>{
    const browser = await chromium.launch()
    const context= await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()
    const allPages=await context.pages()
    console.log("No of pages created: "+ await allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://www.orangehrm.com/')
    //await expect(page2).toHaveTitle('Dashboard')
}
)

test.only("Handle multiple windows/pages", async()=>{
    const browser = await chromium.launch()
    const context= await browser.newContext()
    const page1=await context.newPage()
    const allPages=await context.pages()
    console.log("No of pages created: "+ await allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')
    const pagePromise=context.waitForEvent('page')

    await page1.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[3]/div[2]/p[2]/a').click()
    const newPage=await pagePromise
    console.log(await newPage.title())

}
)