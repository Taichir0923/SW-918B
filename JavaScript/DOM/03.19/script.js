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
        const response = await fetch('https://randomuser.me/api/?results=50');
        const {results} = await response.json();
        results.forEach((user , index) => {
            document.body.insertAdjacentHTML('beforeend' , `
                <h1>${index + 1}. ${user.name.title} ${user.name.first} ${user.name.last}</h1>
            `)
        })
    } catch (err) {
        console.log(err)
    }
}
// console.log('hi')

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts?userId=5