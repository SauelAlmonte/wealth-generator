// Get the DOM
const getUserBtn = document.querySelector('#get-user')
const sortBtn = document.querySelector('#show-user')
const showBlnBtn = document.querySelector('#show-bills')

function getNewUsers(){
    // get a new user from https://randomuser.me
}

function generateRandomUser(){
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
