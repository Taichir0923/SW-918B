// JS Promise
// alert()
// alert()
// alert() // => callback
// alert()
// alert()

// request
// response

// fetch('https://randomuser.me/api/?results=50')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(result){
//         console.log(result.results)
//     })
//     .catch(function(err){
//         console.log(err.message)
//     })
    

function testPromise(nas){
    return new Promise(function(amjilttai , amjiltgui){
        if(nas >= 18){
            amjilttai("promise testamjilttai bolloo")
        } else {
            amjiltgui("Failed...")
        }
    })
}

// asynchronous js

// testPromise(10)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// try catch
async function getResult(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const results = await response.json();
        results.forEach((user , index) => {
            document.body.insertAdjacentHTML('beforeend' , `
                <h1 class="getPosts" id="user-${user.id}">${index + 1}. ${user.name}</h1>
            `)
        })
    } catch (err) {
        console.log(err)
    }
}
// console.log('hi')

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts?userId=1

// request
// get - serverees data avah...
// post - hereglegchees data avah
// put - datag oor shine datagaar solih
// patch - datanii todorhoi hesgiig oorchlohod ashiglana
// delete - data ustgah huselt

function postReq(){
    const post = {
        userId: 1,
        title: "new post",
        body: "body of post"
    }
    fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.log(err.message));
}

async function testAxios(id){
    console.log('loading...')
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
    if(data){
        console.log(data);
        console.log('Done!');
    }
}

document.addEventListener('click' , e => {
    if(e.target.classList.contains('getPosts')){
        const id = e.target.id.split('-')[1];
        testAxios(id);
    }
});

// TypeScript - static typed - Microsoft 2016
// JavaScript - dynamic typed

// CSS - SASS

// nodejs
// 

// 