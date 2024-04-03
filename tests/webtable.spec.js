import {test,expect} from '@playwright/test'

test(" web table handling", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   const Table = await page.locator('//table[@name="BookTable"]')
   const columns= await Table.locator('tbody tr th')
   const rows = await Table.locator('tbody tr')
   console.log("No of rows:"+ await rows.count())
   console.log("No of cols:"+await columns.count())
   
     for(let i=0;i<await rows.count();i++)
     {
        const row=rows.nth(i)
        const tds=row.locator('td')
         for (let j=0;j<await tds.count();j++)
         {
            console.log(await tds.nth(j).textContent())
        }
     }

   })