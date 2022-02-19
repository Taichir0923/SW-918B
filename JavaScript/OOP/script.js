// OOP in JS
// Object oriented programming language
// Data Structure 

// class
// inheritance

// Constructor - байгуулагч функц

// let arr = []

// new Array

// username,
// email


// ES5

// function User(username , email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.getName = function(){
//     return this.username;
// }

// User.prototype.sayHi = function(){
//     return "Сайн байна уу... Намайг " + this.username + " гэдэг."
// }

// User.prototype.setName = function(name){
//     this.username = name;
//     return this.username;
// }

// const user = new User("Narada" , "narada@mail.com");
// const user1 = new User("John" , "john@mail.com");


// // forEach

// let array = [23 , 43 , 15 , 54 , 76 , 8 , 4];

// const lessThanTwenty = array.filter(el => el < 20);

// // array.forEach((el , index) => {
// //     console.log(el);
// // })

// Array.prototype.customForEach = function(callback){
//     for(var i = 0; i < this.length; i++){
//         callback(this[i] , i)
//     }
// };

// // array.customForEach((el , i) => {
// //     console.log(i + ": " + el)
// // });

// // filter

// Array.prototype.customFilter = function(callback){
//     var result = [];
//     for(var i = 0; i < this.length; i++){
//         if(callback(this[i] , i)){
//             result.push(this[i])
//         }
//     }
//     return result;
// }

// const less20 = array.customFilter(function(el , index){
//     return index%2 == 1
// })

// // polyfill

// // find

// Array.prototype.customFind = function(callback){
//     var result = undefined;

//     for(var i = 0; i < this.length; i++){
//         if(callback(this[i])){
//             result = this[i];
//             break;
//         }
//     }

//     return result;
// }


// // Quiz

// function Quiz(question , answers , correctAnswer){
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
// }

// Quiz.prototype.printQuestion = function(){
//     console.log(this.question);
//     this.answers.forEach(function(answer , index){
//         console.log(`${index}: ${answer}`)
//     })
// };

// Quiz.prototype.checkAnswer = function(answer){
//     if(answer === this.correctAnswer){
//         console.log('Зөв хариуллаа...')
//     } else {
//         console.log('Буруу хариулт байна. Дахин оролдоно уу...')
//     }
// }

// const question = new Quiz("Монгол хэлний цагаан толгой хэдэн үсэгтэй вэ?" , [26 , 33 , 35 , 42] , 2);

// question.printQuestion();
// question.checkAnswer(+prompt('Зөв хариултын индексийг бич.'));


// 1. 10ш асуулт массив дотор хадгалаад, асуултууд random хэлбэрээр 
// гарч ирэх фрограмм бич

// 2. Хэдэн асуултанд зөв хариулсныг тооцож хамгийн сүүлд нь гаргах

// ES6 - class
// class - blueprint of object

// function Quiz () {

// }

// methodical
// prototypical

// class User {
//     constructor(username , email){
//         this.username = username;
//         this.email = email
//     }

//     getName(){
//         return this.username
//     }

//     setName(username){
//         this.username = username;
//         return this.username;
//     }

//     static methodical(){
//         console.log(12345)
//     }
// }

// const user = new User("Narada" , "narada@mail.com");

// // inheritance - удамшил
// class PremiumUser extends User {
//     constructor(username , email , number){
//         super(username , email);
//         this.number = number;
//     }

//     test(){
//         console.log('premium function...')
//     }
// }

// const premium = new PremiumUser("Narada" , "narada@mail.com" , 99009900)
/**
 * {
 *  username
 *  email
 *  password
 *  number
 *  id
 * }
//  */
// class User {

//     constructor(username , email , password , number){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//         this.number = number;
//         this.id = Math.random().toString().split('.')[1]
//     }

//     save(list){
//         const userExists = list.find(el => el.email === this.email);
//         if(userExists){
//             return "Email already exists..."
//         }

//         list.push(this);
//         return "Success..."
//     }

//     // deleteUser(list){
//     //     const {id} = list.find(el => el.id === this.id);
//     //     return id;
//     // }
// }

// class UserList {
//     users = [];

// }

// const user = new User("Narada" , "narada@mail.com" , "123" , 99008899);
// const {users} = new UserList();

// CRUD - Create , Read , Update , Delete
// Linked List
// Stack
// QUEUE
// TREE
// Graph


// DOM

// [node , node , node]
// list - head , tail

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        // this.prev = null
    }
}

class NodeList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this.length;
    }
}

// const node = new Node(12);
// node.next = new Node(13);

// const linkedList = new NodeList();
// linkedList.push(12)
// linkedList.push(13)
// linkedList.push(14)

// shift , unshift , pop , get , set , 
// insert , remove , reverse , print

// doubly linked list

