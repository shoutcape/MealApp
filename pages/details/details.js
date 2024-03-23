window.onload = function() {   
    let id =localStorage.getItem('mealId')
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(api)
    .then(response => response.json())
    .then((data) => {
        let meal = data.meals[0]
        let div = document.createElement
        let ingredients = []
        console.log(meal)
        for (let item in meal) {
            // check that the item is strIngredient and has a value
            if (item.includes('strIngredient') && (meal[item] !== "" || meal[item] !== null))
            console.log(meal[item])
        }
        // let ingredientUrl = `www.themealdb.com/images/ingredients/${ingredient}.png`
    })
}