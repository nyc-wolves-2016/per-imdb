class Movie extends React.Component {
  render() {
    return(
      <section className="movieResult">
        <div className="movieImg">
          <img src="http://ia.media-imdb.com/images/M/MV5BNTQ3OTkwNTgyN15BMl5BanBnXkFtZTcwNTAzOTAzOQ@@._V1_SX300.jpg"/>
          <p>
            <span className="title">Title</span>
            <span className="year">Year</span>
            <span className="rating">Rating</span>
            <span className="genre">Genre</span>
            <span className="director">Director</span>
          </p>
          <p>
            <span className="writer">Writer</span>
            <span className="Actors">Actors</span>
            <span className="imdb_rating">IMDB Rating</span>
          </p>
        </div>
      </section>
    )
  }
}
