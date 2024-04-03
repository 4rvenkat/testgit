const ExcelJs = require('exceljs');                    //Import dependencies file into test

async function excelTest() {
    const workbook = new ExcelJs.Workbook()           //Object created for the class so we can use the methods inside it
    await workbook.xlsx.readFile("C:/Users/4rven/Downloads/download.xlsx")  //load the file..add await in front since JavaScript is async if not it will goto next step before this
    const worksheet = workbook.getWorksheet('Sheet1')  //Once you open the worksheet we need to target "sheet"
	worksheet.eachRow((row, rowNumber) =>              // iterate over all rows that have values in the worksheet, here "row" holds all values in first row..rownumber holds initially first row index
    {
        row.eachCell((cell, colNumber) =>           //since we got 1st row, now we need is each cell in the row..this iterates over all non-null cells in row
    {
        if(cell.value==="Apple")
        {
            console.log(rowNumber)
            console.log(colNumber)
        
        }                //now print each cell value..after all rows values are complete then 2nd row begins
    }
        )
}
)
}
excelTest()   //now call the above function to get the output


