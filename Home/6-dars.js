// #    /////////////////object/////////////////
// No1
// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// console.log(obj.id + " " + obj.name);
// console.log(obj)
// chiqish
// id,name
// no2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     ids:15,
//     name:"WebBrain"
// }
// for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       console.log(obj[key]);
//     }
//   }
// chiqish
// id
// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// 1 - usul
// for(let key in obj){
//     if(typeof obj[key] === 'boolean'){
//         console.log(key+' '+ obj[key])
//     }
// }
// 2- usul
// let booleanProps = {};
// for (let key in obj) {
//   if (typeof obj[key] === "boolean") {
//     booleanProps[key] = obj[key];
//   }
// }
// console.log(booleanProps);

// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }
// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// function Search(obj,str){
//   for (let key in obj) {
//     if ( obj[key] === str) {
//       console.log(key + ": " + obj[key]);
//     }
//   }

// }
// Search(obj,'WebBrain')
// chiqish
//     name:"WebBrain"

// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// const searchValue = (obj, str) => {
//   for(let key in obj){
//     if(typeof obj[key] === str){
//       console.log(key)
//     }
//   }
// }
// searchValue(obj,'string') // => atirgul,qizil

// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };
// let obj = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };
// let sum = 0;
// //===== shile dagi kurinishi
// while (1) {
//   if (obj) {
//     sum = sum + obj.age;
//   } else {
//     break;
//   }
//   obj = obj.child;
// }
// console.log(sum);

//==== for dagi kurinishi
// for (let i = 1; 1; ) {
//   if (obj) {
//     sum = sum +obj.age
//   } else {
//     break;
//   }
//   obj = obj.child
// }
// console.log(sum)

//===== do while dagi kurinishi
// do{
//   if(obj){
//     sum = sum + obj.age
//   }else{
//     break
//   }
//   obj = obj.child
// }while(1)
// console.log(sum)

// chiqish
// 146

// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   children: [
//     {
//       id: 1,
//       name: "Umar",
//       age: 54,
//       children: [
//         { id: 1, name: "Asmo", age: 34 },
//         { id: 2, name: "Osim", age: 30 },
//         { id: 3, name: "Xattob", age: 25 },
//       ],
//     },
//     { id: 2, name: "Umar", age: 54 },
//     { id: 3, name: "Umar", age: 54 },
//   ],
// };

// function getAdults(obj) {
//   let result = [];
//   if (obj.age >= 18) {
//     result.push(obj);
//   }
//   if (obj.childred) {
//     for (let i = 0; i < obj.childred.length; i++) {
//       result = result.concat(getAdults(abj.children[i]));
//     }
//   }
//   return result;
// }
// let adults = getAdults(user);
// console.log(adults);

// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]

// function getObj(arr){
//   return arr.filter(obj => obj.job !== undefined)
// }
// console.log(getObj(arr))

// chaqirishni ikkinchi usuli
// let jobs = getObj(arr)
// console.log(jobs)

// console.log(arr)

// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
let obj={
id:1,name:'Usmon',job:'developer'
}

//Uzimning Variantim
// let objClone = structuredClone(obj)
// objClone.age = 12
// console.log(obj,objClone)

// ChatGPT varianti
// let objClone = Object.assign({}, obj);
// objClone.age = 12;
// obj.age2 = 122;

// console.log(obj, objClone);

// 3 - usul
// let objClone = { ...obj };
// objClone.age = 12;
// console.log(obj, objClone); 

// -=-=-=-=-=-=- qoldi shu yirda
// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
function add(obj, key, value) {
  obj[key] = value;
}

// Namuna
let myObj = {};
add(myObj, 'address', 'Toshkent');
console.log(myObj); // { address: 'Toshkent' }

// add(obj,key,value){}
// add(obj,'address','toshkent')
// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1
// }
// chiqish
// qabul qilindi
// No11
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true
// }
// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }
// No12
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age:34,
//     year:1990
// }
// chiqish
// 'xato malumot kiritdingiz'
// No13
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// arr=['Andijon','Namangan','Qarshi','toshkent']

// No14
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'}
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz

// No15
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
// obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }
// chiqish
// true
// No16
// let person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
// }

// // add IELTS
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }

// 2 - shart
// // agar ielts 5.5 yoki katta bolsa consoleda qabul qilindi,aks holda qayta topshirish kk
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// // qabul qilindi
// 3 - shart
// // agar ielts 5.5 yoki katta bolsa objectga student:true qoshilsin qiymati bn birga
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }

// // qoshimcha
// 4 - shart
// // agar student true bolsa unga maxsus key berilsin(math.random+id orqali berilsin)
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// 5 - shart
// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar qarol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// function Kirish(parol,name){}

// Kirish(101,'Umar') //=> hush kelibsiz
// Kirish(10,'Umar')  // => parol yoki name xato
// Kirish(101,'Ali')   // => parol yoki name xato
