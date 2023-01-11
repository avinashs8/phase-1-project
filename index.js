const cocktailImgs = document.querySelector("#cocktail-menu")
const cocktailNames = document.querySelector("#drink-name")
const instructions = document.querySelector("#comment-display")
const cocktailName = document.querySelector("#cocktail-name")
const measures = document.querySelector("#measures")
const ingredients = document.querySelector("#ingredients")
const newReview = document.querySelector("#reviews")
const submitForm = document.querySelector("#new-review")

fetch('http://localhost:3000/drinks')
.then(resp => resp.json())
.then(drinks => {
    drinks.forEach(drink => {
        const img = document.createElement('img')
        img.src = drink.strDrinkThumb
        img.addEventListener('mouseover', e => {
            cocktailNames.innerText = drink.strDrink
        })
        img.addEventListener('click', e => {
            cocktailName.innerText = drink.strDrink
            instructions.innerText= drink.strInstructions
            ingredients.innerText= " "
            measures.innerText= " "
            newReview.innerText= " "
            const li = document.createElement('li')
            const li2 = document.createElement('li')
            const li3 = document.createElement('li')
            const li4 = document.createElement('li')
            const list = document.createElement('li')
            const list2 = document.createElement('li')
            const list3 = document.createElement('li')
            const list4 = document.createElement('li')
            li.innerText = drink.strIngredient1
            li2.innerText = drink.strIngredient2
            li3.innerText = drink.strIngredient3
            li4.innerText = drink.strIngredient4
            list.innerText = drink.strMeasure1
            list2.innerText = drink.strMeasure2
            list3.innerText = drink.strMeasure3
            list4.innerText = drink.strMeasure4
            ingredients.append(li, li2, li3, li4)
            measures.append(list, list2, list3, list4)
        })
        cocktailImgs.append(img)
    })
})

submitForm.addEventListener('submit', e => {
    e.preventDefault()
    let review = e.target.name.value
    newReview.innerText = review
})
