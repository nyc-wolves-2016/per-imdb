class Movie extends React.Component {
  render() {
    let { movie_poster, title, year, rating, genre, director, writer, actors, imdbRating } = this.props.data
    return(
      <section className="movieResult">
        <div className="movieImg">
          <img className="movie_poster"  src={movie_poster}/>
          <div className="movieTopInfo">
            <p className="title">{title}</p>
            <p className="year">{year}</p>
            <p className="rating">{rating}</p>
            <p className="genre">{genre}</p>
            <p className="director">{director}</p>
          </div>
          <div className="actorTopInfo">
            <p className="writer">{writer}</p>
            <p className="Actors">{actors}</p>
            <p className="imdbRating">{imdbRating}</p>
          </div>
        </div>
      </section>
    )
  }
}
