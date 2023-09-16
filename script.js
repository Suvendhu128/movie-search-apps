document.getElementById('searchForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const searchTerm = document.getElementById('searchInput').value;
            const apiKey = '6a5af451';
            const apiUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === 'True' && data.Search) {
                        const movies = data.Search;
                        const moviesContainer = document.getElementById('movies');
                        moviesContainer.innerHTML = '';

                        movies.forEach(movie => {
                            const movieCard = document.createElement('div');
                            movieCard.classList.add('movie-card');

                            // Add a click event listener to open movie details page
                            movieCard.addEventListener('click', () => {
                                window.location.href = `movie_details.html?imdbId=${movie.imdbID}`;
                            });

                            const title = document.createElement('h2');
                            title.textContent = movie.Title;

                            const poster = document.createElement('img');
                            poster.src = movie.Poster === 'N/A' ? 'no-image.jpg' : movie.Poster;

                            const year = document.createElement('p');
                            year.textContent = `Year: ${movie.Year}`;

                            const description = document.createElement('p');
                            description.textContent = `Description: ${movie.Type}`;

                            movieCard.appendChild(title);
                            movieCard.appendChild(poster);
                            movieCard.appendChild(year);
                            movieCard.appendChild(description);

                            moviesContainer.appendChild(movieCard);
                        });
                    } else {
                        document.getElementById('movies').innerHTML = '<p>No results found</p>';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('movies').innerHTML = '<p>An error occurred</p>';
                });
        });
    