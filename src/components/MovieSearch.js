import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovies } from "../actions/Actions";

import "./MovieSearch.css";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="md-form mt-0">
        <div className="movie-search">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={this.state.query}
            onKeyDown={this.onKeyDownHandler}
            onChange={this.handleChange}
          ></input>
        </div>
        <ul>
          {this.props.movies.map((item) => (
            <li key={item.uid}>
              <div className="card text-center">
                <div className="card-header">{item.director}</div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-title">{item.genre}</h6>
                  <p className="card-text">{item.plot}</p>
                  <a href={item.wiki_url} className="btn btn-primary">
                    More Info
                  </a>
                </div>
                <div className="card-footer text-muted">
                  {item.origin} -- {item.movie_cast} -- {item.release_year}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {}

  onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      this.submitSearch();
    }
  };

  handleChange(event) {
    this.setState({ ...this.state, query: event.target.value });
  }

  submitSearch() {
    if (this.state.query !== "") {
      this.props.searchMovies(this.state.query);
    }
  }
}

const mapStateToProps = (state) => ({ movies: state.search.movies });

export default connect(mapStateToProps, { searchMovies })(MovieSearch);
