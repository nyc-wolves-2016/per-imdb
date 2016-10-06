class Movie extends React.Component {
  render() {
    let { Poster, Title, Year } = this.props.data
    return(
      <li className="movieResult">
        <div className="movieImg">
          <img className="poster"  src={Poster}/>
          <div className="movieTopInfo">
            <p className="title">{Title}</p>
            <p className="year">{Year}</p>
          </div>
        </div>
      </li>
    )
  }
}
