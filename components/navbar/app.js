// Get the DOM
const newUserBtn = document.querySelector('#get-user')
const sortBtn = document.querySelector('#show-user')
const showBlnBtn = document.querySelector('#show-bills')

// function getNewUsers(){
//     // get a new user from https://randomuser.me
// }

// async | await used for API programming - Makes it dynamic
async function generateRandomUser(){
    const url = 'https://randomuser.me/api/?gender=female'
    const results = await fetch(url)
    const data = await results.json()
    
    const newUser = {
        name : `${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last},`,
        location : `From: ${data.results[0].location.city}, ${data.results[0].location.country}.`,
        // Gives you random Values
        // money : Math.random(),
        // Gives you random value , times 1,000,000
        // money : Math.random() * 1_000_000 = Gives you random amounts times 1,000,000
        // money : Math.floor (Math.random() * 1_000_000) = Gives you random amounts times 1,000,000, and removes decimals
        // Formatted using string Literal 
        money : `$ ${Math.floor (Math.random() * 1_000_000)}`,
        
    }
    // console.log(data)
    // console.log('From API :',data.results[0].name.first)
    // console.log('Transformed Locally :', user.name)
    // console.log('Transformed Locally :', user.location)
    // console.log('Transformed Locally :', user.money)
    
    // Arrays
    const someArr = [
        1,2,3, 'one string', 'another', newUser
    ]
    
    console.log('Array in full:', someArr)
    // Pulling/Getting Elements, Remember data starts at 0
    console.log('1st Element', someArr[0]) // 1st Element
    console.log('2nd Element', someArr[1]) // 2nd Element
    console.log('3rd Element', someArr[2]) // 3rd Element
    console.log('4th Element', someArr[3]) // 4th Element
    console.log('5th Element', someArr[4]) // 5th Element
    console.log('6th Element', someArr[5]) // 6th Element
    
}


newUserBtn.addEventListener('click', function(){
    
    // 1. get/generate a random user and wealth
    // Function declared
    generateRandomUser()
    // 2. add the user to the page
    // addUserToPage()
    
})

sortBtn.addEventListener('click', function(){
    
    console.log('Sorting Users')
    
})

showBlnBtn.addEventListener('click', function(){

    console.log('Sorting Billionaires')

})

