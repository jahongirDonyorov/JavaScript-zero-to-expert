// While | do While | function

//========================= While

// fale qiymatlarning hammasida ishlamaydi (0,null,NanN,undefened,false)
// buham fordek faqat sal boshqacha va osonroq, For while dan kuproq ish qiloledi
// bunda uzgaruvchi tashqarida ochiladi

let i = 5; // uzgaruvchi
//         1      2
while (i == 0) {
  console.log(i);
  i--; // bu quwadi har aylanganda bir martta
}
// 1 tug'ri bulsa 2 ishlaydi

//========================= Do While

// While blan bir xil lekn buunda 2 ta kes do va while buladi
do {
  // while shart false bulsaham birinchi buni chiqaradi kiyin shartni uqiydi false bulsa davom etmaydi
  console.log(i);
  i--;
} while (i == 0); //buni ichi true bulsa do davom etadi lekn ungacha (while) birmartta do ichi ishlagan buladi
// do while birinchi do ni uqiydi va kiyin while shartga qaraydi shart tug'ri bulsa davom etib ketaveradi

/* !!!!!!!!!! ESLATMA
Do while va while da hozirgi holatda aqat du while da bitta qiymat chiqadi 
chunke 2 lasiningham sharti false ishlayamdi lekn do while da shartni uqiwdan oldin do ni uqigani uchun
do dagi qiymatlar chiqadi va while(...) oqiladi false bulganligi uchun code davom etmaydi 
!!!!!!!!! */

//========================= FUNCTION DICLARATION

// function virebillardik ishimizni osonlashtirib beradi 10 ta 10 ta yozadigan narsamizni 1 ta function ga berib quysak function chaqirganimizda hamma function ichidagi narsalar ishlaydi
// uni ichida for, if else, while,..... bulishi mumkun
//!! biror bir narsadan kiyin () bulsa  .... () - bu function deyiladi
// lekn alert(), propmt() Bular function emas Mathod, Method lar JS uzi yaratgan codelar function esa biz yaratadigan codelar
getAvt(); // uzidan tepadaham chaqirsak ishlaydi
// function yaratish
//  1       2   3  4
function getAvt() {
  console.log("Hillo function declaration");
}
// 1 kalit suz
// 2 function nome () ochish uchun kerak
// 3 argument yoziladi
// 4 codelar yoziladi function chaqirilganda ishlaydi

// function ishlashi uchun uni chaqirish kerak 2 blan chaqiriladi

getAvt(); // function nomi bnlan chaqiramz
// function diclarationni uzidan tepadaham pasdaham chaqirsak ishlayveradi
/* !!!!!!!!!
 Bu JS ning uzini injini bulganligi uchun brinchi ishga tushganda hamma function ni izlaydi tepada chaqirilganmi pastami hammasini chiqaradi 
!!!!!!!!!*/

//========================= FUNCTION EXPRATION
// function expration verabelga biriktiriladi ikkalasi bir hil ishlaydi
// Lekn buning farqi buni uzidan tepada chaqirib bulmaydi

const getAdd = function () {
  console.log("Hillo function expration");
};
// buham declaration dek faqat verabelga briktirilgan chaqirishda virebal nomi blan chaqiramz
getAdd(); // function exprationni chaqirish

// =============== 3 () ga Argument yozish va ishlatish
// ========= argument huddi uzgaruvchidek () ichiga uzgaruvchi nomi function chaqirilyotganda uzgaruvchi qiymati beriladi

// 1         2    3     4
// function agr(name) {// 3 agrument uni hohlagancha bersal buladi uu hozir qiymatsiz
//   console.log(`Hello ${name}`)// argument birildi function ni har chaqirganimizda unga qiymat bersak buladi
// }
// agr('Jahon')// argumentimizga qiymat berildi
// agr('Javlon')//argumentga yana boshqa qiymat berildi har chaqirganimizda qiymat bersak buladi
// ========== kuproq argument berish
function lot(name, country) {
  // hohlagancha argument bersak buladi
  console.log(`Hello ${name}, Are you from ${country} ?`);
}
lot("Jahon", "Uzbekiston"); // 1-qiymat 1- argumentga (name), 2-qiymat 2-argumentga (country)

//================= Callback function

//================= Arraw function
// arrow function qolgan function lar blan birhil vazifani bajaradi faqat kurinishida farqi bor
// bunda faqar expration ga uxshab function emas => dan foydalanamiz
// 1   2     3  4  5
const arr = () => {};
// 1 verable va 2 uning nomi function ga tenglashtirilyapdi
// 3 argument yoziladi
// 4 function urniga yoziladi function ekanligini bildiradi
// 5 code

// verable shadow 2 ta birhil nomi uzgaruvchilarga aytiladi
let age = 20;
const arrow = () => {
  let age = 10;
  console.log(age); //bu function ichidagi let ni uqiydi agarda u bulmasa tashqaridagi let ni chiqaradi
};

console.log(age); // 20
arrow(); //10

//              surnameda qiymat busa chiqaradi bumasa name uzini chiqaradi
let telegram = (name, surname = "") => {
  // if (surname) console.log(name, surname);
  // else console.log(name);
  // surname da qiymat bulsa chiqarsin bulmasa name ni uzini chiqarsin undefaned chiqarmaydi
  // console.log(name, surname || ""); // buham huddi shundek
};
telegram("Jahon", "Doniyarov");

// ========== return
// qachonke return yozilsa function qiymatga ega buladi 
// return codeni qaytaradi bza function kup martta ishlatmoqchi bulsak return da qaytarishimiz kerak
const getName = (a) => {
  let total = 193;
  // 1 - console.log
  console.log((a * 100) / total);
  // 2 - return
  // return (a * 100) / total;
};
console.log(getName(176))// 91.3567... chiqadi buni butun son qilish uchun parseInt() dan foydalanish kerak
console.log(parseInt(getName(176)))// bu function ichida 1 console ishlatilganligi uchun NaN chiqadi, return 2 ishlatilsa tug'ri chiqaradi
// console.log(getName(55))// console da qilinsa faqat shu holatta buladi quwimcha narsalar qushib bulmaydi


//======= Claen code 
// claen code verabel function larni nomini kamilcase farmatda yozish getGpa
// calcNumber - boshi clac nma qilishi katta harif blan yozilgani nma ekanligi bularda nomidan qanaqa function ekanligini bilib olish mumkun