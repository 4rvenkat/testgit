import {test,expect} from '@playwright/test'
import exp from 'constants';

var userId;  //creating this as global to store the id and make use of it for update and delete it

test(" Get users",async({request})=>{
const response=await request.get('https://reqres.in/api/users?page=2')  //we get the response into reponse variable
console.log(await response.json())  //we are printing the response in console as json response
expect(response.status()).toBe(200)
})

test(" post users",async({request})=>{
const response=await request.post('https://reqres.in/api/users',  //we need to pass URL and data parameters
                    { data: {"name":"kumar","job":"trainer"},
                      headers: {"Accept":"application/json"}
                    })
     console.log(await response.json())
     expect(response.status()).toBe(201)    
     var res=await response.json()   //the post request creates new id which needs to be stored and used for update request           
     userId=res.id
})

test(" put or update users",async({request})=>{
   const response=await request.put('https://reqres.in/api/users/'+userId,
                                   {data: {"name":"kumar","job":"engineer"},
                                    headers:{"Accept":"application/json"}
                                })
    console.log(await response.json())
    expect(response.status()).toBe(200)
 })

test(" delete users",async({request})=>{
const response=await request.delete('https://reqres.in/api/users/'+userId)
//console.log(await response.json())  //no response will be there so should not use this
expect(response.status()).toBe(204)
})