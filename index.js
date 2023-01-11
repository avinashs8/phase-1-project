const cocktailImgs = document.querySelector("#cocktail-menu")
const cocktailNames = document.querySelector("#drink-name")
const instructions = document.querySelector("#comment-display")
const cocktailName = document.querySelector("#cocktail-name")
const measures = document.querySelector("#measures")
const ingredients = document.querySelector("#ingredients")

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
            const li = document.createElement('li')
            const li2 = document.createElement('li')
            const li3 = document.createElement('li')
            const li4 = document.createElement('li')
            li.innerText = drink.strIngredient1
            li2.innerText = drink.strIngredient2
            li3.innerText = drink.strIngredient3
            li4.innerText = drink.strIngredient4
            ingredients.append(li, li2, li3, li4)
        })
        cocktailImgs.append(img)
    })
})
