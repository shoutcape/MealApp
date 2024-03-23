let api = "https://www.themealdb.com/api/json/v1/1/";
let searchForm = document.querySelector("#searchBox");

searchForm.onsubmit = function (event) {
    event.preventDefault();
    let searchTerm = searchForm["search"].value;
    let foodResultsDiv = document.getElementById("foodResults");

    // Fetch the meals from the api with the searchTerm
    fetch(`${api}search.php?s=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            // reset the page incase there are latest search results
            foodResultsDiv.innerHTML = "";
            // access the meals from the returned data
            let foundMeals = data.meals;
            // go through the found meals and create the html elements to place them in
            try {
                for (let meal of foundMeals) {
                    let mealDiv = document.createElement("div");
                    let mealPicture = document.createElement("img");
                    let mealName = document.createElement("p");
                    // add styling classes to each element
                    mealDiv.classList.add("mealBox");
                    mealPicture.classList.add("img-fluid");
                    mealName.classList.add("imgText");

                    // add the information to corresponding html element
                    mealName.textContent = meal.strMeal;
                    mealPicture.src = meal.strMealThumb;
                    mealDiv.appendChild(mealPicture);
                    mealDiv.appendChild(mealName);
                    
                    // make the pictures clickable
                    mealPicture.addEventListener('click', function() {
                        console.log(meal.idMeal)
                        // use localstorage to store the id of the selected meal
                        localStorage.setItem('mealId', meal.idMeal)
                        window.location.href = '/pages/details/details.html'
                    })

                    foodResultsDiv.appendChild(mealDiv);
                }
            } catch (error) {
                // if no results found, throw an error and display it on screen
                let errorBox = document.createElement('div')
                errorBox.textContent = `No meals found with "${searchTerm}"`
                foodResultsDiv.appendChild(errorBox)
            }
            
        });
};
