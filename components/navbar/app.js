// Get the DOM
const getUserBtn = document.querySelector('#get-user')
const sortBtn = document.querySelector('#show-user')
const showBlnBtn = document.querySelector('#show-bills')

function getNewUsers(){
    // get a new user from https://randomuser.me
}

// async | await used for API programming
async function generateRandomUser(){
    // make a GET request to random
    const getUser = 'sauelalmonte'
    // const url = `https://api.github.com/users/${getUser}/repos`
    const url = 'https://randomuser.me/api/?gender=female'
    // await/wait till the below is done, before giving me results
    const result = await fetch(url)
    const data = await result.json()

    // account for round-trip data
    // Before we use results
    // console.log(typeof data)
    
    // Expanding on - shape of data, how to transform raw data, for complex transformation, working towards arrays
    console.log(data.results[0])
    // save that user locally (so we can display to the page)
    console.log('new user generated')

    //Example of Object structure
    // Objects = One of many buckets which allows   us to store data
    // grabbing and manipulating data, to create your own data structure
    // const myGitRepo = {
    //     'name' : data[0].name,
    //     'url' : data[0].url
    // }
    // // console.log(data[0])
    // console.log(myGitRepo)
    // // console.log(myGitRepo.name)
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

