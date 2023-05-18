// String
// string 3 xil yul blan yoziladi

// har qanday string ichidan uziga uxshagan bilgilarni '', "" - yozolmaymiz xatolik yuz beradi
// "" - ichidan '' - yozsak buladi - "salom 'alayku'"
// '' - ichidan "" - yozsak buladi - 'alaykum "assalom"'

// 1 - usul - bittalik '' qushtirnoq ichida
// const str1 = "Salom";
// bittalik qushtirnoq ichida ' belilarini quyolmaymiz xatolik buladi ' li narsa yozmoqchi bulak ikkitalikqushtirnoqdan foydalanamiz
// yoke
// console.log(str1)
// 'Tog'a' // bu holatda xatolik buladi string qaydan bowlanib qayda tugasi noaniq bulib qoladi
// const test = "Tog'a "; // \ quyib kiyin ' quysak buladi hammasi tug'ri ishlaydi
// console.log(test)

// 2 - usul - ikkitalik "" qushtirnoq ichida
// const str2 = "Salom";
// console.log(test2)

// "salom "salom"" bu xato hisoblanadi
// "salom 'salom'" bu tug'ri variant
// 3 - usul - beksik ` ` ichida
// const str3 = `Salom`;
// console.log(str3)
// bu kup narsalarni bajaradi buni ichida hohlagan narsamizni yozsak buladi qator tashlashdaham quwimcha formulalar kerak emas
// const test4 = `salom ${str3} alik,'' ""
// hello world
// ${str1}
// `
// bunda uzgaruvchilarni ichida + quymasdanham qushlak buladi hohlagan belgimizni yozsak uzidek chiqarb beradi
// qolgan stringlarni '' "" ichida uzgaruvchilarni chaqirib qushib bulmaydi
// bundaham formulalar ishlaydi lekn ularni quymasdanham qilsak buladi

// ______formula - (\n) - stringda qator tashlaydi

// string yozganimizda tug'ridan tud'ri qator tashlab yozolmaymiz
// const l = 'salom hammaga
// qandaysiz' // qator tashlaganimizda xatolik bulyapdi agar qator tashlash kerak bulsa \n dan foydalanamiz
// const test2 = "salom hammaga \n qandaysizlar";//  \n dan kiyin yozilgan hamma narsa paski qatordan tushadi
// console.log(test2)

// ______formula - (\t) - TAB ni bosib orani ochganday joy ochib beradi tashlaydi
// const test3 = 'salom \t alaykum'
// console.log(test3)

// -=#-=#-=#-=#-=#-=#-=#-=#-=#-=#-=#-=#- String 2 ta usul blan yaratiladi

// 1 oddiy tepada yozgan usulimzda
// let str1 = "John"; // value : John
// console.log(str1 === 'John') // true str1 ni qiymati 'John' blan bir hil
// value : 'John' === 'John'  teng

// 2 constiractor orqali new String() qilib
// let str2 = new String("John"); // value : [String: 'John]
// console.log(str2 === 'John') // false str2 qiymati 'John' blan birhil emas
// value : [String: 'John] === 'John' teng emas
// konstraktorda qilingan string bizga string kurinishidagi string qaytaradi

//=-=-=-=-=-=-=-=-=-=-=-= localeCompare
//-==-==-==-==- localeCompare - 2 ta susul blan ochilgan stringni bir biriga  taqqoslashda foydalaniladi
// taqqoslashda qaysi briga nisbatan taqqoslashham muhum ahamiyatga ega

// bu bizga   -1, 0, 1  qiymatlarini qaytarishi mumkun

// -1 - taqqosalayotgan elemen ni ichida taqqoslanilyotgan element bulmasa

// 111.localeCompare(222)
// 111 ni ichida 222 daqa qiymat umuman yuq bulsa

// 0 - bir biriga mos keladi
// 1 - qisman bor qaysidir qismi tug'ri keladi

// let str1 = "John";
// let str2 = new String("Joh");
// let str3 = new String("John");
// let str4 = new String("xyz");
// let str5 = new String("Johss");

// console.log(str1.localeCompare(str2)); // 1 - John da qisman Joh borligi uchun
// console.log(str1.localeCompare(str3)); // 0 - bir hil bulganligi uchun
// console.log(str1.localeCompare(str4)); // -1 - xar xil bulganligi uchun
// console.log(str1.localeCompare(str5)); // -1 - boshidagi 3 ta harf John da bor lekn 2 tasi boshqa bulganlgi uchun -1 chiqadi

// -=-=-=-=-=-=-=-

// let str1 = "webbrain";
// // hamma dasturlash tilida index 0 dan boshlanadi
// // webbrain dagi w - index = 0; element = 1;

