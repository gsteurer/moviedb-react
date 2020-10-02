import React, { Component } from "react";
import axios from "axios";
import "./MovieList.css";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }
  render() {
    return (
      <div className="MovieList">
        <ul>
          {this.state.movieList.map((item) => (
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

  componentDidMount() {
    axios.get("http://localhost:3000/movies?limit=100").then((res) => {
      const movieList = res.data;
      console.log(movieList);
      this.setState({ movieList });
    });
  }
}
export default MovieList;
