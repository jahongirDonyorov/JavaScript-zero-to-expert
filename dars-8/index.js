// =========================== Numbers
// underscore    _ - bu bn yozilgan solnarham oddiy sonlar bilan birhil amallarni bajarishdaham birhil
// console.log(100_000_000); // bu hechnarsani uzgartirmaydi sonni uqishga osonroq qiladi holos
// bu string bulganda arifmetk amal qilib bulmaydi
// console.log('10_10' + 10) // 10_1010 bu holatda oddiy stringa numberni qushib quyyapdi holos
// console.log(+'10_10' + 10) // NaN stringdan numberga aylanganda shunday javob chiqadi _ buni belgi db hisoblaydi

// ===== float numbers - (kasrli sonlar)
// console.log(12.5555); // faqat bitta . buladi 12.22.6 - bu xato hisoblanadi

//-------- Katta bub ketgan sonlarni qisqartma shakli
// console.log(1_000_000); // bu sonni  qisqartma qilib yozsakham buladi

// console.log(1e6); // buham 1 million (1000000) hisoblanadi faqat qisqartmasi
// bunda 1 - boshida keladigan son , e - 0 , 6 - 0 nechta bulishi
// console.log(1e-6); // bu kasr songa aylanadi 1.000000 / 1 dan kiyin nuxta va belgilangancha 0

// !!! e dan kiyingi sonlar 2 xonali bulganda e dan kiyin + usha son chiqadi
// console.log(2e33); // 2e+33
// !!! e500 dan uzi infeneti bulib qoladi
// bularda arifmitik amal qilsa buladi lekn xatoliklar bulishi mumkun
//------ Arifmetik amallardaham oddiy sonlardik ishlayveradi

// -=-=-=-=-=-=-=- Kasr sonlarda arifmetk amalllar
// !!! JS arifmetk amallarda sonlarni . dan kiyin mingta son bulsaham tekshiradi hammasi bir hil bulishi kerak
// console.log(0.1 + 0.2 === 0.3); // bu false buladi chunke 0.1 3 ga bulinganida bunda davomiy kasr bulib oxirida 4 quwib yuboradi
// console.log(0.1 + 0.2); // 0.30000000000000004 - bunda javob shunday chiqadi oxirida 4 bor bunaqa holat kam hollarda buladi bu qoldiq qolib cheksiz bulinaversa shunday bulib ohirida bitta katta son quyiladi
// console.log(0.3); // 0.3 chiqadi unda oxirida 4 bulganligi uchun ikkalasi teng emas
// console.log(0.1 + 0.3);

// -=-=-=-=-=-=-=-=- Kasr sonlarni yaxlitlash
// -#-#-#-#-#-#- toFixed
// console.log(Number(0.1 + 0.2).toFixed(2)); // 0.30
// toFixed(...) buni ichida yozilgan son . dan kiyin nechta son chiqishini bildiradi
// bu automatiske numbermi string qilib yuboradi buni numberga utkazish uchun sonlarning oldiga + quyish kerak
// console.log(+Number(0.1 + 0.2).toFixed(2)); // 0.30
// let num = 0.1 + 0.2;
// let numS = '1.1 + 2.2';

// -#-#-#-#-#-#- parseInt - birinchi sonni oladi
// console.log(parseInt(num)) // 0
// console.log(parseInt(numS)) // 1 - bunda boshidagi 1.1 ni 1 ni oladi undan kiyingi + 2.2 ni boshqa narsa qib hisoblaydi string holda builganligi uchun

// -#-#-#-#-#-#- parseInt - . tuliq holda sonni oladi
// console.log(parseFloat(num)) // 0.30000000000000004
// console.log(parseFloat(numS)) // 1.1 bundaham boshidagi 1.1 ni oladi qolganini boshqa narsa db hisoblab oplmaydi string holda builganligi uchun

// quyidagi ikkalasiham Number ni ichiadgi malumot hisoblanadi yangi versialarda uziniham yozsa buladigan bulgan
// console.log(Number.parseInt(num)) // bu holattaham yozsa buladi / eski JS version larida shunday yozilgan
// console.log(Number.parseFloat(num)) // bu holattaham yozsa buladi / eski JS version larida shunday yozilgan

// -#-#-#-#-#-#- Number - data typni numberga uzgartirib shu turishda chiqaradi
// console.log(Number(numS)) // NaN chiqadi chunke string ichidagi + bular numbermas / string in arifmetk amal bajarilyotgaligi uchun NaN buladi

