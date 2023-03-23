//=============================== Switch Statement
// switch bu huddi if else dek ular nma vazifa bajarsa buham shu vazifani bajaradi
// if(condition === 'sovuq'){...}
// bularda faqat === ta qtiy tenglikga tug'ri kelsa ishlaydi 1 vs 1 true, 1 vs '1' false uzi bunda chiqmaydi === bunga turi kelmasa
// bunda undan katta bundan kichik bulsa chiqarsin degan narsa bumaydi faqat === tengg bulish kerak

// if -> <,>,<=,>=,==,===
// switch -> ===

let virebal = "issiq";
switch ( virebal) { // (...) lerable 
  case "sovuq": // case ... - tepadagi virebal === bulsa case ... ga
    console.log("bugun sovuq"); // bu chiqsin
    break; // agar tepadagi ishlasa bu code ni tuxtatadi pasga utmaydi break bulmasa pastagi javoblarniham chiqarib tashlaydi
  case "issiq":
    console.log("bugun issiq");
    break;
  default: // agar hammasi notug'ri bulasa shu javob chiqadi huddi else ni uzidek
    console.log("error"); 
}
// (data) case - holat --- dataning holati case ... bulsa  : console.log(...) ni chiqar deyapdi

//============================= For Loops - Basics

// masalan 1 dan 6 gacha son chiqarmoqchi bulsak bittalab yozish kerak buladi
console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.log('5')
console.log('6')

// ===== For loops da esa buni bitta console.log() ni uzida qilsa buladi 

//-------- for(start, finish, step){code} - bu bizga narsalarni aylantirib beradi

//     1       2        3       4
 for(i = 1; i <= 6; i = i + 1) {  // i++ qilsakham ham buladi bu faqat bittadan quwadi hozirgi holatda esa 2,3,4 tadan ham quwiwimiz mumkun
  console.log(i)// local uzgaruvchi i ni chiqarib beradi
  console.log('salom')// salom suziham 6 marotaba takrorlanadi
  // i++ 3. ni buyirgaham yozib quysak buladi
  // 4. {} ni ichidagi code tuliq yurib bulgandan sung 3. i++ ishlaydi
 }
// 1. local uzgaruvchisini yaratib unga qiymat beryapdi
// 2. usha qiymatni solishtiryapdi
// 3. solishtirilgan qiymatga yitguncha 1 tadan quwib borilsin deyilyapdi buni 2,3,4 tadan ham qilsak buladi, I++ qilsak faqat bittadan quwadi

// !!! forloop 2 true falseligi ga qarab ishlaydi agar false bulsa tuxtatadi true bulsa ishlayveradi !!!
// misol: 6+1=7 false chunke 2 da 6 dan kichik yoke teng bulsin deyilgan 7 esa katta

// qiymat quwiw uzgarishi qanday buladi 1 dan 2 gacha ishlaydi 4 ni {} chiqaradi kiyin 1,2,3,4 ishlaydi shu tarzda 6 gacha aylanadi#

// - qiymat berib ayirib ketsak ham buladi

// let vs var 
//   1
// for(var i = 1; i <= 6; i++){// 1 local uzgaruzchi 

// }
// console.log(i)// var flobal bulganligi uchun buyirda chaqirolamiz
// // letni chaqirsak hato bulardi let local bulsa faqat local ishlaydi var esa hamma joyda ishlayveradi
 
//=====!!!!!!! Continue usha sonni chiqarmasdan utkazib yuboradi
//=====!!!!!!! Break usha songacha chiqarib beradi faqat

// Break - kirakli songacha chiqaradi qolgani aylanib yotaveradi
// var sum = 0;
// for (i = 1; i <= 12; i++){
//   // console.log(sum += i) // 1,3,6 bub ketadi becaus sum = sum + i = 1 + 1 = sum = 2; 2 + 1 = sum = 3; i ikkita quwdi i qiymati 2 ; 3 + 3 = sum 5; ketaveradi shunday
//   console.log(`Sum = ${sum} + ${i} = ${(sum += i)}`) // qanday 1,3,5 bubb ketishini kursak buladi consolda
//   console.log(i)// bu i ni uzi 1,2,3,4 bub ketaveradi
//   if(i === 10)break;// 9 gacha chiqaradi qolganini chiqarmaydi
// }
// // =========
// //    1       2      3
// for(i = 1; i < 12; i++){
//   console.log(i);
//   i += i; // bu i + i ishlab kiyin 3 ishlaydi +1 = 1+1=2+1=3; 3+3=6+1=7; shu yerda tuxtaydi becaus qolgani 12 dan katta bulib ketadi
//   // 3. i++ bulmasa uziga uzini quwib ketaveradi 1+1=2; 2+2=4;...
// }

//============ Toq Juft sonlarni chiqarish
for(i = 1; i <= 14; i++){
  // console.log(i % 2)// 1,0,1,0 chiqaveradi juft sonlar bulinib 0 buladi toqlar 1
  if(i%2 === 0)console.log(`Jusft ${i}`)// i%2 = 0 bulgan sonlarni chiqarsin
  else console.log(`Toq ${i}`) // i%2=0 bulmagan sonlarni chiqaradi Toq sonlarni

  // 3 ga 0 (qoldiqsiz) bulinadigan solarni olish
  if( i % 3 === 0) continue;//continue usha sonlarni chiqarmasdan qolganini chiqarib betadi

}

// 3 ga 0 (qoldiqsiz) bulinadigan solarni olish
for(i = 1; i <= 14; i++){
  if( i % 3 === 0) continue;//continue usha sonlarni chiqarmasdan qolganini chiqarib betadi
  if( i % 3 === 0) console.log(i);// bunda 3 ga bulinadiganlarni faqat chiqaradi
 console.log(i)
}
