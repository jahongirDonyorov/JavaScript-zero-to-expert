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
getAdd()// uzidan tepadaham chaqirsak ishlaydi
// function yaratish
//  1       2      3     
function getAvt() {
  console.log('Hillo function declaration')
};
// 1 kalit suz 
// 2 function nome () ochish uchun kerak
// 3 codelar yoziladi function chaqirilganda ishlaydi 

// function ishlashi uchun uni chaqirish kerak 2 blan chaqiriladi

getAvt();// function nomi bnlan chaqiramz 
// function diclarationni uzidan tepadaham pasdaham chaqirsak ishlayveradi
/* !!!!!!!!!
 Bu JS ning uzini injini bulganligi uchun brinchi ishga tushganda hamma function ni izlaydi tepada chaqirilganmi pastami hammasini chiqaradi 
!!!!!!!!!*/

//========================= FUNCTION EXPRATION
// function expration verabelga biriktiriladi ikkalasi bir hil ishlaydi 
// Lekn buning farqi buni uzidan tepada chaqirib bulmaydi

const getAdd = function(){
  console.log('Hillo function expration')
}
// buham declaration dek faqat verabelga briktirilgan chaqirishda virebal nomi blan chaqiramz 
getAdd() // function exprationni chaqirish