let searchForm = document.querySelector('#searchBox');
let foodResultsDiv = document.getElementById('foodResults');

// on page load update the searchResults and categories
window.onload = function () {
    getCategories();
    getAndShowSearchResults();
};

// prevent site from reloading if the form is submitted aka enter key is pressed
searchForm.onsubmit = function (event) {
    event.preventDefault();
};

// eventlistener for the search input
searchForm.oninput = function (event) {
    event.preventDefault();
    let searchTerm = searchForm['search'].value;
    // use session storage to save the search term to the browser session
    sessionStorage.setItem('searchTerm', searchTerm);
    sessionStorage.removeItem('category');
    getAndShowSearchResults();
    // reset the category to default
    categoryList.selectedIndex = 0;
};

let categoryList = document.getElementById('categoryList');

// eventlistener for the category dropdown
categoryList.onchange = function (event) {
    event.preventDefault();
    let selectedCategory = event.target.value;
    sessionStorage.setItem('category', selectedCategory);
    sessionStorage.removeItem('searchTerm');
    getAndShowSearchResults();
};

function getAndShowSearchResults() {
    // get the searchterm from sessionStorage
    let searchTerm = sessionStorage.getItem('searchTerm');
    let category = sessionStorage.getItem('category');
    let api = 'https://www.themealdb.com/api/json/v1/1/';

    // default searchmode
    let searchMode = 'search.php?s=';

    searchForm['search'].value = searchTerm;
    // check if category is selected
    if (category && category !== 'none') {
        searchTerm = category;
        // category searchmode
        searchMode = 'filter.php?c=';
    }

    // if no searchTerm or category don't continue
    if (searchTerm == '' && (category == 'none' || !category)) {
        foodResultsDiv.innerHTML = '';
        return;
    }

    // Fetch the meals from the api with the searchTerm
    fetch(`${api}${searchMode}${searchTerm}`)
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
                    // lazy loading, incase there are a lot of pictures
                    mealPicture.loading = "lazy"
                    mealName.classList.add('imgText');

                    // add the information to corresponding html element
                    mealName.textContent = meal.strMeal;
                    mealPicture.src = meal.strMealThumb;
                    mealDiv.appendChild(mealPicture);
                    mealDiv.appendChild(mealName);

                    // make the pictures clickable
                    mealPicture.addEventListener('click', function () {
                        // use sessionStorage to store the id of the selected meal
                        sessionStorage.setItem('mealId', meal.idMeal);
                        window.location.href = '/pages/details/details.html';
                    });

                    foodResultsDiv.appendChild(mealDiv);
                }
            } catch (error) {
                if (searchTerm == null) {
                    return;
                }
                // if no results found, throw an error and display it on screen
                let errorBox = document.createElement('div');
                errorBox.textContent = `No meals found with "${searchTerm}"`;
                foodResultsDiv.appendChild(errorBox);
            }
        });
}

// function to get the categories
function getCategories() {
    let api = 'https://www.themealdb.com/api/json/v1/1/';
    fetch(`${api}categories.php`)
        .then((response) => response.json())
        .then((data) => {
            let categories = data.categories;
            for (let item of categories) {
                let newOption = document.createElement('option');
                newOption.value = item.strCategory;
                newOption.innerHTML = item.strCategory;
                categoryList.appendChild(newOption);
            }
            // if sessionstorage has category show it as selected on the dropdown
            let category = sessionStorage.getItem('category');
            if (category) {
                categoryList.value = category;
            }
        });
}
