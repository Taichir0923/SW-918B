// event Listener

// addEventListener 
// click , change , load , input

const btn = document.querySelector('#btn');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const number = document.querySelector('#number');
const password = document.querySelector('#password');

class User {
    constructor(firstname , lastname , number , password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.number = number;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]; 
    };
};

const users = [];

btn.addEventListener('click' , function(event){
    event.preventDefault();
    const user = new User(firstname.value , lastname.value , number.value , password.value);
    users.push(user);
    localStorage.setItem("users" , JSON.stringify(users));
});

// хэрэглэгч бүртгэх форм хий...

// localStorage

// localStorage.setItem("data" , [1 , 2 , 3 , 4]);


// user = {
//     name: '',
//     utas: 123,
//     email: "",
//     pass: "",
//     id: Math.random().toString().split('.')[1]
// }

// JS object notation