//we'll be fetching from icanhazdadkoke.com
//there iss a small manual...showing how to fetch data from API...curl for terminal(you can check this)
//brad show us about a program called postman...its a GUI...easier to understand how fetch works...02:18
//ther is also a library called axios that Brad prefers over fetch(but it's 3rd party)
const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('getjoke')

jokeBtn.addEventListener('click', generateJoke)//don't include brackets in the arg generateJoke

generateJoke()

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             joke.innerText = data.joke
//         })
// }

//u can also use async
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)
        
    const data = await res.json()

    joke.innerText = data.joke
}
