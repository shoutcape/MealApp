window.onload = function() {   

    let backbutton = document.getElementById('backButton')
    backbutton.onclick = function() {
        window.location.href = '../../index.html'
    }

    let id =localStorage.getItem('mealId')
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(api)
    .then(response => response.json())
    .then((data) => {
        let meal = data.meals[0]
        let mainContainer = document.getElementById('mainContainer')
        let image = document.createElement('img')
        image.src = meal.strMealThumb
        document.body.style.backgroundImage = `url(${meal.strMealThumb})`
        image.alt = 'picture of the meal'
        image.id = 'mainPhoto'
        image.classList.add('img-fluid')

        // config title
        let title = meal.strMeal
        let titleH1 = document.createElement('h1')
        let topBar = document.getElementById('topBar')
        titleH1.innerHTML = title
        topBar.appendChild(titleH1)
// 
        
        // mainContainer.appendChild(titleH1)

        // config left side of the container
        let leftSide = document.createElement('div')
        leftSide.classList.add('leftSide')
        leftSide.appendChild(image)
        mainContainer.appendChild(leftSide)

        // config right side of the container
        let rightSide = document.createElement('div')
        rightSide.classList.add('rightSide')

        for (let i = 1; i<=20; i++) {
            // search for the ingredient and measure
            let ingredient = meal[`strIngredient${i}`]
            let measure = meal[`strMeasure${i}`]
            // check that the ingredient and measure exist to avoid false results
            if (ingredient && ingredient !== '' && measure && measure !== '') {
                let ingredientThumbNail = `https://www.themealdb.com/images/ingredients/${ingredient}.png`
                let ingredientphoto = document.createElement('img')
                let ingredientP = document.createElement('p')
                ingredientP.classList.add('text-center')

                // config ingredients
                ingredientP.innerHTML = `${ingredient} ${measure}`
                ingredientphoto.src = ingredientThumbNail
                ingredientphoto.alt = ingredient
                ingredientphoto.classList.add('img-fluid')
                ingredientphoto.id = 'ingredientPhoto'
                let ingredientdiv = document.createElement('div')
                ingredientdiv.classList.add('img-fluid')
                ingredientdiv.id = 'ingredient'
                ingredientdiv.appendChild(ingredientphoto)
                ingredientdiv.appendChild(ingredientP)
                rightSide.appendChild(ingredientdiv)
            }

            mainContainer.appendChild(rightSide)


        }

        // config text contents
        let textContent = document.getElementsByClassName('textContent')[0]
        let instructionH1 = document.createElement('h1')
        instructionH1.innerHTML = 'Instructions:'

        let pInstructions = document.createElement('p')
        let aYoutube = document.createElement('a')
        aYoutube.innerHTML = 'Youtube tutorial'
        aYoutube.href = meal.strYoutube
        // change linechanges to br tags for better text format
        let instructions = meal.strInstructions.replace(/\n/g, '<br>')
        pInstructions.innerHTML = instructions
        textContent.appendChild(instructionH1)
        textContent.appendChild(pInstructions)
        textContent.appendChild(aYoutube)
    })
}