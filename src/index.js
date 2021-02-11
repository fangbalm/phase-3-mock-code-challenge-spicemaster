
// STEP 1 == GRAB ELEMENTS OFF THE DOM 
const spiceDetails = document.querySelector('#spice-blend-detail')
const spiceImage = document.querySelector('.detail-image')
const titleH2 = document.querySelector('.title')  
const ingredientsUl = document.querySelector('ul')
const updateSpiceForm = document.querySelector('#update-form')
const newIngredientForm = document.querySelector('#ingredient-form')

// STEP 2 == WHEN THE PAGE LOADS, CREATE (GET) FETCH REQUEST TO RETRIEVE THE FIRST SPICE
function getFirstSpice() {
    fetch(`http://localhost:3000/spiceblends/1`)
    .then(res => res.json())
    .then(addFirstSpiceToPage)
}
// Invoking Function 
getFirstSpice()


// STEP 3 == ADD THE FIRST SPICE TO THE PAGE 
function addFirstSpiceToPage(spice){
    spiceImage.src = spice.image
    spiceImage.alt = spice.title
    titleH2.textContent = spice.title

    addIngredientsToPage(spice)

}

// STEP 4 == ADD INGREDIENTS TO PAGE 
function addIngredientsToPage(spice){
    spice.ingredients.forEach(ingredient => {
        const li = document.createElement('li')
        li.textContent = ingredient.name 
        ingredientsUl.append(li)
    })
}

// STEP 5 == UPDATE THE TITLE OF THE SPICE BLEND WHEN THE UPDATE FORM IS SUBMITTED 
updateSpiceForm.addEventListener('submit', event => {
    event.preventDefault()
    const titleInput = event.target.title.value
   fetch('http://localhost:3000/spiceblends/1', {
    method: 'PATCH', 
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({title: titleInput})
})
    .then(response => response.json())
    .then(updatedSpiceName => {
     titleH2.textContent = updatedSpiceName.title 
})
})


// STEP 6 == UPDATE THE INGREDIENTS IN THE SPICE BLEND WHEN THE UPDATE FORM IS SUBMITTED (NO PERSISTENCE REQUIRED)
newIngredientForm.addEventListener('submit', event => {
    event.preventDefault()
    const ingredientInput = event.target.name.value
    const li = document.createElement('li')
    li.textContent = ingredientInput
    ingredientsUl.append(li)

   fetch('http://localhost:3000/spiceblends/1', {
    method: 'PATCH', 
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({name: ingredientInput, spiceblendId: 1})
})
    .then(response => response.json())
    .then(updatedIngredient => {
     console.log(updatedIngredient)
})
})
