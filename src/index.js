
// STEP 1 == GRAB ELEMENTS OFF THE DOM 
const spiceImage = document.querySelector('.detail-image')
const ingredientsContainer = document.querySelector('.ingredients-container')
const spiceTitle = document.querySelector('.title')
const spiceDetails = document.querySelector('#spice-blend-detail')
const updateSpiceForm = document.querySelector('#update-form')
const newIngredientForm = document.querySelector('#ingredient-form')
const ingredientsList = document.querySelector('.ingredients-list')

// STEP 2 == WHEN PAGE LOADS, CREATE GET FETCH REQUEST TO RETRIEVE ALL THE DATA
function getAllSpices() {
    fetch(`http://localhost:3000/spiceblends`)
    .then(res => res.json())
    .then(getOneSpice)
}
// Invoking Function 
getAllSpices()

// STEP 3 == GET SINGLE SPICE FROM ARRAY OF SPICES DATA
function getOneSpice(spiceArray){
    // console.log(spiceArray)
    spiceArray.forEach(spice => {
        if(spice.id === 1){
            addSpiceToPage(spice)
        }
    })
}

// STEP 4 == CREATE FETCH REQUEST TO RETRIEVE ALL INGREDIENTS 
function getAllIngredients() {
    fetch(`http://localhost:3000/ingredients`)
    .then(res => res.json())
    .then(getSpiceIngredients)
}
//Invoking Function 
getAllIngredients()

// STEP 6 == CREATE FUNCTION TO ADD FIRST SPICE TO PAGE 
// * realized, must first get ingredient data 
function addSpiceToPage(spice){
    spiceDetails.innerHTML = `
    <img class="detail-image" src="${spice.image}" alt="${spice.title}" />
    <h2 class="title">${spice.title}</h2>
    <div class="ingredients-container">
    <h4>Ingredients:</h4>
    <ul class="ingredients-list">
          <!-- Add Spice Blend Ingredients Here -->
        </ul>
  </div>`
}

// STEP 7 == CREATE FUNCTION TO PARSE THROUGH INGREDIENT ARRAY AND ASSOCIATE IT WITH
// A SPICE
function getSpiceIngredients(ingredientArray){
    ingredientArray.forEach(ingredient => {
        if (ingredient.spiceblendId === 1){
            addIngredientsToPage(ingredient)
        }
    })
}

// Ingredients Not updating. Originally, ingredient names overlapped each other
function addIngredientsToPage(ingredient){
    // const unorderedList = document.createElement('ul')
    // unorderedList.className = 'ingredients-list'
    const ingredientName = ingredient.name 
    spiceDetails.innerHTML += `<li> ${ingredientName} </li>` //When added to ingredientsList, it doesn't populate on the page(?) 

//    list = ingredientsList.innerHTML = `<li> ${ingredient.name} </li>`
   
}

//FINISHED FIRST DELIVERABLE, THOUGH INGREDIENTS POPULATE IN THE WRONG PLACE 

// STEP 5 == UPDATE TITLE OF SPICE BLEND ON THE PAGE WHEN UPDATE-FORM IS SUBMITTED (persists)

// function grabFormData(event){

//     }

// function updateSpiceBlend(id){
//     fetch(`http://localhost:3000/spiceblends/${id}`, {
//         method: 'PATCH', 
//         headers: {
//             'Content-Type': 'application/json'
//         }, 
//         body: JSON.stringify
//     })
// }