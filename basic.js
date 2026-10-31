//import {username} from './data.js'
const {username} = require('./data.js')
console.log(username)

var a=10
let b=20
let c=30

a=100
b=200   
c=300  
console.log(a+b+c)
 if (a==100){
    console.log("a is 100") 
 }else{
    console.log("a is not 100")
 }

 function add(x,y){
    return x+y
 }
 console.log(add(10,20))


 for(var i=0;i<=5;i++){
    console.log(i)
 }

 var a=0
 while(a<=10){
    console.log(a)
    a++
 }

 user=["Alice", "Bob", "Charlie"]
 for(var a=0;a<user.length;a++){
    console.log(user[a])
 }

 var user1={
    name:"Virat",
    age:30,
    city:"Delhi"
 }
 console.log(user1.name)