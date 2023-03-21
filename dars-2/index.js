// let a = 1;
// let b = "1";

// console.log(a + b); // 11 chiqadi stringa number quwilganligi uchun
// console.log(a + +b); // 2chiqadi stringdan oldin arifmetk ifoda bulsa string numberga aylanadi
// // agar stringda harflar bulsa NaN (Not in number) chiqadi
// let c = "what do you do";
// console.log(a + +c); // NaN chiqadi
// // isNaN NaN yike NaN emasligini bildiradi agar nan bulsa true bulmasa false chiqaradi
// console.log(isNaN(b)); // false bu NaN (Not a namber) emas buni quwsa buladi
// console.log(isNaN(c)); // true NaN chunke buni sonlarga quwib bulmaydi

// ================

// Number() stringni numberga aylantirib beradi

// let uncle = "10.6";

// console.log(Number(uncle)); // qanday bulsa shu holatda chiqaradi
// // Bu ikkalasini numbersizham number blanham yozsa buladi
// console.log(Number.parseInt(uncle)); // yaxlidlam yaxlid son qilib chiqaradi
// console.log(Number.parseFloat(uncle)); // qanday bulsa uzidek chiqaradi

// ================= variables ni boolean qilish
// === taqqoslashlarda false urniga 0 ,  tue urniga 1 ishlatib ketsakham buladi

// true = !0, !null, !underfined - bularga teng emas !... tengmas degani.
// true 0 dan katta 1,2,3 number va string ichidagi number '1','2','3' ga teng
// false = 0  - 0 ga teng
// console.log(false == 1); // fasle
// console.log(false == 0); // true
// console.log(true == 1); // true
// console.log(true == 0); // false
// console.log(false == null); // false
// console.log(false == undefined); // false
// console.log(undefined == null); // true
// console.log(true == "1"); // true - string bulsaham 0 dan katta sonligi uchun
// console.log(true == -1); // false number bulsaham qiymati 0 dan kichik
// console.log(true == "cohsin"); // false qiymat numberga teng emas 0 dan kattaham kichik ham emas

//================== MATH
//  1. Addition +,
//  2. Subtraction -,
//  3. Multiplicatin *,
//  4. Civision /,
//  5. Remainder %, - bu qoldiqni chiqarib beradi
//  6. Exponentiation **,
//  7. Braces (), // matimatikadek qavs ichidagi birinchi ishlanadi
//  8. Equality =, ==, ===,
//  9. Obrivations +=, -=, /=, *=,
//  10. INCREMENT ++
//  11. DECREMENT --

// 5 Remainder %
// console.log(101 % 10); // qoldiq 1

// // 7 Braces ()
// console.log(2 * (40 / 2) + 4 * 8 - 8);

// // =============== INCREMENT ++, DECREMENT --,

// //========= INCREMENT ++
// let consin = 1
// a++ // bu aga birni quwiw dwgani a = a + 1 dek
// console.log(a) // 2 chiqadi

// let wife = 1
// console.log(wife++)// bunda 1 chiqadi chunke brinchi consol ishlab kiyin ++ ishlaydi
// console.log(wife) // endi 2 buldi tepadagi consolda quwdi va bizdagi javobini oldi

// let niece = 1
// console.log(niece++)
// console.log(++niece)// endi 2 chiqadi chunke ++ oldinda birinchi quwib kiyin javobni chiqaradi

// // misol
// let nephew = 11
// console.log(nephew++) // 11
// console.log(nephew) // 12
// console.log(++nephew) //13
// console.log(nephew) // 13
// console.log(nephew++) // 14
// console.log(nephew++) // 14
// // 15
// console.log(++nephew)// 16

//========= DECREMENT -- Huddi shuni teskarisi
// console.log(nephew--) // 11
// // 10
// console.log(--nephew) // 9

// ============= 9. Obrivations +=, -=, /=, *=,
// let a = 50;

