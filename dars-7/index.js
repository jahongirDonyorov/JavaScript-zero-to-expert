// console.log(this) // this window bilan bir hil
// function sayH() {}
// let name = "John";
// let user = {
//   // name: "John", // bu name ga qiymat bermasdan uzini yozib quysakham buladi
//   // name = name ni qisqartmasi ikkalasiham name bulsa bittasini yozsak buladi
//   name,// bu ozir john ga teng buladi chunke varable ham key ham birhil bulsa bittasini yozib quysak buladi
//   // objectga function biriktirish 1 - usul
//   sayHi: function () {
//     console.log("hi");
//   },
//   // 2 - usul tashqaridagi function ni chaqirish
//   sayH: sayH,
//   // bundaham huddi name kabi key ni uzini yozib ketsak buladi chunke key ham function ham bitta nomda
//   sayH, // ikkita birhil bulsa bittasi yozilsaham buladi

//   // 3 - usul uzida tug'ridan tug'ri function yozib ketish
//   thank(){
//     console.log('Thakn you very much')
//   }
// };
// // 1 -  objeck ichidagi function chaqirish
// user.sayHi();
// // 2 -  objeck ichidagi function chaqirish
// user.sayH();
// // 3 -  objeck ichidagi function chaqirish
// user.thank()
// // objeck ichidagi name chaqirish
//  console.log(user.name)

// ========================

// let user = {
//   name: "John",
//   sayHi() {
//     console.log(this); // user objeck ga teng hisoblanadi
//     // console.log(`Hi ${name}`) // bunin tug'ridan tug'ri chaqirolmaymiz name qilib becous u key
//     console.log(`Hi ${this.name}`); // aynan objeck ichidagi key ekanligini this bn bildirishimiz kerak
//     console.log(`Hi ${user.name}`); // this.name user.name lan bir hil but this tafsiya qilinadi chunke objeckning nomi uzgarib qolishi mumkun
//   },
//   // Ero functionda this bulmaydi
//   getName: () => {
//     console.log(`Hi ${this.name}`);// ishlamaydi
//   },

//   // 1 ero function ichida thisni ishlatish
//   // buni ero functionni ichida faqat gina boshqa function ichidan return qilib ero function ochib ishlatishimiz mumkun
//   getN: function () { // oddiy function ochib olamz
//     return () => {// ero function ochish
//       console.log(`Hi ${this.name}`);// bu holda this ishlaydi but bu getN ga teng buladi returndagi ero functionga emas
//     }
//   }
// };
// user.sayHi()

// this yozilishiga misol
// let usr = user; // tenglashtirib oldik usr ni user ga
// user = null; // userni uzini qiymatini null qilib yubordik
// usr.sayHi();// chaqirsak user.name da hatolik buladi chunke user null ga teng bulib qolgan nomi uzgarib ketgan
// thisda esa tug'ri jabov chiqaveradi chunke this otasini nomi (user) qancha uzgarsaham usha (eng kattasi) objektga teng buladi

// 1 ero functionni chaqirish
// usr.getN()(); //get N funvtion ichidagi erro functionnni chaqirish

// this ni functionlardaham aytrim usullar blan ishlatish mumkun

// function getName(name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log("hi", this.name);
//     return "hey";
//   };
//   // console.log(this)
// }
// // getName()// bu holda chaqirsak polne functionni hususiyat hamma narsalarini chiqarib beradi
// // new getName() // bu holatta esa functionni ichidagi malumotni chiqaradi

// // new blan yozdikmi ushani ichidagi narsalarni uzidan tashqaridaham ishlatsa buladi
// console.log(new getName("Toshmat").name);
// // name global verable age ni function dan tashqaridaham chaqirsak buladi

// console.log(new getName("ESHMAT").sayHi());
// // console.log( getName("ESHMAT").sayHi()); // new bulmasa buni (sayHi()) ni tashqarida ishlatolmaymiz bu holat notug'ri
