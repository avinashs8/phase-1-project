const cocktailImgs = document.querySelector("#cocktail-menu")
const cocktailNames = document.querySelector("#drink-name")
const instructions = document.querySelector("#comment-display")


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
            instructions.innerText= drink.strInstructions
        })
        cocktailImgs.append(img)
    })
})
