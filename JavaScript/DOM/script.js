// DOM - Document Object Model
// document => querySelector("cssSelector");

// getElementsByClassName
// getElementById


// const headingTag = document.querySelectorAll('.title'); 

// const headingTags = document.getElementsByClassName("title");

// background-color => backgroundColor

// headingTag.style.backgroundColor = "red";
// headingTag.style.color = "#fff";
// headingTag.id = "blabla"

// const input = document.querySelector('input');

// input.type = "button";
// input.value = "Press here!";
// input.style.backgroundColor = "orangered";
// input.style.border = "1px solid orangered";
// input.style.borderRadius = "4px";
// input.style.padding = "8px 1rem";
// input.style.color = "#fff";

// function changeBG(){
//     document.body.style.backgroundColor = input.nextElementSibling.value
// }

// // input.onclick = changeBG

// input.nextElementSibling.oninput = changeBG;

// const fileUpload = document.querySelector('input[type=file]');
// const zurag = document.querySelector('#zurag');


// function changePic(){
//     zurag.src = URL.createObjectURL(fileUpload.files[0]);
// }

// Гэрт олон зураг оруулаад, html Дотор харуул

const heading = document.querySelector('#title');

function mouseEnter () {
    heading.style.color = "red";
}

function mouseLeave () {
    heading.style.color = "black";
}

// createElement

// const imgTag = document.createElement('img');
