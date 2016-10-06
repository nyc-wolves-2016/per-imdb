class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.handleCreateMovie = this.handleCreateMovie.bind(this);
  }

  handleCreateMovie(movies) {
    if (movies.Search) {
      movies.Search.forEach(function(movie){
        this.setState((prevState) => {
          return { movies: [movie, ...prevState.movies]
          };
        });
      }.bind(this))
    } else {
      this.setState({
        movies: [movies].concat(this.state.movies)
      });
    }

  }
  render() {
    return(
      <div id="content">
        <header id="top-nav">
          <div id="brand">Per's OMDB</div>

          <i className="fa fa-search"></i>
        </header>
        <section className="container">
          <SearchForm onSearchResults={this.handleCreateMovie} />
          <section id="search-container">
            <h3>Search History</h3>
            <ul>
              { this.state.movies.map((movie, i) => {
                return <Movie data={movie} id={i} key={i}/>;
              })}
            </ul>
          </section>
        </section>
      </div>
    )
  }
}
