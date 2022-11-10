// Get the DOM
const newUserBtn = document.querySelector('#get-user')
const sortBtn = document.querySelector('#show-user')
const showBlnBtn = document.querySelector('#show-bills')

function getNewUsers(){
    // get a new user from https://randomuser.me
}

// async | await used for API programming - Makes it dynamic
async function generateRandomUser(){

    const url = 'https://randomuser.me/api/?gender=female'
    const results = await fetch(url)
    const data = await results.json()
    
    console.log('From API :',data.results[0].name.first)
    
    const user = {
        name : `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    }
    
    console.log('Transformed Locally :',user.name)
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

