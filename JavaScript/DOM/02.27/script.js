// Regular Expressions - Non-Primitive 
// form validator

// - /regExp/

// or logic ||

// g - temdegt taarch bui buh case-g avna
// i - ignore the case , tom jijig usgiin ylgaag ignoredoh
// . - bj boloh buh temdegtuud
// + - tuhain temdegt zaaval bh case...
// * - 0 bolon tuunees ih bh case
// ^ - temdegt moriin ehleliig zaana (carret)
// $ - temdegt moriin togsgoliig zaana
// [a-z] - buh jijig usgiig haina
// [A-Z] - buh tom usguudiig haina.
// [0-9] , \d - buh toog haina
// [^0-9] , \D - buh toog algasna
// [^0-9a-zA-Z_] - buh spec char haina
// \s , [ ] - buh white space-g haina
// \S , [^ ] - white space-s busad buh case
// \w , [0-9a-zA-Z_] - spec char-uudiig algasna
// \W , [^0-9a-zA-Z_] - buh spec char-g haina
// {8} - taarch bh temdegtiin too
// {8,} - hamgiin bagadaa taarch bh temdegtiin too
// {4 , 8} - temdegt taarah zavsar
// {,12} - hamgiin ihdee taarah case-n too
// [^] - taarch bui case-uugiig ignordoh


// tom useg baigaa eseh: true
// too baigaa eseh: false
// jijig useg: true

// const sentence = "My name is Narada. My favorite color is color. Is it sunday? His name is Bold. listen. my %^$ favorite number is 123_";
// // .y
// const hashStart = /^#/i;
// const elements = /[0-9a-f]/i
// const len = /.{3,6}$/
// // aaa
// // ccc
// const isValidHexCode = /^#([0-9a-f]{3}){1,2}$/
// const color = prompt("hex code")
// if(isValidHexCode.test(color)){
//     document.body.style.backgroundColor = color;
// } else {
//     alert("invalid hex code...")
// }



// const too = /[0-9]/;
// const tomUseg = /[A-Z]/;
// const jijigUseg = /[a-z]/;

// console.log("Tom useg: " + tomUseg.test(sentence));
// console.log("Jijig useg: " + jijigUseg.test(sentence));
// console.log("Too: " + too.test(sentence));

// ymar special char bgaa esehiig shalga... !@#$%&*(-=+) ,.

// function countElements(inp){
//     if(inp.value.length >= 5){
//         console.log('Done!!!')
//     }
// }


// email - zov email esehiig shalgah
// firstname
// lastname
// number - 8 orontoi bh estoi
// password - tom useg , jijig useg, spec Char, 8-s deesh , too
// password confirm

// burtgeh tovch

// QUIZ
// Image gallery
// Form Validator

// const btn = document.querySelector('#btn');
// const name = document.querySelector('#name');
// const number = document.querySelector('#number');

// function checkIfFormIsEmpty(input , condition) {
//     if(condition){
//         input.classList.remove('error')
//     } else {
//         input.classList.add('error')
//     }
// }

// btn.onclick = function(){
//     checkIfFormIsEmpty(name , name.value !== "");
//     // checkIfFormIsEmpty(number , );
// }

// name.oninput = function(){
//     checkIfFormIsEmpty(name, /[A-Z]/.test(name.value))
// }

// number.oninput = function(){
//     checkIfFormIsEmpty(number , name.value === number.value);
// }