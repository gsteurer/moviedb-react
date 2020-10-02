import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
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
              <MovieCard movie={item} />
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
