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
// logx8 = 3

// Гараас стринг оруулаад сүүлээсээ 3 дахь элемент нь t үсэг байвал консолд true гэж хэвлэ. t биш байвал false гэж хэвлэ...

// For Loop


// for(counter ; condition ; operator)
// for(var i = 0; i < z.toString().length; i++){
//     console.log(z.toString()[i])
// }

for( var i = 0; i < 101; i++){
    console.log(i)
}