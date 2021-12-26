// JavaScript - OOP - object oriented programming language
// EcmaScript - ES 1-12
// ES1 - 1996
// ES2 - 1997
// ES3 - 1998

// ES5 - 2009
// ES6 - 2015

// ES12 - 2021

// 1. Basic
// 2. Algorithms
// 3. DOM - Document Object Model
// 4. OOP - Object Oriented Programming
// 5. Data Structure
// 6. Promise
// 7. Asynchronous JS

// NodeJS
// React
// React Native

// Data types - Өгөгдлийн төрөл
// 1. Primitive datatype
// 2. Non-Primitive datatype


// Primitive DataTypes
// 1. String - Текст төвтэй өгөгдөл - "Нарада" , 'fjd' , `jfls` 
// 2. Number - Тоон төрлийн өгөгдөл - 1234567890
// 3. Boolean - true (1) , false (0)
// 4. null - хоосон
// 5. undefined - тодорхойгүй

// Non-Primitive - Arrays , Object , Regular Expressions

// variables - Хувьсагч - Ямар нэг өгөгдлийг хадгалах сав

// var ner

// ner = "Narada"

// ner = "Steve"

// ner = 23

// console.log(ner)

// ner = "Max"

// console.log(ner)

// var x = 5
// var y = x
// x = 7;

// console.log(x) // 7
// console.log(y) // 5

// Operator and Operand

// var x = 5
// var y = 7

// x = x + 3  // +=
// x += 5 // 13

// y -= 4

// x++
// y--


// 1. 5м урттай, 3м өргөнтэй тэгш өнцөгтийн талбай болон периметрийг ол.
// talbai = urt * urgun
// perimeter = (urt + urgun) * 2

// var urt = 5
// var urgun = 3
// var talbai = urt * urgun
// var perimeter = (urt + urgun) * 2


// 2. 5м радиустай тойргийн урт болон талбайг ол. (pi = 3.14)
// talbai = pi * r2 (radiusiin kvadrat)
// urt = D * pi
// var radius = +prompt("Тойргийн радиусыг оруул...")
// var pi = 3.14

// var urt = (radius * 2) * pi
// var talbai = (radius * radius) * pi



// power ** зэрэгт дэвшүүлэх
// remainder operator % - үлдэгдлийг шалгах

// convert 

// var x = 15

// var y = x.toString()

// var str = "23.5"
// var z = +str

// var t = parseInt(str) // Integer - бүхэл тоо
// var f = parseFloat(str) // Float - бутархай тоо

// Нөхцөл шалгах statements

// true , false

// = Хувьсагч зарлах, хувьсагчийн утгыг өөрчлөх
// ==
// ===

// var nuutsUg = "myPass123"
// camel case => camelCase

// if statement
// var password = "myPass123"
// var email = "mail@example.com"

// var insertEmail = prompt('Мэйл хаягаа оруул...')
// var insertPassword = prompt('Нууц үгээ оруул...')

// {} - block , scope

// if else 

// and && , or || logic

// if(password === insertPassword && email === insertEmail){ // true
//     alert('welcome') // нөхцөл биелсэн тохиолдолд ажиллана
// } else {
//     // нөхцөл биелээгүй тохиолдолд энэ хэсэг ажиллана
//     alert('Имэйл эсвэл нууц үг таарахгүй байна...')
// }


// if(nas >= 18){
    //     console.log('Adult')
    // } else {
        //     console.log('Child')
        // }
        
        
        // if else if
// var nas = +prompt('Насаа оруул')

// 0-12 huuhed
// 13-17 osvor nas
// 18-25 zaluu nas

// if(nas >= 0 && nas <= 12){
//     console.log('Huuhed')
// } else if (nas >= 13 && nas <= 17){
//     console.log('Osvor nas')
// } else if (nas >= 18 && nas <= 25){
//     console.log('Zaluu nas')
// } else {
//     console.log(nas + " нас")
// }

// BMI = mass / height2
// 63 / (1.65**2)

// 1. Гараас 3ш тоо оруулаад хамгийн их тоог консолд хэвлэ
// 2. Гараас 3ш тоо оруулаад сондгой тоонуудыг 2 дахин үржүүлж консолд хэвлэ

// var x = +prompt('x')
// var y = +prompt('y')
// var z = +prompt('z')

// if(x > y && x > z){
//     console.log(x)
// } else if (y > x && y > z){
//     console.log(y)
// } else {
//     console.log(z)
// }

// true 1
// false 0

// if(x % 2){
//     console.log('x: ' + x*2)
// }
// if(y % 2){
//     console.log('y: ' + y*2)
// }
// if(z % 2){
//     console.log('z: ' + z*2)
// }

// loop
// string methods
// index - 0 ,1 ,2

// function

// Non-Primitive - Object , Arrays , Regular Expression

// E - 2.718
// PI - 3.1415
// LN - log e
// LN10 - 1g
// floor() - тооны бүхэл хэсгийг авах
// pow(suuri , zereg) - тоог зэрэгт дэвшүүлнэ
// sqrt(x) - тооноос язгуур гаргана
// random() - 0-1 хооронд санамсаргүй байдлаар тоо гаргах
// abs(x) - тооны авсолют утгыг гаргана

// Гэрт

// 1. Гараас тоо оруулаад хэдэн оронтой болохыг тоолж консолд хэвлэ
// Тоог стринг болгож хөрвүүлээд уртыг нь шалгах
// x.toString().length
// Math => Math.floor(Math.log10(x)) + 1


