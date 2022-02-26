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

// const heading = document.querySelector('#title');

// function mouseEnter () {
//     heading.style.color = "red";
// }

// function mouseLeave () {
//     heading.style.color = "black";
// }

// createElement

// const imgTag = document.createElement('img');

// create element
const container = document.querySelector('.container');
const files = document.querySelector('#files');


// innerHTML - text, html tag
// headingTg.innerHTML = `<span>
//     <p>this is string data...</p>
// </span>`

// innerText - text
// headingTg.textContent = "<h1>blabla</h1>"
// // texContent - text
// container.append(headingTg);

function uploadFiles(){
    const images = files.files;
    for(var i = 0; i < images.length; i++){
        const img = document.createElement('img');
        img.setAttribute('class' , 'img blabla');
        img.setAttribute('id' , 'img');
        img.src = URL.createObjectURL(images[i]);
        container.append(img);
    }
}

files.addEventListener("change" , uploadFiles)

document.addEventListener('click' , function(event){
    if(event.target.id === "img"){
        event.target.classList.toggle('border');
        console.log(event.target.src);
    }
})

// onclick

// DOM
// AsyncJS - Promise
// Fetch API , JSON , localStorage
// canvas - webGL

