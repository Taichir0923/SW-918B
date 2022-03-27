// Number
// Boolean
// null
// undefined
// String

// var num:bigint = 12n;
// console.log(num);

// var str:string = "fsjdk";
// str = "jkf";

// var testBoolean:boolean = true;

// testBoolean = false;

// var falsy:null = null;
// var falsy1:undefined = undefined;


// var nas:number;
// var on: number = 2000;

// nas = 2022 - on;
// console.log(nas);

// custom nertei type zarlah
// type too = number;
// type str = string;

// var x:too = 123;
// var ner:str = "Narada";

// // union type
// // type1 | type2
// var y:number|string = 23;
// y = 34;
// y = "str";

// // any
// var bla:any = 123;
// bla = "gjfdsl";
// bla = [12 , 23];

// 1. 5м урттай, 3м өргөнтэй тэгш өнцөгтийн талбай болон периметрийг ол

// 2. 5м радиустай тойргийн урт болон талбайг ол. (pi = 3.14)

// 

// array
// var arr:number[] = [12 , 14];
// var arr1:string[] = ["str1" , "str2"];

// // tuple
// var tuple:[number , string] = [12 , "str"];

// type MyObjectType = {
//     ner: string;
//     nas: number;
//     email: string;
// }

// var obj:MyObjectType = {
//     ner: "blabla",
//     nas: 23,
//     email: "narada@mail.com"
// }

// const users: MyObjectType[] = [obj];

// users.push({
//     ner: "gjdfk",
//     nas: 43,
//     email: "kfdsl"
// })

// function

// function bla (a: number[] , b:number):number[] {
//     return [...a , b];
// }

// var nasTootsoh: (on:number) => number;

// nasTootsoh = function(a:number){
//     return 2022 - a;
// }

// console.log(nasTootsoh(2000))

interface CustomObjectType {
    ner: string;
    nas: number;
    sayHi: () => void
}

interface NewType extends CustomObjectType {
    hobbies: string[]
}

const member:CustomObjectType = {
    ner: "",
    nas: 34,
    sayHi: function(){
        console.log('Hi')
    }
}

const member1:NewType = {
    ner: "",
    nas: 34,
    sayHi: () => {
        console.log("bla")
    },
    hobbies: ["reading"]
}

// console.log(member);

// 1. 2 ширхэг обжект параметер хэлбэрээр аваад, тухайн обжектуудыг нэгтгээд буцаадаг функц бич...
// оролт: {ner: "bla"} , {nas: 12}
// гаралт: {ner: "bla" , nas: 12}
interface Obj1 {
    ner: string
};


interface Obj2 {
    nas: number;
    mergejil?: string
}

interface Obj extends Obj1 , Obj2 {}
// type Obj = Obj1 & Obj2
var b:Obj = {
    ner: "",
    nas: 34
}

function mergeObject (a: Obj1 , b: Obj2):Obj{
    return Object.assign(a , b)
}

console.log(mergeObject({ner: "Narada"} , {nas: 24 , mergejil: "designer"}));