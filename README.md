# Meal App

This application helps users find different types of food recipes. It's built with HTML, CSS, and JavaScript.

## Features

- **Welcome Screen**: The app greets users with a welcome message.
- **Search Functionality**: Users can search for different types of food recipes using the search bar.
- **Responsive Design**: The app is designed to be responsive and works well on both desktop and mobile devices.
- **Interactive Images**: Images of the food recipes have a hover effect that slightly enlarges the image and changes the cursor to a pointer, indicating that the image is clickable.
- **Meal Details**: When a user clicks on a food recipe, they are taken to a new page that displays more details about the meal, including the ingredients and instructions.
- **Session Storage**: The app uses session storage to store the user's search history. This allows users to see their previous searches when they return to the main page.
- **YouTube Links**: The app provides links to YouTube videos that show how to prepare the food recipes.
- **Search by category**: Users can search for food recipes by category.

## CSS Classes

## CSS Classes in Styles.css

- `.img-fluid:hover`: This class applies a hover effect to images. When the mouse pointer hovers over an image, the image scales up to 105% of its original size and the cursor changes to a pointer.

- `.mealBox`: This class sets the width and margin of the meal container. The width is set to 250px and the margin is set to 20px.

- `@media (max-width: 600px)`: This is a media query that applies different styles when the screen width is 600px or less. It adjusts the margin of `#foodResults`, and the width, margin, and padding of `.mealBox`. It also sets the margin-bottom of `.form-control` to 10px.

- `.imgText`: This class centers the text alignment of the image text.

- `.mealBox p`: This class sets the top margin of the paragraph elements inside `.mealBox` to 15px.

- `#categoryList`: This class sets the left margin of the category list to 5px.

- `body, html`: These selectors apply styles to the body and html elements. They set the margin and padding to 0px, apply a blur effect to the backdrop, set the background size to cover, set the height to 100%, and allow overflow.

- `.body`: This selector applies additional styles to the body element. It sets the background image, adds a top padding of 50px, and a general padding of 20px.

## CSS Classes in details.css

- `.rightSide`: This class is used for the right side of the main container. It has automatic margins on all sides and a top margin of 20px. In smaller screens, the margins are set to 0px, the top margin is set to 20px, and a gap of 10px is added between elements.

- `.content`: In smaller screens, this class is used to display its child elements in a flex container and align them to the center.

- `.textContent`: This class is used for the text content. In smaller screens, it has a top margin of 20px and left and right margins of 10px.

- `.leftSide`: This class is used for the left side of the main container. In smaller screens, it aligns its child elements to the center and has no padding or margin.

- `#mainPhoto`: This class is used for the main photo. In smaller screens, it has a width of 500px and no margin.

- `.mainContainer`: In smaller screens, this class is used to display its child elements in a flex container, align them to the center, and arrange them in a column.

- `.img-fluid`: In smaller screens, this class is used to set the width of images to 90px.

- `#ingredient`: In smaller screens, this class is used to align its child elements to the start and add a top padding of 6px.

- `body, html`: These selectors are used to remove the default margin and padding from the `body` and `html` elements, apply a blur effect to the background, cover the background, and set the overflow to auto.


## License

[MIT](https://choosealicense.com/licenses/mit/)

## Link
https://meal-application-project.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/e8d2bb83-63d0-409d-ace6-0fc62314c64d/deploy-status)](https://app.netlify.com/sites/meal-application-project/deploys)
