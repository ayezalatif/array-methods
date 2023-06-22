// max<100 && product.min>0
//let books=[
//     {
//         tittle:"life is to short", Author:"ayeza",genre:"rt"
//     },
//     {
//         tittle:"century", Author:"ayesha",genre:"aaa"
//     },
//     {
//         tittle:"heck", Author:"sir",genre:"bbb"
//     }
// ];
// let name=books.filter(book=>book.genre=="bbb");
// console.log(name);

// let students = [
//     { name: "aiza", age: 23, marks: 98 },
//     { name: "ayesha", age: 23, marks: 68 },
//     { name: "sana", age: 23, marks: 78 },
//     { name: "hina", age: 23, marks: 88 },
//     { name: "hinza", age: 23, marks: 99 },
// ]
// // let persons=students.find(value);
// // function value(check){
// //     return students.marks===98;
// // }
// // console.log(persons);
// let prsn=students.filter(mark=>mark.marks>0)
// console.log(prsn);
//Implement a function that finds all the products in an array 
//(each represented as an object with properties
// like name, category, and price) that are within a certain price range

// let arrayProduct=[{name:"laptop",category:"mechanics",price:35},
// {name:"mobile",category:"handheld",price:100000},
// {name:"laptop",category:"mechanics",price:600},
// ]
// let maxRange=1000;
// let minRange=0;
// function findProductsInRange(array,maxRange,minRange){
//     return array.filter(product=>product.price<maxRange && product.price>minRange)
//     // console.log(array,maxRange,minRange);
//}

//console.log(findProductsInRange( arrayProduct,maxRange,minRange));
//
// let employs=[{name:"computer",admin:true,salary:3500},
// {name:"mobile",admin:true,salary:99999},
// {name:"laptop",admin:false,salary:600},
// ]
// let maxSalary=100000;

// function adminSalary(array,maxSalary){
//     return array.filter(user=>user.admin && user.salary<maxSalary)
// }
//  console.log(adminSalary(employs,maxSalary));

// 

// let complete=true;
// function prom(){
//     return new Promise(function(res,rej){
//         // var c=a/b;
//        setTimeout(()=>{
//         get("https://jsonplaceholder.typicode.com/posts",function(params) {
//             console.log(params);
//         })
//     //     if (a,b) {
//     //         res("i am successful");
//     //     }else{
//     //    rej("i am failed");
//     //     }
//        }, 1000)
//     });
// }
// prom().then((result)=>{
//     console.log(result)
// }).catch((result)=>{
//             console.log(result)
//     })
// async function  test() {
//   console.log("2:msg");
//  const res=await fetch("json/package.json");
//  console.log("3:msg"); 
//  let stud=await res.json();
//   //console.log("4:msg"); 
//   return stud;
// }
// console.log("1:msg"); 
// let a=test()
// console.log("4:msg"); 
// console.log(a);

const books = [
    { title: 'Book 1', author: 'Author 1', publicationYear: 2005 },
    { title: 'Book 2', author: 'Author 2', publicationYear: 2010 },
    { title: 'Book 3', author: 'Author 3', publicationYear: 2018 },
    { title: 'Book 4', author: 'Author 4', publicationYear: 2022 },
  ];
  function getBooks(array){
  return new Promise((resolve,reject)=>{
    let latest=0;
    setTimeout(()=>{
        for (let index = 0; index < array.length; index++) {
            const element = array;
            if (condition) {
                
            }
        }
    })
  })
  }