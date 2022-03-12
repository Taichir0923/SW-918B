// event Listener

// addEventListener 
// click , change , load , input

const btn = document.querySelector('#btn');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const email = document.querySelector('#email');

let users;
init();
class User {
    constructor(firstname , lastname , number , password , email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.number = number;
        this.password = password;
        this.email = email;
        this.id = Math.random().toString().split('.')[1]; 
    };
};

function init(){
    if(localStorage.users){
        users = JSON.parse(localStorage.users);
    } else {
        users = [];
    }
}


btn.addEventListener('click' , function(event){
    event.preventDefault();
    if(firstname.value.trim() !== '' && lastname.value.trim() !== '' && number.value.trim() !== '' && password.value.trim() !== '' && email.value.trim() !== '') {
        const user = new User(firstname.value , lastname.value , number.value , password.value , email.value);
        users.push(user);
        clearForm();
        localStorage.setItem("users" , JSON.stringify(users));
        alert('burtgegdlee!')
    } else {
        alert('invalid input');
    }
});

function clearForm(){
    firstname.value = '';
    lastname.value = '';
    number.value = '';
    password.value = '';
    email.value = '';
}

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

// github.com/taichir0923/sw-918b