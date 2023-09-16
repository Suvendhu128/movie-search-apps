### 1. HTML Structure (index.html)

The HTML structure of the app is divided into two main pages: the search page and the movie details page.

- **Search Page (`index.html`):**
  - The search page contains a search form with an input field and a "Search" button.
  - Movie search results are displayed in a card view.

- **Movie Details Page (`movie_details.html`):**
  - The movie details page displays additional information about the selected movie.
  - Users can return to the search results page from here.

### 2. Styling (CSS)

CSS is used to style the app and make it visually appealing. Key CSS styles include:
- Styling for the search page and movie details page containers.
- Card view for displaying movie results.
- Background colors, fonts, and spacing to improve the user interface.

### 3. JavaScript (index.html)

JavaScript is used to add interactivity to the app and handle user interactions.

#### Search Functionality

1. When a user enters a movie title and clicks the "Search" button, the JavaScript code attached to the search form's submit event prevents the default form submission and initiates a search.

2. The app constructs a URL to the OMDB API (`http://www.omdbapi.com/`) using the user's search query and an API key.

3. It then uses the `fetch` API to send a GET request to the OMDB API with the constructed URL.

4. Once the data is received from the OMDB API in JSON format, the app checks if the response is successful (`Response === 'True'`) and if there are search results (`Search` array).

5. If successful, it creates HTML elements for each movie result, including a card with the movie title, poster, year, and description.

6. Each movie card is made clickable by adding an event listener. When a user clicks on a card, they are redirected to the `movie_details.html` page with the IMDb ID of the selected movie as a query parameter.

7. If there are no search results, an error message is displayed.

#### Movie Details Page

1. On the `movie_details.html` page, JavaScript is used to extract the IMDb ID of the selected movie from the URL query parameters.

2. It constructs another request to the OMDB API, this time with the IMDb ID, to fetch detailed information about the selected movie.

3. If the response is successful, it creates HTML elements to display the movie's title, year, genre, director, plot, IMDb rating, and poster image.

4. If there is an error or if the movie is not found, appropriate error messages are displayed.

5. The "Back to Search" link allows users to return to the search results on the `index.html` page.

### 4. Usage

Users can search for movies by entering a movie title in the search bar and clicking the "Search" button. Search results are displayed in a card view. Clicking on a movie card opens a new page (`movie_details.html`) with more details about the selected movie. Users can return to the search results using the "Back to Search" link.