//  a = a + 10; // a 50 qiymati teng bulsin uzni 50 + 10 ga
//  a += 10; // buham tepadagini qisqartmasi
// += qushadi, -= ayiradi, /= buladi, *= kupaytirib tenglashtiradi uziga

//  console.log(a)

//====== Exponentiation **,
console.log(2 * 2) // 2ni 2-darajasi = 4
console.log(2 * 2 * 2) // 2ni 3-darajasi = 8
console.log(2 * 2 * 2 * 2) // 2ni 4-darajasi = 16
/*  bu holada 2 ni darajalarini chiqaryapmiz lekn 2 ning 60 - datajasi kerak 
2 ni 60 martta uziga kupaytirish kerak buladi buu juda kup code bulib ketadi*/
//  **  bu esa c darajani chiqarish uchun kerak masalan 2 ni 60-darajasi

console.log(2 ** 60)// 2 ni uzini uziga 60 martta kupaytiradi

// Comparision  - Taqqoslash
//  <, >, ==, ===, <=, >=, ! Malumotlarni compare qilish doim true yoke false qiymat qaytaradi
// let a = 10;
// let b = 11;
// let c = "11";
// console.log(a > b); // false a b dan kichik
// console.log(a < b); // true a b dan katta
// console.log(c < b); // false c b dan kichik emas ular teng
// console.log(c <= b); // true <= kichik yoke teng bular teng
// console.log(c >= b); // true >= katta yoke teng bular teng

// // =, ==, ===
// // =  tenglashtirib beradi,
// // ==  tengligini ulchaydi ichidagi teng bulsa buldi,
// // === qatiy tenglik data typlarigacha qaraydi hamma narsasi teng bulish kerak,
// console.log((a = b)); // 11 chiqadi a bining qiymatiga tenglashdi
// console.log(b == c); // true chiqadi chunke ikkalasiham 11
// console.log(b === c); // false  chunke c string b number
// stringlar uzaro solishtirilyotganda hariflarning tartib qaramiga qaraladi ascee table dan kursa buladi

// ===== || OR - yoke
console.log(true || true); // true
console.log(false || true); // true
console.log(false || false); // false
// bunda bitta true bulsaham true chiqaradi

console.log(3 || 2); // ikkalasiham true birinchiga qaraydi true bulsa birinchini chiqaradi false bulsa bir ikkiga qaraydi ikki true bulsa ikkinchini chiqaradi


let ceo = false;
let admin = true;
// admin yo ceo ikkalsidan biri bulsaham (true) offes ochu buladi
//                true            false
console.log(admin === true || ceo === true); // true chiqadi || bunda bittasi true bulsaham true chiqardi
// ikkalasiham false bulsagina false buladi

// ===== && AND - va, va belgisi har tamonlama true bulsagina ishlaydi
console.log(true && true);
console.log(false && true);
console.log(false && false);
// bunda bitta false bulsaham false chiqaradi

// offec ochu bulishi uchun ikkalasiham bulishi kere
//                true            false
console.log(admin === true && ceo === true); // fasle chiqadi && bunda bittasi false bulsaham false chiqardi
// ikkalasiham true bulsagina true buladi

// masalan darsda bulishingiz uchun id card va faceId kere sizda ikkalasiham bulsa gena darsda hisoblanasiz yane ikkita true
let id = true;
let face = false;

console.log(id && face); // false, chunke face false bulib turibdi
// ikkalasiham true (bor) bulgan bulsa gena true (darsda hisoblanasiz)

// ===== ! NOT  - inkor hamma narsani aksi
// !=, !== teng emas , teskarisiniham chiqaradi
let a = 10;
let b = 11;

console.log(a != b);
console.log(a !== b);

let check = true;
console.log(check); // true
console.log(!check); // false teskarisini chiqarib beradi

let t = 2,
  c = 1;

let x = 1 + (t *= 2)
console.log(x)