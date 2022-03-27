"use strict";
// Number
// Boolean
// null
// undefined
// String
const member = {
    ner: "",
    nas: 34,
    sayHi: function () {
        console.log('Hi');
    }
};
const member1 = {
    ner: "",
    nas: 34,
    sayHi: () => {
        console.log("bla");
    },
    hobbies: ["reading"]
};
console.log(member);
// 1. 2 ширхэг обжект параметер хэлбэрээр аваад, тухайн обжектуудыг нэгтгээд буцаадаг функц бич...
// оролт: {ner: "bla"} , {nas: 12}
// гаралт: {ner: "bla" , nas: 12}