// 2. 3-с дээш оронтой тоо оруулж, тухайн тооны сүүлээс 2 дахь цифрийг коснолд хэвлэ
// x.toString()[x.length - 2]
// x.toString().charAt(x.length - 2)

// Math.floor(x / 10) % 10

// String methods
// var x = prompt('Тоо оруул...')
// trim() - trimLeft() , trimRight() , trimStart() , trimEnd()

// index - character bolgoniig dugaarlaj bui dugaar
// charAt - ymar ng index dr bgaa elementiig shalgah

// Math 1

// var x = 1234;

// 2^3 = 8
// log2,8 = 3

// Гараас стринг оруулаад сүүлээсээ 3 дахь элемент нь t үсэг байвал консолд true гэж хэвлэ. t биш байвал false гэж хэвлэ...

// For Loop


// for(counter ; condition ; operator)
// for(var i = 0; i < z.toString().length; i++){
//     console.log(z.toString()[i])
// }

// for( var i = 0; i < 101; i++){
//     console.log(i)
// }

// 100 хүртэл давталт хийгээд бүх сондгой тоог консолд хэвлэ
// 100 хүртэл давталт хийгээд 3 болон 4т зэрэг хуваагддаг тоонуудыг консолд хэвлэ
// 1000 хүртэл давталт хийгээд сүүлээсээ 2 дахь орон тэгш байх бүх тоог консолд хэвлэ
// Гараас тоо оруулаад бүх цифрүүдийн нийлбэрийг олох.
// Гараас тоо оруулаад бүх сондгой цифрүүдийн нийлбэрийг олох.

// 12.25 - Loop and function
// for loop  -  for(counter var; condition; action){}
// while loop , do while

// for(i; i < 10; i++){
    //     console.log(i)
    // }
    
    // do {
        //     if(i%2 === 1){
            //         console.log(i);
            //     }
            //     i++;
            // } while(i < 100)
            
            // 1233456
            // 12 - 0 , 1
            
            
// var i = 0;
// var x = prompt('Ямар нэг тоо оруул');
            
// var sum1 = 0;
// do {
//     if(x[i] % 2 === 1){
//         sum1 += +x[i];
//     }
//     i++;
// } while (i < x.length)



// var j = 0;
// var y = +prompt('Ямар нэг тоо оруул');
// var oron = Math.floor(Math.log10(Math.abs(y))) + 1;
// var sum = 0;

// do {
//     var tsifr = Math.floor(Math.abs(y) / Math.pow(10 , i)) % 10;
//     if(tsifr % 2 === 1){
//         sum += tsifr;
//     }
//     i++;
// } while (i < oron)

// 3456
// 6 - 10 ** 0 = 1
// 5 - 10 ** 1 = 10
// 4 - 10 ** 2 = 100
// 3 - 10 ** 3 = 1000 => lg1000 = 3 + 1

// Non-Primitive - Array , Object , Regular Expressions

// Array - Массив - Хүснэгт - []

// var array = new Array(12 , 13 , 14 , 'blabla' , true , null , undefined);

// var test = [100 , 200 , 'blabla' , true];
// test.push('qwerty');
// test.push(432567);
// // push - массив дотор шинэ өгөгдөл оруулна

// test.pop()
// // pop - массивын хамгийн сүүлийн элементийг устгана

// test.unshift(50)
// test.unshift(51)
// // unshift - массивын хамгийн эхэнд өгөгдөл нэмнэ

// test.shift();
// // shift - массивын хамгийн эхний элементийг устгана

// test[1] = 'str'

// test.splice(index , ustgah too)  
// splice - тодорхой тооны өгөгдлүүдийг устгана

// map , forEach , filter , find , findIndex

// 1. 10 улсын нэрийг массив дотор хадгалаад, бүх А үсгээр эхлэсэн улсуудын нэрийг консолд хэвлэ
// 2. Массив үүсгээд дотор нь тоо стринг бүүлеан утгуудыг хадгалж бүх тоон өгөгдлүүдийн нийлбэрийг ол. / 10-s deesh ogogdol baih / 
// 3. Массив үүсгээд дотор нь тоо стринг бүүлеан утгуудыг хадгалж стринг төрлийн өгөгдөл хэдэн ширхэг байгааг тоож харуул.
// 4. Массив үүсгээд дотор нь тоо стринг бүүлеан утгуудыг хадгалж бүх бүүлеан өгөгдлүүдийг устга
// 5. Массив үүсгээд дотор нь тоо стринг бүүлеан утгуудыг хадгалж, тоо стринг бүүлеан утгуудыг тус тусад нь шинэ массив дотор ангилан хадгал. str = [] , nums = [] , bools = []

// var arr = ['str' , 'str1' , 'str2' , true , false , 124 , 12 , 98 , false , 'str3']; // 10

// var strings = [];
// var numbers = [];
// var booleans = [];
// var i = 0;
// do {
//     if(typeof arr[i] == 'string') {
//         strings.push(arr[i])
//     }

//     if(typeof arr[i] == 'number') {
//         numbers.push(arr[i])
//     }

//     if(typeof arr[i] == 'boolean'){
//         booleans.push(arr[i])
//     }
//     i++;
// } while (i < arr.length);

// reverse - массивыг урвуу хэлбэрт оруулна

var arr1 = ['Hi' , 'there.' , 'My' , 'name' , 'is' , 'Narada.'];
// join - массивын өгөгдлүүдийг стринг болгож нийлүүлнэ;
// join(separator) - separator => массивын өгөгдлүүд ямар тэмдэгтээр холбогдохыг заана


// String split method
var str = 'Hi there.';

// 