let api = 'https://www.themealdb.com/api/json/v1/1/';
let searchForm = document.querySelector('#searchBox');
let foodResultsDiv = document.getElementById('foodResults');

// prevent site from reloading if the form is submitted
searchForm.onsubmit = function (event) {
    event.preventDefault();
};

searchForm.oninput = function (event) {
    event.preventDefault();
    let searchTerm = searchForm['search'].value;
    localStorage.setItem('searchTerm', searchTerm);
    getSearchResults();
};

window.onload = function () {
    getSearchResults();
};

function getSearchResults() {
    // get the searchterm from localstorage
    let searchTerm = localStorage.getItem('searchTerm');
    // set searchterm to searchbar value incase its empty
    searchForm['search'].value = searchTerm;
    // if no searchTerm don't continue
    if (searchTerm == '') {
        foodResultsDiv.innerHTML = '';
        return;
    }

    // Fetch the meals from the api with the searchTerm
    fetch(`${api}search.php?s=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            // reset the page incase there are latest search results
            foodResultsDiv.innerHTML = '';
            // access the meals from the returned data
            let foundMeals = data.meals;
            // go through the found meals and create the html elements to place them in
            try {
                for (let meal of foundMeals) {
                    let mealDiv = document.createElement('div');
                    let mealPicture = document.createElement('img');
                    let mealName = document.createElement('p');
                    // add styling classes to each element
                    mealDiv.classList.add('mealBox');
                    mealPicture.classList.add('img-fluid');
                    mealName.classList.add('imgText');

                    // add the information to corresponding html element
                    mealName.textContent = meal.strMeal;
                    mealPicture.src = meal.strMealThumb;
                    mealDiv.appendChild(mealPicture);
                    mealDiv.appendChild(mealName);

                    // make the pictures clickable
                    mealPicture.addEventListener('click', function () {
                        console.log(meal.idMeal);
                        // use localstorage to store the id of the selected meal
                        localStorage.setItem('mealId', meal.idMeal);
                        window.location.href = '/pages/details/details.html';
                    });

                    foodResultsDiv.appendChild(mealDiv);
                }
            } catch (error) {
                if (searchTerm == null) {
                    return
                }
                // if no results found, throw an error and display it on screen
                let errorBox = document.createElement('div');
                errorBox.textContent = `No meals found with "${searchTerm}"`;
                foodResultsDiv.appendChild(errorBox);
            }
        });
}
