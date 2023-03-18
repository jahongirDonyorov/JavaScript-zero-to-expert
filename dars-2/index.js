let a = 1;
let b = "1";

console.log(a + b); // 11 chiqadi stringa number quwilganligi uchun
console.log(a + +b); // 2chiqadi stringdan oldin arifmetk ifoda bulsa string numberga aylanadi
// agar stringda harflar bulsa NaN (Not in number) chiqadi
let c = "what do you do";
console.log(a + +c); // NaN chiqadi
// isNaN NaN yike NaN emasligini bildiradi agar nan bulsa true bulmasa false chiqaradi
console.log(isNaN(b)); // false bu NaN (Not a namber) emas buni quwsa buladi
console.log(isNaN(c)); // true NaN chunke buni sonlarga quwib bulmaydi

// ================

// Number() stringni numberga aylantirib beradi

let uncle = "10.6";

console.log(Number(uncle)); // qanday bulsa shu holatda chiqaradi
// Bu ikkalasini numbersizham number blanham yozsa buladi
console.log(Number.parseInt(uncle)); // yaxlidlam yaxlid son qilib chiqaradi
console.log(Number.parseFloat(uncle)); // qanday bulsa uzidek chiqaradi

// ================= variables ni boolean qilish
// === taqqoslashlarda false urniga 0 ,  tue urniga 1 ishlatib ketsakham buladi

// true = !0, !null, !underfined - bularga teng emas !... tengmas degani.
// true 0 dan katta 1,2,3 number va string ichidagi number '1','2','3' ga teng
// false = 0  - 0 ga teng
console.log(false == 1); // fasle
console.log(false == 0); // true
console.log(true == 1); // true
console.log(true == 0); // false
console.log(false == null); // false
console.log(false == undefined); // false
console.log(undefined == null); // true
console.log(true == "1"); // true - string bulsaham 0 dan katta sonligi uchun
console.log(true == -1); // false number bulsaham qiymati 0 dan kichik
console.log(true == "cohsin"); // false qiymat numberga teng emas 0 dan kattaham kichik ham emas

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
console.log(101 % 10); // qoldiq 1

// 7 Braces ()
console.log(2 * (40 / 2) + 4 * 8 - 8);

// =============== INCREMENT ++, DECREMENT --,

//========= INCREMENT ++
let consin = 1
a++ // bu aga birni quwiw dwgani a = a + 1 dek
console.log(a) // 2 chiqadi

let wife = 1
console.log(wife++)// bunda 1 chiqadi chunke brinchi consol ishlab kiyin ++ ishlaydi
console.log(wife) // endi 2 buldi tepadagi consolda quwdi va bizdagi javobini oldi

let niece = 1
console.log(niece++)
console.log(++niece)// endi 2 chiqadi chunke ++ oldinda birinchi quwib kiyin javobni chiqaradi

// misol
let nephew = 11
console.log(nephew++) // 11
console.log(nephew) // 12
console.log(++nephew) //13
console.log(nephew) // 13
console.log(nephew++) // 14
console.log(nephew++) // 14 
// 15
console.log(++nephew)// 16

//========= DECREMENT -- Huddi shuni teskarisi