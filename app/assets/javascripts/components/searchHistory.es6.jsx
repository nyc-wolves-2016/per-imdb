class SearchHistory extends React.Component {
  generateMovies(number) {
    movieArray = [];
    for(var i=0; i < number; i++) {
      var newMovie = {
        movie_poster: faker.image.avatar(),
        title: faker.name.title(),
        year: "1994",
        rating: "R",
        genre: "Horror",
        director: faker.name.findName(),
        writer: faker.name.findName(),
        actors: faker.name.findName(),
        imdbRating: "99",
      }
      movieArray.push(newMovie);
    }
    return movieArray;
  }
  render() {
    var movies = this.generateMovies(10)
    console.log(movies)

    return(
      <section id="search-container">
        <h3>Search History</h3>
        <ul>
          { movies.map((movie, i) => {
            return <Movie data={movie} id={i} key={i}/>;
          })}
        </ul>
      </section>
    )
  }
}
