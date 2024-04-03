import {test,expect} from '@playwright/test'

test ("input box", async({page})=>{
await page.goto('https://leafground.com/checkbox.xhtml')
await page.locator('//*[@id="j_idt87:j_idt89"]/div[2]').click()
await page.waitForTimeout(500)
await page.locator('//*[@id="j_idt87:j_idt89"]/div[2]').click()
//await page.locator('.ui-chkbox-icon ui-icon ui-c ui-icon-blank').check()
await page.waitForTimeout(500)
console.log("title"+await page.title());
//const tle=await(page).title()
//console.log("page titile: "+tle)
})

test ("input check box", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#sunday').check()
    await page.waitForTimeout(500)
    await page.locator('#sunday').uncheck()
    await page.locator('#male').click()
    await page.waitForTimeout(500)
    await page.locator('#female').click()
    await page.waitForTimeout(500)
    console.log("title"+await page.title());
    await page.locator('//input[@id="sunday" and @type="checkbox"]').check()
     const chkbk= await page.$$('//input[@class="form-check-input" and @type="checkbox"]')
    for(const link of chkbk){
        const chkclick=await link.check()
    }
    await page.waitForTimeout(500)
//await page.locator('#RESULT_RadioButton-3').selectOption({label:'Automation Engineer'})
//await page.locator('#RESULT_RadioButton-3').selectOption('Automation Engineer')
//await page.locator('#RESULT_RadioButton-3').selectOption({value:'Automation Engineer'})
await page.frameLocator('#frame-one796456169').getByText('Male', { exact: true }).click()
await page.frameLocator('#frame-one796456169').locator('//*[@id="RESULT_RadioButton-3"]').selectOption({value:'Radio-1'})

const content=await page.locator('#colors option').allTextContents()
for (const dtl of content){
    const colors=await dtl.valueOf()
    console.log(colors)
}

/*const pg=await page.$$('//select[@class="form-control" and @id="colors"]/option')
console.log(pg.length)
for(let colorsel of pg){
    const colorchoose=await colorsel.textContent()
    for(let colorchoosef of colorchoose ){
        const colorchoose=await colorsel.click() 
    }
}*/
await page.selectOption('#colors',['Blue','Red','Yellow'])
await page.waitForTimeout(1500)
    })

    test ("input hidden dropdown", async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await expect(page.getByAltText('company-branding')).toBeVisible()
        await page.getByPlaceholder('Username').fill('Admin')
        await page.getByPlaceholder('Password').fill('admin123')
        await page.getByRole('button', { name: 'Login' }).click()
        await page.locator('//span[text()="Leave"]').click()
        await page.waitForTimeout(2500)
        await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/div/div[2]/div/div[2]/div/div').click()
       // await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/div/div[2]/div/div[2]/div/div').selectOption('Administration')
        await page.getByText('Administration').selectOption('Administration')
        await page.waitForTimeout(2500)
    }
    )

    test.only ("auto suggest dropdown", async({page})=>{
        await page.goto('https://www.redbus.in/')
        await page.locator('#src').fill('chennai')
        await page.waitForTimeout(2000)
        const srcstate=await page.locator('//text[@class="placeHolderMainText"]').allTextContents()
        //console.log(srcstate)
        for(const srcloop of srcstate){
            const srcstatelist= srcloop.valueOf()
            if(srcstatelist=='Vandalur'){
            await page.getByText(srcstatelist).click()
            }
        }
        await page.locator('#dest').fill('coimbatore')
        await page.waitForTimeout(2000)
        const deststate=await page.locator('//text[@class="placeHolderMainText"]').allTextContents()
        //console.log(srcstate)
        for(const destloop of deststate){
            const deststatelist= destloop.valueOf()
            if(deststatelist=='Gandhipuram'){
            await page.getByText(deststatelist).click()
            }
        }
      }
    )