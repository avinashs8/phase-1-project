const cocktailImgs = document.querySelector("#cocktail-menu")


fetch('http://localhost:3000/drinks')
.then(resp => resp.json())
.then(drinks => {
    drinks.forEach(drink => {
        const img = document.createElement('img')
        img.src = drink.strDrinkThumb
        cocktailImgs.append(img)
    })
})
