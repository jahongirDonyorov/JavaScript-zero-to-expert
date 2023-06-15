// // =-=-=-=-=-=-=-=-= ARRAYS
// // bu bitta katta kontainer buni ichidagilarni 1 tadan olsak buladi yokeda  uzini chaqiri hammasini bittada olsakham buladi
// // biz buni ichiga hohlagan malumot turini kiritolamz har biri , blan ajralib turadi
// let ar = [1, 3, 'John', function test(){},null, undefined, true,false ];
// // arr doim sanoqni 0 dan boshlaydi
// // element 1 dan sanaydi msalan 1, 0 endexdagi 1 element

// // =-=-=-=-=- chaqirirsh yullari
// console.log(ar) // ar ni tuliq chiqarib beradi
// // bizga ichidagi aynan bitta narsa kerak bulsa uni olish uchun [index number] dan foydalanamiz
// console.log(ar[0])// bu bizga ar ni ichidagi 0 indexdagi 1 elementni 1 ni chiqaradi
// // length bu bizga array ning uzunligini chiqarib beradi ( ichidagi elementlar sonini)
// console.log(ar.length)// 8 ar ni ichida 8 element bulganligi uchun 8 ni chiqarib berdi,
// // lekn bu index nomeri emas endex 0 dan boshlanadi uzunligi (8) dan 1 ni ayirsak index chiqadi
// console.log(ar.length - 1)// 7 endigi holatda index chiqyapdi oxirgi element (8) ning indexsi 7
// // bular son sifatida chiqyapdi array ni ichidagilarni chiqarish uchun shu holatda
// console.log(ar[ar.length])// bunda undefined chiqadi chunke ar ni ichida 8 ta index yuq
// // 8 element bor faqat array elementga emas indexga qarab chiqaradi
// console.log(ar[ar.length - 1])// false chunke ar ni ichidagi 7 - index false
// // uzimizga kerakligini - qilibham chiqarsak buladi
// console.loga(ar[ar.length - 2])// element 8 - 2 = 6 bizga 6 - indexni chiqaradi

// length ni urnini bosadigan yangi Methode chiqqan

// // New Methode =-=-=-=-= at -=-=-=-=-=
// // budaham uzunligidan kerakli sonni ayirib indexsini chiqarsak buladi length blan birhil faqat bunda [] lar kerak emas
// console.log(ar.at(-1)) // false chunke ar ni ichidagi 7 - index false
// console.log(ar.at(-2)) // element 8 - 2 = 6 bizga 6 - indexni (true) ni chiqaradi

//##################

// // =-=-=-=--=-=-=-- New Array
// // let ar = new Array()
// // let arr = []
// // bu holatda ikkalasiham bush array birhil natija chiqadi
// let ar = new Array(5)
// // bunda  bizga ichida 5 ta bush element bulgan array yasab beradi
// // value :
// // ar = [ <5 empty items> ]
// // ar.length = 5
// // agarda 2 ta qiymat yoke 'string' qiymat kiritadigan bulsak bizga oddiy array yasb beradi
// let ary = new Array('5')
// // value :
// // ary = [ '5' ]
// // ary.length = 1
// let aray = new Array(5,1)
// // value :
// // ary = [ 5, 1 ]
// // ary.length = 2

// let arr = [5]
// // bunda esa arr ni ichiga 5 ni uzini bitta element sifatida quyadi
// // value :
// // arr = [ 5 ]
// // arr.length = 1

// // ar console
// console.log(ar)
// console.log(ar.length)

// // arr console
// console.log(arr)
// console.log(arr.length)

// // =-=-=-=-=-=-= oddiy arrayda indexga qiymat tenglashturish
//  let arrr = []

