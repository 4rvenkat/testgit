import {test,expect} from '@playwright/test'

test ('locators',async({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    await page.locator('#login2').click()
    console.log(await page.title())
    await page.locator('#loginusername').fill('vinothfl')
    await expect(page.locator('#loginpassword')).isVisible()
    await page.locator('#loginpassword').fill('Test1234!')
    await page.locator('//button[text()="Log in"]').click()
    await page.waitForTimeout(6500)
    await expect(page.locator('#logout2')).isVisible()
    console.log(await page.locator('#logout2').innerText())
    await page.locator('#nameofuser').isVisible()
    console.log(await page.locator('#nameofuser').innerText())
    await page.locator('#cartur').click()
    
})

test("testleaf elements",async({page})=>{
    await page.goto('https://leafground.com/menu.xhtml')
    await page.goto('https://leafground.com/input.xhtml;jsessionid=node0xrbm3oudh28c22cf1ml92bbw481512.node0')
    await page.locator('//*[@id="j_idt88:name"]').fill('venkat')
    await page.locator('//*[@id="j_idt88:j_idt91"]').fill('Bangalore')
    await expect(page.locator('//*[@id="j_idt88:j_idt93"]')).toBeDisabled()
    await page.locator('//*[@id="j_idt88:j_idt95"]').clear()
    console.log('retrieved text:'+ await page.locator('//*[@id="j_idt88:j_idt97"]').inputValue())
    await page.locator('//*[@id="j_idt88:j_idt99"]').fill('san.gmail.com')
    await page.locator('//*[@id="j_idt88:j_idt99"]').press('Tab')
    await page.locator('//*[@id="j_idt88:j_idt101"]').fill('type about gmail')
    await page.waitForTimeout(500)
    await page.locator('//*[@id="j_idt106:j_idt116_input"]').fill('03/11/1983')
    console.log(await page.locator('//*[@id="j_idt106:j_idt116_input"]').inputValue())
  await page.goto('https://leafground.com/list.xhtml')
  //console.log(await page.locator('.product-name').inputValue())
  const pdtname=await page.$$('.product-name')
  const pdtprice=await page.$$('.product-price')
  for(const link of pdtname){
   const linktext= await link.textContent();
   //for (const linkp of pdtprice){
    const linktext1=await pdtprice.textContent();
   // const linktext1=await linkp.textContent();
    console.log(linktext1+" : "+linktext)
  // }
    //console.log(linktext1+" : "+linktext)
  }
 
})

test.only("inbuilt locators",async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page.getByAltText('company-branding')).toBeVisible()
await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.getByRole('button', { name: 'Login' }).click()
await page.locator('//span[text()="Leave"]').click()
await page.waitForTimeout(2500)
console.log(await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5').textContent())
await expect(page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5')).toHaveText('Leave List')
//await expect(page.locator('//div[text()="Select"]')).toHaveCount(5)
await expect(page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[1]/div[1]')).toHaveCount(5)
})

test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Leave' }).click();
    await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('Engineering').click();
    await page.locator('.oxd-select-text--after > .oxd-icon').first().click();
    await page.getByRole('option', { name: 'Rejected' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
  });
