const urlParams = new URLSearchParams(window.location.search);
const imdbId = urlParams.get('imdbId');
const apiKey = '6a5af451';
const apiUrl = `http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.Response === 'True') {
            const movieDetails = `
                <h2>${data.Title}</h2>
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
                <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
                <img src="${data.Poster}" alt="${data.Title} Poster">
            `;
            document.getElementById('movie-details-content').innerHTML = movieDetails;
        } else {
            document.getElementById('movie-details-content').innerHTML = '<p>Movie not found</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('movie-details-content').innerHTML = '<p>An error occurred</p>';
    });
  

        