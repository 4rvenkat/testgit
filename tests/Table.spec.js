import {test,expect} from '@playwright/test'

test.only ("webtable handling", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   const Table=await page.locator('#productTable')
   // (1) TO GET NO OF ROWS & COLUMNS
   const columns=await Table.locator('thead tr th') 
   console.log('No of columns: '+ await columns.count())
   
   const rows=await Table.locator('tbody tr') 
   console.log('No of rows: '+ await rows.count())
  
   // (2)select PARTICULAR product from table e.g select checkbox for Product4
   //since we captured the rows already, we need to filter the particular row to select the checkbox
   //this filter will return matched row
   /* const matchedRow=rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    matchedRow.locator('input').check()
    */
    
    await selectproduct(rows,page,'Product 3')
    await selectproduct(rows,page,'Product 1')
   
    // (4) PRINT ALL product details from WEBTABLE using loop
     for (let i=0;i<await rows.count();i++)    //this outer for loop is to increment the rows
     {   
        const row=rows.nth(i)                // before starting inner loop we need to extract particular row from all rows
        const tds=row.locator('td')                      
           for(let j=0;j<await tds.count()-1;j++)  // this inner loop is for incrementing the columns count()-1 becoz we dont want header row
           {  
            console.log(await tds.nth(j).textContent())   //print the columns value
        }
     }

     //(5) Read data from all pages--pagination included
     const pages= await page.locator('.pagination li a')    //finding total number of pagination link
      console.log("Total number of pages:" + pages.count())

       for (let p=0;p<await pages.count();p++){  //first pagination link we dont need to check since default its clicked
         if(p>0){
            await pages.nth(p).click()
            }
       
     for (let i=0;i<await rows.count();i++)    //this outer for loop is to increment the rows
     {   
        const row=rows.nth(i)                // before starting inner loop we need to extract particular row from all rows
        const tds=row.locator('td')                      
           for(let j=0;j<await tds.count()-1;j++)  // this inner loop is for incrementing the columns count()-1 becoz we dont want header row
           {  
            console.log(await tds.nth(j).textContent())   //print the columns value
        }
     }
    }

    await page.waitForTimeout(1000)
}
)
    //(3)same can be written as function if we need to CHOOSE MULTIPLE PRODUCT CHECKBOX
    //function is written outside test block
    async function selectproduct(rows,page,product){
        const matchedRow=rows.filter({
            has: page.locator('td'),
            hasText: product
     })
     matchedRow.locator('input').check()
     await page.waitForTimeout(1000)
}
