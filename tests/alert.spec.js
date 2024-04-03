import {test,expect} from '@playwright/test'

test("alert test with OK",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Enabling Dialog window handler..we need to write this before triggering the alert
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
       })
    //now we are triggering the alert by clicking alert button
       await page.locator('//button[text()="Alert"]').click()   

})

test("confirm alert with ok and cancel test",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Dialog window handler..we need to write this before triggering the alert
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()  //for clicking OK in prompt
       // await dialog.dismiss() //for clicking CANCEL in prompt
       })
    //now we are triggering the alert by clicking alert button
       await page.locator('//button[text()="Confirm Box"]').click()  
       console.log(await page.locator('#demo').textContent()) 

})

test.only("prompt alert with value to pass",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    //await dialog.type
    await dialog.accept('Potter2')
    })
    await page.locator('//button[text()="Prompt"]').click()  
    console.log(await page.locator('#demo').textContent()) 

})