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

// var arr1 = ['Hi' , 'there.' , 'My' , 'name' , 'is' , 'Narada.'];
// join - массивын өгөгдлүүдийг стринг болгож нийлүүлнэ;
// join(separator) - separator => массивын өгөгдлүүд ямар тэмдэгтээр холбогдохыг заана


// String split method
// concat - string bolon massiviig orgotgono
// var str = 'Hi there. ';
// var str1 = 'My name is Narada.';

// slice - тодорхой хэсгийг тасдаж авна
// slice(index , endIndex)

// indexOf - өгөгдлийн индексийг шалгана
// console.log(arr1.includes('Narada.'))
// 12 13
// 14 15

// Non-Primitive Datatypes - Object
// var ner = 'ner';

// var obj = {
//     ner: 'Narada',
//     mergejil: 'Designer',
//     email: 'narada@mail.com',
//     password: '123'
// }

// var obj1 = {
//     ner: 'John',
//     mergejil: 'Designer',
//     email: 'john@mail.com',
//     password: '123'
// }

// obj.hobbies = ['Play game' , 'aylah' , 'duu sonsoh']

// // push(val)

// var users = [obj , obj1]

// var email = prompt('Email address');
// var password = prompt('password');

// [{} , {} , {}]
// 5ш хэрэглэгчийн обжектийг массив дотор хадгалаад, имэйлээр хайлт хийх программ бич.

// for(var i = 0; i < users.length; i++){
//     if(users[i].email === email){
//         if(users[i].password === password){
//             console.log('Welcome ' + users[i].ner)
//         }
//     }
// }

// Гэрт функцийн тухай судлана.

// "     ns  bla    ";
// "ns-bla"

// var arr = ['fqa' , 'bla' , '123' , 'tre' , 'fqabla123tre'];

// var str = '';
// // while
// // do while
// let i = 0;

// while(i < arr.length - 1){
//     str = str.concat(arr[i]);
//     i++;
// }

// if(str == arr.pop()){
//     console.log(true)
// } else {
//     console.log(false)
// }

// function
// reserved word - програмийн хэлэнд ашиглагддаг тусгай түлхүүр үг
// f1(); // hoisting

// {} - scope


// var x = 15;

// function f1(){
//     console.log(23)
// }

// f1()

// function printHello(){
//     for(var i = 0; i < 100; i++){
//         console.log(i + ": Hello");
//     }
// }

// printHello()

// function countZero(){
//     var x = +prompt('x');
//     var y = +prompt('y');
//     var z = +prompt('z');

//     var counter = 0;

//     if(x == 0){
//         counter++;
//     }

//     if(y == 0){
//         counter++;
//     }

//     if(z == 0){
//         counter++
//     }
    
//     return counter;
// }

// function f2(){
//     return 5;
// }

// var f3 = f2;


// nas tootsonh function



// function nasToots(arg, arg1 , arg2){
//     var sum = 0;
//     if(arg % 2 == 1){
//         sum += arg;
//     }

//     if(arg1 % 2 == 1){
//         sum += arg1;
//     }

//     if(arg2 % 2 == 1){
//         sum += arg2;
//     }

//     return sum
// }

// function ex8(num){
//     var counter = 0;

//     var too = num.toString();

//     for(var i = 0; i < too.length; i++){
//         if(+too[i] % 3 === 0){
//             counter++
//         }
//     }

//     return counter;
// }

// callstack , нэг функц дотор өөр нэг функцийг дуудах
// recursive stack
// callback

// Stack - LIFO - Last in First out

// paranthesis balance
// [[(){}]{}]

// function f1(){
//     f2()
// }

// function f2(){
//     console.log('hi');
//     f3();
// }

// function f3(){
//     console.log('there')
// }

// function f1(){
//     f1();
// }

// function sumUpTo(too){
//     if(too === 1){
//         return too
//     }
//     return too + sumUpTo(too - 1)
// }

// function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     }

//     return false
// };

// default parameter
// function f1(arg=0){
//     return arg
// }

// // spread operator ( ... )

// var arr = [12 , 13 , 14];

// var arr1 = [11 , ...arr , 15];

// var obj = {
//     ner: "Narada",
//     mergejil: "Designer"
// }

// var obj1 = {
//     ...obj,
//     ner: "Purev",
//     hobbies: ['reading' , 'watching']
// }


// rest parameter

// function testRestParams (...arguments){
//     var i = 0;
//     while(i < arguments.length){
//         console.log(arguments[i])
//         i++;
//     }
// }

// for in

// var obj = {
//     ner: "Narada",
//     mergejil: "Designer",
//     hobbies: ['reading' , 'watching']
// }

