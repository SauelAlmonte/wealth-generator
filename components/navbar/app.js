// Get the DOM
const getUserBtn = document.querySelector('#get-user')
const sortBtn = document.querySelector('#show-user')
const showBlnBtn = document.querySelector('#show-bills')

function getNewUsers(){
    // get a new user from https://randomuser.me
}

// async | await used for API programming
async function generateRandomUser(){
    
    const getUser = ''
    const url = 'https://randomuser.me/api/?gender=female'
   
    const result = await fetch(url)
    const data = await result.json()
    
    console.log(data)
    
    console.log('new user generated')
    
}

function addUserToPage(){
    console.log('User added to page')
}

getUserBtn.addEventListener('click', function(){
    
    // 1. get/generate a random user and wealth
    generateRandomUser()
    // 2. add the user to the page
    addUserToPage()
    
})

sortBtn.addEventListener('click', function(){
    
    console.log('Sorting Users')
    
})

showBlnBtn.addEventListener('click', function(){

    console.log('Sorting Billionaires')

})

