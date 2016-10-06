class SearchForm extends React.Component {
  render() {
    return(
      <section id="search_box">
        <p id="movie-search-title">Search a Movie by Title</p>
        <form id="movie_form">
          <input type="text" id="new-movie" cols="30" rows="5" maxlength="140" name="movie"/>
          <input type="submit" value="movie"/>
        </form>
      </section>
    )
  }
}
