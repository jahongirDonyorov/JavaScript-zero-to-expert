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

function getName(name) {
  console.log(new.target); // constraktor bn function chaqirilgan yoki chaqirilmaganligini kursatadi
  // this.name = name;
  // this.sayHi = function () {
  //   console.log("hi", this.name);
  //   return "hey";
  // };
  // console.log(this)
}
// getName()// bu holda chaqirsak polne functionni hususiyat hamma narsalarini chiqarib beradi
// new getName() // bu holatta esa functionni ichidagi malumotni chiqaradi

// new blan yozdikmi ushani ichidagi narsalarni uzidan tashqaridaham ishlatsa buladi
// console.log(new getName("Toshmat").name);
// name locol verable age ni function dan tashqaridaham chaqirsak buladi

// console.log(new getName("ESHMAT").sayHi());
// console.log( getName("ESHMAT").sayHi()); // new bulmasa buni (sayHi()) ni tashqarida ishlatolmaymiz bu holat notug'ri

// getName('elshod')

let id1 = Symbol("id"); // Symbol yunik id yasab beradi
let id2 = Symbol("id");
// console.log(id2);
// console.log(id1 === id2); // false

// Symbol ning qiymatiham objekt ning keysi buloladi [id1]
// let obj = {
//   id1: "John", // bu uzida local id1 ochib qiymat beryapdi
//   // Symbol dan qaytyotgan verbleni Symbol('id'): 'Jahon' - holatda key qilolmaganligimiz uchun verabelga olib veriblesini key sifatida ishlatsak buladi
//   // qachonke [] ichida verable kelsa diymamek buladi
//   [id1]: "Jahon", // bu id1 syboldagi id1 ga qiymat beryapdi
//   // keylarni set va get qilishimiz uchunham [] dan foydalanamiz

//   ['id2']:'Acadimey', // underfined bunarni [] bn chaqirib bulmaydi . bn chaqirish kerak
//   id2:'Acadimey', // underfined bunarni [] bn chaqirib bulmaydi . bn chaqirish kerak

//   [id2]:'Acadimey', // faqat gina  bunda Acadimey chiqadi
// };
// obj[id1] bu deynamek bulganlarni chuqur ishlarda set va get qiladiganlarni chaqirsa buladi
// [] bu bn key verable bulsa chaqiriladi oddiy keylarni . bn chariladi

// console.log(obj.id1); // bunda uzini local id1 chiqadi
// console.log(obj["id1"]); //bundaham local id1
// console.log(obj[id1]); // bunda [] ichida bulganligi uchun Symbol dagi id1 chiqadi
// console.log(obj.id2); // . bn chaqirsa deymanek bulmaganlar key:value bulganlar chiqadi
// console.log(obj[id2]);

// let obj = {
//   name: "Jahon",
//   age: 18,
//   title: "John",
//   object:{
//     objName:'Obj'
//   },
//   child: {
//     childName: "testing name",
//     childAge: 19,
//   },
// };

// for (value in obj) {
//   // bu obj ni ichidagi barcha valuelarni chiqarib beradi
//   console.log(obj.value); // . bn qilsak bu obj ni ichidan value degam key izlaydi bulsa usha key ni chiqarib beradi
//   console.log(obj[value]); // bunda esa obj ni ichidagi qiymatlarni chiqarib beradi bitta bitta for aylanganda
// }

// ================== distrakchi - obj ni ichidagi qiymatlarni ajratib olish

// console.log(obj.age); // keyni chiqarmoqchi bulsak shu holda yozishimiz kerak lekn keyni uzini yozibham chiqarishimiz mumkun

// let name = "hello"; // bu holatda verable yaratolmemiz chunke name verablesi pastda yaratilgan
// 1                   2                          3
// const { age, name: newName, title, hh, object, child:{childName,childAge} } = obj; // {} obj ga tenglashtirilyapdi
// name:newName - qilganimizning sababi name dgan uzgaruvchi bor name ni uzini yozib quysak hato buladi shunga unga yangi qiymat beramiz va shu yangi qiymat blan chaqiramiz
// ichidagi child objni ham destrakchi qilib ketsak buladi
// distrakchi bulgan malumotni distrakchi qilish uchun ...:{...} yoziladi {} quyilmasa yangi nom berilgan hisoblanadi

// 1 - verable yaratilyapdi
// 2 - bular obj ning ichidagi huddi shunaqa key bn tenglashadi verable nomi obj key noni blan birhil bulishi kerak
// obj niki bn bir xil ketma ketlikda kelishi shart emas muhumi key bn nomi bir hil bulsa buldi
// buni ichidagi bereblelar ni yana let name = .... db yaratolmaymiz chunke bular uzi yaralgan
// 3 - object

// endi yuqoridagidey obj.key qilish shart emas keyni uzini yozib quysak ham buladi
// console.log(age); // 18
// console.log(name); // name chaqirsak hello chiqadi chunke bunaqa verable bor obj ni ichidagini chaqirish uchun yangi qiymatini chaqiramiz
// console.log(newName); // Jahon -
// console.log(hh); // undefined - obj da bu qiymat yuqligi uchun
// console.log(object); // obj ni uzini chiqarib beradi
// console.log(object.objName); // obj ichidagi keyni chiqaradi
// obj ichidagi child objsi ni ham distrak qilib chiqarib olgandan sung . quymasdan chaqirsak buladi
// console.log(childAge)

//================== sprite operator

// let obj = {
//   child: {
//     childname: "testing name",
//   },
// };

// console.log(obj) // bunda butun obj chiqadi childni uzini

// obj = {...obj.child}// ... nuqta splite operator obj ichidagi narsalarni yoyib chiqarib beradi

// console.log(obj)

let obj = {
  name: "John",
  age:18,
};

console.log({...obj, name:'It center'})// .. obj ni ichidagilarni chiqarib beradi name new qiymat bn qiymatini yangilab olamiz
console.log({...obj, newName:'It center'})// .. obj ni ichidagilarni chiqarib beradi neme:..., age:..., kiyin yangi qiymat bulardan kiyin qushiladi
// console.log(obj); // bunda butun obj chiqadi childni uzini

// obj = { ...obj.child }; // ... nuqta splite operator obj ichidagi narsalarni yoyib chiqarib beradi

// console.log(obj);
