import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('Page Object test', async({page})=>{

    const login=new LoginPage(page)  //while creating object we need to include page fixture
    await login.gotoLoginPage()
    await login.login('vinothfl','Test1234!')
    await page.waitForTimeout(1700)
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'loginPagenew.png',fullPage:true})
   
    // home

    //cart
})


