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

## CSS Classes

- `.foreGround`: This class is used for the main container of the app. It has a radial gradient background that fades towards the edges, giving a slight see-through effect.

- `.welcome`: This class is used for the welcome message.

- `.description`: This class is used for the description text.

- `.input-group`: This class is used for the search bar container.

- `#foodResults`: This class is used for the container that displays the search results.

- `.img-fluid`: This class is used for the food recipe images. It includes a hover effect that enlarges the image.

- `.mealBox`: This class is used for the individual meal boxes in the search results.

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

## Media Queries

The app uses a media query to adjust the layout for smaller screens. This makes the app more usable on smaller screens like mobile devices.

## License

[MIT](https://choosealicense.com/licenses/mit/)
 