// -#-#-#-#-#-#- eval - string ichidagi arifmitik amallarni bajarib beradi
// console.log(Number(eval(numS))) // NaN chiqadi chunke string ichidagi + bular numbermas / string in arifmetk amal bajarilyotgaligi uchun NaN buladi
//  Number sz yozsakham buladveradi evalni uzi number sifatida chiqaradi
// console.log(eval(numS))

// --=--=--=--=--=--=--=-- Hex,Binary,octal Numbers
// - Hexadecimal asosan colorni ifodalash uchun ishlatiladi --- 0xff === 255 / css da rgb rgba colorlarda ishlatiladi 0 dan 255 gacha bulgan sonlar
// - parseInt(binary,base) - parseInt(010101, 2) - binary to decimal
// binary 2 lik sanoq sestimasi hisoblanadi 0 va 1 dan tashkil topgan
// =-=-=-=-=- binary jadvali
// 0 = 0
// 1 = 001
// 2 = 010
// 3 = 011
// 4 = 100
// 5 = 101
// 6 = 110
// 7 = 111
// 8 = 1000
// 9 = 1001

// !_=!_=!_=!_=!_=!_ Bitwise Operands oddiy kalkulition, if else, va boshqa operatorlardan 2 3 martta tez ishlaydi
// Bitwise Operands da ishlashni bilish uhun binary ni bilishimiz kerak

// !_!_!_!_! Binary da har doim toq sonlar 1 blan juft sonlar 0 blan tugaydi
// kampyuter tili 0 va 1 dan tashkil topgan bu Binary hisoblanadi
// -=#-=#-=#-=#-=#-=#-#-   toString - data type ni string qilib beradi
// let number = 5;
// console.log(number.toString(2));
// toString(2) - quysak bu ikkilik sanoq sistimasida chiqarib beradi buyirga hohlagan base ni quysak buladi. Hex 16 ....

//------ binary (0,1) ni dismal (1,2,3,4) oddiy songa utkazish
//                     1   2
// console.log(parseInt("101", 2)); // 5 chiqadi jadvalda 5 = 101 deng
// 1 '' - binary son
// 2 - ikkilik sanoq sestimasidan chiqarish

// -=#-=#-=#-=#-=# isNaN() - data type NaN yome NaN emasligini aniqlab beradi

// !_!_!_!_!_!_!_! Qaysi birining oldida is kelsa suroq shakli buladi

// console.log(isNaN(+'10_1010')) // true chunke bu NaN buladi
// console.log(isNaN(+10_1010)) // false chunke bu NaN emas

// =#=#=#=# darsdan tashqariquwimcha misol
// let num = 16
//  if (num < 0) {
//   console.log('.....')
//  }else{
//   let sum = 0
//   while(num > 0) {
//     sum += num // 0 = 0 + 16 = 16 + 15 = 31 + 14 = 45 + 13 = 58 ... 136
//     num -= 1 // 16 -1 = 15 - 1 = 14 - 1 = 13 - 1 = 12 ... 0
//     console.log(`salom ${sum}`)
//   }
//  }

// -=-=-=-=-=-=-=- toPrecision - bu ham sonlarni kursatilgan miqtorda chiqaradi

// nichta 0 bulsaham hisoblamasdan kursatilgan miqtorda faqat 1,2,3,4... sonlarni oladi
let num = 5.1023456;
console.log(num.toPrecision(3)); // 5.10
let num1 = 0.002034476;
console.log(num1.toPrecision(3))// 0.00234 - bunda 0 ni hisoblamasdan 0 dan kiyin 3 ta son olyapdi birinchi chiqqan sondan kiyingi 0 lar hisoblanadi 
// buni urnini bosadigan boshqa method yuq


// -=#-=#-=#-=#-=#-=#-=# Math - Js amallarni abarishda yordam beradigan qushimcha method 
// bu quwimcha kutib hona emas bu kutubhona JS ning uzida bor bulgan beuldin function hisoblanadi 

console.log(Math.PI) // 3.141592653589793 - shuni chiqarb beradi Pi 

// -=-=- abs - bu sonning faqat absalyut qiymatini chiqaradi -1 bulsaham 1 chiqaradi
console.log(Math.abs(-1)); // 1 

// -=-=- round - bu sonni yaxlitlab beradi .5 va undan yuqorisi bulsa undan kiyingi katta son chiqadi .5 dan kichik bulsa usha sonni uzi chiqadi
console.log(Math.round(2.5)) // 3, 2.4 bulsa 2 chiqadi 

