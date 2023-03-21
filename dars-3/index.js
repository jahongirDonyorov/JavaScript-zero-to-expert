//====================== IF ELSE
//      1  2  3
// if () {}
// 1 yozilishi kerak if
// 2 () shart quyiladi shu shart tugri bulsa 3 ishga tushadi
// 3 2 true bulganda chiqiwi kerak bulgan malumotlar shu yirga yoziladi
// else {}  bu faqat {} dan iborat agar if (false) bulib ishlamasa bu ishga tushadi
// Sign up
// Shart:User Agar 18+ bulsa kirish mumkun 18- kirish mumkun emas

let user = 18; // bu defolt quyildi aslida user uzi kiritadi

if ((user) => 18) {
  // 18 dan katta yoke teng bulsa ishlaydi
  console.log("Success");
} else {
  // tepadagi ishlamasa automatik ravshda ishga tuwadi
  console.log("error");
}

// Ob Havo

// let temp = "sovuq"; // bizga  issiq, sovuq, qorle, yomg'irle malumotlar kelishi mumkun

// if (temp === "issiq") {
//   console.log("Havo issiq, yingil kiyinib oling");
// } else if (temp === "sovuq") {
//   console.log("Havo sovuq, qalin kiyinib oling");
// } else if (temp === "qor") {
//   console.log("Havo qorle, qalin kiyinib oling");
// } else if (temp === "yomg'ir") {
//   console.log("Havo yomg'irle, qalin kiyinib oling");
// } else {
//   console.log("nomalum");
// }
// ikkinchi qiymatlarda if ni uziniham yozsak buladi lekn har bitta if ni tekshirib chiqadi else if yozsak boshidagi true bulsa qoganlarini tekshiribham utirmaydi

// You're weight
//!!!! bular tepadan pasga qarab uqiydi agar tepadagi tug'ri kelsa qolganini uqimaydi

let weight = 81; // ... < 30 very slim, 30 && 50 slim, 50 && 80 chubby, 80 =< overweight

// bu usul uzun usul buni qisqartirsaham buladi
if (weight <= 30) {
  console.log("very slim");
} else if (weight <= 50) {
  console.log("slim");
} else if (weight <= 80) {
  console.log("chubby");
} else if (weight > 80) {
  console.log("overweight");
} else {
  console.log("error");
}
// buning xatoligi
// bunday hollarda sonlar kichigidan kattasiga qarab kelish kerak
if (weight < 50) {
  console.log("slim");
} else if (weight < 30) {
  console.log("very slim");
} else if (weight > 80) {
  console.log("overweight");
} else if (weight < 80) {
  console.log("chubby");
}
// bu holatda aralashib ketganligi uchun birinchiga qaraydi 15 yozilgan bulsa 15 ham 50 dan kichik shuning uchun slim ishlab ketadi uzi very slim chiqish kerak 15 dan kichik bulsa

// Bu usukda yuqoridagi xatoliklar bulmaydi
// tug'riroq va kup ishlatiladigan usul
//  && va belgisi blan
if (weight > 0 && weight <= 30) {
  // 0 dan katta va 30 dan kichik yane 0 bn 30 oralig'i da bulsa ishlaydi
  console.log("very slim");
} else if (weight > 30 && weight <= 50) {
  console.log("slim");
} else if (weight > 50 && weight <= 80) {
  console.log("chubby");
} else if (weight > 80) {
  console.log("overweight");
} else {
  console.log("error");
}
// bunda sonlar kichigdan kattaga qarab ketishi zarur emas buu ikkita sonning oralig'ini kursatyapdi

// tuzilishi
// if('condition'){'code'}
// else if('condition'){'code'}
// else('code')

// agar {'code} bir qatorga siqsa {} larni quymasdan yozsakham buladi
// if('condition')'code'
// else if('condition')'code'
// else 'code'

// faqat bittagina holda bir qatorda tursaham {} quyishimiz kerak {obj} yozyotganda {'code'{obj}}


//============ Ternary Operator 
// ? - if, : - else
// bular faqat bir qatorlik kodelar yozishda tafsiya etiladi kup bulsa adashib ketish mumkun
let from = 30;
//                     if                   else
from <= 20 && from > 0 ? console.log("good") : console.log("bad");
// if ishlagandan uzidan kiyingi malumotlarni chiqaradi else ishlaganda uzidan kiyingi malumotlarni chiqaradi


// kup qarorle code da shunday holatda bvuladi tuwunish sal qiyin bulishi mumkun
let age = 20;

age > 0 && age > 6 // bu tugri bulsa pastdagi ? if dan kiyingi console chiqadi
  ? console.log('baby')
  :age => 6 && age <= 19 // bu else if day else va condition if code
  ?console.log('teenager')
  :age > 19 && age <= 25// else if
  ?console.log('young')
  :age > 25 && age <= 60//else if
  ?console.log('meddle')
  :age > 60 // else if
  ?console.log('old')
  :console.log('error')// else ni uzi hichqaysi tug'ri bumasa bu ishlaydi

//============ Nullish ?? -> null undefined
// buham huddi || or dek lekin orda false qiymatlar - null, undefined, 0, false, NaN
// ?? (nullish) da esa folse qiymatlar faqat - null, undefined !!! Faqat gina null va undefined kelsa false db hsoblaydi qolgan hamma qiymatni true db ketadi
console.log(false || 1) // 1
console.log(false ?? 1) // false chunke bu false qiymatniham true hisoblab ketyapdi fqat null , undefined kelsagina false db hisoblaydi

console.log(NaN || 1) // 1 - bunda NaN false 1 true hisoblanb true chiqyapdi
console.log(NaN ?? 1) // NaN - bunda esa NaN ham true hsoblanb NaN chiqyapdi

console.log(null || 1) // 1 
console.log(null ?? 1) // 1 - null false deb 1 ni qaraydi bir true va 1 ni chiqaradi

console.log(undefined || 1) // 1
console.log(undefined ?? 1) // undefined false db hisoblab 1 ni chiqaradi