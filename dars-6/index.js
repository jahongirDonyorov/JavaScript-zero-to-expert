// NaNPrimative
// ================= Object
// Object {} ichiga yoziladi
// Malumotni object kurinishida userga Brawsers da tug'ridan tug'ri chiqarib bulmaydi ichidagi malumotlarni bittalab chiqarsak buladi

// object uzining ichida 1 dan oshiq malumotni jamlay oladi

// let accaunt = 'webbrain' // bu holatda accaunt faqat bitta malumotni uz ichiga ololadi 3, 4, 5 talab malumot quyolmaymiz
// console.log(accaunt)

// objetkda esa hohlagancha malumot quysam kuladi
// {1 : 2, name:"Jahon"} - : dan oldin turgan 1 key hisoblanadi, : dan kiyin turgan 2 qiymat, keyni chaqirib qiymatini olsak buladi, , guldan kiyin yana kiy va value bulib ketaveradi

let accaunt = {
  name: "Jahon",
  age: 18,
  day: 14,
  city: "Juma",
  1: 4,
  "full name": "Jahongir Doniyarov", // 2 talik orasi bush key bermoqchi bulsak string ga olishimiz kerak
}; // bitta verabelga {object} yordamida kuplab malumot beryapmz
console.log(accaunt); // bu hamma objni chiqaradi bza ichidagi bittasini olmochqi bulsake?
// bitta malumotni olish uchun key dan foydalanamiz
console.log(accaunt.name); // accaunt ni ichidagi name ni chiqarib beradi
// hohlagan malumotni obj.key nomi blan chaqirib olsak buladi

// Obj[...] holdaham ichiqagi qiymatlarni chiqarsak buladi maslan ular 2 talik qiymat bulsa full nama orasi bush
// !!! [] narsani faqat qiymatini oladi

console.log(accaunt["full name"]); // boshqa usulda buni chaqirib bulmaydi
// kiyin key nomi number type da bulsa [] ga olinadi
console.log(accaunt[1]);
// bunda string type larni '' holda chaqirsak buladi
console.log(accaunt["city"]); // bu holdaham . bn yozilgandek chiqarib beradi
// console.log(accaunt[day])// bu holda chiqarmaydi bu obj ichidan emas tashqaridagi verableni oladi
// let day = 12
// console.log(accaunt[day])// undefined chiqadi [] buyirga valarble (day) ning qiymati 12 keladi obj kimizda esa 12 degan key yuq

// bzar obj ichidagi malumotni verible ga tenglashtirsak buladi
let who = "name"; // bunda who oddiy name ga teng bulyapdi
console.log(who); // name chiqadi
console.log(accaunt.who); // undefined chiqadi chunke obj da who degan ...: (key) yuq
console.log(accaunt[who]); // [] faqat qiymatni oladi who ning qiymati name bu holda huddi accaunt[name] yozilgandek buladi
console.log(accaunt["who"]); // bunda esa undefined chunke bu holda pbj ichidan who degan key izlaydi

// Misol
// user prompt ga bror malumot kiritganda obj ni uchida usha malumot bulsa chiqarib bersin

// let key = prompt(); // user kiritgan malumot key ga teng buladi
// console.log(accaunt[key]); // key qiymati beriladi va obj dan usha malumot bulsa chiqarib beriladi
// user kiritgan malumot key urniga keladi accaunt[...] va shunaqa key bulsa obj da chiqarib beradi

// bush object ham yaratsak buladi
let newObj1 = {}; // bush obj

// Cantraktor yuli
let newObj2 = new Object(); // bundaham bush objekt yaratiladi
