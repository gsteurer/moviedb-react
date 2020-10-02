import React, { Component } from "react";

class MovieCard extends Component {
  constructor(props) {
    super(props);
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