// -=-=- floor - bu ham yaxlitlaydi faqat uzagini (kichigini) olib beradi 
console.log(Math.floor(2.999)) // 2 chiqadi bunda faqat uzagi (kichigi, boshidagi) ni chiqaradi 

// -=-=- ceil - bu ham yaxlitlatdi faqat kattasini chiqaradi 2.0001 bulsaham 3 chiqaradi 
console.log(Math.ceil(2.0001)) // 3 - chunke bu faqat kattasini chiqaradi 

// -=-=- trunc - bu sonning kast qismini chiqarb tashlaydi nechchi bulishiga qaramay
console.log(Math.trunc(3.9009)) // 3 - chunke bu . dan kiyingi hamma sonni olib tashlaydi
// floor va trunc ni farqini - sonlarda kursak buladi 
console.log(Math.floor(-2.999)) // 3 chiqadi chunke bu yaxlitlab chichigini chiqaradi -3 -2 dan kichik 
console.log(Math.floor(-2.999)) // bunda esa 2 ni uzi chiqadi chunke bu yaxlitlamaydi faqat . dan kiyingilarni olib tashlaydi

// -=-=- rondom - bu bizga 0 blan 1 ning orasidai ixtiyoriy raqamlarni chiqarb beradi
console.log(Math.random()) // 0.03919480809831888 bu bitta namuna har doim harhilsa 0 va 1 ni orasidagi sonlarni chiqaradi
// random() * ... son quysak usha sanoq sestimasida sonlarni chiqarb beradi
console.log(Math.random()*10) // 8.885593912406431 bu bitta namuna har doim harhilsa 0 va 10 ni orasidagi sonlarni chiqaradi
console.log(Math.round(Math.random()*10)) // yaxlitlangan varianti

let a = [22,34,1,4,6,21,4,643,253,51,3,6]
// -=-=- min - bu raqamlar orasidan eng kichigini topib beradi 
console.log(Math.min(22,34,1,4,6,21,4,643,253,51,3,6)) // 1 shularning ichida eng kichigi bulganligi uchun 1 chiqadi 

// -=-=- max - bu raqamlar orasidan eng kattasini topib beradi 
console.log(Math.max(22,34,1,4,6,21,4,643,253,51,3,6)) // 643 shularning eng kattasi bulganligi uchun chiqdi

console.log(Math.max(a)) // NaN chiqadi arr ni bu kurinishda yozib bulmaydi bularga
// -=-=-=-=-= bularga arr ni tug'ridan tug'ri yozib bulmaydi ... sptir qilib yozishimiz mumkun
console.log(Math.max(...a)) // 643 / arr ni sptir operator blan yozsakgina ishlaydi

// -=-=- pow - bu darajani chiqarb beradi
console.log(Math.pow(6,2))//36 chiqadi birinchi oddiy son ikkinnchi 1 - sonni darajasi 
console.log(6**2) // bu math dan foydalanmasdan darajasini chiqarish

// -=-=- sqrt - ildiz ostidan chiqarish / nechchining kvadrati ekanligini chiqarb beradi
console.log(Math.sqrt(9)) //3 - 3 ning kvadrati 9 bulganligi uchun 3 chiqadi 
console.log(Math.pow(3,2)) // 9 - 3 ning 2 - darajasi kvadrati

// -=-=- cbrt - nechchining kubi ekanligini chiqaradi
console.log(Math.cbrt(27)) // 3 - chunke 3 ning kubi (3 darajasi) 27
console.log(Math.pow(3,3)) // 27 - 3 ning 3 - darajasi kubi

// -=-=- sign - bu bizga songa qarab 1, 0, -1, -0 qiymatlarini qaytaradi
// JavaScriptda -0 qiymatiham mavjud
// 3 = 1
// -3 = -1
// 0 = 0
// '-3' = -1
// -0 = -0

// console.log(Math.sign(-0)) // -0
// console.log(Math.sign(0))// 0
// console.log(Math.sign(120)) // 1
// console.log(Math.sign(-120)) // -1
// console.log(Math.sign('-120')) // -1
// console.log(Math.sign(123e4)) // 1

let obj = {name:{name:'John', child: null}}

console.log(obj.child.age)// age childni ichida yuq child null shuning uchun error buladi 
console.log(obj.child?.age)// ? quysak agar child ichida age bulsa uqi bulmasa uqima degan manoni berdi bunda undefined chiqadi
