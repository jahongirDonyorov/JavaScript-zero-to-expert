// JavaScript tepadan pastga qarab uqiydi !!!

let text; // uzgaruvchi bulib qiymat bulmasa underfaned
// undefined bulganda browserdagi malumotlar kurinaveradi
// console.log(title); // bror narsani chqirsagu u bulmasa  not defined
// not defined bulsa brawserdagi narsalarham kurinme qoladi

// Error ni uqiy bilish uni Tug'irlash katta mahoratdir

// ##### ===== veribellar 2 turga bulinadi uzgaruvchi va uzgarmas
//--- uzgaruvchiga Let Var kiradi
// Let va var bitta vazifani bajaradi vaqat var eski versia Let esa yangi hozirda Let kup ishlatiladi
//Let local var global biz qiymat bergan varni boshqa boshqa file lardaham ishlatsa
// buladi bu chalkashlikka olib keladi shuning uchun letdan foydalanamiz

// --- uzgarmaslar bitta Const bularni qiymatini uzgartirib bulmaydi
const num = 1; // buni uzgartirib bulmaydi Loyiha ohirigacha a qiymati berilgan qiymat bulib qoladi

let a = 1,
  b = 2,
  c = 3;
// , (vergul) yordamida veribillarni takrorlamasdan kup yozishimiz mumkun ; bunfdan kiyin qilib bulmaydi bu code oxiri ekanligini bildiradi

let g = (a = c = b);
console.log(g); // qiymati 2 buladi qiymatlar birbirga tenglashtirilganda ohirgi b ni qiymati chiqyabdi

// ######### Data type PRIMITIEVE
// Javascriptda Data typelat 8 taga bulinadi
// --- 1. number 123
console.log(123); //number
// --- 2 Bigint n
console.log(9007199254740993 + 3); // bu eng katta raqam hisoblanib 1 niham qusholmaymiz bizga chiqarib bermaydi javobini
// Buni son blan hisob kitob qilish uchun son ohiriga n quyiladi (ikkala sonningham)
console.log(9007199254740993n + 1n);
// --- 3. string ' ' , " ", ` ` ;
console.log("salom 111"); //buni ichida yozilgan xar qanday narsa string hisoblanadi "" buham huddi shunday
console.log(
  "O'zbekiston"
); /* biz (') harflar ishlatyotganimizga bu hato buladi tug'irlash uchun / quyish kerak  */
// Yoke " " bundan foydalanish kerak
console.log("O'zbekiston \n New"); // bu new ni  pasga tushu
let titles = "O'zbekiston";
console.log("Welcom to " + titles + ",\n New World"); // bu quwiw hisoblanadi elementlarni quwib bitta suz chiqarishimiz mumkun
// `` bu bizga shunday qushishlarni osonlashtirib beradi elementlarni ${} bn qwamiz
console.log(`Welcom to ${titles}
New World`); /* buning ichida + quyish shart emas va o' g' "" li narsalarham yozsak hato bulmaydi
 qator tashlasak ularniham inobatga oladi \n qilib yotish shart emas */

// Bizga Nomolum element kelsa uni type ni bilish uchun typeof dan foydalanamiz
console.log(typeof 21); // type ni chiqarib beradi

// --- 4 Boolean true vs false
console.log(true); //true tug'ri
console.log(false); // notug'ri

// --- 5 null
let n = null;
let f = 2;

// --- 6 underfaned
let hed; // uzgaruvchi bulib qiymat bulmasa underfaned

console.log(null == undefined); // true
console.log(null === undefined); // false


// --- 7 Sybols
let sybol = Symbol("text");
let syb = Symbol("text");

console.log(sybol === syb);
console.log(sybol == syb);
// bundaham ikkita bir hil qiymat bulsaham teng bulmaydi lekn bu NO PRIMITIEVE emas

// - NON PRIMITIEVE  valuelar bir hil bulsaham hechqachon teng bulmaydi
console.log(f === f); // bular teng oddiy usul
console.log({ f } === { f }); // bular teng bulmaydi NON PRIMITIEVE
 
// --- 8 Object - arr, obj, function - bularni hammasi object uzi JS OBJECT lardan tashkil topgan
// Array
let arr = ["Jahon", 2004, {}, function age() {}, []]; // [] qavuslar blan yoziladi buni ichiga hohlagan narsani yozolemiz
// massiv ichidan massiv ham ochsa buladi
// bu malumotni indexsi blan chaqiradi index doim 0 dan boshlanadi
console.log(arr)// polne arry ni chiqarb beradi agar ichidasgi manumotni uzini olmoqchi bulsagiz [index si yoziladi]
console.log(arr[2])//arryni ichidagi indexsi 2 bulgan narsani chiqaradi 0 1 2 
// Object
let obj = {name:'IT', status:'Center'}; // {} qavuslar blan yoziladi : dan oldin yozilgan narsalar key hisoblanadi
console.log(obj)// hammasi chiqadi ichidagilarni uzini olish uchun .nomi yozilishi kerak 
console.log(obj.name)// obj ichidagi name ni chiqarib beradi
// function Malum bir codelarni tuplami 
// ikkalasiham function hisoblanadi
let func = () => {};

function test() {
  console.log(arr[2]) // bular function ga tegishli buladi qachonke function ishlasagina console.log ni chiqaradi
} 
test() // function shunday chaqiriladi indi function ishlaydi
//