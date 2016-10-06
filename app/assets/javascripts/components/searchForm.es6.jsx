class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      year: '',
      plot: 'long',
      multi: 'Yes'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleInput(event) {
    this.setState({ title: event.target.value})
  }

  handleYearInput(event) {
    this.setState({ year: event.target.value})
  }

  handlePlotInput(event) {
    this.setState({ plot: event.target.value})
  }

  handleMultiInput(event) {
    this.setState({ multi: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.multi === "No") {
      var multiTag = "t="
    } else {
      var multiTag = "s="
    }
    var inputTitle = (this.state.title).toLowerCase().replace(" ","+")
    var searchQueryString= inputTitle+"&y="+this.state.year+"&plot="+this.state.plot+"&r=json"
    var api = "http://www.omdbapi.com/?apikey=fda16a76&&"
    debugger
    // catch the current state and throw it to the ajax request
    $.ajax({
      url: api + multiTag + searchQueryString,
      method: "GET"
    })
    .done(function(response) {
      debugger
      if (response.Response=== "True") {
        this.props.onSearchResults(response)
      }  else {
        var error = {
          Title: this.state.title+ " does not exist.",
          Poster: "https://s-media-cache-ak0.pinimg.com/236x/77/15/e7/7715e7ea54a010649d68b3a7198a8920.jpg"
        }
        this.props.onSearchResults(error)
      }
    }.bind(this));
  }


  render() {
    console.log("I'm the components current state", this.state)
    const { title, year, plot } = this.state;
    return(
      <section id="search_box">
        <p id="movie-search-title">Search a Movie by Title</p>

        <form id="movie_form" onSubmit={this.handleSubmit}>

          <label for="plot">Movie Title</label><br></br>
          <input onChange={this.handleTitleInput.bind(this)} value={title} type="text" id="new-movie" cols="30" rows="5" maxLength="140" name="t"/><br></br>

          <label for="plot">Multiple Movies</label><br></br>
          <select onChange={this.handleMultiInput.bind(this)} name="s">
            <option  value="Yes">Yes</option>
            <option  value="No">No</option>
          </select><br></br>

          <label for="plot">Year</label><br></br>
          <input onChange={this.handleYearInput.bind(this)} value={year} ref="searchBox" type="text" id="new-movie-year" cols="30" rows="5" maxLength="4" name="y"/><br></br>

          <label for="plot">Plot Length</label><br></br>
          <select onChange={this.handlePlotInput.bind(this)} value={plot} name="plot">
            <option  value="full">Full</option>
            <option  value="short">Short</option>
          </select><br></br>

          <input type="submit" value="Search"/>

        </form>
      </section>
    )
  }
}
