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
;
// type Obj = Obj1 & Obj2
var b = {
    ner: "",
    nas: 34
};
function mergeObject(a, b) {
    return Object.assign(a, b);
}
console.log(mergeObject({ ner: "Narada" }, { nas: 24, mergejil: "designer" }));
