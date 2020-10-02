import React, { Component } from "react";
import "./MovieCard.css";
import axios from "axios";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);
  }
  deleteMovie(event) {
    event.preventDefault();
    axios
      .delete("http://localhost:3000/movies/" + this.props.movie.uid)
      .then((res) => {
        console.log(this.props.movie.uid);
        window.location.reload();
      });
  }
  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">{this.props.movie.director}</div>
          <div className="card-body">
            <h5 className="card-title">{this.props.movie.title}</h5>
            <h6 className="card-title">{this.props.movie.genre}</h6>
            <p className="card-text">{this.props.movie.plot}</p>
            <a href={this.props.movie.wiki_url} className="btn btn-primary">
              More Info
            </a>
            <button
              className="btn btn-primary btn-delete"
              onClick={this.deleteMovie}
            >
              Delete
            </button>
          </div>
          <div className="card-footer text-muted">
            {this.props.movie.origin} -- {this.props.movie.movie_cast} --{" "}
            {this.props.movie.release_year}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