// for(var pro in obj){
//     console.log(obj[pro]);
// }

// obj['ner']

// нэр болон нас параметр хэлбэрээр авдаг функц бичээд, нэр насаа
// нэг стринг болгож буцаа...
// f1(ner , nas) => "Sainuu bi bol ner. Bi nas nastai"

// хэрэв функц дотор 2 болон түүнээс их параметр хувьсагч орж ирдэг
// гэж үзвэл, тухайн функцийн бүх паратрийг нэг стринг болгож буцаа
// f1("hi" , "bbl" , "12" , "blfkjsdlk") => "hibbl12blfkjsdlk"


// параметр хэлбэрээр нас авдаг функц бичээд, decade тооцоод буцаах
// f1(23) => "Та 2 decade амьдарсан байна..."


// function bla(arg){
//     // console.log(arg)
// }


// function ex1(ner , nas){
//     return `Sainuu. Namaig ${ner} gedeg. Bi ${nas} nastai...`
// }

// function ex2(...strs){
//     var result = '';
//     var i = 0;
//     while(i < strs.length){
//         result = result.concat(strs[i]);
//         i++;
//     }
//     return result;
// }

// function ex21(...strs){
//     return strs.join('');
// }


// function countDecade(nas){
//     return "Ta " + parseInt(nas / 10) + " decade амьдарсан байна."
// }


// Оролт: arr = [4 , 3 , 2 , 7 , 7 , 1 , 5], target = 9;
// Гаралт: [0, 5 , 2 , 3 , 2 , 4]

// https://leetcode.com
// https://www.spoj.com
// https://codeforces.mn , https://codeforces.com

// гараас тоо оруулж, 0-н тоог пирамид хэлбэрээр консолд хэвлэ. Пирамидийн суурь оруулсан
// тоотой ижил байна.

// жишээ: enterNum(5)
// 0
// 00
// 000
// 0000
// 00000


// makeTriangle(4)
// 0
// 00
// 000
// 0000
// 000
// 00
// 0

function sumUpTo(num){
    var sum = 0;
    for(var i = 1; i <= num; i++){
        sum += i;
    }

    return sum
}

function recursiveSum(num){
    if(num === 1){
        return num;
    }
    return num + recursiveSum(num - 1)
}

function formulaSum(num){
    var start = 1;
    var end = num;
    var count = num;
    var sum = (start + end) / 2 * count;

    return sum;
}

// sumUpTo
// Эхлэнэ
// 1. sum = 0 хувьсагч зарлах
// 2. оруулсан тоо хүртэл давт
// 3. давталт бүрийн утгыг 2-р хувьсагч руу нэмэх
// 4. 2-р хувьсагчийг буцаа
// төгсөнө

// Divide and Conquer



// 7-р дасгал

// function makeTri(num){
//     var flr = num * 2;
//     var valToPrint = '';
//     for(var i = 1; i < flr; i++){
//         if(i <= num){
//             valToPrint += 0;
//         } else {
//             valToPrint = valToPrint.slice(0 , -1);
//             // break;
//         }

//         console.log(valToPrint)
//     }
// }
var obj = {
    ner: "Narada",
    mergejil: "designer",
    hobbies: ['a' , 'b' , 'c']
}

for(var pro in obj){
    console.log(obj[pro])
}

function ex4(o){
    var vals = [];
    var pros = [];
    for(var pro in o){
        pros.push(pro);
        vals.push(o[pro]);
    }

    return [pros , vals]
}

function rest(...boxes){
    var sum = 0;
    for(var i = 0; i < boxes.length; i++){
        var volume = 1;
        if(boxes[i].length === 3){
            for(var j = 0; j < boxes[i].length; j++){
                volume *= boxes[i][j];
            }
        } else {
            volume = 0;
        }

        sum += volume
    }

    return sum;
}

function ex8(arr){
    var even = [];
    var odds = [];
    var isEven = true;
    var isOdd = true;
    for(var i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            even.push(arr[i])
        } else {
            odds.push(arr[i])
        }
    }

    for(var j = 0; j < even.length; j++){
        if(even[j] % 2){
            isEven = false;
            break;
        }
    }

    for(var o = 0; o < odds.length; o++){
        if(odds[o] % 2 === 0){
            isOdd = false;
            break;
        }
    }

    if(isEven && isOdd){
        return true;
    }

    return false;
}

var arr = [23, 1 ,23, 2 , 4 , 90];
// arr.sort(function(a , b){ return b - a})

// filter
// reduce 
// map
// find
// findIndex
// forEach