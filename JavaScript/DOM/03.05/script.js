// event Listener

// addEventListener 
// click , change , load , input

const btn = document.querySelector('#btn');

function printSth(){
    console.log('hi')
}

btn.addEventListener('click' , function(event){
    event.preventDefault();
    printSth();
});

// хэрэглэгч бүртгэх форм хий...

const users = [];

// user = {
//     name: '',
//     utas: 123,
//     email: "",
//     pass: "",
//     id: Math.random().toString().split('.')[1]
// }