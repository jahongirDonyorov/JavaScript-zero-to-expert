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
  name: "Javlon",
  age: 18,
  day: 14,
  name: "Jahon",
  // 2 ta birhil key bulsa  eng pasidagi uqilib qolganlarini egnor qiadi
  city: "Juma",
  1: 4,
  "full name": "Jahongir Doniyarov", // 2 talik orasi bush key bermoqchi bulsak string ga olishimiz kerak
}; // bitta verabelga {object} yordamida kuplab malumot beryapmz
// console.log(accaunt); // bu hamma objni chiqaradi bza ichidagi bittasini olmochqi bulsake?
// bitta malumotni olish uchun key dan foydalanamiz
// console.log(accaunt.name); // accaunt ni ichidagi name ni chiqarib beradi
// hohlagan malumotni obj.key nomi blan chaqirib olsak buladi

// Obj[...] holdaham ichiqagi qiymatlarni chiqarsak buladi maslan ular 2 talik qiymat bulsa full nama orasi bush
// !!! [] narsani faqat qiymatini oladi

// console.log(accaunt["full name"]); // boshqa usulda buni chaqirib bulmaydi
// kiyin key nomi number type da bulsa [] ga olinadi
// console.log(accaunt[1]);
// bunda string type larni '' holda chaqirsak buladi
// console.log(accaunt["city"]); // bu holdaham . bn yozilgandek chiqarib beradi
// console.log(accaunt[day])// bu holda chiqarmaydi bu obj ichidan emas tashqaridagi verableni oladi
// let day = 12
// console.log(accaunt[day])// undefined chiqadi [] buyirga valarble (day) ning qiymati 12 keladi obj kimizda esa 12 degan key yuq

// ============== object.freeze
// bu codeni uzgarmaydigan qilib beradi bunda yangi qiymat quwolmaymzham ololmaymzham
// Object.freeze(accaunt);
// buni uzgartirib bulmaydi fereze qilgandan sung uni yana uzgaradigan objekt qilib bulmaydi

// ============== object.seal
// Object.seal(accaunt)
// bundaham malumot quwibham uchiribham bulmaydi faqat bunda bor malumoti uzgartirsak buladi

// ichidagi qiymatni uzgartirish
accaunt.age = 19;
// tug'ridan tug' uzgartirmochqi bulgan qiymatga yangi qiymatni berib quyamz
// Agarda u malumot bulmasa yangi malumot key yozgan bulsak yangi qiymat qushin quyadi
accaunt.founded = 2023; // bunda yangi faunded degan qiymat qushilmoqda
// accaunt let emas const bulsaham ishlayveradi const uzgarmas bulsaham uning ichidagi qiymatni uagaryapdi uziga yangi qiymat bermaganimz uchun ishlaydi

// Dalete
delete accaunt.city;
// city qiymati uchub ketadi
console.log(accaunt);

// bzar obj ichidagi malumotni verible ga tenglashtirsak buladi
// let who = "name"; // bunda who oddiy name ga teng bulyapdi
// console.log(who); // name chiqadi
// console.log(accaunt.who); // undefined chiqadi chunke obj da who degan ...: (key) yuq
// console.log(accaunt[who]); // [] faqat qiymatni oladi who ning qiymati name bu holda huddi accaunt[name] yozilgandek buladi
// console.log(accaunt["who"]); // bunda esa undefined chunke bu holda pbj ichidan who degan key izlaydi

const ac1 = {
  name: "It",
  age: 1,
};
const ac2 = {
  name: "It",
  age: 1,
};
console.log(ac1 === ac2); // false chiqadi chunke ikkalasini manzili boshqa boshqa
const ac3 = ac1;
console.log(ac1 === ac3); // bunda true chiqadi chunke bir biriga tenglashganda manziliham bitta buladi
// ikkalasidan lubboy bittasini qiymatini uzgartirsak ikkasiham uzgaradi
ac3.founded = 2023;
console.log(ac1);
console.log(ac3);
// ikkalasidaham founded 2023 qiymati quwildi qiymat berilgan obj ac3 ni uzgartirgan bulsakham qiymat bergan ac1 ham uzgaryapdi
// chunki ikkalasiham bitta a dress da turibdi

// bizga 2 ta birhil obj lekn manzili xarxil bulish kerak bulsa
const ac4 = structuredClone(ac1); //bu node 17 dan katta versialarida ishlaydi
console.log(ac4 === ac1); // false buladi chunke manzilini alohida alohida qildik lekn ikkalasini qiymati birhil
ac1.fa = 22; // bunda esa endi qaysini uzgartirsak faqat usha uzgaradi

//===============================
let FirstName = 'Jahon'
let Job = 'Developer'

const ac5 = {
  // FirstName: FirstName,
  // Job:Job,
  // bu holatda verible qiymatlarni uzimizni keyga tenglashtiryapmz
  // agar key blan value nomi birhil bulsa bitta keyni uzini yozib quysakham buladi
  FirstName,
  Job,
  // bundahab veraybl qiymatlari obj key ga tenglashyapdi
}
//============= obj ichida bz suragan key bor yuqligini blish
console.log('Job' in ac5) // ac5 ni ichida Job dgan key bormi yuqmi shuni kursatadi bor bulsa true agar false
console.log(Job in ac5) // bunda job dgan uzgaruvchi dagi qiymat ac5 da bormi

// ============== objekt assign objda qiymat biriktirish
const ac6 = {}
Object.assign(ac6, ac1)// bunda ac6 ga ac1 qiymati biriktirilyapdi bu valueni tug'ridan tug'ri teglagan blan birxil ac1 qiymatini uzgartirsak ac6 ham uzgaradi
Object.assign(ac6,ac1,ac2,ac3,ac4)

// ======== for in 
// obj ichiudagi key larni bittalab chaqirmasdan hammasi ketma ketlikda uzi chiqishi uchun for in dan foydalanamiz kode qisqaroq bulishi uchun 
const ac7 = {
  name: "It",
  age: 1,
  founded:2020,
  merrid:false,
}
// console(ac7.age)// db bittalab chaqirishimiz kerak buni for bn oson qilsak buladi 
for(let i in ac7) { // i ac7 ni ichidagi keylarga teng buldi har ayalanganda bitta bitta chiqaradi
  console.log(i) // bunda faqat keylar chiqadi
  console.log(ac7[i]) // bu holatda keylarning valuesini ham olvolamz
  // ac7 ichidagi i deyilyapdi  i keylar edi age,name.... demak ac7 ichidagi keylar bulayapdi ac7[age,name ....]
}

// Misol
// user prompt ga bror malumot kiritganda obj ni uchida usha malumot bulsa chiqarib bersin

// let key = prompt(); // user kiritgan malumot key ga teng buladi
// console.log(accaunt[key]); // key qiymati beriladi va obj dan usha malumot bulsa chiqarib beriladi
// user kiritgan malumot key urniga keladi accaunt[...] va shunaqa key bulsa obj da chiqarib beradi

// bush object ham yaratsak buladi
let newObj1 = {}; // bush obj

// Cantraktor yuli
let newObj2 = new Object(); // bundaham bush objekt yaratiladi
