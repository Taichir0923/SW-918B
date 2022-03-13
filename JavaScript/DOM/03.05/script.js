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


// Бие даалт
// 0. User registration /zurag , email , number , pass , id/ , email number davtagdahgui bh
// 1. User login /email , pass/
// 2. profile huudas 
// 3. article uusgeh /created date , title , body , id , userId/
// 4. profile huudas dotor tuhain hereglegchiin article haragdah
// 5. article unshih huudas uusgeh /niitlegchiin medeelel , article , comment (henii comment?)/ 
// 6. time line uusgeh - buh article haragdah
// 7. profile - busad hereglegchiin profile huudas ruu oroh
// 8. comment bichih // userId , articleId