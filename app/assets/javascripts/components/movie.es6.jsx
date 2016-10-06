class Movie extends React.Component {
  checkPosterLink(movie) {
    if (movie.Poster === "N/A") {
      movie.Poster == "The Making of 'The Lion King'"
    }
  }

  render() {
    let { Poster, Title, Year, Director, Actors, Plot } = this.props.data
    return(
      <li className="movieResult">
        <div className="movieImg">
          <img className="poster"  src={Poster}/>
          <div className="movieTopInfo">
            <p className="title">{Title}</p>
            <p className="year">{Year}</p>
            <p className="director">{Director}</p>
            <p className="actors">{Actors}</p>
            <p className="plot">{Plot}</p>
          </div>
        </div>
      </li>
    )
  }
}