// console.log(str1[1]); // bu bizga str1 dagi 1 endex 2 elementni chiqarib beradi (e)
// console.log(str1.at(-1)); // buham huddi shu narsa faqat bu - ham qabul qiladi -1 orqadan sanab keladi (n)
// console.log(str1.charAt(1)); // bu ham ichidagilarniindexiga qarab chiqaradi faqat bu - qabul qilmaydi

// !-=!-=!-=!-=!-=!-=!-=!-=!-=!-=!-=!-=!-= Methode
// methode lar .aaa yoziladi

//-==-==-==-==-==-==-==- length
// bu bizarga element uzunligini chiqarib beradi (ichida nechta harf belgi bush joy borligini)
let str = "webbrain";
console.log(str.length); // 8 - webbrain 8 ta harfdan tashkil topganligi uchun uzunligi 8 chiqdi

// -=-=- Agarda bular string emas boshda data type bulib qolsa ishlamaydi
let str1 = 12345;
console.log(str1.length); // undefined
// bu ishlasji uchun `${str1}.aaaa` qilib yozishimiz kerak
console.log(`${str1}`.length);

//-==-==-==-==-==-==-==- toUpperCase()
// bu bizga stringni Hamma harflarini katta HARF QILIB BERADI
console.log(str.toUpperCase()); // WEBBRAIN

//-==-==-==-==-==-==-==- toLowerCase()
// bu bizga stringni Hamma harflarini kichik harf qilib beradi
console.log(str.toLowerCase()); // webbrain

//-==-==-==-==-==-==-==- indexOf
// bu ikkita qiymat oladi birinchisi '..' ichida shu narsa borligini tekshiradi ikkinchisi 3,4.. textning qayaridan birinchidagi narsani tekshirishi
console.log(str.indexOf("b"));
// bbra bulsaham birinchisini indexini chiqaradi yani b ni
// str ning ichida b harf nechinchi indexdan boshlanishini kursatadi

console.log(str.indexOf("bbra", 6)); // -1 ichida shu narsa bulmasa -1 chiqaradi
// bu hozir textning 6 harfidan bbra bormi yuqmi tekshirdi 6 dan kiyin b yuq

//-==-==-==-==-==-==-==- LastIndexOf
// bu ohiridan boshlab sanab boradi
console.log(str.lastIndexOf("n")); // 7 bu huqqi -7 dek hifoblaymiz ikkalasidaham 7 chiqaradi
console.log(str.indexOf("n")); // 7

//-==-==-==-==-==-==-==- includes
// bu ham huddi shunday ichida bor yuqligini tekshiradi faqat bu indexni emas  true false qaytaradi
console.log(str.includes("in")); // true
// buni telefonda bosh harifni yozsa qolganlarini chiqaradigan funksiyalarda ishlatsak ham buladi

//-==-==-==-==-==-==-==- startsWith('..')
// bu usha suzni bizga kerak suz blan boshlanganmi yuqmi shuni bilib beladi
console.log(str.startsWith("in")); // false chunke bizning suzimiz in blan boshlanmagan
console.log(str.startsWith("web")); // true chunke bu suz boshi web blan boshlangan

// =-=-=-=-= shunga qisqa misol
// Openbudjetga ovoz bering. faqar Uzb fuqorolari uzb nomer orqali ovoz beroladi 
// uzbi nomer (+998) dan boshqa code bulsa kechirasiz ovoz berib bulmaydi (+998) bulsa ovozingiz qabul qilindi chiqishi kerak 
let number1 = '+998901901848'
// let number2 = +13473356332
if(number1.startsWith('+998')){
  console.log('Ovozingiz qabul qilindi')
}else{
  console.log('Kechirasiz ovoz berib bulmaydi') 
} 
// =-=-=-=-=-=

//-==-==-==-==-==-==-==- startsWith('..')
// bu usha suzni bizga kerak suz blan tugaganmi yuqmi shuni bilib beladi
console.log(str.endsWith('emy'))// true chunke bu suz emy blan tugagan

//-==-==-==-==-==-==-==- padEnd(22, '.')
// bu bizga 1 - 22 ta suz buguncha 2 - '.' ni oxiridan quyib beradi
console.log(str.padEnd(22 ,'.'))// '.','s' nma bulsa ushani quyib beradi
// value: webbrain..............

//-==-==-==-==-==-==-==- padStart(22, '.')
// bu bizga 1 - 22 ta suz buguncha 2 - '.' ni boshidan quyib beradi
console.log(str.padStart(22 ,'.'))// '.','s' nma bulsa ushani quyib beradi
// value: ..............webbrain


//-==-==-==-==-==-==-==- slice()
// bu boshlanish index sidan tugash indexsigacha kesib oladi. - qiymatham qabul qiladi - orqadan boshlab sanab keladi 

let slice = 'hello world'
console.log(slice.slice(0, 6))// 0 dan 6 gacha bulgan narsalarni chiqarib beradi 