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

function User(username , email){
    this.username = username;
    this.email = email;
}

User.prototype.getName = function(){
    return this.username;
}

User.prototype.sayHi = function(){
    return "Сайн байна уу... Намайг " + this.username + " гэдэг."
}

User.prototype.setName = function(name){
    this.username = name;
    return this.username;
}

const user = new User("Narada" , "narada@mail.com");
const user1 = new User("John" , "john@mail.com");


// forEach

let array = [23 , 43 , 15 , 54 , 76 , 8 , 4];

const lessThanTwenty = array.filter(el => el < 20);

// array.forEach((el , index) => {
//     console.log(el);
// })

Array.prototype.customForEach = function(callback){
    for(var i = 0; i < this.length; i++){
        callback(this[i] , i)
    }
};

// array.customForEach((el , i) => {
//     console.log(i + ": " + el)
// });

// filter

Array.prototype.customFilter = function(callback){
    var result = [];
    for(var i = 0; i < this.length; i++){
        if(callback(this[i] , i)){
            result.push(this[i])
        }
    }
    return result;
}

const less20 = array.customFilter(function(el , index){
    return index%2 == 1
})

// polyfill

// find

Array.prototype.customFind = function(callback){
    var result = undefined;

    for(var i = 0; i < this.length; i++){
        if(callback(this[i])){
            result = this[i];
            break;
        }
    }

    return result;
}


// Quiz

function Quiz(question , answers , correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Quiz.prototype.printQuestion = function(){
    console.log(this.question);
    this.answers.forEach(function(answer , index){
        console.log(`${index}: ${answer}`)
    })
};

Quiz.prototype.checkAnswer = function(answer){
    if(answer === this.correctAnswer){
        console.log('Зөв хариуллаа...')
    } else {
        console.log('Буруу хариулт байна. Дахин оролдоно уу...')
    }
}

const question = new Quiz("Монгол хэлний цагаан толгой хэдэн үсэгтэй вэ?" , [26 , 33 , 35 , 42] , 2);

question.printQuestion();
question.checkAnswer(+prompt('Зөв хариултын индексийг бич.'));


// 1. 10ш асуулт массив дотор хадгалаад, асуултууд random хэлбэрээр 
// гарч ирэх фрограмм бич

// 2. Хэдэн асуултанд зөв хариулсныг тооцож хамгийн сүүлд нь гаргах