//  arrr[20] = 2
//  // bu bizga arrr ni 20 elementi 1 ga teng bulsin deyapdi arrr da umuman qiymat bulmaganligi uchun 20 mata bush array yaratib undan kiyin buni quyadi
//  // value :
//  // arrr = [ <20 empty items>, 2 ]
//  // arrr.length = 21 / 20 index 21 element bulganligi uchun length 21 chiqdi
//  // 21 chiqishining sababi 20 ta bush array va 20 - index (21 element) ga 2 ni tenglashtiradi

// console.log(arrr)
// console.log(arrr.length)

// // agar uzida defold qiymati bulsa
// let a = [1,5]
// a[1] =20 // 1 index 2 element (5) tenglashdi 20 maga
// a[20] = 2
// // value :
// // arrr = [ 1, 20, <18 empty items>, 2 ]
// // 2 ta element bulganligi uchun 20 ta emas 18 ta bush element yaratdi

// console.log(a)
// console.log(a.length)

// // -=-=-=-=- array ni stringga uzgartirish
// // -=-=-=-=-=-=-=-=-= toString()
// console.log(a.toString())// bu bizga arr ni string qilib beradi
// console.log(a.toString().length)// bu bizga arr ni string qilib beradi
// // value :
// // a = 1,20,,,,,,,,,,,,,,,,,,,2
// // a.length = 24 chunke stringga aylangandan kiyin har bir elementni sanayapdi , larniham
// console.log(typeof a.toString())// type stringa uzgarganligini kurishimiz mumkun

// // -=-=-=-=-=-=-=-=-= join()
// // bu ham stringa aylantiradi faqat bu qushimcha parametrlarniham oladi
// console.log(typeof a.join()) // string
// // bundagi qushimchalar
// // () buni ichiga qushumcha parametr yozamz
// console.log(a.join(' ')) // bush joy tashlasak har birini orasidan bush joy ochib beradi , larni uchirib
// console.log(a.join(',')) // har bir element orasiga , quyib beradi
// console.log(a.join('/')) // har bir element orasiga / quyib beradi
// // nma yozsak ushani quyib beradi

//##################

// --=--=--=--=--=--=-- array ni array ga qushish
let a = [1, 2, 3];
let b = [0, 9, 8];
console.log(a + b); // 1,2,30,9,8; 3 ni oxirida yoke 0 ni boshida , bulmaganligi  uchun 30 bub qushilib qoldi
// bu bizga array sfatida qushmaydi string sfatida qushadi 1 2 3 ga shunday 0 9 8 ni qushadi
// tugri quwiw uchun biz Methodelardan foydalanamz
// ============ concat()
// qushish uchun foydalaniladi
console.log(a.concat(b)); // [ 1, 2, 3, 0, 9, 8 ] - bu bizga arr holatida tugri qushib beradi
// bundan tashqari quwimcha malumotham yozishimiz mumkun
console.log(a.concat(b, {}, [90], a));
// value :
// [
//   1, 2,  3,  0, 9,
//   8, {}, 90, 1, 2,
//   3
// ]
// shu holatda chiqarib beradi bizga

// -=-=-=-=-=-=-= malumotni (arrayni) type ni tug'ridan tug'ri bilib bulmaydi
console.log(typeof {}); // object
console.log(typeof []); // object
// ikkalasidaham object chiqadi malumotni typeni tug'ridan tug'ri bilib bulmaydi

// buni bilish uchun biz  ----- Array.isArray() ------- Methodedan goydalanamiz
console.log(Array.isArray(a)); // true - () ichiga aniqlamoqchi bulgan malumotimizni beramiz
// bu bizga true va false qiymatlarni qaytaradi agar array bulsa true bulmasa false
console.log(Array.isArray(1)); // false
console.log(Array.isArray({})); // false

// --!!!!-- Array ga malumot berilmasa 0 ga teng hisoblanadi --!!!!--
let ar = [];

console.log(ar == 0); // true - chunke array bush bush array 0 ga teng hisoblanadi
console.log(ar == "0"); // false - bu '0' string bulganligi uchun qiymat sifatida olinadi
