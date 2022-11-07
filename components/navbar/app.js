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

    const result = await fetch(url)
    // const data = await result.json()
    
    const remoteData = await result.json()
    // Local Data does not need Await
    const localData = {
        "results" : [
            // User API
            {
                "gender" : "Female",
                "name" : {
                    "first" : "James",
                    "last" : "Smith",
                    "title" : "Mr."
                },

                "location" : {
                    "city" : "Madrid"
                },
                "email" : "alice.wright@example.com",
                "login" : {
                    "username" : "goldenduck835",
                    "password" :  123645897,
                    "uuid" : "815c5905-6a7a-4c3c-ba53-d29877a7b093"
                },
                "nat" : "TR",
                "phone" : "(203)-060-5758"
            }
        ],
    }

    console.log('Local Data:', typeof localData)
    console.log('Local Data:', localData)

    console.log('Local Data:', localData.results)

    console.log('Remote Data:',typeof remoteData)
    console.log('Remote Data:', remoteData)
    //
    // console.log('new user generated')

}

// function addUserToPage(){
//     console.log('User added to page')
// }

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

