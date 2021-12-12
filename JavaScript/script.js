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
var nas = +prompt('Насаа оруул')

// 0-12 huuhed
// 13-17 osvor nas
// 18-25 zaluu nas

if(nas >= 0 && nas <= 12){
    console.log('Huuhed')
} else if (nas >= 13 && nas <= 17){
    console.log('Osvor nas')
} else if (nas >= 18 && nas <= 25){
    console.log('Zaluu nas')
} else {
    console.log(nas + " нас")
}

// BMI = mass / height2
// 63 / (1.65**2)