import {test,expect} from '@playwright/test'

test("frame test",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]').fill('test')
    await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]').fill('test2')
    await page.waitForTimeout(2000)

    const frame3=await page.frameLocator('frame[src="frame_3.html"]')
    await frame3.locator('[name="mytext3"]').fill('test3')
    await page.waitForTimeout(2000)

    const framethree=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    const childFrames=await framethree.childFrames()
    await childFrames[0].locator('//*[@id="i5"]/div[3]/div').click()
})